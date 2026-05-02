# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import database, models
from app.api.router import api_router

# Initialize Database tables
models.Base.metadata.create_all(bind=database.engine)

description = """
OncoShield AI API provides a comprehensive backend for managing, training, 
and evaluating Artificial Neural Networks (ANN) for Breast Cancer classification.

## Features
* **Dataset Management**: Generate dirty data and clean it programmatically.
* **Model Training**: Configure layers, epochs, and activate background training.
* **Streaming**: Stream training logs in real-time via SSE.
* **Inference**: High-speed prediction API using the trained Keras model.
"""

app = FastAPI(
    title="OncoShield AI Engine",
    description=description,
    version="2.0.0",
    contact={
        "name": "Ufuq Tech",
        "url": "https://ufuq-tech.com/",
    },
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all modular routers
app.include_router(api_router, prefix="/api/v1")

