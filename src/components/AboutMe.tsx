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
  ExternalLink
} from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJava, FaGitAlt, FaFigma, FaWordpress, FaGithub } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMysql, SiCanva, SiBootstrap, SiTailwindcss } from "react-icons/si";

export default function AboutMe() {
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
      { name: "Photoshop & Photopea", icon: <Palette size={14} className="text-blue-400" /> },
      { name: "WordPress & Elementor", icon: <FaWordpress size={14} className="text-sky-400" /> },
      { name: "Git & GitHub", icon: <FaGitAlt size={14} className="text-amber-400" /> },
      { name: "VS Code & XAMPP", icon: <Wrench size={14} className="text-emerald-400" /> }
    ],
    aiAutomation: [
      { name: "Flowise AI (Logic Chatbots)", icon: <Bot size={14} className="text-purple-400" /> },
      { name: "AI & Prompt Engineering", icon: <Cpu size={14} className="text-cyan-400" /> }
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

  const highlights = [
    { label: "Degree", value: "BSIT", detail: "UC Main Campus '26", icon: <GraduationCap size={18} className="text-[#2ecc71]" /> },
    { label: "Co-Founder", value: "KATD", detail: "Backend & Systems Lead", icon: <Terminal size={18} className="text-emerald-400" /> },
    { label: "Certified", value: "CCNAv7", detail: "Cisco Routing & Switching", icon: <Award size={18} className="text-amber-400" /> },
    { label: "Shipped", value: "3+ Apps", detail: "Production & In-House", icon: <Zap size={18} className="text-cyan-400" /> }
  ];

  const softSkills = [
    {
      title: "Full-Lifecycle Execution",
      desc: "From initial Figma wireframes and PostgreSQL schema design to building automated REST APIs and production deployment.",
      icon: <Layers size={20} className="text-[#2ecc71]" />
    },
    {
      title: "Analytical Problem Solving",
      desc: "Translating complex cooperative financial formulas and real-world bottlenecks into clean, efficient automated calculation routines.",
      icon: <Lightbulb size={20} className="text-amber-400" />
    },
    {
      title: "Design & Dev Synergy",
      desc: "Bridging the gap between aesthetic visual assets and robust backend architecture for a seamless user experience.",
      icon: <Palette size={20} className="text-rose-400" />
    },
    {
      title: "Team Collaboration & Git Lead",
      desc: "Leading code reviews, maintaining repository branching standards, and facilitating clear cross-functional communication.",
      icon: <HeartHandshake size={20} className="text-blue-400" />
    }
  ];

  return (
    <section className="p-4 sm:p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      {/* 2-Column Hero & Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: Minimalist Profile Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
          <div className="rounded-3xl p-5 sm:p-6 dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 backdrop-blur-xl shadow-xl space-y-5 transition-all duration-300 hover:border-[#2ecc71]/30">
            
            {/* Image Container with Floating Status Pill */}
            <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden border dark:border-white/10 border-slate-200/80 shadow-inner group">
              <Image
                src="/images/daddy_manhwa.jpg"
                alt="Eric Dominic Momo"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Status Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
                  Open to Opportunities
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#2ecc71]/90 text-slate-950 text-[10px] font-bold uppercase tracking-wider font-mono">
                  BSIT &apos;26
                </span>
              </div>
            </div>

            {/* Profile Meta & Name */}
            <div className="space-y-1.5 text-center sm:text-left">
              <h2 className="text-2xl font-black dark:text-white text-slate-900 tracking-tight">
                Eric Dominic Momo
              </h2>
              <p className="text-xs font-semibold text-[#2ecc71] uppercase tracking-wider font-mono">
                Associate Web Developer & Design Associate
              </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="space-y-2 text-xs font-mono dark:text-slate-300 text-slate-600">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200">
                <MapPin size={14} className="text-[#2ecc71] shrink-0" />
                <span className="truncate">Cebu City, 6000 Philippines</span>
              </div>
              <a
                href="mailto:momoe2957@gmail.com"
                className="flex items-center justify-between p-2.5 rounded-xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200 hover:border-[#2ecc71]/40 dark:hover:text-white hover:text-slate-900 transition-all group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={14} className="text-[#2ecc71] shrink-0" />
                  <span className="truncate">momoe2957@gmail.com</span>
                </div>
                <ArrowUpRight size={13} className="text-slate-400 group-hover:text-[#2ecc71] transition-colors shrink-0" />
              </a>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl dark:bg-white/[0.03] bg-slate-100 border dark:border-white/5 border-slate-200">
                <Phone size={14} className="text-[#2ecc71] shrink-0" />
                <span>+63 935 273 7624</span>
              </div>
            </div>

            {/* Download CTA Button */}
            <div className="pt-2">
              <a
                href="/Eric_Dominic_Momo_Cover_Letter.pdf"
                download="Eric_Dominic_Momo_Cover_Letter.pdf"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md shadow-[#2ecc71]/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Download size={14} /> Download Cover Letter (.pdf)
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Experience Story */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Eyebrow & Main Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border dark:border-white/10 border-slate-300 dark:bg-white/[0.04] bg-slate-100 text-xs font-semibold uppercase tracking-wider text-[#2ecc71]">
              <Sparkles size={13} />
              About Me & Professional Journey
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
              Bridging Architecture, Clean Code & Intuitive UI
            </h1>
          </div>

          {/* Quick Highlight Metrics Bento */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-1 text-center sm:text-left transition-all hover:border-[#2ecc71]/30"
              >
                <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                  {h.icon}
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{h.label}</span>
                </div>
                <div className="text-base font-extrabold dark:text-white text-slate-900">{h.value}</div>
                <div className="text-[10px] dark:text-slate-400 text-slate-500 font-medium truncate">{h.detail}</div>
              </div>
            ))}
          </div>

          {/* Story Content Blocks */}
          <div className="space-y-5 text-sm sm:text-base leading-relaxed dark:text-slate-300 text-slate-600">
            
            <div className="p-5 rounded-2xl dark:bg-white/[0.02] bg-slate-100/60 border dark:border-white/5 border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Terminal size={16} className="text-[#2ecc71]" /> The Foundation
              </h3>
              <p className="text-justify [text-align-last:left]">
                Ever since writing my first line of code at the <strong className="dark:text-white text-slate-900 font-bold">University of Cebu – Main Campus</strong>, I’ve been captivated by how structured logic and creative interface design unite. As a fresh <strong className="dark:text-white text-slate-900 font-bold">BSIT graduate (Class of 2026)</strong>, my focus is building scalable web solutions that streamline manual workflows into delightful digital experiences.
              </p>
            </div>

            <div className="p-5 rounded-2xl dark:bg-white/[0.02] bg-slate-100/60 border dark:border-white/5 border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Database size={16} className="text-emerald-400" /> KATD Solutions & Loan System Backend
              </h3>
              <p className="text-justify [text-align-last:left]">
                My engineering journey accelerated when I co-founded <strong className="dark:text-white text-slate-900 font-bold">KATD SOLUTIONS</strong> with three colleagues. Together, we engineered an end-to-end <strong className="dark:text-white text-slate-900 font-bold">Cooperative Loan Monitoring & Financial Management Platform</strong> for the UC METC Campus. Working on the backend with <strong className="text-[#2ecc71] font-semibold">Node.js, Express, and PostgreSQL</strong>, I architected calculation routines for monthly amortizations, interest schedules, and centralized ledger records.
              </p>
            </div>

            <div className="p-5 rounded-2xl dark:bg-white/[0.02] bg-slate-100/60 border dark:border-white/5 border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Wrench size={16} className="text-cyan-400" /> CoreLogic Internship & MentorLog
              </h3>
              <p className="text-justify [text-align-last:left]">
                During my internship at <strong className="dark:text-white text-slate-900 font-bold">CoreLogic Consulting & System, Inc.</strong>, I merged backend logic with client-facing web development. I maintained websites with <strong className="text-[#2ecc71] font-semibold">WordPress & Elementor</strong>, designed branding assets in Canva & Photoshop, and independently designed and built <strong className="dark:text-white text-slate-900 font-bold">MentorLog</strong>—an attendance management platform actively deployed to track trainee hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl dark:bg-white/[0.02] bg-slate-100/60 border dark:border-white/5 border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Layers size={16} className="text-purple-400" /> Capstone Leadership (ChronoNav)
              </h3>
              <p className="text-justify [text-align-last:left]">
                As <strong className="text-[#2ecc71] font-semibold">Lead Developer</strong> for our Capstone project, <strong className="dark:text-white text-slate-900 font-bold">ChronoNav</strong>, I directed our team&apos;s GitHub repository, designed UI prototypes in Figma, and integrated OCR schedule syncing to convert printed class loads into interactive navigation routes.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* TECHNICAL ARSENAL SECTION */}
      <div className="space-y-6 pt-6 border-t dark:border-white/10 border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2ecc71] font-bold mb-1">
              <Code2 size={14} /> Skills & Tooling
            </div>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Technical Arsenal
            </h2>
          </div>
          <p className="text-xs dark:text-slate-400 text-slate-500 max-w-sm">
            Technologies and frameworks applied across academic, freelance, and production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Languages */}
          <div className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3.5 hover:border-[#2ecc71]/40 transition-all">
            <h3 className="font-bold dark:text-white text-slate-900 text-sm flex items-center gap-2">
              <Code2 className="text-[#2ecc71]" size={16} /> Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.languages.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/[0.04] bg-slate-100 rounded-xl text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200 hover:scale-105 transition-transform"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Backend */}
          <div className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3.5 hover:border-[#2ecc71]/40 transition-all">
            <h3 className="font-bold dark:text-white text-slate-900 text-sm flex items-center gap-2">
              <Layers className="text-cyan-400" size={16} /> Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.frameworks.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/[0.04] bg-slate-100 rounded-xl text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200 hover:scale-105 transition-transform"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Design & Dev Tools */}
          <div className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3.5 hover:border-[#2ecc71]/40 transition-all">
            <h3 className="font-bold dark:text-white text-slate-900 text-sm flex items-center gap-2">
              <Wrench className="text-rose-400" size={16} /> Design & DevOps Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.tools.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/[0.04] bg-slate-100 rounded-xl text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200 hover:scale-105 transition-transform"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* AI & Automation */}
          <div className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3.5 hover:border-[#2ecc71]/40 transition-all">
            <h3 className="font-bold dark:text-white text-slate-900 text-sm flex items-center gap-2">
              <Bot className="text-purple-400" size={16} /> AI & Automation
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.aiAutomation.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/[0.04] bg-slate-100 rounded-xl text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200 hover:scale-105 transition-transform"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Methodologies */}
          <div className="md:col-span-2 p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3.5 hover:border-[#2ecc71]/40 transition-all">
            <h3 className="font-bold dark:text-white text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="text-amber-400" size={16} /> Architectural Standards & Patterns
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.methodologies.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 dark:bg-white/[0.04] bg-slate-100 rounded-xl font-mono text-xs dark:text-slate-200 text-slate-700 border dark:border-white/5 border-slate-200"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CORE STRENGTHS & WORK PHILOSOPHY */}
      <div className="space-y-6 pt-6 border-t dark:border-white/10 border-slate-200/80">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2ecc71] font-bold mb-1">
            <Sparkles size={14} /> Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
            How I Create Value
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {softSkills.map((soft) => (
            <div
              key={soft.title}
              className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 hover:border-[#2ecc71]/40 transition-all space-y-2.5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl dark:bg-white/[0.05] bg-slate-100">
                  {soft.icon}
                </div>
                <h4 className="font-bold dark:text-white text-slate-900 text-base">{soft.title}</h4>
              </div>
              <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed pl-1">
                {soft.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION & CERTIFICATIONS DUAL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t dark:border-white/10 border-slate-200/80">
        
        {/* Education Card */}
        <div className="p-6 rounded-3xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-4 hover:border-[#2ecc71]/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900">Academic Background</h3>
                <span className="text-[11px] font-mono text-[#2ecc71]">Higher Education</span>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#2ecc71]/10 text-[#2ecc71] font-bold border border-[#2ecc71]/20">
              Graduation: June 2026
            </span>
          </div>

          <div className="space-y-1.5 pt-2 border-t dark:border-white/5 border-slate-200/60">
            <h4 className="font-extrabold dark:text-white text-slate-900 text-base">
              University of Cebu – Main Campus
            </h4>
            <p className="text-xs dark:text-slate-400 text-slate-500 font-mono">
              Cebu City, 6000 Philippines
            </p>
            <p className="text-sm dark:text-slate-300 text-slate-700 font-medium pt-2">
              Bachelor of Science in Information Technology (BSIT)
            </p>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="p-6 rounded-3xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-4 hover:border-[#2ecc71]/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Award size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900">Certifications</h3>
                <span className="text-[11px] font-mono text-amber-400">Industry Credentials</span>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20">
              Verified
            </span>
          </div>

          <div className="space-y-2.5 pt-2 border-t dark:border-white/5 border-slate-200/60">
            <h4 className="font-extrabold dark:text-white text-slate-900 text-sm">
              Cisco Certified Network Associate (CCNAv7)
            </h4>
            <div className="space-y-2 text-xs dark:text-slate-300 text-slate-600">
              <div className="flex items-center justify-between p-2 rounded-xl dark:bg-white/[0.02] bg-slate-100 border dark:border-white/5 border-slate-200">
                <span className="font-medium">• Switching, Routing, and Wireless Essentials</span>
                <span className="font-mono text-slate-400 text-[11px]">Jan 2025</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl dark:bg-white/[0.02] bg-slate-100 border dark:border-white/5 border-slate-200">
                <span className="font-medium">• Introduction to Networks</span>
                <span className="font-mono text-slate-400 text-[11px]">June 2024</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}