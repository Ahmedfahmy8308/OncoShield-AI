// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';

export default function HIPAACompliancePage() {
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
              <span className="material-symbols-outlined text-primary">gavel</span>
              <span className="font-label-caps text-primary text-[12px] font-semibold tracking-[0.05em]">
                Regulatory Compliance
              </span>
            </div>
            <h1 className="font-h1 text-on-background mb-stack-md text-[40px] leading-[1.2] font-bold tracking-[-0.02em]">
              HIPAA Compliance Center
            </h1>
            <p className="font-body-lg text-on-surface-variant text-[18px] leading-[1.6]">
              OncoShield AI is fully committed to protecting Protected Health Information (PHI). Our
              infrastructure and operations exceed the stringent requirements set forth by the
              Health Insurance Portability and Accountability Act (HIPAA).
            </p>
          </div>
        </div>
      </section>

      <section className="px-margin-desktop py-stack-xl mx-auto max-w-screen-2xl">
        <div className="gap-gutter grid grid-cols-1 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="font-h2 mb-4 text-[28px] font-semibold text-slate-800">
                1. Business Associate Agreements (BAA)
              </h2>
              <p className="leading-relaxed text-slate-600">
                As a cloud-based diagnostic platform, OncoShield AI operates as a Business Associate
                to healthcare providers (Covered Entities). We provide standard Business Associate
                Agreements (BAAs) that clearly define our responsibilities regarding the
                safeguarding of your patients&apos; PHI. Our legal obligations strictly prohibit
                unauthorized use or disclosure of PHI.
              </p>
            </div>

            <div>
              <h2 className="font-h2 mb-4 text-[28px] font-semibold text-slate-800">
                2. Technical Safeguards
              </h2>
              <p className="mb-4 leading-relaxed text-slate-600">
                We implement robust technical controls to secure electronic PHI (ePHI):
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    enhanced_encryption
                  </span>
                  <span className="text-slate-600">
                    <strong>Encryption:</strong> All ePHI is encrypted in transit using TLS 1.3 and
                    at rest using AES-256 encryption algorithms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">password</span>
                  <span className="text-slate-600">
                    <strong>Access Control:</strong> Multi-Factor Authentication (MFA) is mandatory.
                    Access to systems containing PHI operates on a strict principle of least
                    privilege.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    manage_search
                  </span>
                  <span className="text-slate-600">
                    <strong>Audit Controls:</strong> Comprehensive logging is enforced across all
                    endpoints. Every action involving ePHI—including read, write, and delete
                    operations—is permanently recorded.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-h2 mb-4 text-[28px] font-semibold text-slate-800">
                3. Physical & Administrative Safeguards
              </h2>
              <p className="mb-4 leading-relaxed text-slate-600">
                Our operations encompass rigorous physical and administrative policies:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">apartment</span>
                  <span className="text-slate-600">
                    <strong>Data Centers:</strong> Our servers are hosted in ISO 27001 and SOC 2
                    Type II certified data centers with 24/7 biometric security and physical
                    surveillance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    model_training
                  </span>
                  <span className="text-slate-600">
                    <strong>Staff Training:</strong> All{' '}
                    <a
                      href="https://ufuq-tech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sky-600 hover:underline"
                    >
                      Ufuq Tech
                    </a>{' '}
                    engineers and OncoShield personnel undergo mandatory, ongoing HIPAA privacy and
                    security training.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-low rounded-xl border border-slate-100 p-8 shadow-sm">
              <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                description
              </span>
              <h3 className="font-h3 mb-2 text-[20px] font-bold">Request a BAA</h3>
              <p className="mb-6 text-sm text-slate-500">
                Are you ready to integrate OncoShield AI into your clinical workflow? Contact our
                legal team to execute a Business Associate Agreement.
              </p>
              <button className="bg-primary w-full rounded-lg py-3 font-semibold text-white transition-colors hover:bg-sky-700">
                Contact Legal Team
              </button>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-blue-100 bg-blue-50 p-6">
              <span className="material-symbols-outlined text-blue-500">info</span>
              <p className="text-sm text-blue-900">
                While OncoShield AI provides a secure and compliant platform, Covered Entities are
                responsible for ensuring their own internal usage and end-user access complies with
                HIPAA regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
