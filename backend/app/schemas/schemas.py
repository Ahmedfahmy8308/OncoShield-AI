# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
from pydantic import BaseModel
from typing import Dict, Any
from datetime import datetime

class PredictionRequest(BaseModel):
    features: Dict[str, float]

class PredictionResponse(BaseModel):
    prediction: str
    confidence: float
    message: str

class TrainingHistoryResponse(BaseModel):
    id: int
    timestamp: datetime
    accuracy: float
    loss: float
    epochs: int
    model_version: str

    class Config:
        from_attributes = True

class ConfigSchema(BaseModel):
    dataset: Dict[str, Any]
    model: Dict[str, Any]
    training: Dict[str, Any]

