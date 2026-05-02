# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
import os
import sys

# Add backend directory to sys path so we can import app
sys.path.append(os.path.dirname(__file__))

from app.db import database, models
from app.ml import core

def initialize():
    print("Initializing Database tables...")
    models.Base.metadata.create_all(bind=database.engine)
    
    print("Generating raw dirty dataset...")
    core.generate_dirty_dataset()
    
    print("Cleaning and preprocessing dataset...")
    core.clean_and_preprocess_dataset()
    
    print("Initialization Complete! Check the /data folder and oncoshield.db")

if __name__ == "__main__":
    initialize()

