'use client';

// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React, { useState, useEffect } from 'react';
import { fetchDistributionStats, predictCase } from '@/src/lib/api';
import { DistributionStats } from '@/src/types/api';

const MALIGNANT_PROFILE = {
  'mean radius': 17.99,
  'mean texture': 10.38,
  'mean perimeter': 122.8,
  'mean area': 1001.0,
  'mean smoothness': 0.1184,
  'mean compactness': 0.2776,
  'mean concavity': 0.3001,
  'mean concave points': 0.1471,
  'mean symmetry': 0.2419,
  'mean fractal dimension': 0.07871,
  'radius error': 1.095,
  'texture error': 0.9053,
  'perimeter error': 8.589,
  'area error': 153.4,
  'smoothness error': 0.006399,
  'compactness error': 0.04904,
  'concavity error': 0.05373,
  'concave points error': 0.01587,
  'symmetry error': 0.03003,
  'fractal dimension error': 0.006193,
  'worst radius': 25.38,
  'worst texture': 17.33,
  'worst perimeter': 184.6,
  'worst area': 2019.0,
  'worst smoothness': 0.1622,
  'worst compactness': 0.6656,
  'worst concavity': 0.7119,
  'worst concave points': 0.2654,
  'worst symmetry': 0.4601,
  'worst fractal dimension': 0.1189,
};

const BENIGN_PROFILE = {
  'mean radius': 13.54,
  'mean texture': 14.36,
  'mean perimeter': 87.46,
  'mean area': 566.3,
  'mean smoothness': 0.09779,
  'mean compactness': 0.08129,
  'mean concavity': 0.06664,
  'mean concave points': 0.04781,
  'mean symmetry': 0.1885,
  'mean fractal dimension': 0.05766,
  'radius error': 0.2699,
  'texture error': 0.7886,
  'perimeter error': 2.058,
  'area error': 23.56,
  'smoothness error': 0.008462,
  'compactness error': 0.0146,
  'concavity error': 0.02387,
  'concave points error': 0.01315,
  'symmetry error': 0.0198,
  'fractal dimension error': 0.0023,
  'worst radius': 15.11,
  'worst texture': 19.26,
  'worst perimeter': 99.7,
  'worst area': 711.2,
  'worst smoothness': 0.144,
  'worst compactness': 0.1773,
  'worst concavity': 0.239,
  'worst concave points': 0.1288,
  'worst symmetry': 0.2977,
  'worst fractal dimension': 0.07259,
};

