// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

import type { Metadata } from 'next';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'OncoShield AI',
  description: 'Advanced Neural Network Classification for Breast Cancer Diagnostics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md flex min-h-screen flex-col antialiased">
        {process.env.NEXT_PUBLIC_VERCEL_ENV && (
          <div className="z-50 border-b border-amber-200 bg-amber-100 px-4 py-3 text-center text-[14px] font-medium text-amber-900">
            <span className="flex items-center justify-center gap-2 font-bold">
              <span className="material-symbols-outlined text-[18px]">cloud_off</span>
              DEMO MODE (VERCEL DEPLOYMENT)
            </span>
            <p className="mt-1">
              The FastAPI backend is not running on Vercel. You are viewing{' '}
              <span className="font-bold underline decoration-amber-400">Mock Data</span>. To use
              the real ANN engine, please{' '}
              <a
                href="https://github.com/Ufuq-Tech"
                className="text-primary font-bold hover:underline"
              >
                download the repository locally
              </a>{' '}
              and run the Python backend.
            </p>
          </div>
        )}
        <Header />
        <main className="flex w-full flex-grow flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
