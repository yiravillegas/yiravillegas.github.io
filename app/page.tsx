"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Globe,
  Sun,
  Moon,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Layers,
  Percent,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Database,
  Workflow,
  BarChart3,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showEarlierExp, setShowEarlierExp] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "bi" | "ops">("all");

  useEffect(() => {
    const saved = localStorage.getItem("yira-portfolio-theme");
    if (saved === "light") {
      setTheme("light");
      document.documentElement.removeAttribute("data-theme");
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("yira-portfolio-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("yira-portfolio-theme", "dark");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#06090f] dark:text-slate-100 transition-colors duration-300 tech-grid-pattern selection:bg-indigo-500 selection:text-white">
      
      {/* =========================================================================
          TOP FLOATING NAVBAR (Modern Startup Pill Bar)
         ========================================================================= */}
      <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6">
        <nav className="flex items-center justify-between rounded-2xl bg-white/80 dark:bg-[#0d131f]/80 p-2.5 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5 dark:shadow-black/20">
          <a href="#" className="flex items-center gap-2.5 pl-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white font-extrabold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              YV
            </span>
            <div className="hidden sm:block">
              <span className="block font-bold text-sm tracking-tight text-slate-900 dark:text-white">
                Yira Villegas
              </span>
              <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Business &amp; Operations Analyst
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#impact" className="px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Impact
            </a>
            <a href="#projects" className="px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Work &amp; Automation
            </a>
            <a href="#experience" className="px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Experience
            </a>
            <a href="#skills" className="px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Toolkit
            </a>
            <a href="#about" className="px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="mailto:yiravillegas@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </header>

      {/* =========================================================================
          HERO SECTION (High-Impact Startup Style)
         ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Remote Opportunities
            </div>

            {/* Bold Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08]">
              Turning operational complexity into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                predictable growth.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              I am a bilingual Business Analyst and Process Improvement Leader with 15+ years of experience engineering data-driven workflows, ERP/BI systems, and operational turnarounds across banking, manufacturing, and high-volume environments.
            </p>

            {/* Location & Languages */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0d131f] border border-slate-200 dark:border-slate-800">
                <MapPin className="h-3.5 w-3.5 text-indigo-500" />
                Baton Rouge, Louisiana
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0d131f] border border-slate-200 dark:border-slate-800">
                <Globe className="h-3.5 w-3.5 text-indigo-500" />
                Bilingual (English / Spanish)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/yiravillegas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 text-sm font-bold shadow-md transition-all"
              >
                <Linkedin className="h-4 w-4 text-[#0077b5]" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/yiravillegas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#0d131f] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-500 dark:hover:border-indigo-500 text-sm font-bold transition-all shadow-sm"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:yiravillegas@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#0d131f] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-500 dark:hover:border-indigo-500 text-sm font-bold transition-all shadow-sm"
              >
                <Mail className="h-4 w-4" />
                yiravillegas@gmail.com
              </a>
            </div>
          </div>

          {/* Profile Founder Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl p-3 bg-gradient-to-b from-indigo-500/20 via-slate-200/40 to-transparent dark:from-indigo-500/20 dark:via-slate-800/40 dark:to-transparent border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0d131f] p-5">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 mb-5">
                  <Image
                    src="/profile.jpg"
                    alt="Yira Villegas"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-indigo-300">
                      Operations &amp; Analytics
                    </span>
                    <span className="block text-lg font-bold">
                      Yira Villegas
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-slate-500 dark:text-slate-400">Primary Core</span>
                    <span className="text-slate-900 dark:text-slate-200">ERP &amp; BI (SAP BW, SQL, Power BI)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-slate-500 dark:text-slate-400">Methodology</span>
                    <span className="text-slate-900 dark:text-slate-200">Lean, Continuous Improvement</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold py-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Education</span>
                    <span className="text-slate-900 dark:text-slate-200">MBA (IESA) · WHU Germany · URU Eng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          TRACTION & METRICS SECTION (High-Contrast Impact)
         ========================================================================= */}
      <section id="impact" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              Verified Career Traction
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Measurable Business Impact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            Real outcomes driven by process optimization, KPI visibility, and cross-functional leadership.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="relative p-6 rounded-2xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all shadow-sm group">
            <div className="text-indigo-600 dark:text-indigo-400 mb-3">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-mono">
              +37%
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mt-1">
              Sales Jump
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              First-year revenue increase achieved by diagnosing sales and labor bottlenecks at IHOP.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all shadow-sm group">
            <div className="text-indigo-600 dark:text-indigo-400 mb-3">
              <Clock className="h-5 w-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-mono">
              -58%
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mt-1">
              Wait Times
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Reduced peak wait from 60 to 25 minutes through service workflow redesign.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all shadow-sm group">
            <div className="text-indigo-600 dark:text-indigo-400 mb-3">
              <Layers className="h-5 w-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-mono">
              123
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mt-1">
              Branches
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Nationwide retail banking branch network transformed at Banco Mercantil (+41% sales time).
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all shadow-sm group">
            <div className="text-indigo-600 dark:text-indigo-400 mb-3">
              <Percent className="h-5 w-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight font-mono">
              6% → 2%
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mt-1">
              Variance Drop
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Tightened food and inventory cost variance, maximizing operational store profitability.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FEATURED WORK & AUTOMATION (Product Feature Style)
         ========================================================================= */}
      <section id="projects" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
            <Database className="h-3.5 w-3.5" />
            Engineering &amp; Business Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Featured Systems &amp; Case Studies
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Real code pipelines, analytics frameworks, and enterprise transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                  Automation Pipeline
                </span>
                <a
                  href="https://github.com/yiravillegas/IHOPSERVER_fromRosnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors"
                >
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                Restaurant KPI Reporting Automation (Rosnet)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Automated multi-unit analytics script that ingests daily Rosnet exports, validates restaurant metrics, calculates monthly scorecards, and delivers auditable Excel reports and Telegram summaries for leadership.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-medium font-mono text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Python / Automation</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Rosnet POS</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">KPI Scorecards</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                  BI &amp; Analytics
                </span>
                <a
                  href="https://github.com/yiravillegas/zomatotomato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors"
                >
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                Zomato Market Performance Intelligence
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Business intelligence analysis of restaurant market performance in India utilizing Tableau dashboards, customer ordering trends, delivery metrics, and SQL queries to uncover sector opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Tableau Dashboard</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">SQL Analytics</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Customer Data</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Digital Banking Transformation
                </span>
                <span className="text-xs font-mono text-slate-500">6 Mo. Delivery</span>
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                Banco Mercantil Online Account Opening System
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Stepped into an online account opening project that had been stalled for 8 years. Partnered with IT, compliance, and operations to write functional specifications and deploy the nationwide system in 6 months.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Requirements Gathering</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Process Mapping</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">123 Branches</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                  Enterprise ERP &amp; Supply Chain
                </span>
                <span className="text-xs font-mono text-slate-500">Enterprise</span>
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                Alimentos Polar SAP BW Reporting System
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Led SAP Business Warehouse (BW) and SAP SD implementations across Venezuela's largest food manufacturer, unifying sales, logistics, and distribution metrics into standardized leadership dashboards.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">SAP BW / SAP SD</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Supply Chain KPIs</span>
              <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60">Process Architecture</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          WORK EXPERIENCE (Startup Journey Timeline)
         ========================================================================= */}
      <section id="experience" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
            <Workflow className="h-3.5 w-3.5" />
            15+ Years Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6">
          
          {/* Role 1: IHOP */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">General Manager</h3>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">· IHOP</span>
              </div>
              <span className="text-xs font-mono text-slate-500">March 2021 – Present</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Baton Rouge, Louisiana, United States</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Reduced peak-time customer wait from 60 to 25 minutes through service process redesign.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Analyzed KPIs across labor, inventory, and sales, increasing annual sales by 37% in the first year.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Tightened cost controls, lowering Actual vs. Theoretical variance from 6% to 2%.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Ranked Top 50 of 180 stores regionally for operational performance and guest satisfaction.</span>
              </li>
            </ul>
          </div>

          {/* Role 2: Lit Pizza */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">General Manager</h3>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">· Lit Pizza</span>
              </div>
              <span className="text-xs font-mono text-slate-500">February 2018 – January 2020</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Baton Rouge, Louisiana, United States</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Broke company records for sales per hour while maintaining high customer satisfaction ratings.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Supported new store launch: standardized operating procedures, team training, and store readiness.</span>
              </li>
            </ul>
          </div>

          {/* Role 3: Banco Mercantil */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">Process Improvement Manager</h3>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">· Banco Mercantil</span>
              </div>
              <span className="text-xs font-mono text-slate-500">April 2012 – February 2015</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Caracas, Venezuela</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Led nationwide process improvement initiatives across 123 branches, boosting sales-time by 41%.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Defined functional specifications and delivered online account opening system stalled for 8 years in 6 months.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Conducted root-cause analysis, time studies, and diagnostics to implement scalable branch enhancements.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Trained and mentored internal operations teams on process analysis and continuous improvement.</span>
              </li>
            </ul>
          </div>

          {/* Role 4: Alimentos Polar */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">Senior Business Analyst</h3>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">· Alimentos Polar</span>
              </div>
              <span className="text-xs font-mono text-slate-500">May 2004 – February 2012</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Caracas, Venezuela</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Led SAP BW implementations for sales, logistics, and manufacturing, unifying enterprise reporting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Built BI executive dashboards that supported corporate decision-making across national distribution.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Standardized process-based management systems, enabling continuous improvement across multiple departments.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Modeled supply chain KPIs and optimized multi-stakeholder operational visibility.</span>
              </li>
            </ul>
          </div>

          {/* Role 5: Global Markets */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">Financial Analyst</h3>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">· Global Markets C.A. Casa de Bolsa</span>
              </div>
              <span className="text-xs font-mono text-slate-500">March 2003 – February 2004</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Maracaibo, Venezuela</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Structured primary bond issuance compliance, coordinated U.S. custody accounts for local bonds, and developed an in-house stock management tool to streamline tracking and reporting.
            </p>
          </div>

        </div>

        {/* Earlier Leadership & Foundation Drawer */}
        <div className="mt-6">
          <button
            onClick={() => setShowEarlierExp(!showEarlierExp)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors"
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${showEarlierExp ? "rotate-180" : ""}`} />
            {showEarlierExp ? "Hide Earlier Foundation" : "View Earlier Foundations & Leadership (AIESEC, PDVSA, Internships)"}
          </button>

          {showEarlierExp && (
            <div className="mt-4 p-6 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80 space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-bold text-slate-950 dark:text-white">PROLACTECA — Intern (Mar 2000 – May 2000):</span> Analyzed production units and developed a cost control system for high-demand products, standardizing cost tracking.
              </div>
              <div>
                <span className="font-bold text-slate-950 dark:text-white">Carmeron Venezolana — Intern (Dec 1999 – Feb 2000):</span> Designed a Time Control Card to track assembly labor time, improving cost allocation after prior attempts had stalled.
              </div>
              <div>
                <span className="font-bold text-slate-950 dark:text-white">AIESEC Venezuela — Local President in Maracaibo (Nov 1998 – Oct 1999):</span> Rebuilt local chapter membership from 3 to a sustainable organization, developed 9 international traineeships, and secured corporate partnerships.
              </div>
              <div>
                <span className="font-bold text-slate-950 dark:text-white">PDVSA Petróleos de Venezuela — Intern (Jul 1997 – Aug 1998):</span> Conducted multiphase well analysis using production simulators (PIPESIM, Flow System) for national-scale evaluation.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL SYSTEMS & METHODOLOGY (Interactive Matrix)
         ========================================================================= */}
      <section id="skills" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
            <BarChart3 className="h-3.5 w-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Technical Systems &amp; Methodologies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-sm font-bold text-slate-950 dark:text-white mb-3 text-indigo-500">
              ERP &amp; BI Platforms
            </h3>
            <ul className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-300">
              <li>• SAP BW (Warehouse)</li>
              <li>• SAP SD (Sales/Dist)</li>
              <li>• Power BI</li>
              <li>• Tableau</li>
              <li>• SQL Queries</li>
              <li>• Excel Dashboards</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-sm font-bold text-slate-950 dark:text-white mb-3 text-indigo-500">
              Process Optimization
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li>• Lean / Kaizen</li>
              <li>• Root Cause Analysis</li>
              <li>• Time &amp; Motion Studies</li>
              <li>• Workflow Redesign</li>
              <li>• Waste Reduction</li>
              <li>• Standardized SOPs</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-sm font-bold text-slate-950 dark:text-white mb-3 text-indigo-500">
              Business Analysis
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li>• Requirements Gathering</li>
              <li>• Functional Specs</li>
              <li>• KPI Frameworks</li>
              <li>• Process Mapping</li>
              <li>• Change Management</li>
              <li>• Audit &amp; Controls</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-sm font-bold text-slate-950 dark:text-white mb-3 text-indigo-500">
              Global Delivery
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li>• Bilingual: English</li>
              <li>• Bilingual: Spanish</li>
              <li>• Cross-Functional Lead</li>
              <li>• Executive Presentations</li>
              <li>• Multi-Unit Scaling</li>
              <li>• Remote Collaboration</li>
            </ul>
          </div>

        </div>
      </section>

      {/* =========================================================================
          EDUCATION SECTION
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-6 tracking-tight">
          Academic Foundation
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-xs font-mono text-indigo-500 font-bold mb-1">MBA · 2000–2002</div>
            <div className="font-bold text-slate-950 dark:text-white text-base">IESA</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Master of Business Administration
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-xs font-mono text-indigo-500 font-bold mb-1">Exchange · 2001</div>
            <div className="font-bold text-slate-950 dark:text-white text-base">WHU Otto Beisheim</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              School of Management (Germany)
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0d131f] border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-xs font-mono text-indigo-500 font-bold mb-1">B.S. · Grad 2000</div>
            <div className="font-bold text-slate-950 dark:text-white text-base">Universidad Rafael Urdaneta</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Chemical Engineering Degree
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CALL TO ACTION (Memorable Startup Finish)
         ========================================================================= */}
      <section id="about" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest">
              Available for New Roles
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to eliminate operational waste and scale your systems?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need to architect custom BI scorecards, standardize multi-unit procedures, or lead an enterprise digital banking transformation, let's talk.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="mailto:yiravillegas@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
              >
                <Mail className="h-4 w-4" />
                Email Yira Villegas
              </a>
              <a
                href="https://www.linkedin.com/in/yiravillegas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
        </div>

        <div className="pt-12 text-center text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Yira Villegas · Business Analyst &amp; Operations Optimization Leader</p>
          <p className="mt-1">Baton Rouge, Louisiana · English &amp; Spanish</p>
        </div>
      </section>

    </div>
  );
}
