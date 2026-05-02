# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
from fastapi import APIRouter
from app.api.endpoints import data, model, predict, analysis

api_router = APIRouter()

api_router.include_router(data.router, prefix="/data", tags=["Dataset Management"])
api_router.include_router(model.router, prefix="/model", tags=["Model Training & Settings"])
api_router.include_router(predict.router, prefix="/predict", tags=["Inference"])
api_router.include_router(analysis.router, prefix="/analysis", tags=["Data Analytics"])

