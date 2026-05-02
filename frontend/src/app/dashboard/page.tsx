// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';
import { fetchPredictionSummary } from '@/src/lib/api';

export default async function DiagnosticsPortal() {
  const stats = await fetchPredictionSummary();

  const totalCases = stats?.total_predictions || 1284;
  const requiresReview = stats?.malignant_cases || 8;
  const analyzed = stats?.benign_cases || 1234;
  const avgConfidence = stats?.average_confidence
    ? (stats.average_confidence * 100).toFixed(1)
    : '99.8';
  return (
    <div className="px-margin-desktop py-stack-xl mx-auto w-full max-w-screen-2xl">
      {/* Header Section */}
      <div className="mb-stack-xl gap-gutter flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <h1 className="font-h1 text-on-background mb-stack-xs text-[40px] leading-[1.2] font-bold tracking-[-0.02em]">
            Diagnostics Portal
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl text-[18px] leading-[1.6]">
            Manage and review active patient cases. High-precision AI-assisted analysis for clinical
            breast cancer diagnostics.
          </p>
        </div>
        <div className="gap-stack-md mt-4 flex md:mt-0">
          <button className="bg-primary text-on-primary flex items-center gap-2 rounded-lg px-6 py-2.5 font-semibold shadow-sm transition-all hover:brightness-110 active:scale-95">
            <span className="material-symbols-outlined">add_circle</span>
            New Case
          </button>
          <button className="border-outline-variant text-on-surface hover:bg-surface-container-low flex items-center gap-2 rounded-lg border bg-white px-6 py-2.5 font-semibold transition-all active:scale-95">
            <span className="material-symbols-outlined">filter_list</span>
            Filter
          </button>
        </div>
      </div>

      {/* Bento Grid Stats */}
      <div className="gap-gutter mb-stack-xl grid grid-cols-1 md:grid-cols-4">
        <div className="p-stack-lg rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <div className="mb-stack-md flex items-center justify-between">
            <span className="material-symbols-outlined text-primary bg-primary-fixed rounded-lg p-2">
              clinical_notes
            </span>
            <span className="font-label-caps text-on-surface-variant text-[12px] font-semibold tracking-[0.05em]">
              TOTAL CASES
            </span>
          </div>
          <div className="font-h2 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
            {totalCases.toLocaleString()}
          </div>
          <div className="font-body-sm text-primary mt-2 text-[14px]">↑ 12% this month</div>
        </div>

        <div className="p-stack-lg rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <div className="mb-stack-md flex items-center justify-between">
            <span className="material-symbols-outlined text-secondary bg-secondary-fixed rounded-lg p-2">
              pending_actions
            </span>
            <span className="font-label-caps text-on-surface-variant text-[12px] font-semibold tracking-[0.05em]">
              PENDING
            </span>
          </div>
          <div className="font-h2 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
            42
          </div>
          <div className="font-body-sm text-secondary mt-2 text-[14px]">Avg. wait: 14 mins</div>
        </div>

        <div className="p-stack-lg rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <div className="mb-stack-md flex items-center justify-between">
            <span className="material-symbols-outlined text-error bg-error-container rounded-lg p-2">
              emergency_home
            </span>
            <span className="font-label-caps text-on-surface-variant text-[12px] font-semibold tracking-[0.05em]">
              REQUIRES REVIEW
            </span>
          </div>
          <div className="font-h2 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
            {requiresReview.toString().padStart(2, '0')}
          </div>
          <div className="font-body-sm text-error mt-2 text-[14px]">Immediate action required</div>
        </div>

        <div className="p-stack-lg rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
          <div className="mb-stack-md flex items-center justify-between">
            <span className="material-symbols-outlined text-primary-container bg-primary-fixed rounded-lg p-2">
              check_circle
            </span>
            <span className="font-label-caps text-on-surface-variant text-[12px] font-semibold tracking-[0.05em]">
              ANALYZED
            </span>
          </div>
          <div className="font-h2 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
            {analyzed.toLocaleString()}
          </div>
          <div className="font-body-sm text-primary-container mt-2 text-[14px]">
            {avgConfidence}% AI Confidence
          </div>
        </div>
      </div>

      {/* Main Content Table Card */}
      <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
        <div className="px-gutter py-stack-md bg-surface-bright flex flex-col items-start justify-between gap-4 border-b border-slate-100 sm:flex-row sm:items-center">
          <div className="gap-gutter flex flex-wrap items-center">
            <h3 className="font-h3 text-on-background text-[24px] font-semibold">
              Active Case Queue
            </h3>
            <div className="flex gap-2">
              <span className="bg-primary text-on-primary font-label-caps rounded-full px-3 py-1 text-[12px] font-semibold tracking-wider">
                All Cases
              </span>
              <span className="bg-surface-container text-on-surface-variant font-label-caps hover:bg-surface-variant cursor-pointer rounded-full px-3 py-1 text-[12px] font-semibold tracking-wider transition-colors">
                Critical
              </span>
            </div>
          </div>
          <div className="gap-stack-md flex items-center">
            <div className="font-body-sm text-on-surface-variant text-[14px]">
              Showing 1-10 of 1,284
            </div>
            <div className="flex gap-1">
              <button className="hover:bg-surface-container flex items-center rounded p-1 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="hover:bg-surface-container flex items-center rounded p-1 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-caps text-[12px] font-semibold uppercase">
                <th className="px-gutter py-4 tracking-wider">Patient ID & Imaging</th>
                <th className="px-gutter py-4 tracking-wider">Date Submitted</th>
                <th className="px-gutter py-4 tracking-wider">Diagnostic Status</th>
                <th className="px-gutter py-4 tracking-wider">AI Confidence</th>
                <th className="px-gutter py-4 text-right tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="group transition-colors hover:bg-sky-50/30">
                <td className="px-gutter py-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Imaging"
                      className="h-10 w-16 rounded border border-slate-200 object-cover"
                      src="/images/mammogram_thumbnail.png"
                    />
                    <div>
                      <div className="text-on-background font-semibold">PX-99283</div>
                      <div className="font-body-sm text-on-surface-variant text-[14px]">
                        L. Mammography - CC View
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-gutter py-4">
                  <div className="text-on-background">Oct 24, 2023</div>
                  <div className="font-body-sm text-on-surface-variant text-[14px]">09:45 AM</div>
                </td>
                <td className="px-gutter py-4">
                  <span className="bg-error-container text-on-error-container inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold">
                    <span className="bg-error mr-2 h-1.5 w-1.5 rounded-full"></span>Requires Review
                  </span>
                </td>
                <td className="px-gutter py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-100">
                      <div className="bg-error h-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-on-background font-semibold">92%</span>
                  </div>
                </td>
                <td className="px-gutter py-4 text-right">
                  <button className="text-primary hover:bg-primary-fixed rounded-lg p-2 transition-all active:scale-90">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-600 active:scale-90">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-gutter bg-surface-bright border-t border-slate-100">
          <div className="ai-gradient-border p-stack-lg relative flex flex-col items-center gap-6 overflow-hidden text-center shadow-sm sm:flex-row sm:items-start sm:text-left">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/neural_network_bg.png"
                className="h-full w-full object-cover opacity-10"
                alt="Neural Background"
              />
            </div>
            <div className="relative z-10 mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-black shadow-sm sm:mx-0">
              <img
                src="/images/mammogram.png"
                className="h-full w-full object-cover mix-blend-screen"
                alt="Insight Mammogram"
              />
            </div>
            <div className="relative z-10 flex-1">
              <h4 className="text-on-background mb-1 flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-primary">smart_toy</span>
                OncoShield AI Insight
              </h4>
              <p className="font-body-sm text-on-surface-variant text-[14px]">
                The current pending queue is 15% lower than typical Monday volumes. Case PX-99283
                shows highly correlated features with historical Class-IV cases; prioritizing review
                is recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
