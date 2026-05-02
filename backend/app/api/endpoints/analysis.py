# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
import os
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
import pandas as pd
import numpy as np

from app.db import database, models
from app.ml.core import RAW_DATA_PATH, CLEAN_DATA_PATH, TRAIN_X_PATH, TEST_X_PATH

router = APIRouter()

@router.get("/comprehensive", summary="Get Comprehensive Dashboard Metrics")
def get_comprehensive_metrics(db: Session = Depends(database.get_db)):
    """Returns a massive payload of all metrics for the doctor's dashboard."""
    try:
        has_raw = os.path.exists(RAW_DATA_PATH)
        has_clean = os.path.exists(CLEAN_DATA_PATH)
        
        raw_rows = 0
        raw_missing = 0
        clean_rows = 0
        
        target_distribution = {"0_malignant": 0, "1_benign": 0, "total": 0}
        top_correlations = {}
        
        if has_raw:
            df_raw = pd.read_csv(RAW_DATA_PATH)
            raw_rows = len(df_raw)
            raw_missing = int(df_raw.isnull().sum().sum())
            
        if has_clean:
            df_clean = pd.read_csv(CLEAN_DATA_PATH)
            clean_rows = len(df_clean)
            
            counts = df_clean['target'].value_counts().to_dict()
            malignant_count = counts.get(0.0, counts.get(0, 0))
            benign_count = counts.get(1.0, counts.get(1, 0))
            target_distribution = {
                "0_malignant": int(malignant_count),
                "1_benign": int(benign_count),
                "total": clean_rows
            }
            
            correlations = df_clean.corr()['target'].drop('target').sort_values(key=abs, ascending=False)
            top_correlations = correlations.head(10).to_dict()
            
        train_samples = len(pd.read_csv(TRAIN_X_PATH)) if os.path.exists(TRAIN_X_PATH) else 0
        test_samples = len(pd.read_csv(TEST_X_PATH)) if os.path.exists(TEST_X_PATH) else 0
        
        total_predictions = db.query(models.PredictionLog).count()
        malignant_preds = db.query(models.PredictionLog).filter(models.PredictionLog.prediction == "MALIGNANT").count()
        benign_preds = db.query(models.PredictionLog).filter(models.PredictionLog.prediction == "BENIGN").count()
        avg_conf = db.query(func.avg(models.PredictionLog.confidence)).scalar() or 0.0
        
        return {
            "dataset_health": {
                "raw_samples": raw_rows,
                "missing_values_detected": raw_missing,
                "clean_samples": clean_rows,
                "data_imputation_success": bool(raw_missing > 0 and has_clean)
            },
            "data_splits": {
                "train_samples": train_samples,
                "test_samples": test_samples,
                "split_ratio": f"{int((train_samples/clean_rows)*100)} / {int((test_samples/clean_rows)*100)}" if clean_rows > 0 else "N/A"
            },
            "class_distribution": target_distribution,
            "top_predictive_features": {k: round(v, 4) for k, v in top_correlations.items()},
            "live_predictions": {
                "total_queries": total_predictions,
                "malignant_diagnoses": malignant_preds,
                "benign_diagnoses": benign_preds,
                "average_ai_confidence": round(avg_conf * 100, 2)
            }
        }
    except Exception as e:
        return {"error": str(e)}

@router.get("/feature-stats", summary="Get Feature Statistics")
def get_feature_stats():
    """Returns general statistics for the RAW features."""
    try:
        if not os.path.exists(RAW_DATA_PATH):
            return {"error": "Raw data not generated yet."}
        df = pd.read_csv(RAW_DATA_PATH).drop('target', axis=1)
        desc = df.describe().to_dict()
        return desc
    except Exception as e:
        return {"error": str(e)}

@router.get("/distribution", summary="Get Target Distribution")
def get_distribution():
    try:
        df = pd.read_csv(CLEAN_DATA_PATH)
        counts = df['target'].value_counts().to_dict()
        return {
            "0_malignant": counts.get(0.0, counts.get(0, 0)),
            "1_benign": counts.get(1.0, counts.get(1, 0)),
            "total": len(df)
        }
    except Exception as e:
        return {"error": str(e)}

@router.get("/predictions-summary", summary="Get Predictions Analytical Summary")
def get_predictions_summary(db: Session = Depends(database.get_db)):
    total = db.query(models.PredictionLog).count()
    if total == 0:
        return {"total_predictions": 0, "message": "No predictions made yet."}
        
    malignant = db.query(models.PredictionLog).filter(models.PredictionLog.prediction == "MALIGNANT").count()
    benign = db.query(models.PredictionLog).filter(models.PredictionLog.prediction == "BENIGN").count()
    avg_confidence = db.query(func.avg(models.PredictionLog.confidence)).scalar() or 0.0
    
    return {
        "total_predictions": total,
        "malignant_cases": malignant,
        "benign_cases": benign,
        "average_confidence": round(avg_confidence, 4)
    }

