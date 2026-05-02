<div align="center">
  <h1>⚙️ OncoShield AI - Backend Inference Engine</h1>
  <p>The core Artificial Neural Network engine powered by <strong><a href="https://ufuq-tech.com/">Ufuq Tech</a></strong>.</p>
</div>

<br />

## 🌟 Overview
Welcome to the backend component of **OncoShield AI**. This module houses the proprietary Deep Learning (ANN) algorithms developed by **Ahmed Fahmy** at **Ufuq Tech**. 

This FastAPI application follows a strictly typed, modular architecture designed for enterprise Machine Learning operations (MLOps), ensuring fast, scalable, and secure clinical diagnostic predictions.

## 🏗️ Folder Architecture
The backend is structured for enterprise-grade scalability and maintainability:

- **`app/main.py`**: The central entrypoint for the FastAPI application.
- **`app/api/`**: Modular endpoints split by domain (`data.py`, `model.py`, `analysis.py`, `predict.py`).
- **`app/ml/`**: The Core Intelligence layer. Handles data imputation, standard scaling, and the Keras Sequential Model.
- **`app/db/`**: SQLite-powered SQLAlchemy database capturing all prediction logs and training histories.
- **`app/schemas/`**: Pydantic models ensuring rigorous input/output validation.

## 🚀 Installation & Setup

1. **Activate the Virtual Environment**:
   ```bash
   # On Windows
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
   & ".\\.venv\\Scripts\\Activate.ps1"
   # On Mac/Linux
   source .venv/bin/activate
   ```

2. **Install Ufuq Tech Dependencies**:
   ```bash
   python -m pip install -r requirements.txt
   ```

3. **Initialize the Database & Datasets** (First run only):
   ```bash
   python init_data.py
   ```
   *This command will generate the SQLite database (`oncoshield.db`) and output the `raw` and `clean` CSV datasets into the `data/` folder.*

4. **Start the API Server**:
   ```bash
   python -m uvicorn app.main:app --reload
   ```

5. **Access the Documentation**:
   Open your browser and navigate to [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) to view the interactive Swagger API Dashboard.

## 💻 MLOps CLI Tool
The backend includes a fully functional Command Line Interface (CLI) to execute Machine Learning operations directly from the terminal without using the frontend or API.

```bash
# 1. Generate and download the raw dataset
python cli.py download

# 2. Clean dataset, apply imputation, scale, and split (Train/Test)
python cli.py clean

# 3. Train the Artificial Neural Network
python cli.py train

# 4. Evaluate the trained model on testing data
python cli.py evaluate

# 5. Run an inference prediction on a sample tumor case
python cli.py predict
```

## 📡 Key API Endpoints
- **`POST /api/v1/model/train`**: Triggers a background Keras training session using the configuration stored in `config.json`.
- **`GET /api/v1/model/stream-logs`**: Connects via Server-Sent Events (SSE) to receive live epoch metrics during training.
- **`POST /api/v1/predict/`**: Accepts JSON clinical feature inputs, scales them, and returns an inference classification (Malignant/Benign).
- **`GET /api/v1/analysis/...`**: Analytical endpoints fetching feature statistics and database aggregation summaries.

---

### 🔐 Proprietary Software Notice
**© 2026 Ahmed Fahmy. Developed at [Ufuq Tech](https://ufuq-tech.com/).**
All rights reserved. Unauthorized copying, modification, reverse engineering, or distribution of this software is strictly prohibited.
