'use client';

import React, { useState, useRef } from 'react';

export default function HomePage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const regulationRef = useRef<HTMLDivElement>(null);

  const handleViewRegulation = () => {
    setIsRevealed(true);
    setTimeout(() => {
      if (regulationRef.current) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = regulationRef.current.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-[#FFB800] selection:text-black antialiased">
      {/* 1. Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/80 backdrop-blur-md border-b border-white/[0.05]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center group">
              <img 
                src={`${basePath}/images/logo.png`} 
                alt="JetaFX" 
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-normal text-[#9ca3af]">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About us</a>
              <a href="#" className="text-white font-medium border-b-2 border-[#FFB800] pb-0.5">Forex</a>
              <a href="#" className="hover:text-white transition-colors">Platform</a>
              <a href="#" className="hover:text-white transition-colors">Tools</a>
              <a href="#" className="hover:text-white transition-colors">Partnership</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Contact us</a>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="#" 
              className="px-5 py-2 text-xs md:text-sm font-medium text-white border border-white/20 hover:border-white/40 rounded-full transition-all hover:bg-white/5"
            >
              Log in
            </a>
            <a 
              href="#" 
              className="px-6 py-2 text-xs md:text-sm font-semibold text-black bg-[#FFB800] hover:bg-[#e6a600] rounded-full transition-all shadow-[0_0_20px_rgba(255,184,0,0.25)] hover:shadow-[0_0_25px_rgba(255,184,0,0.4)]"
            >
              Sign up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#090d16] border-b border-white/10 px-6 py-4 space-y-3">
            <nav className="flex flex-col space-y-3 text-sm text-slate-300">
              <a href="#" className="hover:text-white py-1">Home</a>
              <a href="#" className="hover:text-white py-1">About us</a>
              <a href="#" className="text-[#FFB800] font-semibold py-1">Forex</a>
              <a href="#" className="hover:text-white py-1">Platform</a>
              <a href="#" className="hover:text-white py-1">Tools</a>
              <a href="#" className="hover:text-white py-1">Partnership</a>
              <a href="#" className="hover:text-white py-1">Blog</a>
              <a href="#" className="hover:text-white py-1">Contact us</a>
            </nav>
            <div className="pt-3 flex gap-3 border-t border-white/10">
              <a href="#" className="flex-1 text-center py-2 text-xs text-white border border-white/20 rounded-full">Log in</a>
              <a href="#" className="flex-1 text-center py-2 text-xs font-semibold text-black bg-[#FFB800] rounded-full">Sign up</a>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${basePath}/images/hero-bg.jpg`} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient vignette to preserve contrast and match design */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/75 to-transparent w-full md:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12]">
              Our regulatory details,<br />
              clearly explained.
            </h1>

            <p className="mt-5 text-[15px] sm:text-base text-[#9ca3af] font-normal leading-relaxed max-w-lg">
              JetaFX is a trading name of Jeta Global Ltd, licensed and regulated by the Financial Services Commission, Mauritius.
            </p>

            {/* View Our Regulation Button */}
            <div className="mt-7">
              <button 
                onClick={handleViewRegulation}
                className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-black bg-[#FFB800] hover:bg-[#e6a600] rounded-full shadow-[0_0_25px_rgba(255,184,0,0.35)] hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View our regulation</span>
              </button>
            </div>

            {/* Feature Badges */}
            <div className="mt-7 flex flex-wrap items-center gap-6 text-xs text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span>Licensed by FSC Mauritius</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                <span>Investment Dealer category</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Revealed Content Sections (Only visible when user clicks "View our regulation") */}
      {isRevealed && (
        <main 
          ref={regulationRef}
          id="regulatory-section"
          className="relative z-10 transition-all duration-700 ease-out animate-fadeIn overflow-hidden"
        >
          {/* Light ray PNG element across body behind cards */}
          <div className="absolute top-[5%] -left-[180px] w-[950px] pointer-events-none select-none z-0 opacity-45 mix-blend-screen">
            <img 
              src={`${basePath}/images/light-ray.png`} 
              alt="" 
              className="w-full h-auto"
            />
          </div>

          <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 space-y-10">
            {/* Regulatory Overview label */}
            <div className="space-y-1">
              <div className="text-[#FFB800] text-[11px] font-semibold tracking-[0.18em] uppercase">
                REGULATORY OVERVIEW
              </div>
              <p className="text-[14px] text-[#9ca3af]">
                Clear licensing, registration details, and regulatory facts for Jeta Global Ltd.
              </p>
            </div>

            {/* CARD 1: Licensing & Regulation */}
            <section className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="space-y-2">
                <div className="text-[#38bdf8] text-[11px] font-semibold tracking-[0.15em] uppercase">
                  LICENSING SUMMARY
                </div>
                <h2 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight">
                  Licensing & Regulation
                </h2>
                <p className="text-[#9ca3af] text-[13px] sm:text-[14px] leading-relaxed max-w-3xl">
                  JetaFX is a trading name of Jeta Global Ltd, licensed and regulated by the Financial Services Commission, Mauritius, under licence number GB26206742.
                </p>
              </div>

              {/* 3 Columns Sub-cards */}
              <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    LICENSED COMPANY
                  </div>
                  <div className="mt-2 text-[17px] font-bold text-white">
                    Jeta Global Ltd
                  </div>
                </div>

                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    LICENCE NUMBER
                  </div>
                  <div className="mt-2 text-[17px] font-bold text-white">
                    GB26206742
                  </div>
                </div>

                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    REGULATOR
                  </div>
                  <div className="mt-2 text-[17px] font-bold text-white">
                    Financial Services Commission, Mauritius
                  </div>
                </div>
              </div>
            </section>

            {/* CARD 2: Key Facts Section */}
            <section className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="space-y-2">
                <div className="text-[#38bdf8] text-[11px] font-semibold tracking-[0.15em] uppercase">
                  KEY FACTS
                </div>
                <h2 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight">
                  All JetaFX customer accounts are contracted with Jeta Global Ltd.
                </h2>
                <p className="text-[#9ca3af] text-[13px] sm:text-[14px] leading-relaxed max-w-3xl">
                  The information below is presented in a clear, fact-based layout so traders can quickly review the most important regulatory details.
                </p>
              </div>

              {/* 6 Grid Cards */}
              <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1 */}
                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    REGULATOR
                  </div>
                  <div className="mt-2 text-[13px] sm:text-[14px] font-medium text-white leading-snug">
                    Financial Services Commission, Mauritius
                  </div>
                </div>

                {/* 2 */}
                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    LICENCE CATEGORY
                  </div>
                  <div className="mt-2 text-[13px] sm:text-[14px] font-medium text-white leading-snug">
                    Investment Dealer (Full Service Dealer, excluding Underwriting)
                  </div>
                </div>

                {/* 3 */}
                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    DATE ISSUED
                  </div>
                  <div className="mt-2 text-[13px] sm:text-[14px] font-medium text-white leading-snug">
                    27 October 2026
                  </div>
                </div>

                {/* 4 */}
                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    LICENCE CODE
                  </div>
                  <div className="mt-2 text-[13px] sm:text-[14px] font-medium text-white leading-snug">
                    SEC-2.1B
                  </div>
                </div>

                {/* 5 */}
                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    COMPANY REGISTRATION NO.
                  </div>
                  <div className="mt-2 text-[13px] sm:text-[14px] font-medium text-white leading-snug">
                    Available in the FSC public register
                  </div>
                </div>

                {/* 6 */}
                <div className="bg-[#0f1626]/80 border border-white/[0.06] rounded-xl p-5">
                  <div className="text-[10px] font-semibold text-[#64748b] tracking-[0.12em] uppercase">
                    REGISTERED OFFICE
                  </div>
                  <div className="mt-2 text-[13px] sm:text-[14px] font-medium text-white leading-snug">
                    5th Floor, The Docks 1 The Docks, Caudan Port Louis, Mauritius
                  </div>
                </div>
              </div>
            </section>

            {/* CARD 3: Verification Card */}
            <section className="bg-[#0b101c]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="text-[#38bdf8] text-[11px] font-semibold tracking-[0.15em] uppercase">
                    VERIFICATION
                  </div>
                  <h2 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight">
                    Search Jeta Global Ltd in the FSC public register to check our details.
                  </h2>
                  <p className="text-[#9ca3af] text-[13px] sm:text-[14px] leading-relaxed">
                    We encourage traders to verify our licence and registration information directly with the regulator for the most current confirmation.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a 
                    href="https://opr.fscmauritius.org/ords/opr/r/fsc-opr/fsc-online-public-register-opr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-semibold text-black bg-[#FFB800] hover:bg-[#e6a600] rounded-full shadow-[0_0_20px_rgba(255,184,0,0.25)] transition-all whitespace-nowrap"
                  >
                    Verify our licence
                  </a>

                  <a 
                    href="https://opr.fscmauritius.org/ords/opr/r/fsc-opr/fsc-online-public-register-opr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-full transition-all whitespace-nowrap"
                  >
                    Visit FSC public register
                  </a>
                </div>
              </div>
            </section>

            {/* 4. CTA Section */}
            <section className="pt-8 pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight">
                    Trade global and win bigger with Jetafx!
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#9ca3af] max-w-xl font-normal">
                    Start trading smarter. Register with Jeta FX and access global markets with tight spreads, lightning-fast execution, and 24/7 support.
                  </p>
                </div>

                <div className="shrink-0">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold text-black bg-[#FFB800] hover:bg-[#e6a600] rounded-full shadow-[0_0_25px_rgba(255,184,0,0.35)] transition-all whitespace-nowrap"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </section>

            {/* 5. Footer */}
            <footer className="pt-6 space-y-8">
              {/* Main Footer Info */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: Company Logo & Blurb */}
                <div className="md:col-span-2 space-y-3">
                  <img 
                    src={`${basePath}/images/logo.png`} 
                    alt="JetaFX" 
                    className="h-7 w-auto object-contain" 
                  />
                  <p className="text-[12px] sm:text-[13px] text-[#64748b] leading-relaxed max-w-md font-normal">
                    We've proudly served over 15,000 satisfied clients across 80 countries. Connect now with our helpful team 24/7 to open your secure account in minutes.
                  </p>
                </div>

                {/* Column 2: Markets */}
                <div className="space-y-2.5">
                  <h4 className="text-[13px] font-semibold text-white tracking-wide">
                    Markets
                  </h4>
                  <ul className="space-y-1.5 text-[12px] sm:text-[13px] text-[#9ca3af]">
                    <li><a href="#" className="hover:text-white transition-colors">Forex</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Indices</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Stocks</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Commdities</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Exchange Futures</a></li>
                  </ul>
                </div>

                {/* Column 3: Company Information */}
                <div className="space-y-2.5">
                  <h4 className="text-[13px] font-semibold text-white tracking-wide">
                    Company Information
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[#9ca3af] leading-relaxed">
                    Office No. 5, Sea Grape Avenue, Rodney Bay, Gros-Islet, Saint Lucia
                  </p>
                </div>
              </div>

              {/* Disclaimers & Risk Warning */}
              <div className="pt-6 border-t border-white/[0.06] space-y-3 text-[10px] leading-relaxed text-[#64748b]">
                <p>
                  <strong className="text-[#9ca3af] font-medium">Disclaimer:</strong> Jeta FX LTD is a company registered in Saint Lucia with registered address Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
                </p>
                <p>
                  <strong className="text-[#9ca3af] font-medium">Risk Warning:</strong> An Investment In Derivatives May Mean Investors May Lose An Amount Even Greater Than Their Original Investment. Anyone Wishing To Invest In Any Of The Products Mentioned In www.jetafx.com Should Seek Their Own Financial Or Professional Advice. Trading Of Securities, Forex, Stock Market, Commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money. Trading in the financial markets has large potential rewards but also large potential risks. You Must Be Aware Of The Risks And Be Willing To Accept Them In Order To Invest In The Markets. Don't Invest And Trade With Money Which You Can't Afford To Lose. Forex trading is not allowed in some countries. Before Investing Your Money, make sure whether your country is allowing this or not. You Are Strongly Advised To Obtain Independent Financial, Legal And Tax Advice Before Proceeding With Any Currency Or Spot Metals Trade. Nothing In This Site Should Be Read Or Construed As Constituting Advice On The Part Of Jeta FX LTD Or Any Of Its Affiliates, Directors, Officers Or Employees.
                </p>
                <p>
                  <strong className="text-[#9ca3af] font-medium">Restricted Regions:</strong> Jeta FX LTD Does Not Provide Services For Citizens/Residents Of The United States, Cuba, Iraq, Myanmar, North Korea, Sudan, Russia and Iran. The Services Of Jeta FX LTDAre Not Intended For Distribution To, Or Use By, Any Person In Any Country Or Jurisdiction Where Such Distribution Or Use Would Be Contrary To Local Law Or Regulation.
                </p>
              </div>

              {/* Copyright */}
              <div className="pt-2 pb-6 text-center text-[11px] text-[#64748b]">
                Copyright © 2025 Jetafx. All rights reserved.
              </div>
            </footer>
          </div>
        </main>
      )}
    </div>
  );
}
