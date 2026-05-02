// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';

export default function DocumentationPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl">
      {/* Sidebar Navigation */}
      <aside className="sidebar-scroll sticky top-[65px] hidden h-[calc(100vh-65px)] w-72 overflow-y-auto border-r border-slate-100 bg-white md:block">
        <nav className="space-y-8 p-6">
          <div>
            <h4 className="font-label-caps text-outline mb-4 px-2 text-[12px] font-semibold tracking-[0.05em] tracking-widest uppercase">
              Introduction
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  className="text-primary bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 font-semibold transition-colors"
                  href="#getting-started"
                >
                  <span className="material-symbols-outlined text-xl">rocket_launch</span> Getting Started
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#system-architecture"
                >
                  <span className="material-symbols-outlined text-xl">auto_awesome</span> System Overview
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#model-accuracy"
                >
                  <span className="material-symbols-outlined text-xl">verified_user</span> Clinical Accuracy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-outline mb-4 px-2 text-[12px] font-semibold tracking-[0.05em] tracking-widest uppercase">
              Integration
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#api-integration"
                >
                  <span className="material-symbols-outlined text-xl">api</span> API Reference
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#webhooks"
                >
                  <span className="material-symbols-outlined text-xl">webhook</span> Webhooks
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#sdks"
                >
                  <span className="material-symbols-outlined text-xl">data_object</span> SDKs & Libraries
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-outline mb-4 px-2 text-[12px] font-semibold tracking-[0.05em] tracking-widest uppercase">
              Compliance
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#data-privacy"
                >
                  <span className="material-symbols-outlined text-xl">lock</span> Data Privacy
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#regulatory-standards"
                >
                  <span className="material-symbols-outlined text-xl">gavel</span> Regulatory Standards
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                  href="#hipaa"
                >
                  <span className="material-symbols-outlined text-xl">security</span> HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-primary-fixed/30 border-primary-fixed mt-12 flex flex-col gap-3 rounded-xl border p-4">
            <p className="font-body-sm text-on-primary-fixed-variant text-[14px] font-semibold">
              Need clinical support?
            </p>
            <p className="text-on-surface-variant text-[12px] leading-relaxed">
              Our diagnostic specialists are available 24/7 for technical consultation.
            </p>
            <button className="bg-primary font-body-sm hover:bg-primary-container rounded-lg px-4 py-2 text-[14px] font-semibold text-white transition-all">
              Contact Support
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <div className="max-w-4xl flex-1 px-8 py-12 md:px-16 md:py-16">
        <header id="getting-started" className="mb-12 scroll-mt-24">
          <div className="text-primary font-body-sm mb-4 flex items-center gap-2 text-[14px] font-semibold">
            <span>Documentation</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-surface-variant">Introduction</span>
          </div>
          <h1 className="font-h1 text-on-background mb-6 text-[40px] leading-[1.2] font-bold tracking-[-0.02em]">
            Getting Started with OncoShield AI
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl text-[18px] leading-relaxed">
            Integrate industry-leading oncology diagnostic intelligence into your clinical workflow.
            Our Artificial Neural Network (ANN) models provide real-time malignant detection with 99.8% precision, designed specifically to assist oncologists in making rapid, evidence-based decisions. 
          </p>
          <p className="font-body-md text-on-surface-variant mt-4 max-w-2xl text-[16px] leading-relaxed">
            Whether you are integrating our system into an existing EHR (Electronic Health Record) software or building a standalone diagnostic portal, this documentation covers everything from basic system architecture to advanced webhook implementations.
          </p>
        </header>

        <div className="space-y-20">
          
          {/* System Architecture */}
          <section id="system-architecture" className="scroll-mt-24">
            <h2 className="font-h2 text-on-background mb-6 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
              System Overview
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              The OncoShield AI engine utilizes a multi-layered diagnostic pipeline. The process ensures that raw medical imagery is properly cleaned and standardized before passing through the deep learning classification model.
            </p>
            <div className="group border-slate-100 relative aspect-[3.35] w-full overflow-hidden rounded-2xl border shadow-sm mb-8">
              <img
                alt="System Architecture Diagram"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/medical_abstract_bg.png"
              />
              <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-white/90 to-transparent p-8">
                <span className="text-primary font-label-caps mb-2 text-[12px] font-bold tracking-[0.05em]">
                  SYSTEM FLOW
                </span>
                <h3 className="font-h3 text-on-background text-[24px] font-semibold">
                  End-to-End Diagnostic Pipeline
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4 font-bold">1</div>
                <h4 className="font-bold text-slate-800 mb-2">Pre-processing</h4>
                <p className="text-sm text-slate-500">DICOM/SVS images are normalized, artifacts removed, and regions of interest (ROI) are dynamically cropped to ensure zero interference from external noise.</p>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4 font-bold">2</div>
                <h4 className="font-bold text-slate-800 mb-2">Feature Extraction</h4>
                <p className="text-sm text-slate-500">Morphological parameters (Radius, Texture, Perimeter, Area, Smoothness) are extracted automatically using the core Convolutional layers.</p>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4 font-bold">3</div>
                <h4 className="font-bold text-slate-800 mb-2">Classification</h4>
                <p className="text-sm text-slate-500">The ANN outputs a probability distribution across Benign/Malignant classes with a confidence threshold, attaching clinical protocol recommendations.</p>
              </div>
            </div>
          </section>

          {/* Model Accuracy */}
          <section id="model-accuracy" className="scroll-mt-24">
            <h2 className="font-h2 text-on-background mb-6 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
              Validated Clinical Accuracy
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Our model has been rigorously validated against historical datasets containing over 50,000 anonymized breast cancer screening cases. The precision matrix below illustrates the latest Q3 2025 Retrospective Study findings.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)] md:col-span-2">
                <div className="mb-6 flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      analytics
                    </span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-[18px] font-bold">Model Precision Matrix</h4>
                    <p className="font-body-sm text-outline text-[14px]">
                      Q3 2025 Retrospective Study
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-body-sm flex items-center justify-between text-[14px] font-semibold">
                    <span>Sensitivity (Recall)</span>
                    <span className="text-primary">99.8%</span>
                  </div>
                  <div className="bg-surface-container-low h-2 w-full overflow-hidden rounded-full">
                    <div className="bg-primary h-full w-[99.8%]"></div>
                  </div>
                  <div className="font-body-sm flex items-center justify-between text-[14px] font-semibold">
                    <span>Specificity</span>
                    <span className="text-primary">98.2%</span>
                  </div>
                  <div className="bg-surface-container-low h-2 w-full overflow-hidden rounded-full">
                    <div className="bg-primary h-full w-[98.2%]"></div>
                  </div>
                </div>
              </div>

              <div className="ai-insight-panel flex flex-col justify-between rounded-xl border border-transparent p-6 [background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(to_right,#006194,#545c72)_border-box]">
                <div>
                  <span className="material-symbols-outlined text-primary mb-2">auto_awesome</span>
                  <h4 className="font-body-md mb-2 text-[16px] font-bold">AI Philosophy</h4>
                  <p className="font-body-sm text-on-surface-variant text-[14px] leading-relaxed">
                    We employ a &quot;Human-in-the-Loop&quot; architecture, ensuring AI findings are always presented as second opinions for clinical confirmation. AI should assist, not replace, medical experts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* API Integration */}
          <section id="api-integration" className="scroll-mt-24">
            <h2 className="font-h2 text-on-background mb-6 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
              API Reference
            </h2>
            <p className="font-body-md text-on-surface-variant mb-6 text-[16px]">
              Use our RESTful API to submit pathology slides and receive immediate diagnostic analysis. The API supports batch processing and asynchronous inference for high-volume hospitals.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Python Request */}
              <div className="group relative">
                <div className="absolute top-0 left-0 bg-slate-700 text-xs text-slate-300 px-3 py-1 rounded-br-lg rounded-tl-lg font-mono">Python SDK</div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="rounded bg-slate-700/50 p-1.5 text-white transition-colors hover:bg-slate-700">
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                </div>
                <pre className="font-code overflow-x-auto rounded-lg bg-[#0d1117] p-6 pt-10 text-[13px] leading-relaxed text-slate-200">
                  <code>
                    <span className="text-pink-400">import</span> oncoshield_ai<br/><br/>
                    <span className="text-slate-500"># Initialize the clinical client</span><br/>
                    client = oncoshield_ai.Client(api_key=<span className="text-emerald-400">"YOUR_KEY"</span>)<br/><br/>
                    <span className="text-slate-500"># Submit biopsy scan</span><br/>
                    analysis = client.diagnostics.analyze(<br/>
                    &nbsp;&nbsp;source_path=<span className="text-emerald-400">"./slide_001.svs"</span>,<br/>
                    &nbsp;&nbsp;modality=<span className="text-emerald-400">"histopathology"</span>,<br/>
                    &nbsp;&nbsp;priority=<span className="text-emerald-400">"stat"</span><br/>
                    )<br/><br/>
                    <span className="text-sky-400">print</span>(analysis.confidence_score)
                  </code>
                </pre>
              </div>

              {/* JSON Response */}
              <div className="group relative">
                <div className="absolute top-0 left-0 bg-slate-700 text-xs text-slate-300 px-3 py-1 rounded-br-lg rounded-tl-lg font-mono">JSON Response</div>
                <pre className="font-code overflow-x-auto rounded-lg bg-[#0d1117] p-6 pt-10 text-[13px] leading-relaxed text-slate-200">
                  <code>
                    <span className="text-slate-300">{'{'}</span><br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"id"</span>: <span className="text-emerald-400">"diag_982hjs82"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"status"</span>: <span className="text-emerald-400">"completed"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"result"</span>: {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">"classification"</span>: <span className="text-emerald-400">"MALIGNANT"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">"confidence_score"</span>: <span className="text-orange-400">0.954</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">"roi_coordinates"</span>: [<span className="text-orange-400">120</span>, <span className="text-orange-400">450</span>, <span className="text-orange-400">80</span>, <span className="text-orange-400">80</span>]<br/>
                    &nbsp;&nbsp;{'}'},<br/>
                    &nbsp;&nbsp;<span className="text-sky-300">"clinical_protocol"</span>: [<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Requires biopsy"</span>,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"MTB Review"</span><br/>
                    &nbsp;&nbsp;]<br/>
                    <span className="text-slate-300">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* Webhooks */}
          <section id="webhooks" className="scroll-mt-24">
            <h2 className="font-h2 text-on-background mb-4 text-[28px] leading-[1.3] font-semibold tracking-[-0.01em]">
              Webhooks
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Configure webhooks to receive real-time HTTP POST notifications when a diagnostic analysis is complete. This avoids the necessity of active polling of our API, reducing server load on your end.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-700">
                    <th className="pb-3 font-semibold">Event Name</th>
                    <th className="pb-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-4 font-mono text-sky-600">analysis.completed</td>
                    <td className="py-4 text-slate-500">Triggered when the AI successfully processes a case and classification is ready.</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-mono text-sky-600">analysis.failed</td>
                    <td className="py-4 text-slate-500">Triggered if image quality is too low for inference or metadata is missing.</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-mono text-sky-600">model.retrained</td>
                    <td className="py-4 text-slate-500">Triggered when a new model weight snapshot is deployed to production.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SDKs & Libraries */}
          <section id="sdks" className="scroll-mt-24">
            <h2 className="font-h2 text-on-background mb-4 text-[28px] leading-[1.3] font-semibold tracking-[-0.01em]">
              SDKs & Libraries
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              We provide officially supported SDKs for Node.js and Python to speed up your integration process. These libraries handle automatic retries, authentication formatting, and payload compression out of the box.
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-slate-900 text-white rounded-lg p-4 flex items-center justify-between">
                <code className="font-mono text-sm"><span className="text-sky-400">npm</span> install @oncoshield/node-sdk</code>
                <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-white transition-colors">content_copy</span>
              </div>
              <div className="bg-slate-900 text-white rounded-lg p-4 flex items-center justify-between">
                <code className="font-mono text-sm"><span className="text-sky-400">pip</span> install oncoshield-ai</code>
                <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-white transition-colors">content_copy</span>
              </div>
            </div>
          </section>

          {/* Compliance & Security Sections */}
          <section id="data-privacy" className="scroll-mt-24 border-t border-slate-100 pt-16">
            <h2 className="font-h2 text-on-background mb-6 text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
              Data Privacy
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Patient data security is our highest priority. All PHI (Protected Health Information) is automatically de-identified before entering our inference engine. Raw scans are kept entirely within memory during inference and are permanently purged upon response generation, ensuring zero data retention.
            </p>
            <div className="bg-surface-dim/20 border-surface-variant rounded-2xl border p-8 mt-8">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex-1">
                  <h3 className="font-h3 text-on-background mb-4 text-[24px] font-semibold">
                    End-to-End Encryption
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-6 text-[16px]">
                    All transit traffic is secured via TLS 1.3. At rest (during the brief inference window), data is shielded using AES-256 encryption. We utilize strictly isolated virtual private clouds (VPCs) to ensure cross-tenant data boundaries.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="border-outline-variant text-outline flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-[12px] font-bold uppercase shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-green-600">verified</span> TLS 1.3
                    </div>
                    <div className="border-outline-variant text-outline flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-[12px] font-bold uppercase shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-green-600">verified</span> AES-256
                    </div>
                  </div>
                </div>
                <div className="flex h-32 w-32 items-center justify-center bg-blue-50 rounded-full border border-blue-100">
                  <span className="material-symbols-outlined text-primary text-5xl">shield_person</span>
                </div>
              </div>
            </div>
          </section>

          <section id="regulatory-standards" className="scroll-mt-24">
            <h2 className="font-h2 text-on-background mb-4 text-[28px] leading-[1.3] font-semibold tracking-[-0.01em]">
              Regulatory Standards
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              OncoShield AI adheres strictly to international regulatory frameworks. Our clinical validation studies have been submitted to the FDA under the Software as a Medical Device (SaMD) categorization framework. Furthermore, our infrastructure is independently audited annually to maintain our <strong>ISO 27001</strong> certification for information security management.
            </p>
          </section>

          <section id="hipaa" className="scroll-mt-24">
            <h2 className="font-h2 text-on-background mb-4 text-[28px] leading-[1.3] font-semibold tracking-[-0.01em]">
              HIPAA Compliance
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              For institutions operating within the United States, OncoShield AI operates as a compliant Business Associate. We provide comprehensive Business Associate Agreements (BAAs) upon enterprise onboarding. Our architecture is designed from the ground up with strict Access Controls, Audit Controls, and Integrity mechanisms matching the strict guidelines of the HIPAA Security Rule.
            </p>
          </section>

          {/* Pagination Buttons */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-12 mt-16">
            <a className="group flex items-center gap-3" href="#webhooks">
              <div className="border-outline-variant group-hover:bg-surface-container-low flex h-10 w-10 items-center justify-center rounded-full border transition-colors">
                <span className="material-symbols-outlined text-slate-500 group-hover:text-sky-600">arrow_back</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-outline text-[12px] font-semibold tracking-[0.05em] uppercase">
                  Previous
                </span>
                <span className="text-on-surface font-bold text-slate-700">Integration</span>
              </div>
            </a>
            <a className="group flex items-center gap-3 text-right" href="#">
              <div className="flex flex-col">
                <span className="font-label-caps text-outline text-[12px] font-semibold tracking-[0.05em] uppercase">
                  Next
                </span>
                <span className="text-on-surface font-bold text-slate-700">Contact Support</span>
              </div>
              <div className="border-outline-variant group-hover:bg-surface-container-low flex h-10 w-10 items-center justify-center rounded-full border transition-colors">
                <span className="material-symbols-outlined text-slate-500 group-hover:text-sky-600">arrow_forward</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Table of Contents (Right Sticky) */}
      <aside className="sticky top-[65px] hidden h-[calc(100vh-65px)] w-64 py-16 pr-8 xl:block">
        <h4 className="font-label-caps text-outline mb-6 text-[12px] font-bold tracking-widest text-slate-400 uppercase">
          On this page
        </h4>
        <ul className="space-y-4 border-l border-slate-100 pl-4">
          <li className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-2 -ml-4 pl-4">Introduction</li>
          <li><a className="font-body-sm text-primary border-primary -ml-[18px] block border-l-2 pl-4 text-[14px] font-semibold" href="#getting-started">Getting Started</a></li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#system-architecture">System Overview</a></li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#model-accuracy">Clinical Accuracy</a></li>
          
          <li className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-8 mb-2 -ml-4 pl-4">Integration</li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#api-integration">API Reference</a></li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#webhooks">Webhooks</a></li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#sdks">SDKs & Libraries</a></li>

          <li className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-8 mb-2 -ml-4 pl-4">Compliance</li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#data-privacy">Data Privacy</a></li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#regulatory-standards">Regulatory Standards</a></li>
          <li><a className="font-body-sm text-slate-500 hover:text-sky-600 block text-[14px] transition-colors" href="#hipaa">HIPAA Compliance</a></li>
        </ul>
      </aside>
    </div>
  );
}
