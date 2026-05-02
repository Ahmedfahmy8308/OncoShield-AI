# Copyright (c) 2026 Ahmed Fahmy
# Developed at UFUQ TECH
# Proprietary software. See LICENSE file in the project root for full license information.
import os
import json
import logging
import pandas as pd
import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
import joblib
import tensorflow as tf
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.callbacks import Callback

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
MODEL_DIR = os.path.join(BASE_DIR, "models_saved")
LOG_PATH = os.path.join(BASE_DIR, "training.log")
STREAM_PATH = os.path.join(BASE_DIR, "training_stream.txt")
CONFIG_PATH = os.path.join(BASE_DIR, "config.json")

os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(MODEL_DIR, exist_ok=True)

RAW_DATA_PATH = os.path.join(DATA_DIR, "raw_dataset.csv")
CLEAN_DATA_PATH = os.path.join(DATA_DIR, "clean_dataset.csv")

# Explicit Train/Test Split Files
TRAIN_X_PATH = os.path.join(DATA_DIR, "X_train.csv")
TEST_X_PATH = os.path.join(DATA_DIR, "X_test.csv")
TRAIN_Y_PATH = os.path.join(DATA_DIR, "y_train.csv")
TEST_Y_PATH = os.path.join(DATA_DIR, "y_test.csv")

SCALER_PATH = os.path.join(MODEL_DIR, "scaler.pkl")
MODEL_PATH = os.path.join(MODEL_DIR, "oncoshield_model.keras")

logging.basicConfig(filename=LOG_PATH, level=logging.INFO, 
                    format='%(asctime)s - %(levelname)s - %(message)s')

class StreamingCallback(Callback):
    def on_epoch_end(self, epoch, logs=None):
        logs = logs or {}
        msg = f"Epoch {epoch+1}: loss = {logs.get('loss'):.4f}, accuracy = {logs.get('accuracy'):.4f}, val_accuracy = {logs.get('val_accuracy'):.4f}"
        logging.info(msg)
        with open(STREAM_PATH, 'a') as f:
            f.write(msg + "\n")

def get_config():
    with open(CONFIG_PATH, 'r') as f:
        return json.load(f)

def generate_dirty_dataset():
    """
    Loads breast cancer dataset and augments it to be larger (5690 rows),
    then introduces missing values to simulate raw data.
    Input Features: 30 numerical measurements (radius, texture, perimeter, area, etc.)
    Target: 0 = Malignant (cancer), 1 = Benign (no cancer)
    """
    data = load_breast_cancer()
    X, y = data.data, data.target
    
    # Augmenting the data by 10x with slight Gaussian noise to make it a respectable size
    np.random.seed(42)
    X_aug = [X]
    y_aug = [y]
    for _ in range(9):
        # Adding 1% noise to create synthetic but realistic similar patient data
        noise = np.random.normal(0, 0.01 * np.std(X, axis=0), X.shape)
        X_aug.append(X + noise)
        y_aug.append(y)
        
    X_large = np.vstack(X_aug)
    y_large = np.concatenate(y_aug)
    
    df = pd.DataFrame(X_large, columns=data.feature_names)
    df['target'] = y_large
    
    # Introduce ~5% missing values randomly in features for the cleaning script to fix later
    mask = np.random.rand(*df.drop('target', axis=1).shape) < 0.05
    df_features = df.drop('target', axis=1).mask(mask)
    df_features['target'] = df['target']
    
    df_features.to_csv(RAW_DATA_PATH, index=False)
    
    return {
        "total_rows": len(df_features),
        "total_columns": len(df_features.columns),
        "missing_values": int(df_features.isnull().sum().sum())
    }

