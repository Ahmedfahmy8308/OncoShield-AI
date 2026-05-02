"use client";

// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React, { useState, useEffect, useRef } from 'react';
import { trainModel, getModelSettings, updateModelSettings, generateRawData, cleanData } from '@/src/lib/api';

export default function ModelArchitecturePage() {
  const [isTraining, setIsTraining] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // MLOps State
  const [epochs, setEpochs] = useState(50);
  const [batchSize, setBatchSize] = useState(16);
  const [dataStats, setDataStats] = useState<any>(null);
  const [isLoadingSettings, setIsLoadingSettings] = useState(true);

  useEffect(() => {
    // Fetch initial settings
    getModelSettings().then(data => {
       setEpochs(data.training.epochs);
       setBatchSize(data.training.batch_size);
       setIsLoadingSettings(false);
    }).catch(console.error);
  }, []);

  const handleUpdateSettings = async () => {
    try {
      const current = await getModelSettings();
      current.training.epochs = epochs;
      current.training.batch_size = batchSize;
      await updateModelSettings(current);
      alert('Model settings updated successfully!');
    } catch (e) {
      console.error(e);
      alert('Failed to update settings');
    }
  };

  const handleGenerateRaw = async () => {
    try {
       const res = await generateRawData();
       setDataStats(res.stats);
    } catch (e) {
       console.error(e);
    }
  };

  const handleCleanData = async () => {
    try {
       const res = await cleanData();
       setDataStats(res.stats);
    } catch (e) {
       console.error(e);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleTrain = async () => {
    if (isTraining) return;
    setIsTraining(true);
    setLogs(["Initiating training sequence...", "Connecting to Ufuq Tech MLOps Engine..."]);
    
    try {
      await trainModel();
      const eventSource = new EventSource('http://127.0.0.1:8000/api/v1/model/stream-logs');
      
      eventSource.onmessage = (event) => {
        setLogs(prev => {
           const newLogs = [...prev, event.data];
           if (event.data.includes("Training completed")) {
             eventSource.close();
             setIsTraining(false);
           }
           return newLogs;
        });
      };

      eventSource.onerror = () => {
        eventSource.close();
        setIsTraining(false);
      };
      
    } catch (error) {
      console.error(error);
      setLogs(prev => [...prev, "Failed to start training. Is the backend running?"]);
      setIsTraining(false);
    }
  };
  return (
    <div className="py-stack-xl mx-auto w-full max-w-screen-2xl px-6">
      {/* Hero Section */}
      <section className="mb-stack-xl">
        <div className="gap-stack-lg flex flex-col items-start lg:flex-row">
          <div className="flex-1">
            <h1 className="font-h1 text-primary mb-stack-sm text-[40px] leading-[1.2] font-bold tracking-[-0.02em]">
              Diagnostic Engine v4.2
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-3xl text-[18px] leading-[1.6]">
              Advanced Neural Network architecture optimized for early-stage oncological detection.
              OncoShield AI utilizes a deep multi-scale feature extraction pipeline to ensure 99.8%
              specificity in clinical environments.
            </p>
            <div className="gap-stack-md mt-stack-lg flex">
              <span className="bg-primary/10 text-primary font-label-caps rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.05em]">
                PRODUCTION READY
              </span>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-caps rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.05em]">
                GPU ACCELERATED
              </span>
            </div>
          </div>
          <div className="p-stack-lg bg-surface-container-low border-outline-variant/30 w-full rounded-xl border lg:w-1/3">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-h3 text-[24px] font-semibold">Current Status</span>
              <span className="flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </div>
            <ul className="font-body-sm text-on-surface-variant space-y-3 text-[14px]">
              <li className="flex justify-between">
                <span>Uptime</span>
                <span className="text-on-surface font-semibold">99.99%</span>
              </li>
              <li className="flex justify-between">
                <span>Latency</span>
                <span className="text-on-surface font-semibold">124ms</span>
              </li>
              <li className="flex justify-between">
                <span>Last Training</span>
                <span className="text-on-surface font-semibold">Oct 12, 2025</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-stack-xl">
        <div className="relative rounded-xl border border-transparent bg-white p-1 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#39b8fd,#006194)_border-box]">
          <div className="flex flex-col items-center justify-between gap-8 p-8 lg:flex-row">
            <div className="flex-1 space-y-4">
              <div className="bg-primary/10 text-primary font-label-caps inline-flex items-center rounded-full px-3 py-1 text-[12px] font-bold tracking-[0.05em]">
                LIVE TRAINING TERMINAL
              </div>
              <h2 className="font-h2 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
                Neural Network Trainer
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl text-[16px] leading-relaxed">
                Connect directly to the Ufuq Tech backend via Server-Sent Events (SSE). Start a background task and watch the epochs stream in real-time.
              </p>
              <div ref={containerRef} className="bg-slate-900 border-outline-variant font-code text-sky-400 flex flex-col rounded-lg border p-4 text-[13px] h-48 overflow-y-auto overflow-x-hidden shadow-inner mt-4 w-full">
                {logs.length === 0 ? (
                   <div className="flex items-center gap-3 italic text-slate-500 h-full justify-center">
                     <span className="bg-slate-700 h-2 w-2 animate-pulse rounded-full"></span>
                     Ready to initiate new training cycle...
                   </div>
                ) : (
                   <div className="space-y-1 text-left w-full">
                     {logs.map((log, idx) => (
                       <div key={idx} className={`${log.includes('loss') ? 'text-emerald-400' : 'text-sky-400'} break-all`}>
                         <span className="text-slate-600 mr-2">{'>'}</span> {log}
                       </div>
                     ))}
                   </div>
                )}
              </div>
            </div>
            <div className="w-full space-y-4 lg:w-1/3">
              <button 
                onClick={handleTrain}
                disabled={isTraining}
                className="bg-primary group flex w-full items-center justify-center gap-3 rounded-xl py-4 font-bold text-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] transition-all hover:brightness-110 active:scale-95 disabled:opacity-50">
                <span className={`material-symbols-outlined ${isTraining ? 'animate-spin' : 'transition-transform duration-500 group-hover:rotate-180'}`}>
                  sync
                </span>
                {isTraining ? 'Training in Progress...' : 'Train OncoShield Model'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MLOps Pipeline & Settings */}
      <section className="mb-stack-xl">
        <h2 className="font-h2 text-on-surface mb-stack-lg text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
          Data Pipeline & Configuration
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Data Pipeline Panel */}
          <div className="bg-surface-container-lowest p-stack-lg flex flex-col rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
            <h3 className="font-h3 text-[24px] font-semibold mb-4">Dataset Management</h3>
            <p className="text-on-surface-variant text-[14px] mb-6">
              Generate raw diagnostic datasets or trigger the imputation and scaling pipeline manually.
            </p>
            <div className="flex gap-4 mb-8">
              <button onClick={handleGenerateRaw} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-semibold transition-all">
                Generate Raw Data
              </button>
              <button onClick={handleCleanData} className="flex-1 bg-primary hover:bg-surface-tint text-white py-3 rounded-lg font-semibold transition-all">
                Clean & Preprocess
              </button>
            </div>
            
            {dataStats && dataStats.missing_values !== undefined && (
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-amber-500">warning</span>
                  <h4 className="font-h3 text-[18px] font-bold text-slate-800">Raw Data Analysis</h4>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-white p-4 rounded shadow-sm border border-slate-100">
                    <p className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-1">Total Rows</p>
                    <p className="text-2xl font-black text-slate-800">{dataStats.total_rows.toLocaleString()}</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm border border-slate-100">
                    <p className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-1">Features</p>
                    <p className="text-2xl font-black text-slate-800">{dataStats.total_columns - 1}</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded shadow-sm border border-amber-100">
                    <p className="text-amber-700 text-[12px] font-bold uppercase tracking-wider mb-1">Missing Values</p>
                    <p className="text-2xl font-black text-amber-600 animate-pulse">{dataStats.missing_values.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-[13px] text-slate-600 bg-white p-3 rounded border border-slate-200">
                  <span className="font-bold text-slate-800">Note:</span> The dataset has been artificially augmented to simulate real-world clinical noise. Data must be cleaned before training.
                </p>
              </div>
            )}

            {dataStats && dataStats.train_samples !== undefined && (
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200 animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-emerald-600">verified</span>
                  <h4 className="font-h3 text-[18px] font-bold text-slate-800">Cleaned & Split Data</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded shadow-sm border border-emerald-100">
                    <p className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-1">Missing Values Fixed</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-emerald-600">{dataStats.initial_missing_values.toLocaleString()}</span>
                      <span className="material-symbols-outlined text-emerald-500 text-sm">arrow_right_alt</span>
                      <span className="text-2xl font-black text-emerald-600">0</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm border border-emerald-100">
                    <p className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-1">Total Processed</p>
                    <p className="text-2xl font-black text-slate-800">{dataStats.total_rows_processed.toLocaleString()}</p>
                  </div>
                </div>
                
                <h5 className="font-label-caps text-slate-500 mb-2 text-[11px] font-bold tracking-[0.05em]">TRAIN / TEST SPLIT (80/20)</h5>
                <div className="flex h-4 w-full rounded-full overflow-hidden bg-slate-200">
                  <div className="bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${(dataStats.train_samples / dataStats.total_rows_processed) * 100}%` }}>
                    Train ({dataStats.train_samples})
                  </div>
                  <div className="bg-sky-500 flex items-center justify-center text-[10px] font-bold text-white" style={{ width: `${(dataStats.test_samples / dataStats.total_rows_processed) * 100}%` }}>
                    Test ({dataStats.test_samples})
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hyperparameters Panel */}
          <div className="bg-surface-container-lowest p-stack-lg flex flex-col rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
            <h3 className="font-h3 text-[24px] font-semibold mb-4">Hyperparameters</h3>
            <p className="text-on-surface-variant text-[14px] mb-6">
              Configure the Neural Network training parameters. Changes apply to the next training cycle.
            </p>
            {!isLoadingSettings && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Epochs (Training Cycles)</label>
                  <input 
                    type="number" 
                    value={epochs} 
                    onChange={(e) => setEpochs(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded border border-slate-200 focus:outline-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Batch Size</label>
                  <input 
                    type="number" 
                    value={batchSize} 
                    onChange={(e) => setBatchSize(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded border border-slate-200 focus:outline-primary"
                  />
                </div>
                <button onClick={handleUpdateSettings} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-semibold transition-all">
                  Save Configuration
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ANN Architecture & Specifications */}
      <div className="gap-gutter mb-stack-xl grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-surface-container-lowest overflow-hidden rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] lg:col-span-2">
          <div className="p-stack-lg border-b border-slate-100">
            <h2 className="font-h2 text-on-surface text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
              Neural Architecture
            </h2>
          </div>
          <div className="relative h-80 w-full overflow-hidden bg-slate-900">
            <img
              alt="Neural Architecture Diagram"
              className="h-full w-full object-cover opacity-60"
              src="/images/neural_network_bg.png"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-400 bg-sky-500/20">
                    <span className="text-xs font-bold text-white">IN</span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-400 bg-sky-500/20">
                    <span className="text-xs font-bold text-white">IN</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-primary-container flex h-20 w-12 items-center justify-center rounded-lg border border-white/20">
                    <span className="text-xs font-bold text-white">CONV</span>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-secondary-container flex h-12 w-12 items-center justify-center rounded-lg border border-white/20">
                    <span className="text-xs font-bold text-white">POOL</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary flex h-32 w-12 items-center justify-center rounded-lg border border-white/20">
                    <span className="text-xs font-bold text-white">DENSE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-stack-lg gap-stack-lg grid grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-label-caps text-outline mb-1 text-[12px] font-semibold tracking-[0.05em]">
                LAYERS
              </p>
              <p className="font-h3 text-primary text-[24px] font-semibold">152</p>
            </div>
            <div>
              <p className="font-label-caps text-outline mb-1 text-[12px] font-semibold tracking-[0.05em]">
                PARAMETERS
              </p>
              <p className="font-h3 text-primary text-[24px] font-semibold">48.5M</p>
            </div>
            <div>
              <p className="font-label-caps text-outline mb-1 text-[12px] font-semibold tracking-[0.05em]">
                OPTIMIZER
              </p>
              <p className="font-h3 text-primary text-[24px] font-semibold">ADAMW</p>
            </div>
            <div>
              <p className="font-label-caps text-outline mb-1 text-[12px] font-semibold tracking-[0.05em]">
                LOSS FN
              </p>
              <p className="font-h3 text-primary text-[24px] font-semibold">FOCAL</p>
            </div>
          </div>
        </div>

        {/* Tech Specs Side Panel */}
        <div className="p-stack-lg relative z-10 flex flex-col rounded-xl border border-transparent bg-white bg-clip-padding">
          <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-[#39b8fd] to-[#006194] opacity-20"></div>
          <div className="mb-stack-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">memory</span>
            <h3 className="font-h3 text-on-surface text-[24px] font-semibold">Technical Specs</h3>
          </div>
          <div className="space-y-stack-lg flex-grow">
            <div className="p-stack-md bg-surface-container-low border-outline-variant/20 rounded-lg border">
              <p className="font-label-caps text-primary mb-1 text-[12px] font-semibold tracking-[0.05em]">
                INFERENCE HARDWARE
              </p>
              <p className="font-body-md text-[16px] font-semibold">NVIDIA A100 Tensor Core</p>
            </div>
            <div className="p-stack-md bg-surface-container-low border-outline-variant/20 rounded-lg border">
              <p className="font-label-caps text-primary mb-1 text-[12px] font-semibold tracking-[0.05em]">
                INPUT RESOLUTION
              </p>
              <p className="font-body-md text-[16px] font-semibold">2048 x 2048 (DICOM)</p>
            </div>
            <div className="p-stack-md bg-surface-container-low border-outline-variant/20 rounded-lg border">
              <p className="font-label-caps text-primary mb-1 text-[12px] font-semibold tracking-[0.05em]">
                DATASETS
              </p>
              <p className="font-body-md text-[16px] font-semibold">TCIA / curated internal</p>
            </div>
            <div className="p-stack-md bg-surface-container-low border-outline-variant/20 rounded-lg border">
              <p className="font-label-caps text-primary mb-1 text-[12px] font-semibold tracking-[0.05em]">
                QUANTIZATION
              </p>
              <p className="font-body-md text-[16px] font-semibold">INT8 / FP16 Mixed</p>
            </div>
          </div>
          <button className="mt-stack-lg bg-primary hover:bg-surface-tint w-full rounded-lg py-3 font-semibold text-white transition-all active:scale-95">
            View Full Manifest
          </button>
        </div>
      </div>

      {/* Performance Metrics Bento Grid */}
      <h2 className="font-h2 text-on-surface mb-stack-lg text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
        Performance Metrics
      </h2>
      <div className="gap-gutter mb-stack-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* ROC Curve Card */}
        <div className="bg-surface-container-lowest p-stack-lg flex flex-col rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] lg:col-span-2">
          <div className="mb-stack-lg flex items-center justify-between">
            <p className="font-h3 text-[24px] font-semibold">ROC Curve Analysis</p>
            <span className="text-[14px] font-semibold text-emerald-600">AUC: 0.994</span>
          </div>
          <div className="flex h-48 flex-grow items-end justify-between gap-1 px-2">
            <div className="group relative h-[10%] w-full rounded-t bg-slate-100">
              <div className="bg-primary-container absolute bottom-0 left-0 h-[95%] w-full rounded-t transition-all group-hover:opacity-80"></div>
            </div>
            <div className="group relative h-[20%] w-full rounded-t bg-slate-100">
              <div className="bg-primary-container absolute bottom-0 left-0 h-[92%] w-full rounded-t transition-all group-hover:opacity-80"></div>
            </div>
            <div className="group relative h-[40%] w-full rounded-t bg-slate-100">
              <div className="bg-primary-container absolute bottom-0 left-0 h-[88%] w-full rounded-t transition-all group-hover:opacity-80"></div>
            </div>
            <div className="group relative h-[60%] w-full rounded-t bg-slate-100">
              <div className="bg-primary-container absolute bottom-0 left-0 h-[85%] w-full rounded-t transition-all group-hover:opacity-80"></div>
            </div>
            <div className="group relative h-[80%] w-full rounded-t bg-slate-100">
              <div className="bg-primary-container absolute bottom-0 left-0 h-[82%] w-full rounded-t transition-all group-hover:opacity-80"></div>
            </div>
            <div className="group relative h-[95%] w-full rounded-t bg-slate-100">
              <div className="bg-primary-container absolute bottom-0 left-0 h-[78%] w-full rounded-t transition-all group-hover:opacity-80"></div>
            </div>
          </div>
          <div className="mt-stack-sm font-label-caps text-outline flex justify-between text-[12px] font-semibold tracking-[0.05em]">
            <span>1 - Specificity</span>
            <span>Sensitivity</span>
          </div>
        </div>

        {/* Confusion Matrix */}
        <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <p className="font-h3 mb-stack-lg text-[24px] font-semibold">Confusion Matrix</p>
          <div className="grid aspect-square grid-cols-2 gap-2">
            <div className="bg-primary flex flex-col items-center justify-center rounded text-white">
              <span className="text-[12px] opacity-80">TP</span>
              <span className="font-bold">14,203</span>
            </div>
            <div className="bg-surface-container flex flex-col items-center justify-center rounded">
              <span className="text-[12px] opacity-60">FP</span>
              <span className="font-bold">21</span>
            </div>
            <div className="bg-surface-container flex flex-col items-center justify-center rounded">
              <span className="text-[12px] opacity-60">FN</span>
              <span className="font-bold">48</span>
            </div>
            <div className="bg-primary-fixed-dim text-on-primary-fixed flex flex-col items-center justify-center rounded">
              <span className="text-[12px] opacity-80">TN</span>
              <span className="font-bold">8,932</span>
            </div>
          </div>
        </div>

        {/* Precision-Recall */}
        <div className="bg-surface-container-lowest p-stack-lg flex flex-col justify-between rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <div>
            <p className="font-h3 mb-stack-sm text-[24px] font-semibold">Precision-Recall</p>
            <p className="font-body-sm text-on-surface-variant text-[14px]">
              Optimal threshold at 0.852 for maximum sensitivity.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-[12px]">
                <span>Precision</span>
                <span>99.2%</span>
              </div>
              <div className="bg-surface-container h-2 overflow-hidden rounded-full">
                <div className="bg-secondary-container h-full w-[99.2%]"></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-[12px]">
                <span>Recall</span>
                <span>98.7%</span>
              </div>
              <div className="bg-surface-container h-2 overflow-hidden rounded-full">
                <div className="bg-secondary-container h-full w-[98.7%]"></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-[12px]">
                <span>F1-Score</span>
                <span>98.9%</span>
              </div>
              <div className="bg-surface-container h-2 overflow-hidden rounded-full">
                <div className="bg-secondary-container h-full w-[98.9%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Version History Table */}
      <section className="bg-surface-container-lowest mb-stack-xl overflow-hidden rounded-xl border border-slate-100 shadow-sm">
        <div className="p-stack-lg flex items-center justify-between border-b border-slate-100">
          <h2 className="font-h2 text-on-surface text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
            Engine Version History
          </h2>
          <button className="text-primary text-[14px] font-semibold hover:underline">
            Download Audit Logs
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="font-body-sm w-full text-left text-[14px]">
            <thead>
              <tr className="bg-surface-container-low text-outline font-label-caps text-[12px] font-semibold tracking-[0.05em]">
                <th className="px-6 py-4">Version</th>
                <th className="px-6 py-4">Release Date</th>
                <th className="px-6 py-4">Key Improvements</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="transition-colors hover:bg-sky-50/30">
                <td className="px-6 py-4 font-semibold">v4.2.0 (Stable)</td>
                <td className="px-6 py-4">Oct 12, 2025</td>
                <td className="text-on-surface-variant px-6 py-4">
                  Enhanced feature fusion for MRI sequences; 5% reduction in latency.
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-md bg-emerald-100 px-2 py-1 text-[11px] font-bold text-emerald-700">
                    PRODUCTION
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-surface-tint font-bold">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-sky-50/30">
                <td className="px-6 py-4 font-semibold">v4.1.5</td>
                <td className="px-6 py-4">Aug 20, 2025</td>
                <td className="text-on-surface-variant px-6 py-4">
                  Support for Whole Slide Imaging (WSI) tiles up to 1GB.
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-500">
                    DEPRECATED
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-surface-tint font-bold">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-sky-50/30">
                <td className="px-6 py-4 font-semibold">v4.0.0</td>
                <td className="px-6 py-4">May 15, 2025</td>
                <td className="text-on-surface-variant px-6 py-4">
                  Major architecture shift to Vision Transformers (ViT).
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-500">
                    ARCHIVED
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-surface-tint font-bold">
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
