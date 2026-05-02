export interface PredictionSummary {
  total_predictions: number;
  malignant_cases: number;
  benign_cases: number;
  average_confidence: number;
  message?: string;
}

export interface DistributionStats {
  '0_malignant': number;
  '1_benign': number;
  total: number;
}

export interface PredictionFeatures {
  'mean radius': number;
  'mean texture': number;
  'mean perimeter': number;
  'mean area': number;
  [key: string]: number;
}

export interface PredictionRequest {
  features: PredictionFeatures;
}

export interface PredictionResponse {
  prediction: string;
  confidence: number;
  message: string;
  detail?: string;
}
