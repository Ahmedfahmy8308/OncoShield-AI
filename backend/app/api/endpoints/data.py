# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
from fastapi import APIRouter
from app.ml import core as ml_core

router = APIRouter()

@router.get("/raw", summary="Generate Dirty Dataset")
def get_raw_data_stats():
    """
    Downloads the breast cancer dataset, introduces 5% artificial missing values (NaNs),
    and saves it to the data folder for training purposes.
    """
    stats = ml_core.generate_dirty_dataset()
    return {"message": "Raw dirty dataset generated.", "stats": stats}

@router.get("/clean", summary="Clean & Preprocess Dataset")
def clean_data():
    """
    Loads the dirty dataset, imputes missing values using Mean imputation,
    scales features using StandardScaler, and saves the cleaned dataset.
    """
    stats = ml_core.clean_and_preprocess_dataset()
    return {"message": "Dataset cleaned and preprocessed.", "stats": stats}

