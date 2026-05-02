// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';

export default function ClinicalGuidelinesPage() {
  return (
    <div className="py-stack-xl mx-auto w-full max-w-screen-2xl px-6">
      {/* Hero Section */}
      <section className="mb-stack-xl relative flex h-[320px] items-end overflow-hidden rounded-xl bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover opacity-20"
            src="/images/medical_abstract_bg.png"
            alt="Clinical Background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        <div className="p-stack-lg relative z-10 w-full max-w-3xl">
          <span className="font-label-caps mb-stack-sm inline-block rounded-full bg-sky-500 px-3 py-1 text-[10px] font-semibold tracking-[0.05em] text-white">
            INTERNAL CLINICAL RESOURCE
          </span>
          <h1 className="font-h1 mb-stack-sm text-[40px] leading-[1.2] font-bold tracking-[-0.02em] text-white">
            Clinical Guidelines for Oncology
          </h1>
          <p className="font-body-lg text-[18px] leading-[1.6] text-white/90">
            Standardized diagnostic protocols and classification standards for radiological
            assessment and patient management.
          </p>
        </div>
      </section>

      <div className="gap-gutter grid grid-cols-1 lg:grid-cols-12">
        {/* Navigation Sidebar (Sticky) */}
        <aside className="space-y-stack-md lg:col-span-3">
          <nav className="sticky top-24 space-y-2">
            <h4 className="font-label-caps text-outline mb-2 px-4 text-[12px] font-semibold tracking-[0.05em]">
              QUICK NAVIGATION
            </h4>
            <a
              className="text-primary clinical-card border-primary flex items-center gap-3 rounded-lg border-l-4 bg-white px-4 py-3 font-semibold shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]"
              href="#diagnostic-protocols"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                biotech
              </span>
              Diagnostic Protocols
            </a>
            <a
              className="hover:text-primary flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 transition-all hover:bg-white"
              href="#bi-rads"
            >
              <span className="material-symbols-outlined">grid_view</span>
              BI-RADS Standards
            </a>
            <a
              className="hover:text-primary flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 transition-all hover:bg-white"
              href="#follow-up"
            >
              <span className="material-symbols-outlined">event_repeat</span>
              Follow-up Schedule
            </a>
            <a
              className="hover:text-primary flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 transition-all hover:bg-white"
              href="#ai-validation"
            >
              <span className="material-symbols-outlined">psychology</span>
              AI Validation
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="space-y-stack-xl lg:col-span-9">
          {/* Section: Diagnostic Protocols */}
          <section className="scroll-mt-24" id="diagnostic-protocols">
            <div className="mb-stack-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px]">
                clinical_notes
              </span>
              <h2 className="font-h2 text-on-surface text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
                Diagnostic Protocols
              </h2>
            </div>
            <div className="gap-gutter grid grid-cols-1 md:grid-cols-2">
              <div className="p-stack-lg clinical-card rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
                <h3 className="font-h3 mb-stack-md text-primary text-[24px] font-semibold">
                  Initial Screening
                </h3>
                <ul className="space-y-stack-sm font-body-md text-on-surface-variant text-[16px]">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined mt-1 text-[20px] text-sky-500">
                      check_circle
                    </span>{' '}
                    Bilateral Mammography (Digital Breast Tomosynthesis)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined mt-1 text-[20px] text-sky-500">
                      check_circle
                    </span>{' '}
                    Clinical Breast Examination (CBE)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined mt-1 text-[20px] text-sky-500">
                      check_circle
                    </span>{' '}
                    Patient History & Genetic Risk Assessment
                  </li>
                </ul>
              </div>
              <div className="p-stack-lg clinical-card rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
                <h3 className="font-h3 mb-stack-md text-primary text-[24px] font-semibold">
                  Diagnostic Work-up
                </h3>
                <ul className="space-y-stack-sm font-body-md text-on-surface-variant text-[16px]">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined mt-1 text-[20px] text-sky-500">
                      check_circle
                    </span>{' '}
                    Targeted Ultrasound (Hand-held or ABUS)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined mt-1 text-[20px] text-sky-500">
                      check_circle
                    </span>{' '}
                    Diagnostic Mammography (Spot Compression)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined mt-1 text-[20px] text-sky-500">
                      check_circle
                    </span>{' '}
                    Contrast-Enhanced Mammography (CEM) if indicated
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: BI-RADS Standards */}
          <section className="scroll-mt-24" id="bi-rads">
            <div className="mb-stack-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[32px]">rule</span>
              <h2 className="font-h2 text-on-surface text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
                Classification Standards (BI-RADS)
              </h2>
            </div>
            <div className="clinical-card overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-slate-200">
                    <th className="font-label-caps text-outline px-6 py-4 text-[12px] font-semibold tracking-[0.05em]">
                      CATEGORY
                    </th>
                    <th className="font-label-caps text-outline px-6 py-4 text-[12px] font-semibold tracking-[0.05em]">
                      ASSESSMENT
                    </th>
                    <th className="font-label-caps text-outline px-6 py-4 text-[12px] font-semibold tracking-[0.05em]">
                      LIKELIHOOD
                    </th>
                    <th className="font-label-caps text-outline px-6 py-4 text-[12px] font-semibold tracking-[0.05em]">
                      MANAGEMENT
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-on-surface-variant text-[14px]">
                  <tr className="border-b border-slate-100 transition-colors hover:bg-sky-50/30">
                    <td className="px-6 py-4">
                      <span className="rounded bg-slate-100 px-2 py-1 font-bold text-slate-700">
                        0
                      </span>
                    </td>
                    <td className="text-on-surface px-6 py-4 font-medium">Incomplete</td>
                    <td className="px-6 py-4">N/A</td>
                    <td className="px-6 py-4">Additional Imaging Required</td>
                  </tr>
                  <tr className="border-b border-slate-100 transition-colors hover:bg-sky-50/30">
                    <td className="px-6 py-4">
                      <span className="rounded bg-red-100 px-2 py-1 font-bold text-red-700">5</span>
                    </td>
                    <td className="text-on-surface px-6 py-4 font-medium">Highly Suggestive</td>
                    <td className="px-6 py-4">&ge;95%</td>
                    <td className="px-6 py-4">Surgical Management</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* AI Insight Panel */}
          <section
            className="ai-insight-border p-stack-lg mt-stack-xl scroll-mt-24 rounded-xl border border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#006591,#006194)_border-box]"
            id="ai-validation"
          >
            <div className="mb-stack-md flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <h3 className="font-h3 text-primary text-[24px] font-semibold">
                OncoShield AI Optimization
              </h3>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6 text-[16px]">
              Our AI engine augments these guidelines by providing real-time probability scores
              alongside BI-RADS assessments, reducing inter-observer variability among clinical
              staff.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-surface-bright min-w-[200px] flex-1 rounded-lg border border-slate-200 px-4 py-3">
                <span className="font-body-sm text-primary mb-1 block text-[14px] font-semibold">
                  Detection Sensitivity
                </span>
                <span className="font-h2 text-on-surface text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
                  98.2%
                </span>
              </div>
              <div className="bg-surface-bright min-w-[200px] flex-1 rounded-lg border border-slate-200 px-4 py-3">
                <span className="font-body-sm text-primary mb-1 block text-[14px] font-semibold">
                  False Positive Reduction
                </span>
                <span className="font-h2 text-on-surface text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
                  34%
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
