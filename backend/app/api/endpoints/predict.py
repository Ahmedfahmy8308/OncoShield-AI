# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import json

from app.db import database, models
from app.schemas import schemas
from app.ml import core as ml_core

router = APIRouter()

@router.post("/", response_model=schemas.PredictionResponse, summary="Predict Malignancy")
def predict(req: schemas.PredictionRequest, db: Session = Depends(database.get_db)):
    """
    Accepts clinical features, scales them, and runs inference through the trained ANN model.
    Logs the prediction attempt into the database.
    """
    try:
        result = ml_core.predict_single(req.features)
        
        log_entry = models.PredictionLog(
            prediction=result["prediction"],
            confidence=result["confidence"],
            features_json=json.dumps(req.features)
        )
        db.add(log_entry)
        db.commit()
        
        return {
            "prediction": result["prediction"],
            "confidence": result["confidence"],
            "message": "Prediction successful"
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

