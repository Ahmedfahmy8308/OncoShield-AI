# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
from fastapi import APIRouter, Depends, BackgroundTasks
from sse_starlette.sse import EventSourceResponse
from sqlalchemy.orm import Session
import os
import asyncio

from app.db import database, models
from app.schemas import schemas
from app.ml import core as ml_core
from app.core import config

router = APIRouter()

@router.get("/settings", response_model=schemas.ConfigSchema, summary="Get Model Settings")
def read_settings():
    """Returns the current hyperparameter settings from config.json."""
    return config.get_settings()

@router.post("/settings", summary="Update Model Settings")
def update_settings(settings: schemas.ConfigSchema):
    """Updates hyperparameter settings before training."""
    config.save_settings(settings.model_dump())
    return {"message": "Settings updated successfully"}

def background_training_task(db: Session):
    try:
        results = ml_core.build_and_train_ann()
        history = models.TrainingHistory(
            accuracy=results["accuracy"],
            loss=results["loss"],
            epochs=results["epochs_trained"],
            model_version="v2.0"
        )
        db.add(history)
        db.commit()
    except Exception as e:
        ml_core.logging.error(f"Training failed: {str(e)}")

@router.post("/train", summary="Train ANN Model")
def start_training(background_tasks: BackgroundTasks, db: Session = Depends(database.get_db)):
    """
    Triggers the Artificial Neural Network training process in the background.
    Uses settings from config.json. Real-time updates can be fetched via /stream-logs.
    """
    open(config.STREAM_PATH, 'w').close()
    background_tasks.add_task(background_training_task, db)
    return {"message": "Training started in the background. Connect to /api/v1/model/stream-logs for updates."}

@router.get("/stream-logs", summary="Stream Training Logs")
async def stream_logs():
    """
    Streams live training logs to the frontend via Server-Sent Events (SSE).
    """
    async def log_generator():
        last_pos = 0
        if not os.path.exists(config.STREAM_PATH):
            open(config.STREAM_PATH, 'w').close()
            
        while True:
            with open(config.STREAM_PATH, 'r') as f:
                f.seek(last_pos)
                lines = f.readlines()
                last_pos = f.tell()
                
            for line in lines:
                if line.strip():
                    yield {"data": line.strip()}
                    
            await asyncio.sleep(1)

    return EventSourceResponse(log_generator())

@router.get("/history", summary="Get Training History")
def get_training_history(db: Session = Depends(database.get_db)):
    """Returns a history of all previous training sessions and their performance metrics."""
    history = db.query(models.TrainingHistory).order_by(models.TrainingHistory.timestamp.desc()).all()
    return history

