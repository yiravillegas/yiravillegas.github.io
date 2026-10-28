"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  MapPin,
  Globe,
  Sun,
  Moon,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showEarlierExp, setShowEarlierExp] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("yira-portfolio-theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("yira-portfolio-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("yira-portfolio-theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090e17] dark:text-slate-100 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* =========================================================================
              LEFT STAGE: Sticky portrait & executive identity
             ========================================================================= */}
          <header className="lg:col-span-5 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-16 py-12">
            <div className="space-y-6">
              
              {/* Photo & Availability */}
              <div className="space-y-4">
                <div className="relative h-44 w-44 overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
                  <Image
                    src="/profile.jpg"
                    alt="Yira Villegas portrait"
                    fill
                    priority
                    sizes="176px"
                    className="object-cover object-top"
                  />
                </div>
                
                <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Open to remote Business Analyst &amp; Operations roles
                </div>
              </div>

              {/* Dominant Headline */}
              <div>
                <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.05]">
                  Yira Villegas
                </h1>
                <p className="mt-3 text-xl font-medium text-slate-700 dark:text-slate-300">
                  Business Analyst &amp; Operations Optimization Leader
                </p>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                Over 15 years turning complex operational problems into clear requirements, scalable workflows, and measurable business outcomes.
              </p>

              {/* Coordinates */}
              <div className="flex flex-wrap gap-y-2 gap-x-5 text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  Baton Rouge, Louisiana
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  Bilingual: English &amp; Spanish
                </span>
              </div>
            </div>

            {/* Direct Links & Theme */}
            <div className="pt-8 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/yiravillegas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 text-sm font-semibold transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/yiravillegas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 text-sm font-semibold transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:yiravillegas@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 text-sm font-semibold transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="/resume.pdf"
                download="Yira_Villegas_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 text-sm font-semibold transition-colors"
                title="Download Resume PDF"
              >
                <FileText className="h-4 w-4" />
              </a>
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>
            </div>
          </header>

          {/* =========================================================================
              RIGHT STAGE: The Story, Evidence & Career
             ========================================================================= */}
          <main className="lg:col-span-7 lg:py-16 pb-16 space-y-16">

            {/* SECTION 1: ABOUT */}
            <section id="about" className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">
                Bridging Business Needs and Technical Systems
              </h2>
              <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  I am a bilingual Business Analyst and Process Improvement Leader with 15+ years of experience optimizing operational performance across banking, manufacturing, technology, and service environments.
                </p>
                <p>
                  My career combines hands-on operational leadership with deep ERP and BI capability (SAP BW, SAP SD, Power BI, Tableau, SQL). I focus on building practical solutions that eliminate waste, standardize execution across teams, and give executive stakeholders immediate visibility into their true metrics.
                </p>
                <p>
                  I am currently seeking remote Business Analyst, Operations Analyst, BI Analyst, or Process Improvement roles where I can help teams make confident, data-backed decisions.
                </p>
              </div>
            </section>

            {/* SECTION 2: MEASURABLE IMPACT */}
            <section id="impact" className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white">
                Measurable Operational Outcomes
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <div className="font-display text-5xl font-extrabold text-slate-950 dark:text-white">
                    +37%
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    First-Year Sales Increase
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Achieved by analyzing labor, sales, and food-cost KPIs to eliminate operational bottlenecks.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <div className="font-display text-5xl font-extrabold text-slate-950 dark:text-white">
                    58%
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    Wait-Time Reduction
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Cut peak customer wait times from 60 minutes down to 25 minutes through service process redesign.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <div className="font-display text-5xl font-extrabold text-slate-950 dark:text-white">
                    123
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    Bank Branches Optimized
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Led nationwide workflow improvements at Banco Mercantil, increasing front-line sales capacity by 41%.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <div className="font-display text-5xl font-extrabold text-slate-950 dark:text-white">
                    6% → 2%
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    Variance Tightening
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Lowered Actual vs. Theoretical food cost variance from 6% to 2% through tighter inventory routines.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: FEATURED WORK */}
            <section id="projects" className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white">
                Featured Work &amp; Automation
              </h2>

              <div className="space-y-6">
                <article className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                        Restaurant KPI Reporting Automation
                      </h3>
                      <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mt-0.5">
                        Operational Automation &amp; Rosnet Pipeline
                      </p>
                    </div>
                    <a
                      href="https://github.com/yiravillegas/IHOPSERVER_fromRosnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400"
                    >
                      Repository <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Built an automated analysis tool that ingests daily Rosnet exports, validates restaurant operational metrics, calculates monthly performance scores, and generates auditable Excel scorecards for multi-unit leadership.
                  </p>
                </article>

                <article className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                        Zomato Market Performance Intelligence
                      </h3>
                      <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mt-0.5">
                        Business Intelligence &amp; Tableau Dashboards
                      </p>
                    </div>
                    <a
                      href="https://github.com/yiravillegas/zomatotomato"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400"
                    >
                      Repository <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Designed Tableau analytics examining order trends, pricing distribution, and delivery turnaround metrics across restaurant sectors to uncover actionable commercial insights.
                  </p>
                </article>

                <article className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Banco Mercantil Online Account Opening System
                  </h3>
                  <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mt-0.5">
                    Enterprise Digital Banking
                  </p>
                  <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Partnered across IT, compliance, and product teams to deliver an online account opening project stalled for 8 years, completing functional specifications, workflow mapping, and delivery within 6 months.
                  </p>
                </article>

                <article className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Alimentos Polar Enterprise SAP BW Implementation
                  </h3>
                  <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mt-0.5">
                    Supply Chain &amp; Logistics Analytics
                  </p>
                  <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Led SAP BW deployments for sales, distribution, and manufacturing, unifying data definitions and reducing analysis turnaround for key business performance indicators.
                  </p>
                </article>
              </div>
            </section>

            {/* SECTION 4: WORK EXPERIENCE */}
            <section id="experience" className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white">
                Work Experience
              </h2>

              <div className="space-y-8">
                <article className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      General Manager · IHOP
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      March 2021 – Present
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Baton Rouge, Louisiana</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-base text-slate-600 dark:text-slate-300">
                    <li>Improved operational workflows and service processes, reducing peak wait times from 60 to 25 minutes.</li>
                    <li>Analyzed KPIs across labor, inventory, and sales to identify inefficiencies, driving a 37% sales increase in the first year.</li>
                    <li>Reduced Actual vs. Theoretical food waste variance from 6% to 2%.</li>
                    <li>Ranked Top 50 of 180 stores regionally for operational performance and customer satisfaction.</li>
                  </ul>
                </article>

                <article className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      General Manager · Lit Pizza
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      February 2018 – January 2020
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Baton Rouge, Louisiana</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-base text-slate-600 dark:text-slate-300">
                    <li>Improved operational KPIs across labor, inventory, and service quality through workflow adjustments.</li>
                    <li>Broke company sales-per-hour records while maintaining high customer satisfaction.</li>
                    <li>Supported the launch of a new store, ensuring team training and process standardization.</li>
                  </ul>
                </article>

                <article className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Process Improvement Manager · Banco Mercantil
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      April 2012 – February 2015
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Caracas, Venezuela</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-base text-slate-600 dark:text-slate-300">
                    <li>Led nationwide process improvement initiatives across 123 branches, increasing sales time by 41%.</li>
                    <li>Defined business requirements and functional specifications for digital banking solutions.</li>
                    <li>Partnered across IT and operations to deliver an internet banking enhancement stalled for 8 years in 6 months.</li>
                    <li>Trained and mentored internal teams on root-cause analysis and continuous improvement methods.</li>
                  </ul>
                </article>

                <article className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Senior Business Analyst · Alimentos Polar
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      May 2004 – February 2012
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Caracas, Venezuela</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-base text-slate-600 dark:text-slate-300">
                    <li>Led SAP BW implementations for sales, logistics, and operations, improving reporting accuracy.</li>
                    <li>Built BI dashboards that enhanced visibility for executive decision-making.</li>
                    <li>Standardized process-based management systems across multiple operating departments.</li>
                  </ul>
                </article>

                <article className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Financial Analyst · Global Markets C.A. Casa de Bolsa
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      March 2003 – February 2004
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Maracaibo, Venezuela</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-base text-slate-600 dark:text-slate-300">
                    <li>Supported primary bond issuance operations and cross-border custody account coordination.</li>
                    <li>Developed an in-house client stock management system to improve tracking and operational reporting.</li>
                  </ul>
                </article>
              </div>

              {/* Earlier Foundations Drawer */}
              <div className="pt-2">
                <button
                  onClick={() => setShowEarlierExp(!showEarlierExp)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${showEarlierExp ? "rotate-180" : ""}`} />
                  {showEarlierExp ? "Hide Earlier Roles" : "Earlier Foundations (AIESEC, PDVSA, Internships)"}
                </button>

                {showEarlierExp && (
                  <div className="mt-4 p-5 rounded-2xl bg-white dark:bg-slate-900 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">PROLACTECA — Intern (Mar 2000 – May 2000):</span> Developed a cost control system for high-demand products, standardizing cost tracking.
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Carmeron Venezolana — Intern (Dec 1999 – Feb 2000):</span> Designed a Time Control Card to track assembly labor time and improve cost allocation.
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">AIESEC Venezuela — Local President in Maracaibo (Nov 1998 – Oct 1999):</span> Rebuilt local chapter membership and managed international traineeships.
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">PDVSA Petróleos de Venezuela — Intern (Jul 1997 – Aug 1998):</span> Conducted multiphase well analysis using production simulators (PIPESIM, Flow System).
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* SECTION 5: SKILLS & SYSTEMS */}
            <section id="skills" className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white">
                Technical Systems &amp; Methods
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                    ERP &amp; Business Intelligence
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    SAP BW (Business Warehouse), SAP SD (Sales and Distribution), Power BI, Tableau, SQL, Excel Dashboarding, KPI Modeling.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                    Process Optimization
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Lean Thinking, Root Cause Analysis, Time Studies, Process Mapping, Waste Reduction, Standard Operating Procedures.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                    Business Analysis
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Requirements Gathering, Functional Specifications, KPI Frameworks, Multi-Stakeholder Alignment, Change Management.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                    Languages &amp; Delivery
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    English (Professional Working), Spanish (Native / Bilingual), Executive Reporting, Cross-Functional Team Coaching.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: EDUCATION */}
            <section id="education" className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white">
                Education
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 flex justify-between items-baseline gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white">
                      Master of Business Administration (MBA)
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      IESA (Instituto de Estudios Superiores de Administración)
                    </p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0">
                    2000 – 2002
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 flex justify-between items-baseline gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white">
                      Academic Exchange Program
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      WHU – Otto Beisheim School of Management (Germany)
                    </p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0">
                    2001
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 flex justify-between items-baseline gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white">
                      Bachelor of Science in Chemical Engineering
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Universidad Rafael Urdaneta
                    </p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0">
                    Graduated 2000
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 7: CONTACT */}
            <section id="contact" className="space-y-6 pt-8">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
                Let&apos;s Connect
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                I am available for remote opportunities in Business Analysis, Process Optimization, Operations, and Business Intelligence.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="mailto:yiravillegas@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail className="h-5 w-5" />
                  yiravillegas@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/yiravillegas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-950 dark:text-white text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  <Linkedin className="h-5 w-5 text-[#0077b5]" />
                  LinkedIn Profile
                </a>
              </div>

              <div className="pt-12 text-sm text-slate-500 dark:text-slate-400">
                <p>© {new Date().getFullYear()} Yira Villegas · Business Analyst &amp; Operations Optimization Leader</p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
