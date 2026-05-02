// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-20">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h1 className="font-h1 text-[40px] font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-lg">Last Updated: January 15, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-8 py-16">
        <div className="prose prose-slate max-w-none space-y-10">
          
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <h3 className="text-orange-800 font-bold mb-2">Clinical Disclaimer</h3>
            <p className="text-orange-900 text-sm m-0">
              OncoShield AI is a supplementary diagnostic tool designed to assist licensed medical professionals. It is <strong>NOT</strong> a substitute for professional medical judgment, diagnosis, or treatment. All AI findings must be reviewed and validated by a qualified oncologist or pathologist.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the OncoShield AI platform, APIs, or software (collectively, the &quot;Service&quot;), provided by <a href="https://ufuq-tech.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">Ufuq Tech</a>, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-slate-800 mb-4">2. Use of Service</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Service is intended exclusively for use by licensed healthcare providers, hospitals, and clinical research organizations. You agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide accurate and complete registration information.</li>
              <li>Maintain the security of your API keys and authentication credentials.</li>
              <li>Ensure that any patient data uploaded to the Service complies with applicable privacy laws (e.g., HIPAA, GDPR).</li>
              <li>Not reverse-engineer, decompile, or attempt to extract the source code or model weights of the AI algorithms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-slate-800 mb-4">3. Data Privacy and Security</h2>
            <p className="text-slate-600 leading-relaxed">
              Your privacy is critical to us. Our data handling practices are governed by our Privacy Policy and, where applicable, a Business Associate Agreement (BAA). You retain all ownership rights to the medical data you upload. However, by using the Service, you grant OncoShield AI a temporary license to process the data solely for the purpose of generating diagnostic inferences.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-slate-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, <a href="https://ufuq-tech.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">Ufuq Tech</a> and OncoShield AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service. The Service is provided &quot;AS IS&quot; without warranties of any kind, whether express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-slate-800 mb-4">5. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <p className="text-slate-500 italic">
              For questions regarding these Terms, please contact our legal department at legal@ufuq-tech.com.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
