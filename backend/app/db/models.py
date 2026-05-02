# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from app.db.database import Base

class TrainingHistory(Base):
    __tablename__ = "training_history"
    
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    accuracy = Column(Float)
    loss = Column(Float)
    epochs = Column(Integer)
    model_version = Column(String, index=True)

class PredictionLog(Base):
    __tablename__ = "prediction_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    prediction = Column(String)
    confidence = Column(Float)
    features_json = Column(String)

