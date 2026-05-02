// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto w-full border-t border-slate-100 bg-white/90 text-slate-500 antialiased backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-400"
      id="footer"
    >
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-4">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="font-h2 mb-6 flex items-center gap-3 text-xl font-extrabold tracking-tight text-sky-700 dark:text-sky-400">
            <img alt="Logo" className="h-8 w-8 object-contain" src="/images/logo.png" />
            OncoShield AI
          </div>
          <p className="font-body mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Intelligent Breast Cancer Diagnostic System. Empowering oncologists with high-precision
            AI-driven tools.
          </p>
          <div className="flex gap-3">
            {/* Social Icons (SVGs) */}
            <a
              href="https://x.com/ahmed_fahmy8308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-50 text-slate-500 transition-colors hover:bg-sky-100 hover:text-sky-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/a7medfahmy8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-50 text-slate-500 transition-colors hover:bg-sky-100 hover:text-sky-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/Ahmedfahmy8308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-50 text-slate-500 transition-colors hover:bg-sky-100 hover:text-sky-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@FahmyCodeHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-50 text-slate-500 transition-colors hover:bg-sky-100 hover:text-sky-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-h3 mb-6 text-sm font-bold tracking-widest text-slate-900 uppercase dark:text-white">
            Quick Links
          </h4>
          <ul className="font-body space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link
                href="/documentation"
                className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/clinical-guidelines"
                className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                Clinical Guidelines
              </Link>
            </li>
            <li>
              <Link
                href="/model-architecture"
                className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                Model Architecture
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <h4 className="font-h3 mb-6 text-sm font-bold tracking-widest text-slate-900 uppercase dark:text-white">
            Legal & Security
          </h4>
          <ul className="font-body space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link
                href="/privacy"
                className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/hipaa-compliance"
                className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-400"
              >
                HIPAA Compliance
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="font-h3 mb-6 text-sm font-bold tracking-widest text-slate-900 uppercase dark:text-white">
            Stay Updated
          </h4>
          <p className="font-body mb-4 text-sm text-slate-500 dark:text-slate-400">
            Get the latest AI medical diagnostic updates directly in your inbox.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              required
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-sky-700 active:scale-95"
            >
              Subscribe <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-screen-2xl border-t border-slate-100 px-6 py-8 text-center dark:border-slate-800">
        <p className="font-body text-xs text-slate-400 dark:text-slate-500">
          © {currentYear} OncoShield AI. All rights reserved.
        </p>
        <p className="font-body mt-2 text-xs text-slate-500 dark:text-slate-400">
          Developed by Ahmed Fahmy at{' '}
          <a
            href="https://ufuq-tech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
          >
            Ufuq Tech
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
