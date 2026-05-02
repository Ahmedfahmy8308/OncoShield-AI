// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';

export default function PrivacySecurityPage() {
  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="relative flex h-[300px] w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover opacity-20"
            src="/images/security_bg.png"
            alt="Security Background"
          />
          <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-r to-transparent"></div>
        </div>
        <div className="px-margin-desktop relative z-10 mx-auto w-full max-w-screen-2xl">
          <div className="max-w-3xl">
            <div className="mb-stack-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <span className="font-label-caps text-primary text-[12px] font-semibold tracking-[0.05em]">
                Security & Compliance Center
              </span>
            </div>
            <h1 className="font-h1 text-on-background mb-stack-md text-[40px] leading-[1.2] font-bold tracking-[-0.02em]">
              Privacy & Data Protection
            </h1>
            <p className="font-body-lg text-on-surface-variant text-[18px] leading-[1.6]">
              OncoShield AI is built on a foundation of trust. We implement military-grade security
              protocols to ensure that patient data remains confidential and compliant with global
              healthcare standards.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="px-margin-desktop py-stack-xl mx-auto max-w-screen-2xl">
        <div className="gap-gutter grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Main Protocols */}
          <div className="space-y-gutter md:col-span-8">
            {/* HIPAA Compliance Card */}
            <div className="bg-surface-container-lowest p-stack-xl border-outline-variant/30 rounded-xl border shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
              <div className="gap-gutter flex flex-col items-start sm:flex-row">
                <div className="bg-primary-container/10 rounded-lg p-4">
                  <span className="material-symbols-outlined text-primary text-[40px]">
                    health_and_safety
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-on-background mb-stack-md text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
                    HIPAA & GDPR Compliance
                  </h2>
                  <p className="font-body-md text-on-surface-variant mb-stack-lg text-[16px] leading-relaxed">
                    Our platform strictly adheres to the Health Insurance Portability and
                    Accountability Act (HIPAA) and the General Data Protection Regulation (GDPR). We
                    employ a dedicated Data Protection Officer (DPO) to oversee our clinical data
                    handling processes.
                  </p>
                  <div className="gap-stack-md grid grid-cols-1 sm:grid-cols-2">
                    <div className="gap-stack-sm p-stack-sm bg-surface-container-low flex items-center rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-sm text-[14px]">PHI De-identification</span>
                    </div>
                    <div className="gap-stack-sm p-stack-sm bg-surface-container-low flex items-center rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-sm text-[14px]">BAA Agreements</span>
                    </div>
                    <div className="gap-stack-sm p-stack-sm bg-surface-container-low flex items-center rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-sm text-[14px]">Access Audit Logging</span>
                    </div>
                    <div className="gap-stack-sm p-stack-sm bg-surface-container-low flex items-center rounded-lg">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-sm text-[14px]">Privacy Impact Assessments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Encryption & Infrastructure */}
            <div className="gap-gutter grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-surface-container-lowest p-stack-lg border-outline-variant/30 rounded-xl border shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
                <span className="material-symbols-outlined text-primary mb-stack-sm">
                  lock_reset
                </span>
                <h3 className="font-h3 mb-stack-sm text-[24px] font-semibold">
                  End-to-End Encryption
                </h3>
                <p className="font-body-sm text-on-surface-variant text-[14px]">
                  All data is encrypted using AES-256 at rest and TLS 1.3 in transit. We ensure that
                  even in the unlikely event of a breach, patient records remain unreadable.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-stack-lg border-outline-variant/30 rounded-xl border shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
                <span className="material-symbols-outlined text-primary mb-stack-sm">
                  cloud_done
                </span>
                <h3 className="font-h3 mb-stack-sm text-[24px] font-semibold">Secure Hosting</h3>
                <p className="font-body-sm text-on-surface-variant text-[14px]">
                  OncoShield AI infrastructure is hosted on SOC2 Type II and ISO 27001 certified
                  data centers with 99.9% uptime and redundant backups.
                </p>
              </div>
            </div>

            {/* AI Privacy Insight */}
            <div className="p-stack-lg border-primary relative z-10 rounded-xl border-l-4 bg-white shadow-sm">
              <div className="absolute inset-0 z-[-1] rounded-r-xl bg-gradient-to-r from-[#006591] to-[#006194] opacity-10"></div>
              <div className="mb-stack-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology</span>
                <span className="font-label-caps text-primary text-[12px] font-semibold tracking-[0.05em]">
                  AI Ethics & Privacy
                </span>
              </div>
              <h3 className="font-h3 text-on-background mb-stack-sm text-[24px] font-semibold">
                Federated Learning & Anonymization
              </h3>
              <p className="font-body-md text-on-surface-variant text-[16px] leading-relaxed">
                Our AI models are trained using differentially private mechanisms. This ensures that
                while the system learns from clinical trends, it is mathematically impossible to
                reconstruct individual patient identities from the model weights.
              </p>
            </div>
          </div>

          {/* Right Column: Sidebar Stats & Status */}
          <div className="space-y-gutter md:col-span-4">
            {/* Status Card */}
            <div className="border-outline-variant/30 p-stack-lg rounded-xl border bg-white shadow-[0_4px_6px_-1px_rgba(2,132,199,0.05)]">
              <div className="mb-stack-lg flex items-center justify-between">
                <h3 className="font-h3 text-[24px] font-semibold">System Status</h3>
                <span className="flex h-3 w-3 animate-pulse rounded-full bg-green-500"></span>
              </div>
              <div className="space-y-stack-md">
                <div className="font-body-sm flex items-center justify-between text-[14px]">
                  <span className="text-on-surface-variant">Security Patch</span>
                  <span className="font-code text-secondary text-[13px] font-medium">
                    v2.4.1-Stable
                  </span>
                </div>
                <div className="font-body-sm flex items-center justify-between text-[14px]">
                  <span className="text-on-surface-variant">Encryption Status</span>
                  <span className="bg-secondary-fixed text-on-secondary-fixed-variant rounded px-2 py-0.5 text-[10px] font-bold">
                    ACTIVE
                  </span>
                </div>
                <div className="font-body-sm flex items-center justify-between text-[14px]">
                  <span className="text-on-surface-variant">Last Audit</span>
                  <span className="text-on-surface">Oct 12, 2025</span>
                </div>
              </div>
              <hr className="my-stack-lg border-outline-variant/20" />
              <button className="bg-primary text-on-primary py-stack-sm hover:bg-primary-container w-full rounded-lg font-bold transition-all active:scale-95">
                Download Security Whitepaper
              </button>
            </div>

            {/* Bulleted Security Measures */}
            <div className="bg-surface-container-low p-stack-lg rounded-xl">
              <h4 className="font-label-caps text-outline mb-stack-md text-[12px] font-semibold tracking-[0.05em]">
                Security Measures
              </h4>
              <ul className="space-y-stack-sm">
                <li className="gap-stack-sm flex items-start">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-sm">
                    shield
                  </span>
                  <span className="font-body-sm text-[14px]">
                    Multi-Factor Authentication (MFA) required for all staff
                  </span>
                </li>
                <li className="gap-stack-sm flex items-start">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-sm">
                    shield
                  </span>
                  <span className="font-body-sm text-[14px]">
                    Automatic session timeouts after 15 minutes
                  </span>
                </li>
                <li className="gap-stack-sm flex items-start">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-sm">
                    shield
                  </span>
                  <span className="font-body-sm text-[14px]">
                    Real-time threat detection and mitigation
                  </span>
                </li>
                <li className="gap-stack-sm flex items-start">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-sm">
                    shield
                  </span>
                  <span className="font-body-sm text-[14px]">
                    Regular penetration testing by external labs
                  </span>
                </li>
                <li className="gap-stack-sm flex items-start">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-sm">
                    shield
                  </span>
                  <span className="font-body-sm text-[14px]">
                    Physical access controls at data centers
                  </span>
                </li>
              </ul>
            </div>

            {/* Last Updated Section */}
            <div className="py-stack-md px-stack-lg border-outline-variant rounded-xl border border-dashed text-center">
              <span className="material-symbols-outlined text-outline mb-1 block">history</span>
              <p className="font-body-sm text-on-surface-variant text-[14px]">
                Policy Last Updated:
              </p>
              <p className="text-on-surface font-bold">January 14, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-surface-container-high py-stack-xl">
        <div className="px-margin-desktop mx-auto max-w-screen-2xl">
          <div className="bg-surface-container-lowest p-stack-xl gap-stack-xl border-outline-variant/20 flex flex-col items-center rounded-2xl border shadow-lg md:flex-row">
            <div className="md:w-1/3">
              <img
                alt="Ufuq Tech Assurance"
                className="mx-auto w-full max-w-[200px] opacity-80"
                src="/images/logo.png"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-h2 mb-stack-md text-[32px] leading-[1.3] font-semibold tracking-[-0.01em]">
                Ufuq Tech Assurance
              </h2>
              <p className="font-body-md text-on-surface-variant mb-stack-lg text-[16px] leading-relaxed">
                The OncoShield AI platform security architecture was co-designed and is continuously
                audited by <a href="https://ufuq-tech.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">Ufuq Tech&apos;s</a> Cyber-Health division. Our partnership ensures that the
                cutting-edge AI capabilities never compromise the fundamental right to patient
                privacy.
              </p>
              <div className="gap-stack-lg flex flex-wrap">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    policy
                  </span>
                  <span className="font-label-caps text-[12px] font-semibold tracking-[0.05em]">
                    Clinically Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    gavel
                  </span>
                  <span className="font-label-caps text-[12px] font-semibold tracking-[0.05em]">
                    Legal Compliance
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    task_alt
                  </span>
                  <span className="font-label-caps text-[12px] font-semibold tracking-[0.05em]">
                    Verified Audits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
