// Copyright (c) 2026 Ahmed Fahmy
// Developed at UFUQ TECH
// Proprietary software. See LICENSE file in the project root for full license information.

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Models', href: '/model-architecture' },
    { name: 'Diagnostics', href: '/diagnostics' },
    { name: 'Reports', href: '/reports' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Guidelines', href: '/clinical-guidelines' },
  ];

  return (
    <header className="font-h2 sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 text-sky-600 antialiased shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-sky-400 dark:shadow-none">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <img
            alt="Logo"
            className="h-8 w-8 object-contain"
            src="/images/logo.png"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-sky-700 dark:text-sky-400 leading-none">
              OncoShield AI
            </span>
            <span className="text-[10px] font-semibold text-slate-400 mt-0.5">
              by <a href="https://ufuq-tech.com/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 hover:underline">Ufuq Tech</a>
            </span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/dashboard' && pathname === '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={
                  isActive
                    ? 'border-b-2 border-sky-600 pb-1 font-semibold text-sky-700 dark:text-sky-400'
                    : 'text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400'
                }
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Search & Hamburger */}
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input
              className="focus:ring-primary/20 focus:border-primary w-64 rounded-lg border border-slate-200 bg-slate-50 py-1.5 pr-4 pl-10 text-[14px] transition-all focus:ring-2 focus:outline-none"
              placeholder="Search diagnostics..."
              type="text"
            />
          </div>
          <button 
            className="md:hidden flex items-center p-2 text-slate-500 hover:text-sky-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 shadow-lg absolute w-full dark:bg-slate-900 dark:border-slate-800">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/dashboard' && pathname === '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={
                    isActive
                      ? 'font-semibold text-sky-700 dark:text-sky-400'
                      : 'text-slate-500 hover:text-sky-600 dark:text-slate-400'
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
