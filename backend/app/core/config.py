# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
import os
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
CONFIG_PATH = os.path.join(BASE_DIR, "config.json")
STREAM_PATH = os.path.join(BASE_DIR, "training_stream.txt")

def get_settings():
    """Reads the JSON configuration for the model and training."""
    with open(CONFIG_PATH, 'r') as f:
        return json.load(f)

def save_settings(config_dict):
    """Saves the JSON configuration."""
    with open(CONFIG_PATH, "w") as f:
        json.dump(config_dict, f, indent=2)

