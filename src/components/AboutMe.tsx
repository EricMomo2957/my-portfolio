"use client";

import Image from "next/image";
import {
  Code2,
  GraduationCap,
  Sparkles,
  Cpu,
  Award,
  Bot,
  Wrench,
  HeartHandshake,
  Lightbulb,
  Layers,
  Palette,
  FileText,
  MapPin,
  Mail,
  Phone,
  Download,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Terminal,
  Database,
  Building2,
  Briefcase,
  ChevronRight,
  Globe,
  Network
} from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJava, FaGitAlt, FaFigma, FaWordpress, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMysql, SiCanva, SiBootstrap, SiTailwindcss, SiJavascript, SiHtml5, SiFlutter, SiSqlite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function AboutMe() {
  const servicesData = [
    {
      title: "Full-Stack Web Development",
      category: "Web Development",
      desc: "Custom, high-performance web applications, client portal systems, RESTful APIs, and secure database solutions built with React, Next.js, Node.js, and PHP.",
      icon: <Code2 size={20} className="text-cyan-400" />
    },
    {
      title: "Canva & Digital Graphic Design",
      category: "Design & Branding",
      desc: "Eye-catching marketing collaterals, social media assets, pitch decks, flyers, and business brand visuals crafted using Canva Pro, Figma, and Photoshop.",
      icon: <Palette size={20} className="text-purple-400" />
    },
    {
      title: "AI Automation & Smart Chatbots",
      category: "AI Solutions",
      desc: "Streamline business operations with custom logic-based chatbots, Flowise AI workflows, OCR document extraction, and smart AI integrations.",
      icon: <Bot size={20} className="text-amber-400" />
    },
    {
      title: "Cloud Deployment & Web Hosting",
      category: "Cloud & Hosting",
      desc: "Production-ready deployments on Vercel and Railway with custom domain binding, SSL encryption, and secure network infrastructure setup.",
      icon: <Network size={20} className="text-rose-400" />
    }
  ];

  const technicalSkills = {
    languages: [
      { name: "TypeScript", icon: <SiTypescript size={14} className="text-blue-400" /> },
      { name: "HTML5 / CSS3", icon: <Code2 size={14} className="text-[#2ecc71]" /> },
      { name: "PHP", icon: <FaPhp size={14} className="text-indigo-400" /> },
      { name: "Python", icon: <FaPython size={14} className="text-amber-400" /> },
      { name: "Java", icon: <FaJava size={14} className="text-red-400" /> },
      { name: "MySQL", icon: <SiMysql size={14} className="text-sky-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={14} className="text-cyan-400" /> }
    ],
    frameworks: [
      { name: "React", icon: <FaReact size={14} className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs size={14} className="text-emerald-400" /> },
      { name: "Express.js", icon: <Terminal size={14} className="text-slate-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={14} className="text-sky-400" /> },
      { name: "Vue.js", icon: <Code2 size={14} className="text-emerald-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={14} className="text-purple-400" /> }
    ],
    tools: [
      { name: "Figma", icon: <FaFigma size={14} className="text-rose-400" /> },
      { name: "Canva", icon: <SiCanva size={14} className="text-cyan-300" /> },
      { name: "Photoshop", icon: <Palette size={14} className="text-blue-400" /> },
      { name: "WordPress & Elementor", icon: <FaWordpress size={14} className="text-sky-400" /> },
      { name: "Git & GitHub", icon: <FaGitAlt size={14} className="text-amber-400" /> },
      { name: "VS Code & XAMPP", icon: <Wrench size={14} className="text-emerald-400" /> }
    ],
    aiAutomation: [
      { name: "Flowise AI (Logic Chatbots)", icon: <Bot size={14} className="text-purple-400" /> },
      { name: "AI & Prompt Workflows", icon: <Cpu size={14} className="text-cyan-400" /> }
    ],
    methodologies: [
      "RESTful APIs",
      "OOP (Object-Oriented)",
      "SOLID Principles",
      "MVC Architecture",
      "Database Modeling",
      "SEO Optimization"
    ]
  };

  return (
    <section className="p-4 sm:p-6 md:p-10 max-w-6xl mx-auto space-y-10 relative">
      
      {/* Background Subtle Tech Watermarks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05] font-mono text-sm leading-none flex flex-wrap gap-12 p-8 justify-between">
        <span>const</span>
        <span>git</span>
        <span>npm</span>
        <span>{`{ ... }`}</span>
        <span>=&gt;</span>
        <span>import</span>
        <span>interface</span>
        <span>async/await</span>
        <span>PostgreSQL</span>
        <span>Node.js</span>
        <span>React 19</span>
        <span>status: 200</span>
      </div>

      {/* Main Centered Header */}
      <div className="text-center space-y-3 relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
          About Me
        </h1>
        <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
          Full-Stack Developer & Design Associate dedicated to creating intuitive, responsive web applications with clean, modern code.
        </p>
        
        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="/Eric_Dominic_Momo_Resume.pdf"
            download="Eric_Dominic_Momo_Resume.pdf"
            className="inline-flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 font-bold px-5 py-2 rounded-xl text-xs transition-all shadow-md shadow-[#2ecc71]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download size={14} /> Download Resume (.pdf)
          </a>
          <a
            href="/Eric_Dominic_Momo_Cover_Letter.pdf"
            download="Eric_Dominic_Momo_Cover_Letter.pdf"
            className="inline-flex items-center gap-2 dark:bg-white/[0.04] bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 dark:text-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold border dark:border-white/10 border-slate-200 transition-all cursor-pointer"
          >
            <FileText size={14} /> Cover Letter
          </a>
        </div>
      </div>

      {/* TOP GRID: 2-Card Bento Layout (Main Narrative vs Education & Status) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-stretch">
        
        {/* Left Card: Design & Engineering Craft (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#2ecc71]/30 transition-all">
          
          <div className="space-y-4">
            {/* Terminal Eyebrow */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
              <span className="text-[#2ecc71]">&gt;_</span>
              <span className="tracking-wider uppercase">DESIGN &amp; FULL-STACK CRAFT</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-snug">
              Design-First Aesthetics Coupled with Robust Backend Architecture
            </h2>

            {/* Intro Narrative */}
            <p className="text-xs sm:text-sm leading-relaxed dark:text-slate-300 text-slate-600 text-justify [text-align-last:left]">
              I am <strong className="dark:text-white text-slate-900 font-bold">Eric Dominic Momo</strong>, an Information Technology graduate specializing in full-stack development, responsive UI design, and automated database workflows. Ever since writing my first line of code at the <strong className="dark:text-white text-slate-900 font-bold">University of Cebu – Main Campus</strong>, I have merged technical backend logic with clean visual design.
            </p>

            {/* The Foundation: Direct to the Point Milestones */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2ecc71]">
                Core Engineering Milestones:
              </h3>
              
              <div className="grid grid-cols-1 gap-2.5 text-xs dark:text-slate-300 text-slate-600">
                {/* 1. KATD Solutions */}
                <div className="p-3 rounded-xl dark:bg-white/[0.02] bg-slate-50 border dark:border-white/5 border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between font-bold dark:text-white text-slate-900">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                      <Terminal size={14} /> KATD Solutions &amp; Loan System Backend
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">June – August 2026</span>
                  </div>
                  <p className="text-[11px] sm:text-xs leading-relaxed dark:text-slate-400 text-slate-600">
                    Co-founded KATD Solutions; architected the backend API in <strong className="text-emerald-400">Node.js, Express &amp; PostgreSQL</strong> for the UC METC Campus loan monitoring system, automating Flat-Rate and Diminishing Balance interest schedules.
                  </p>
                </div>

                {/* 2. CoreLogic & MentorLog */}
                <div className="p-3 rounded-xl dark:bg-white/[0.02] bg-slate-50 border dark:border-white/5 border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between font-bold dark:text-white text-slate-900">
                    <span className="flex items-center gap-1.5 text-blue-400 font-mono">
                      <Wrench size={14} /> CoreLogic Internship &amp; MentorLog
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">February – May 2026</span>
                  </div>
                  <p className="text-[11px] sm:text-xs leading-relaxed dark:text-slate-400 text-slate-600">
                    Maintained client websites in <strong className="text-blue-400">WordPress &amp; Elementor</strong> and designed graphic assets in Canva/Photoshop, while independently developing <strong className="text-blue-400">MentorLog</strong> (React 19/MySQL) to automate OJT attendance tracking.
                  </p>
                </div>

                {/* 3. ChronoNav */}
                <div className="p-3 rounded-xl dark:bg-white/[0.02] bg-slate-50 border dark:border-white/5 border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between font-bold dark:text-white text-slate-900">
                    <span className="flex items-center gap-1.5 text-purple-400 font-mono">
                      <Layers size={14} /> Capstone Leadership (ChronoNav)
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Aug – Dec 2025</span>
                  </div>
                  <p className="text-[11px] sm:text-xs leading-relaxed dark:text-slate-400 text-slate-600">
                    Served as Lead Developer orchestrating the team&apos;s Git/GitHub repository and integrated <strong className="text-purple-400">Tesseract OCR</strong> to convert printed student study load schedules into interactive campus navigation routes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 Mini-Pill Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t dark:border-white/5 border-slate-100">
            <div className="p-3 rounded-2xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-bold dark:text-white text-slate-900">
                <Code2 size={15} className="text-[#2ecc71]" /> Full-Stack Dev
              </div>
              <span className="text-[11px] dark:text-slate-400 text-slate-500 font-mono mt-0.5">
                Node.js, Express &amp; React
              </span>
            </div>

            <div className="p-3 rounded-2xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-bold dark:text-white text-slate-900">
                <Palette size={15} className="text-rose-400" /> UI/UX &amp; Design
              </div>
              <span className="text-[11px] dark:text-slate-400 text-slate-500 font-mono mt-0.5">
                Figma, Canva &amp; Photoshop
              </span>
            </div>

            <div className="p-3 rounded-2xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-bold dark:text-white text-slate-900">
                <Database size={15} className="text-cyan-400" /> APIs &amp; DBs
              </div>
              <span className="text-[11px] dark:text-slate-400 text-slate-500 font-mono mt-0.5">
                PostgreSQL, MySQL &amp; REST
              </span>
            </div>
          </div>

        </div>

        {/* Right Card: Education & Current Status (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#2ecc71]/30 transition-all">
          
          <div className="space-y-4">
            {/* Education Eyebrow */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400">
              <GraduationCap size={15} />
              <span className="tracking-wider uppercase">EDUCATION</span>
            </div>

            {/* Degree Title */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-extrabold dark:text-white text-slate-900 tracking-tight">
                BS in Information Technology
              </h3>
              <p className="text-sm font-bold text-cyan-400">
                University of Cebu – Main Campus
              </p>
              <p className="text-xs dark:text-slate-400 text-slate-500 font-mono">
                Graduation: June 2026 • Cebu City, PH
              </p>
            </div>

            {/* Quick Contact & Location Chips */}
            <div className="space-y-2 pt-2 text-xs font-mono dark:text-slate-300 text-slate-600">
              <div className="flex items-center gap-2 p-2 rounded-xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200">
                <MapPin size={13} className="text-[#2ecc71] shrink-0" />
                <span className="truncate">Cebu City, 6000 Philippines</span>
              </div>
              <a
                href="mailto:momoe2957@gmail.com"
                className="flex items-center justify-between p-2 rounded-xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200 hover:border-[#2ecc71]/40 dark:hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail size={13} className="text-[#2ecc71] shrink-0" />
                  <span className="truncate">momoe2957@gmail.com</span>
                </div>
                <ArrowUpRight size={12} className="text-slate-400 group-hover:text-[#2ecc71] shrink-0" />
              </a>
              <div className="flex items-center gap-2 p-2 rounded-xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200">
                <Phone size={13} className="text-[#2ecc71] shrink-0" />
                <span>+63 935 273 7624</span>
              </div>
            </div>
          </div>

          {/* Current Status Box matching sample photo */}
          <div className="p-4 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/10 border-slate-200/90 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
              <span>Current Status</span>
            </div>
            <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed">
              Open for full-time IT roles, Associate Web Developer, Design Associate, and freelance full-stack projects.
            </p>
          </div>

        </div>

      </div>

      {/* BOTTOM GRID: Experience & Accolades Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-stretch">
        
        {/* Bottom Left Card: Experience Highlights (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-5 hover:border-[#2ecc71]/30 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400">
                <Briefcase size={15} />
                <span className="tracking-wider uppercase">EXPERIENCE</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[11px] font-mono font-bold border border-blue-500/20">
                2026
              </span>
            </div>

            {/* Experience Items */}
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="space-y-1.5">
                <h4 className="text-base font-bold dark:text-white text-slate-900">
                  Full-Stack &amp; Backend Engineer
                </h4>
                <p className="text-xs font-mono text-[#2ecc71] font-semibold">
                  KATD Solutions • UC Coop Loan System
                </p>
                <ul className="space-y-1 text-xs dark:text-slate-300 text-slate-600 pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#2ecc71] font-bold">▸</span> Built loan amortization and cooperative financial calculation engines in Node.js/PostgreSQL.
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#2ecc71] font-bold">▸</span> Streamlined approval routing and compiled OpenXML Excel transaction audits.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="space-y-1.5 pt-2 border-t dark:border-white/5 border-slate-100">
                <h4 className="text-base font-bold dark:text-white text-slate-900">
                  IT Admin Assistant &amp; Web Development Intern
                </h4>
                <p className="text-xs font-mono text-blue-400 font-semibold">
                  CoreLogic Consulting &amp; System, Inc.
                </p>
                <ul className="space-y-1 text-xs dark:text-slate-300 text-slate-600 pt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">▸</span> Maintained client websites using WordPress/Elementor and produced graphic assets in Canva &amp; Photoshop.
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">▸</span> Independently engineered and deployed MentorLog for student intern tracking.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Card: Key Accolades & Accreditations (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/30 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#2ecc71]">
              <Award size={15} />
              <span className="tracking-wider uppercase">KEY ACCOLADES &amp; ACCREDITATIONS</span>
            </div>

            {/* 4 Mini Highlight Cards matching screenshot layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/5 border-slate-200/80 space-y-1">
                <div className="text-sm font-extrabold text-amber-400">CCNAv7</div>
                <div className="text-xs dark:text-slate-300 text-slate-700 font-medium">Cisco Certified (SRWE &amp; ITN)</div>
                <div className="text-[10px] text-slate-400 font-mono">Routing &amp; Switching</div>
              </div>

              <div className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/5 border-slate-200/80 space-y-1">
                <div className="text-sm font-extrabold text-cyan-400">ChronoNav</div>
                <div className="text-xs dark:text-slate-300 text-slate-700 font-medium">Capstone Lead Developer</div>
                <div className="text-[10px] text-slate-400 font-mono">OCR Schedule Extraction</div>
              </div>

              <div className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/5 border-slate-200/80 space-y-1">
                <div className="text-sm font-extrabold text-[#2ecc71]">3+ Systems</div>
                <div className="text-xs dark:text-slate-300 text-slate-700 font-medium">Production &amp; In-House</div>
                <div className="text-[10px] text-slate-400 font-mono">Full-Stack Deployments</div>
              </div>

              <div className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/5 border-slate-200/80 space-y-1">
                <div className="text-sm font-extrabold text-purple-400">KATD Solutions</div>
                <div className="text-xs dark:text-slate-300 text-slate-700 font-medium">Co-Founder &amp; Systems Lead</div>
                <div className="text-[10px] text-slate-400 font-mono">Cooperative FinTech</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* TECHNICAL ARSENAL SECTION - BENTO GRID MATCHING REFERENCE */}
      <div className="space-y-6 pt-6 border-t dark:border-white/10 border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2ecc71] font-bold mb-1">
              <Code2 size={14} /> Skills &amp; Tooling
            </div>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Technical Arsenal
            </h2>
          </div>
          <p className="text-xs dark:text-slate-400 text-slate-500 max-w-sm">
            Curated engineering toolkits, design suites, and backend datastores verified in production.
          </p>
        </div>

        {/* 6-Card Grid Layout matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: UI/UX Design */}
          <div className="p-5 sm:p-6 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/40 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold dark:text-white text-slate-900">UI/UX Design</h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Interface Architecture &amp; Wireframing</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 text-[10px] font-mono font-bold dark:text-slate-300 text-slate-700">
                2 Tools
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaFigma size={18} className="text-rose-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Figma</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Wireframing &amp; Prototyping</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiCanva size={18} className="text-cyan-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Canva UI</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Layouts &amp; Mockups</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Graphic Design */}
          <div className="p-5 sm:p-6 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/40 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold dark:text-white text-slate-900">Graphic Design</h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Vector Assets &amp; Brand Visuals</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 text-[10px] font-mono font-bold dark:text-slate-300 text-slate-700">
                4 Tools
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiCanva size={18} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Canva Pro</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Layouts &amp; Social Assets</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-amber-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">MS PowerPoint</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Pitch Decks &amp; Vectors</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Palette size={18} className="text-blue-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Photoshop</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Photo Retouch &amp; Graphics</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Palette size={18} className="text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Photopea</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">In-Browser Graphics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Video & Motion */}
          <div className="p-5 sm:p-6 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/40 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold dark:text-white text-slate-900">Video &amp; Motion</h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Motion Graphics &amp; Dynamic Cuts</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 text-[10px] font-mono font-bold dark:text-slate-300 text-slate-700">
                3 Tools
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Sparkles size={18} className="text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">CapCut</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Short-Form &amp; Keyframes</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiCanva size={18} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Canva Video</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Animated Typography</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all sm:col-span-2">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Palette size={18} className="text-rose-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Adobe Express</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Social Media &amp; Reels</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Web-App Development */}
          <div className="p-5 sm:p-6 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/40 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold dark:text-white text-slate-900">Web-App Development</h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">IDEs, Version Control &amp; Editors</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 text-[10px] font-mono font-bold dark:text-slate-300 text-slate-700">
                4 Tools
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Code2 size={18} className="text-sky-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">VS Code</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Primary Dev Studio</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaGitAlt size={18} className="text-amber-500" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Git &amp; GitHub</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Branches &amp; CI/CD</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Wrench size={18} className="text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">XAMPP Stack</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Apache &amp; MySQL Local</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Terminal size={18} className="text-rose-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Postman</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">API Testing &amp; Auth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Tech Stack & Cloud */}
          <div className="p-5 sm:p-6 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/40 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold dark:text-white text-slate-900">Tech Stack &amp; Cloud</h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Full-Stack Frameworks, Languages &amp; Databases</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 text-[10px] font-mono font-bold dark:text-slate-300 text-slate-700">
                16 Tools
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <TbBrandCSharp size={18} className="text-[#239120]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">C#</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">OOP &amp; Desktop/API</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaCss3Alt size={18} className="text-[#1572B6]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">CSS3</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Modern Stylesheets</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiJavascript size={18} className="text-[#F7DF1E]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">JavaScript</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Web Logic &amp; DOM</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaJava size={18} className="text-[#ED8B00]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Java</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">OOP Architecture</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiHtml5 size={18} className="text-[#E34F26]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">HTML5</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Semantic Markup</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaPhp size={18} className="text-[#777BB4]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">PHP</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Backend &amp; PSR-4</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaPython size={18} className="text-[#3776AB]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Python</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Data &amp; Automation</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaNodeJs size={18} className="text-[#339933]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Node.js</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Backend Runtime</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiBootstrap size={18} className="text-[#7952B3]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Bootstrap</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Responsive UI Kit</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiFlutter size={18} className="text-[#02569B]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Flutter</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Cross-Platform Apps</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiMysql size={18} className="text-[#4479A1]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">MySQL</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Relational Database</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiSqlite size={18} className="text-[#003B57]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">SQLite</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Embedded Database</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <FaReact size={18} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">React 19</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Modern UI Library</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiTypescript size={18} className="text-blue-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">TypeScript</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Strict Typing</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiPostgresql size={18} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">PostgreSQL</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Relational DB &amp; PgPool</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <SiTailwindcss size={18} className="text-sky-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Tailwind CSS</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Utility-First Styling</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: AI, Automation & Methodologies */}
          <div className="p-5 sm:p-6 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/40 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold dark:text-white text-slate-900">AI &amp; Automation</h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Chatbot Logic, OCR &amp; Architecture</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 text-[10px] font-mono font-bold dark:text-slate-300 text-slate-700">
                4 Tools
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Bot size={18} className="text-purple-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Flowise AI</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Logic-Based Chatbots</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Cpu size={18} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">Tesseract OCR</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Study Load Extraction</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-amber-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">OOP &amp; MVC</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Structured Architecture</div>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl dark:bg-[#040a07] bg-slate-50 border dark:border-white/5 border-slate-200 flex items-center gap-3 hover:border-[#2ecc71]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center shrink-0">
                  <Layers size={18} className="text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold dark:text-white text-slate-900 truncate">SOLID Principles</div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">Scalable Clean Code</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SERVICES & CLIENT OFFERINGS SECTION */}
      <div className="space-y-8 pt-8 border-t dark:border-white/10 border-slate-200/80">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border dark:border-purple-500/30 border-purple-200 dark:bg-purple-950/40 bg-purple-50 text-xs font-mono font-bold uppercase tracking-wider text-purple-400 shadow-sm">
            <Layers size={13} />
            Services &amp; Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-900 tracking-tight">
            Services &amp; Expertise
          </h2>
          <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
            Tailored digital solutions spanning full-stack web applications, Canva &amp; digital brand design, smart AI automation, and cloud deployment.
          </p>
        </div>

        {/* 4 Client Services Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="p-6 sm:p-7 rounded-3xl dark:bg-[#07130e]/90 bg-white border dark:border-white/10 border-slate-200 shadow-xl space-y-4 hover:border-[#2ecc71]/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 rounded-2xl dark:bg-white/[0.04] bg-slate-100 border dark:border-white/10 border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <span className="px-3 py-1 rounded-full dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 text-[11px] font-mono font-semibold dark:text-slate-300 text-slate-700">
                  {service.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-extrabold dark:text-white text-slate-900 group-hover:text-[#2ecc71] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed mt-2">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}