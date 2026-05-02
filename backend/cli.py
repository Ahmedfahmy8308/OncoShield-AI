# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.

import argparse
import sys
import json
from app.ml import core

def download_data():
    """Downloads and generates the dirty dataset."""
    print("Downloading and generating raw dataset...")
    stats = core.generate_dirty_dataset()
    print("Raw Data Generation Complete!")
    print(json.dumps(stats, indent=2))

def clean_data():
    """Cleans the data and creates the train/test splits."""
    print("Cleaning dataset and creating train/test splits...")
    stats = core.clean_and_preprocess_dataset()
    print("Cleaning Complete!")
    print(json.dumps(stats, indent=2))

def train_model():
    """Trains the ANN model."""
    print("Training ANN model...")
    stats = core.build_and_train_ann()
    print("Training Complete!")
    print(json.dumps(stats, indent=2))

def evaluate_model():
    """Evaluates the currently saved ANN model accuracy without retraining."""
    import os
    import pandas as pd
    from tensorflow.keras.models import load_model
    
    if not os.path.exists(core.MODEL_PATH) or not os.path.exists(core.TEST_X_PATH):
        print("Model or test data not found. Please run 'train' and 'clean' first.")
        return
        
    print("Evaluating saved ANN model on test data...")
    X_test = pd.read_csv(core.TEST_X_PATH).values
    y_test = pd.read_csv(core.TEST_Y_PATH).values
    
    model = load_model(core.MODEL_PATH)
    loss, accuracy = model.evaluate(X_test, y_test, verbose=0)
    
    print(f"Evaluation Complete!")
    print(json.dumps({"accuracy": accuracy, "loss": loss}, indent=2))

def predict_sample():
    """Runs a prediction on a sample using the saved ANN."""
    # Using a typical feature dict for a sample benign tumor
    sample_features = {
        'mean radius': 13.54, 'mean texture': 14.36, 'mean perimeter': 87.46, 'mean area': 566.3,
        'mean smoothness': 0.09779, 'mean compactness': 0.08129, 'mean concavity': 0.06664,
        'mean concave points': 0.04781, 'mean symmetry': 0.1885, 'mean fractal dimension': 0.05766,
        'radius error': 0.2699, 'texture error': 0.7886, 'perimeter error': 2.058, 'area error': 23.56,
        'smoothness error': 0.008462, 'compactness error': 0.0146, 'concavity error': 0.02387,
        'concave points error': 0.01315, 'symmetry error': 0.0198, 'fractal dimension error': 0.0023,
        'worst radius': 15.11, 'worst texture': 19.26, 'worst perimeter': 99.7, 'worst area': 711.2,
        'worst smoothness': 0.144, 'worst compactness': 0.1773, 'worst concavity': 0.239,
        'worst concave points': 0.1288, 'worst symmetry': 0.2977, 'worst fractal dimension': 0.07259
    }
    print("Predicting sample features...")
    result = core.predict_single(sample_features)
    print("Prediction Complete!")
    print(json.dumps(result, indent=2))

def main():
    parser = argparse.ArgumentParser(description="OncoShield AI MLOps CLI Tool")
    
    subparsers = parser.add_subparsers(dest="command", help="Available Commands")
    
    subparsers.add_parser("download", help="Generate and download the raw dirty dataset")
    subparsers.add_parser("clean", help="Clean dataset and split into train/test")
    subparsers.add_parser("train", help="Train the ANN model")
    subparsers.add_parser("evaluate", help="Evaluate the ANN accuracy on test data")
    subparsers.add_parser("predict", help="Predict a sample instance to test the model")

    args = parser.parse_args()

    if args.command == "download":
        download_data()
    elif args.command == "clean":
        clean_data()
    elif args.command == "train":
        train_model()
    elif args.command == "evaluate":
        evaluate_model()
    elif args.command == "predict":
        predict_sample()
    else:
        parser.print_help()
        sys.exit(1)

if __name__ == "__main__":
    # Disable TensorFlow logs
    import os
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 
    main()