export default function EnhancedDiagnosticsPage() {
  const [features, setFeatures] = useState(MALIGNANT_PROFILE);
  const [quadrant, setQuadrant] = useState('UOQ');

  const [stats, setStats] = useState<DistributionStats | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [patientId, setPatientId] = useState('...');

  useEffect(() => {
    // eslint-disable-next-line
    setPatientId(`OS-LIVE-${Math.floor(Math.random() * 10000)}`);
    fetchDistributionStats().then((data) => {
      if (data) setStats(data);
    });
  }, []);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const data = await predictCase({ features });
      setPrediction(data.prediction);
      setConfidence(data.confidence);
    } catch (error) {
      console.error('Error:', error);
      const e = error as Error;
      alert(e.message || 'Failed to connect to AI engine.');
    } finally {
      setLoading(false);
    }
  };

  const handleFeatureChange = (name: string, value: string) => {
    setFeatures((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="mx-auto mb-12 w-full max-w-screen-2xl px-6 pt-8">
      {/* Hero Section */}
      <section className="bg-primary-container text-on-primary-container relative mb-12 flex flex-col items-center gap-8 overflow-hidden rounded-xl p-8 md:flex-row lg:p-12">
        <div className="relative z-10 flex-1">
          <h1 className="font-h1 mb-4 text-[40px] leading-tight font-bold tracking-[-0.02em]">
            Intelligent Breast Cancer Diagnostic System
          </h1>
          <p className="font-body-lg mb-8 max-w-2xl text-[18px] leading-[1.6] text-white/90">
            Empowering oncologists with high-precision ANN-driven diagnostic tools. Experience
            clinical-grade accuracy with OncoShield&apos;s real-time analysis engine.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="text-primary hover:bg-surface-bright rounded-lg bg-white px-6 py-3 font-semibold shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] transition-all active:scale-95">
              Explore Model Architecture
            </button>
            <button className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 active:scale-95">
              View Clinical Guidelines
            </button>
          </div>
        </div>
        <div className="relative hidden w-1/3 md:block">
          <img
            alt="Medical AI Visualization"
            className="rotate-3 rounded-xl shadow-2xl"
            src="/images/medical-ai.png"
          />
        </div>
      </section>

      {/* Analytics Overview */}
      <div className="gap-gutter mb-12 grid grid-cols-1 md:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              analytics
            </span>
            <h3 className="font-h3 text-on-surface text-[24px] font-semibold">
              Live Dataset Analysis
            </h3>
          </div>
          <div className="space-y-6">
            <div className="font-body-sm text-on-surface-variant flex items-end justify-between text-[14px]">
              <span>Total Samples: {stats ? stats.total : 569}</span>
              <span className="font-code text-primary text-[13px]">Pre-processing Verified</span>
            </div>
            <div className="space-y-2">
              <div className="font-body-sm flex justify-between text-[14px]">
                <span>Completeness</span>
                <span className="font-bold">100%</span>
              </div>
              <div className="bg-surface-container h-2 w-full rounded-full">
                <div className="bg-secondary h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-lg p-3">
                <p className="font-body-sm text-outline mb-1 text-[14px]">Malignant (M)</p>
                <p className="font-h3 text-error text-[24px] font-bold">
                  {stats ? stats['0_malignant'] : 212}
                </p>
              </div>
              <div className="bg-surface rounded-lg p-3">
                <p className="font-body-sm text-outline mb-1 text-[14px]">Benign (B)</p>
                <p className="font-h3 text-secondary text-[24px] font-bold">
                  {stats ? stats['1_benign'] : 357}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <h3 className="font-h3 text-on-surface text-[24px] font-semibold">Data Optimization</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="font-body-sm flex justify-between text-[14px]">
                <span>Missing values imputed</span>
                <span className="text-secondary font-bold">100%</span>
              </div>
              <div className="bg-surface-container h-2 w-full rounded-full">
                <div
                  className="bg-secondary-container h-full rounded-full"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-body-sm flex justify-between text-[14px]">
                <span>Standard Scaler applied</span>
                <span className="text-secondary font-bold">100%</span>
              </div>
              <div className="bg-surface-container h-2 w-full rounded-full">
                <div
                  className="bg-secondary-container h-full rounded-full"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            <div className="bg-secondary-fixed/30 border-secondary-fixed-dim flex items-start gap-3 rounded-lg border p-4">
              <span className="material-symbols-outlined text-on-secondary-fixed">info</span>
              <p className="font-body-sm text-on-secondary-fixed text-[14px]">
                Data has been normalized and features scaled using Z-score standardization for
                optimal model convergence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostic Interface */}
      <div className="gap-gutter grid grid-cols-1 items-start lg:grid-cols-12">
        {/* Patient Diagnosis Form */}
        <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] lg:col-span-8">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-h3 text-[24px] font-semibold">New Patient Diagnosis</h3>
            <div className="font-body-sm text-outline flex items-center gap-2 text-[14px]">
              <span className="material-symbols-outlined text-[18px]">fingerprint</span>
              <span>Patient ID: {patientId}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {/* Left: Numerical Inputs */}
            <div className="space-y-6">
              <h4 className="font-label-caps text-primary mb-4 text-[12px] font-bold tracking-[0.05em]">
                Morphological Parameters
              </h4>
              <div className="mb-4 flex gap-4">
                <button
                  onClick={() => setFeatures(MALIGNANT_PROFILE)}
                  className="bg-error/10 hover:bg-error/20 text-error rounded-lg px-4 py-2 text-[13px] font-bold transition-all"
                >
                  Load Malignant Case
                </button>
                <button
                  onClick={() => setFeatures(BENIGN_PROFILE)}
                  className="rounded-lg bg-emerald-500/10 px-4 py-2 text-[13px] font-bold text-emerald-600 transition-all hover:bg-emerald-500/20"
                >
                  Load Benign Case
                </button>
              </div>
              <div
                className="grid max-h-[420px] grid-cols-2 gap-x-4 gap-y-4 overflow-y-auto pr-2"
                style={{ scrollbarWidth: 'thin' }}
              >
                {Object.keys(MALIGNANT_PROFILE).map((key) => (
                  <div key={key} className="space-y-1.5">
                    <label className="font-body-sm text-on-surface-variant flex justify-between text-[12px] font-semibold capitalize">
                      <span className="truncate pr-1">
                        {key
                          .replace('mean ', 'Mean ')
                          .replace(' error', ' Error')
                          .replace('worst ', 'Worst ')}
                      </span>
                    </label>
                    <input
                      className="bg-surface-container-lowest border-outline-variant/50 focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-3 py-2 text-[13px] transition-all focus:ring-2 focus:outline-none"
                      type="number"
                      step="any"
                      value={features[key as keyof typeof MALIGNANT_PROFILE]}
                      onChange={(e) => handleFeatureChange(key, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quadrant Selection */}
            <div className="flex flex-col">
              <h4 className="font-label-caps text-primary mb-4 text-[12px] font-bold tracking-[0.05em]">
                Tumor Localization
              </h4>
              <div className="bg-surface relative flex flex-col items-center rounded-xl border border-slate-100 p-6">
                <div className="border-outline-variant/30 relative grid aspect-square w-full max-w-[240px] grid-cols-2 grid-rows-2 overflow-hidden rounded-full border-2">
                  <button
                    onClick={() => setQuadrant('UIQ')}
                    className={`group border-outline-variant/30 hover:bg-primary/5 relative border-r border-b transition-colors focus:outline-none ${quadrant === 'UIQ' ? 'bg-primary/10' : ''}`}
                  >
                    <span
                      className={`absolute top-4 left-4 text-[10px] font-bold ${quadrant === 'UIQ' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}
                    >
                      UIQ
                    </span>
                    {quadrant === 'UIQ' && (
                      <span className="bg-error absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full shadow-[0_0_8px_rgba(186,26,26,0.6)]"></span>
                    )}
                  </button>
                  <button
                    onClick={() => setQuadrant('UOQ')}
                    className={`group border-outline-variant/30 hover:bg-primary/5 relative border-b transition-colors focus:outline-none ${quadrant === 'UOQ' ? 'bg-primary/10' : ''}`}
                  >
                    <span
                      className={`absolute top-4 right-4 text-[10px] font-bold ${quadrant === 'UOQ' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}
                    >
                      UOQ
                    </span>
                    {quadrant === 'UOQ' && (
                      <span className="bg-error absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full shadow-[0_0_8px_rgba(186,26,26,0.6)]"></span>
                    )}
                  </button>
                  <button
                    onClick={() => setQuadrant('LIQ')}
                    className={`group border-outline-variant/30 hover:bg-primary/5 relative border-r transition-colors focus:outline-none ${quadrant === 'LIQ' ? 'bg-primary/10' : ''}`}
                  >
                    <span
                      className={`absolute bottom-4 left-4 text-[10px] font-bold ${quadrant === 'LIQ' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}
                    >
                      LIQ
                    </span>
                    {quadrant === 'LIQ' && (
                      <span className="bg-error absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full shadow-[0_0_8px_rgba(186,26,26,0.6)]"></span>
                    )}
                  </button>
                  <button
                    onClick={() => setQuadrant('LOQ')}
                    className={`group hover:bg-primary/5 relative transition-colors focus:outline-none ${quadrant === 'LOQ' ? 'bg-primary/10' : ''}`}
                  >
                    <span
                      className={`absolute right-4 bottom-4 text-[10px] font-bold ${quadrant === 'LOQ' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}
                    >
                      LOQ
                    </span>
                    {quadrant === 'LOQ' && (
                      <span className="bg-error absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full shadow-[0_0_8px_rgba(186,26,26,0.6)]"></span>
                    )}
                  </button>
                  <div className="border-outline-variant absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white"></div>
                </div>
                <p className="text-outline-variant mt-4 max-w-[200px] text-center text-[11px]">
                  Click to select clinical quadrant. <br />
                  <span className="text-error font-semibold">Selected: {quadrant}</span>
                </p>
              </div>
              <div className="mt-auto pt-8">
                <button
                  onClick={handlePredict}
                  disabled={loading}
                  className="bg-primary flex w-full items-center justify-center gap-3 rounded-xl py-4 font-bold text-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                  ) : (
                    <span className="material-symbols-outlined">biotech</span>
                  )}
                  {loading ? 'Analyzing...' : 'Run Diagnostic Analysis'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-gutter lg:col-span-4">
          <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
            {prediction ? (
              <div
                className={`${prediction === 'MALIGNANT' ? 'bg-error-container/20 border-error/10' : 'border-emerald-100 bg-emerald-50'} flex flex-col items-center border-b p-8 text-center`}
              >
                <span
                  className={`material-symbols-outlined ${prediction === 'MALIGNANT' ? 'text-error' : 'text-emerald-500'} mb-3 text-5xl`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {prediction === 'MALIGNANT' ? 'report' : 'check_circle'}
                </span>
                <h4
                  className={`font-label-caps ${prediction === 'MALIGNANT' ? 'text-error' : 'text-emerald-700'} mb-1 text-[12px] font-bold tracking-[0.05em] tracking-widest`}
                >
                  DIAGNOSTIC RESULT
                </h4>
                <p
                  className={`font-h2 ${prediction === 'MALIGNANT' ? 'text-error' : 'text-emerald-600'} mb-4 text-[32px] font-black`}
                >
                  {prediction}
                </p>
                <div
                  className={`${prediction === 'MALIGNANT' ? 'bg-error/10' : 'bg-emerald-200'} mb-4 h-1.5 w-full rounded-full`}
                >
                  <div
                    className={`${prediction === 'MALIGNANT' ? 'bg-error' : 'bg-emerald-500'} h-full rounded-full`}
                    style={{ width: `${(confidence || 0) * 100}%` }}
                  ></div>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className={`font-h1 ${prediction === 'MALIGNANT' ? 'text-on-error-container' : 'text-emerald-800'} text-[40px] font-bold`}
                  >
                    {((confidence || 0) * 100).toFixed(1)}%
                  </span>
                  <span
                    className={`font-body-sm ${prediction === 'MALIGNANT' ? 'text-on-error-container/70' : 'text-emerald-700/70'} text-[14px]`}
                  >
                    Confidence Score
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-surface-container-lowest flex h-64 flex-col items-center justify-center p-8 text-center">
                <span className="material-symbols-outlined text-outline-variant mb-4 text-5xl">
                  biotech
                </span>
                <p className="text-on-surface-variant font-semibold">Waiting for input...</p>
                <p className="text-outline mt-2 text-sm">
                  Adjust morphological parameters and run analysis to see live predictions.
                </p>
              </div>
            )}
          </div>

          {/* Diagnostic Support */}
          {prediction && (
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
              <h5 className="font-label-caps text-outline mb-4 text-[12px] font-bold tracking-[0.05em] uppercase">
                AI Diagnostic Support
              </h5>
              <div className="border-outline-variant/30 group relative overflow-hidden rounded-lg border">
                <img
                  alt="High-fidelity Breast Cancer Diagnostic Mammogram"
                  className="aspect-square w-full object-cover"
                  src="/images/mammogram.png"
                />
                <div
                  className="absolute inset-0 opacity-80 mix-blend-multiply"
                  style={{
                    background:
                      prediction === 'MALIGNANT'
                        ? 'radial-gradient(circle at 75% 35%, rgba(186, 26, 26, 0.6) 0%, rgba(186, 26, 26, 0.3) 15%, transparent 40%), radial-gradient(circle at 70% 40%, rgba(255, 120, 0, 0.4) 0%, transparent 30%)'
                        : 'radial-gradient(circle at 75% 35%, rgba(16, 185, 129, 0.2) 0%, transparent 40%)',
                  }}
                ></div>
                <div
                  className={`${prediction === 'MALIGNANT' ? 'border-error/40' : 'border-emerald-500/40'} pointer-events-none absolute inset-0 rounded-lg border-2`}
                ></div>
                <div className="font-code absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-[13px] text-white backdrop-blur-md">
                  AI-Detected ROI
                </div>
                {prediction === 'MALIGNANT' && (
                  <div className="absolute top-3 right-3">
                    <span className="flex h-3 w-3">
                      <span className="bg-error absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                      <span className="bg-error relative inline-flex h-3 w-3 rounded-full"></span>
                    </span>
                  </div>
                )}
              </div>
              <p className="text-on-surface-variant mt-3 text-[12px] italic">
                {prediction === 'MALIGNANT'
                  ? 'High-fidelity visualization indicating malignant morphology in the upper outer quadrant.'
                  : 'Routine analysis indicates benign structural patterns. No immediate threat detected.'}
              </p>
            </div>
          )}

          {/* Clinical Recommendation */}
          {prediction && (
            <div className="bg-surface-container-low border-outline-variant/30 rounded-xl border p-6">
              <h5 className="text-on-surface mb-4 flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  assignment
                </span>
                Clinical Protocol
              </h5>
              <ul className="space-y-4">
                {prediction === 'MALIGNANT' ? (
                  <>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-secondary shrink-0 text-[20px]">
                        check_circle
                      </span>
                      <p className="font-body-sm text-on-surface-variant text-[14px] leading-tight">
                        Priority oncological consultation required within 48 hours.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-secondary shrink-0 text-[20px]">
                        check_circle
                      </span>
                      <p className="font-body-sm text-on-surface-variant text-[14px] leading-tight">
                        Order core needle biopsy (CNB) for histopathological validation.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined text-secondary shrink-0 text-[20px]">
                        check_circle
                      </span>
                      <p className="font-body-sm text-on-surface-variant text-[14px] leading-tight">
                        Flag record for Multidisciplinary Tumor Board (MTB) review.
                      </p>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined shrink-0 text-[20px] text-emerald-500">
                        check_circle
                      </span>
                      <p className="font-body-sm text-on-surface-variant text-[14px] leading-tight">
                        Maintain standard annual screening protocol.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <span className="material-symbols-outlined shrink-0 text-[20px] text-emerald-500">
                        check_circle
                      </span>
                      <p className="font-body-sm text-on-surface-variant text-[14px] leading-tight">
                        Monitor for interval changes in structural symmetry.
                      </p>
                    </li>
                  </>
                )}
              </ul>
              <button className="text-primary font-body-sm border-primary/20 hover:bg-primary/5 mt-6 w-full rounded-lg border py-2 text-[14px] font-semibold transition-colors">
                Generate Full Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
