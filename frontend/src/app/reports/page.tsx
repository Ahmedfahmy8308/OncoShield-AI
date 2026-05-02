// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';

export default function ReportsPage() {
  return (
    <div className="py-stack-xl mx-auto w-full max-w-screen-2xl px-6">
      <header className="gap-gutter mb-stack-xl flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <h1 className="font-h1 text-on-surface mb-stack-xs text-[40px] leading-[1.2] font-bold tracking-[-0.02em]">
            Clinical Reports
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl text-[18px] leading-[1.6]">
            Generate, monitor, and export high-precision diagnostic summaries and longitudinal
            clinical trends powered by AI insights.
          </p>
        </div>
        <div className="gap-stack-md mt-4 flex md:mt-0">
          <button className="px-stack-lg border-outline text-on-surface hover:bg-surface-container-low flex items-center gap-2 rounded-lg border bg-white py-3 font-semibold transition-all active:scale-95">
            <span className="material-symbols-outlined">filter_list</span>
            Filter
          </button>
          <button className="px-stack-lg bg-primary text-on-primary flex items-center gap-2 rounded-lg py-3 font-semibold shadow-sm transition-all hover:brightness-110 active:scale-95">
            <span className="material-symbols-outlined">add</span>
            Generate New Report
          </button>
        </div>
      </header>

      <section className="gap-gutter mb-stack-xl grid grid-cols-1 md:grid-cols-12">
        <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] md:col-span-8">
          <div className="mb-stack-lg flex items-center justify-between">
            <h3 className="font-h3 text-[24px] font-semibold">Diagnostic Accuracy Trends</h3>
            <div className="gap-stack-sm font-label-caps text-outline flex text-[12px] font-semibold tracking-[0.05em]">
              <span className="flex items-center gap-1">
                <span className="bg-primary h-3 w-3 rounded-full"></span> AI Model v2.4
              </span>
              <span className="flex items-center gap-1">
                <span className="bg-secondary-container h-3 w-3 rounded-full"></span> Pathologist
                Consensus
              </span>
            </div>
          </div>
          <div className="flex h-64 items-end justify-between gap-4 px-2">
            <div className="bg-surface-container group hover:bg-primary/20 relative h-[85%] w-full rounded-t-lg transition-colors">
              <div className="bg-on-background text-on-primary absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                94%
              </div>
            </div>
            <div className="bg-surface-container group hover:bg-primary/20 relative h-[88%] w-full rounded-t-lg transition-colors">
              <div className="bg-on-background text-on-primary absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                96%
              </div>
            </div>
            <div className="bg-primary group relative h-[92%] w-full rounded-t-lg">
              <div className="bg-on-background text-on-primary absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                98%
              </div>
            </div>
            <div className="bg-surface-container group hover:bg-primary/20 relative h-[82%] w-full rounded-t-lg transition-colors">
              <div className="bg-on-background text-on-primary absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                91%
              </div>
            </div>
            <div className="bg-surface-container group hover:bg-primary/20 relative h-[90%] w-full rounded-t-lg transition-colors">
              <div className="bg-on-background text-on-primary absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                95%
              </div>
            </div>
            <div className="bg-surface-container group hover:bg-primary/20 relative h-[94%] w-full rounded-t-lg transition-colors">
              <div className="bg-on-background text-on-primary absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded px-2 py-1 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                97%
              </div>
            </div>
            <div className="bg-surface-container group hover:bg-primary/20 relative h-[89%] w-full rounded-t-lg transition-colors"></div>
          </div>
          <div className="mt-stack-md font-label-caps text-on-surface-variant flex justify-between text-[12px] font-semibold tracking-[0.05em]">
            <span>JAN</span>
            <span>FEB</span>
            <span>MAR</span>
            <span>APR</span>
            <span>MAY</span>
            <span>JUN</span>
            <span>JUL</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-stack-lg ai-insight-border overflow-hidden rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] md:col-span-4">
          <div className="text-primary mb-stack-md flex items-center gap-2 font-bold">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="font-label-caps text-[12px] font-semibold tracking-[0.05em]">
              AI INSIGHT ENGINE
            </span>
          </div>
          <p className="font-body-md text-on-surface mb-stack-lg text-[16px] leading-relaxed">
            Diagnostic consensus has increased by{' '}
            <span className="text-primary font-bold">12.4%</span> this quarter. AI-detected markers
            in lymph node biopsies are showing higher correlation with post-surgical outcomes.
          </p>
          <div className="space-y-stack-md">
            <div className="bg-surface-container-low border-outline-variant flex items-center justify-between rounded-lg border p-3">
              <span className="font-body-sm text-[14px]">Processing Speed</span>
              <span className="text-on-surface font-bold">1.2s / slide</span>
            </div>
            <div className="bg-surface-container-low border-outline-variant flex items-center justify-between rounded-lg border p-3">
              <span className="font-body-sm text-[14px]">AI Confidence Rating</span>
              <span className="text-on-surface font-bold">99.2%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest overflow-hidden rounded-xl border border-slate-100 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
        <div className="p-stack-lg flex flex-col items-center justify-between gap-4 border-b border-slate-100 md:flex-row">
          <h3 className="font-h3 self-start text-[24px] font-semibold">
            Recent Diagnostic Reports
          </h3>
          <div className="gap-stack-md flex w-full items-center md:w-auto">
            <button className="px-stack-md border-outline font-body-sm flex items-center gap-2 rounded-md border py-2 text-[14px] font-semibold hover:bg-slate-50">
              <span className="material-symbols-outlined text-[20px]">file_download</span>
              Batch Export (PDF)
            </button>
            <div className="relative flex-grow md:flex-grow-0">
              <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[20px]">
                search
              </span>
              <input
                className="border-outline font-body-sm focus:ring-primary/20 w-full rounded-md border py-2 pr-4 pl-10 text-[14px] outline-none focus:ring-2"
                placeholder="Search by Patient ID or Clinician..."
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-low font-label-caps text-outline text-[12px] font-semibold tracking-[0.05em]">
                <th className="px-stack-lg w-12 py-4">
                  <input
                    className="border-outline text-primary focus:ring-primary rounded"
                    type="checkbox"
                  />
                </th>
                <th className="px-stack-lg py-4">PREVIEW</th>
                <th className="px-stack-lg py-4">REPORT ID / PATIENT</th>
                <th className="px-stack-lg py-4">DIAGNOSIS</th>
                <th className="px-stack-lg py-4">STATUS</th>
                <th className="px-stack-lg py-4">GENERATED ON</th>
                <th className="px-stack-lg py-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="group transition-colors hover:bg-sky-50/30">
                <td className="px-stack-lg py-6">
                  <input
                    className="border-outline text-primary focus:ring-primary rounded"
                    type="checkbox"
                  />
                </td>
                <td className="px-stack-lg py-6">
                  <div className="h-10 w-16 overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm">
                    <img
                      alt="Report Banner"
                      className="h-full w-full object-cover opacity-80 mix-blend-multiply"
                      src="/images/medical_abstract_bg.png"
                    />
                  </div>
                </td>
                <td className="px-stack-lg flex flex-col py-6">
                  <span className="text-on-surface font-bold">#REP-9832-B</span>
                  <span className="font-body-sm text-on-surface-variant text-[14px]">
                    Patient: Sarah Jenkins (P-4421)
                  </span>
                </td>
                <td className="px-stack-lg py-6">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-[11px] font-bold tracking-wider text-red-700 uppercase">
                    Malignant (G2)
                  </span>
                </td>
                <td className="px-stack-lg py-6">
                  <div className="font-body-sm flex items-center gap-1.5 text-[14px] text-green-600">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span> Finalized
                  </div>
                </td>
                <td className="px-stack-lg font-body-sm text-on-surface-variant py-6 text-[14px]">
                  Aug 14, 2026
                </td>
                <td className="px-stack-lg flex items-center gap-2 py-6">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                    visibility
                  </button>
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                    download
                  </button>
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                    share
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