def clean_and_preprocess_dataset():
    """
    1. Imputes Missing Values.
    2. Scales Features.
    3. Splits Data into Train and Test sets explicitly!
    """
    if not os.path.exists(RAW_DATA_PATH):
        generate_dirty_dataset()
        
    df = pd.read_csv(RAW_DATA_PATH)
    initial_missing = int(df.isnull().sum().sum())
    
    X = df.drop('target', axis=1)
    y = df['target']
    
    # --- STEP 1: PREPROCESSING (Cleaning NaNs) ---
    imputer = SimpleImputer(strategy='mean')
    X_imputed = imputer.fit_transform(X)
    
    # --- STEP 2: PREPROCESSING (Scaling) ---
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X_imputed)
    joblib.dump(scaler, SCALER_PATH)
    
    clean_df = pd.DataFrame(X_scaled, columns=X.columns)
    clean_df['target'] = y.values
    clean_df.to_csv(CLEAN_DATA_PATH, index=False)
    
    # --- STEP 3: SPLITTING THE DATA (Train/Test Split) ---
    # We save these explicitly into CSVs so the doctor can see the split files.
    config = get_config()
    test_size = config['dataset'].get('test_size', 0.2)
    random_state = config['dataset'].get('random_state', 42)
    
    X_train, X_test, y_train, y_test = train_test_split(
        clean_df.drop('target', axis=1), 
        clean_df['target'], 
        test_size=test_size, 
        random_state=random_state
    )
    
    X_train.to_csv(TRAIN_X_PATH, index=False)
    X_test.to_csv(TEST_X_PATH, index=False)
    y_train.to_csv(TRAIN_Y_PATH, index=False)
    y_test.to_csv(TEST_Y_PATH, index=False)
    
    return {
        "initial_missing_values": initial_missing,
        "final_missing_values": 0,
        "total_rows_processed": len(clean_df),
        "train_samples": len(X_train),
        "test_samples": len(X_test)
    }

def build_and_train_ann():
    """
    Reads the explicit Train/Test splits and builds the ANN.
    """
    config = get_config()
    
    if not os.path.exists(TRAIN_X_PATH):
        clean_and_preprocess_dataset()
        
    # Read the split data explicitly
    X_train = pd.read_csv(TRAIN_X_PATH).values
    X_test = pd.read_csv(TEST_X_PATH).values
    y_train = pd.read_csv(TRAIN_Y_PATH).values
    y_test = pd.read_csv(TEST_Y_PATH).values
    
    model_config = config['model']
    
    # --- BUILDING THE ANN ---
    model = Sequential()
    
    # Hidden Layers
    for i, layer_cfg in enumerate(model_config['hidden_layers']):
        if i == 0:
            model.add(Dense(layer_cfg['units'], activation=layer_cfg['activation'], input_dim=X_train.shape[1]))
        else:
            model.add(Dense(layer_cfg['units'], activation=layer_cfg['activation']))
        
        if layer_cfg.get('dropout'):
            model.add(Dropout(layer_cfg['dropout']))
            
    # Output Layer (Binary Classification)
    model.add(Dense(1, activation=model_config['output_activation']))
    
    # Compile the ANN
    model.compile(optimizer=model_config['optimizer'], 
                  loss=model_config['loss'], 
                  metrics=['accuracy'])
    
    open(STREAM_PATH, 'w').close()
    
    epochs = config['training'].get('epochs', 50)
    batch_size = config['training'].get('batch_size', 16)
    
    logging.info(f"Starting ANN training for {epochs} epochs...")
    
    # --- TRAINING THE ANN ---
    model.fit(
        X_train, y_train, 
        epochs=epochs, 
        batch_size=batch_size, 
        validation_data=(X_test, y_test),
        callbacks=[StreamingCallback()],
        verbose=0
    )
    
    loss, accuracy = model.evaluate(X_test, y_test, verbose=0)
    
    model.save(MODEL_PATH)
    msg = f"Training completed. Final Accuracy: {accuracy:.4f}"
    logging.info(msg)
    with open(STREAM_PATH, 'a') as f:
        f.write(msg + "\n")
    
    return {
        "accuracy": float(accuracy),
        "loss": float(loss),
        "epochs_trained": epochs
    }

def predict_single(features: dict):
    if not os.path.exists(MODEL_PATH) or not os.path.exists(SCALER_PATH):
        raise Exception("Model or Scaler not found. Train the model first.")
        
    scaler = joblib.load(SCALER_PATH)
    model = load_model(MODEL_PATH)
    
    data = load_breast_cancer()
    feature_names = data.feature_names
    
    input_arr = []
    for col in feature_names:
        input_arr.append(features.get(col, 0.0))
        
    input_arr = np.array(input_arr).reshape(1, -1)
    scaled_input = scaler.transform(input_arr)
    prediction = model.predict(scaled_input, verbose=0)[0][0]
    
    class_label = "BENIGN" if prediction >= 0.5 else "MALIGNANT"
    confidence = float(prediction) if prediction >= 0.5 else float(1.0 - prediction)
    
    return {
        "prediction": class_label,
        "confidence": confidence
    }

