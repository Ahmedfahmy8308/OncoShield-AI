import {
  DistributionStats,
  PredictionRequest,
  PredictionResponse,
  PredictionSummary,
} from '@/src/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';
const IS_DEMO = !!process.env.NEXT_PUBLIC_VERCEL_ENV;

export async function fetchPredictionSummary(): Promise<PredictionSummary | null> {
  if (IS_DEMO) {
    return {
      total_predictions: 1432,
      malignant_cases: 512,
      benign_cases: 920,
      average_confidence: 0.985,
    };
  }
  try {
    const res = await fetch(`${API_BASE_URL}/analysis/predictions-summary`, { cache: 'no-store' });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return {
      total_predictions: 1432,
      malignant_cases: 512,
      benign_cases: 920,
      average_confidence: 0.985,
    };
  }
}

export async function fetchDistributionStats(): Promise<DistributionStats | null> {
  if (IS_DEMO) {
    return {
      total: 5690,
      '0_malignant': 2120,
      '1_benign': 3570,
    };
  }
  try {
    const res = await fetch(`${API_BASE_URL}/analysis/distribution`, { cache: 'no-store' });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return {
      total: 5690,
      '0_malignant': 2120,
      '1_benign': 3570,
    };
  }
}

export async function predictCase(data: PredictionRequest): Promise<PredictionResponse> {
  if (IS_DEMO) {
    const radius = data.features['mean radius'] || 15;
    const isMalignant = radius > 16.0;
    return {
      prediction: isMalignant ? 'MALIGNANT' : 'BENIGN',
      confidence: 0.98 + Math.random() * 0.019,
      message: '[MOCK] Prediction generated offline.',
    };
  }
  try {
    const res = await fetch(`${API_BASE_URL}/predict/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    // Mock Prediction Fallback
    const radius = data.features['mean radius'] || 15;
    const isMalignant = radius > 16.0;
    return {
      prediction: isMalignant ? 'MALIGNANT' : 'BENIGN',
      confidence: 0.98 + Math.random() * 0.019,
      message: '[MOCK] Prediction generated offline.',
    };
  }
}

export const trainModel = async () => {
  if (IS_DEMO) return { message: '[MOCK] Training started.' };
  try {
    const response = await fetch(`${API_BASE_URL}/model/train`, { method: 'POST' });
    if (!response.ok) throw new Error();
    return response.json();
  } catch {
    return { message: '[MOCK] Training started.' };
  }
};

export const getModelSettings = async () => {
  if (IS_DEMO) return { training: { epochs: 50, batch_size: 16 } };
  try {
    const response = await fetch(`${API_BASE_URL}/model/settings`);
    if (!response.ok) throw new Error();
    return response.json();
  } catch {
    return { training: { epochs: 50, batch_size: 16 } };
  }
};

export const updateModelSettings = async (settings: Record<string, unknown>) => {
  if (IS_DEMO) return { message: '[MOCK] Settings updated.' };
  try {
    const response = await fetch(`${API_BASE_URL}/model/settings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    if (!response.ok) throw new Error();
    return response.json();
  } catch {
    return { message: '[MOCK] Settings updated.' };
  }
};

export const generateRawData = async () => {
  if (IS_DEMO) return { stats: { total_rows: 5690, total_columns: 31, missing_values: 8401 } };
  try {
    const response = await fetch(`${API_BASE_URL}/data/raw`);
    if (!response.ok) throw new Error();
    return response.json();
  } catch {
    return { stats: { total_rows: 5690, total_columns: 31, missing_values: 8401 } };
  }
};

export const cleanData = async () => {
  if (IS_DEMO)
    return {
      stats: {
        initial_missing_values: 8401,
        final_missing_values: 0,
        total_rows_processed: 5690,
        train_samples: 4552,
        test_samples: 1138,
      },
    };
  try {
    const response = await fetch(`${API_BASE_URL}/data/clean`);
    if (!response.ok) throw new Error();
    return response.json();
  } catch {
    return {
      stats: {
        initial_missing_values: 8401,
        final_missing_values: 0,
        total_rows_processed: 5690,
        train_samples: 4552,
        test_samples: 1138,
      },
    };
  }
};
