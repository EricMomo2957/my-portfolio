"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Download,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Layers,
  Code2,
  Calendar,
  Building2,
  FileText,
  ChevronRight
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Import project detail components
import ChronoNav from "./ChronoNav";
import Mentorlog from "./Mentorlog";
import UCCoopLoanMonitoringSystem from "./UC_Coop_Loan-Monitoring-System";

interface PortfolioProps {
  initialTab?: "projects" | "timeline";
}

export default function Portfolio({ initialTab = "projects" }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"projects" | "timeline">(initialTab === "timeline" ? "timeline" : "projects");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack & Backend", "OJT & Systems", "Capstone & AI"];

  const projects = [
    {
      id: "uccoop",
      title: "UC Coop Loan Monitoring System",
      role: "Full-Stack & Backend Engineer",
      company: "KATD Solutions (UC METC Campus)",
      date: "June 2026 – August 2026",
      isLatest: true,
      category: "Full-Stack & Backend",
      tags: ["Node.js", "Express", "PostgreSQL", "Financial Math"],
      desc: "Cooperative loan application, approval & financial amortization management system with PostgreSQL ledger engines.",
      details: [
        "Worked with another developer to build the backend API from scratch using Node.js and Express to handle math formulas for monthly payments, making loan processing and tracking much faster.",
        "Focused on using automation to improve daily operations, making it easy for the client to get accurate, up-to-date financial information and transaction reports whenever they need them.",
        "Co-designed and built the database using PostgreSQL to centralize member records, move loan processes online, and cut down on manual paperwork and errors."
      ],
      image: "/images/uccoop.png",
      githubUrl: "https://github.com/Vinzz290034/UC_Coop_Loan-Monitoring-System",
      liveUrl: "https://uc-coop-loan-monitoring.up.railway.app/"
    },
    {
      id: "mentor",
      title: "Mentor Log",
      role: "IT Admin Assistant & Web Developer Trainee",
      company: "CoreLogic Consulting & System, Inc.",
      date: "February 2026 – May 2026",
      isLatest: false,
      category: "OJT & Systems",
      tags: ["React 19", "Node.js", "MySQL", "OJT Tracking"],
      desc: "Digital OJT attendance logging, task assignments & mentorship tracking system built to replace manual sign-in sheets.",
      details: [
        "Handled daily office paperwork and digital documentation and used WordPress with Elementor to design, edit, and update different web pages for real clients.",
        "Used Canva and Photoshop to create graphic assets, including video editing, logos, and pictures, while independently building Mentor Log—a local-base system the company actively uses to automate trainee logs and mentorship tracking.",
        "Managed local data safety by regularly backing up client files and organizing company digital records to prevent data loss."
      ],
      image: "/images/mentorlog.png",
      githubUrl: "https://github.com/EricMomo2957/MentorLog",
      liveUrl: "https://mentor-log-two.vercel.app/"
    },
    {
      id: "chrono",
      title: "ChronoNav",
      role: "Capstone Lead Developer",
      company: "University of Cebu – Main Campus",
      date: "Aug 2025 – Dec 2025",
      isLatest: false,
      category: "Capstone & AI",
      tags: ["PHP", "OCR Schedule Extraction", "Figma", "Git/GitHub"],
      desc: "Campus navigation platform featuring automated OCR schedule extraction to convert printed student study loads into interactive route maps.",
      details: [
        "Served as the Lead Developer, managing the code using Git/GitHub and ensuring a stable backend to connect campus and navigation data.",
        "Integrated OCR technology to turn scanned student study loads into digital schedules, while helping write the project documentation and presenting during the defense."
      ],
      image: "/images/chrononav.png",
      githubUrl: "https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory || (activeCategory === "Full-Stack & Backend" && p.id === "mentor"));

  // Open Project Architecture / Detail Sub-views
  if (selectedProject === "chrono") return <ChronoNav onBack={() => setSelectedProject(null)} />;
  if (selectedProject === "mentor") return <Mentorlog onBack={() => setSelectedProject(null)} />;
  if (selectedProject === "uccoop") return <UCCoopLoanMonitoringSystem onBack={() => setSelectedProject(null)} />;

  return (
    <section className="p-4 sm:p-6 md:p-10 space-y-10 max-w-6xl mx-auto">

      {/* Top Header & Action Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b dark:border-white/10 border-slate-200/80">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border dark:border-white/10 border-slate-300 dark:bg-white/[0.04] bg-slate-100 text-xs font-semibold uppercase tracking-wider text-[#2ecc71]">
            <Briefcase size={13} />
            Projects & Professional Experience
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
            Portfolio & Career Timeline
          </h1>
          <p className="dark:text-slate-400 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Production systems, freelance client platforms, and software milestones built with modern full-stack architectures and clean engineering practices.
          </p>
        </div>

        {/* Download Action CTAs */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
          <a
            href="/Eric_Dominic_Momo_Resume.pdf"
            download="Eric_Dominic_Momo_Resume.pdf"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-[#2ecc71]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download size={14} /> Download Resume (.pdf)
          </a>
          <a
            href="/Eric_Dominic_Momo_Cover_Letter.pdf"
            download="Eric_Dominic_Momo_Cover_Letter.pdf"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 dark:text-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-semibold text-xs border dark:border-white/10 border-slate-200 transition-all cursor-pointer"
          >
            <FileText size={14} /> Cover Letter
          </a>
        </div>
      </div>

      {/* Modern Minimalist View Switcher & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Main View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl dark:bg-white/[0.04] bg-slate-100 border dark:border-white/10 border-slate-200 self-start">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === "projects"
              ? "bg-[#2ecc71] text-slate-950 shadow-md"
              : "dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white"
              }`}
          >
            Project Cards
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === "timeline"
              ? "bg-[#2ecc71] text-slate-950 shadow-md"
              : "dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white"
              }`}
          >
            Experience Timeline
          </button>
        </div>

        {/* Category Pills for Projects */}
        {activeTab === "projects" && (
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all cursor-pointer shrink-0 ${activeCategory === cat
                  ? "border border-[#2ecc71] bg-[#2ecc71]/10 text-[#2ecc71] font-bold"
                  : "dark:bg-white/[0.02] bg-slate-100 dark:text-slate-400 text-slate-600 border dark:border-white/5 border-slate-200 hover:border-[#2ecc71]/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 1. PROJECT CARDS SECTION */}
      {activeTab === "projects" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p.id)}
                className="group p-5 rounded-3xl dark:bg-white/[0.03] bg-white border dark:border-white/10 border-slate-200/90 hover:border-[#2ecc71]/40 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Thumbnail Container */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden dark:bg-slate-900 bg-slate-100 border dark:border-white/5 border-slate-200">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Live Demo Status Pill */}
                    {p.liveUrl && (
                      <div className="absolute top-3 right-3 z-10">
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2ecc71] text-slate-950 text-[11px] font-extrabold rounded-full shadow-lg hover:bg-[#27ae60] hover:scale-105 transition-all"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                          Live Demo
                        </a>
                      </div>
                    )}

                    {p.isLatest && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-[#2ecc71]/40 text-[#2ecc71] text-[10px] font-bold uppercase tracking-wider">
                          <Sparkles size={10} /> Latest Project
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold dark:text-white text-slate-900 group-hover:text-[#2ecc71] transition-colors line-clamp-1">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400 shrink-0" onClick={(e) => e.stopPropagation()}>
                        {p.githubUrl && (
                          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                            <FaGithub size={16} className="hover:text-[#2ecc71] transition-colors" />
                          </a>
                        )}
                        {p.liveUrl && (
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Deployment">
                            <ExternalLink size={16} className="text-[#2ecc71] hover:scale-115 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-[#2ecc71] font-mono">
                      {p.role}
                    </p>
                    <p className="text-[11px] dark:text-slate-400 text-slate-500 font-mono">
                      {p.company} • {p.date}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs dark:text-slate-300 text-slate-600 leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>
                </div>

                {/* Tech Pills & Deep-Dive Link */}
                <div className="pt-4 mt-4 border-t dark:border-white/5 border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md dark:bg-white/[0.04] bg-slate-100 dark:text-slate-300 text-slate-700 font-mono border dark:border-white/5 border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2ecc71] group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    Case Study <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. EXPERIENCE & RESUME TIMELINE SECTION */}
      {activeTab === "timeline" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#2ecc71] rounded-full" />
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight">
                Professional Experience Timeline
              </h2>
            </div>
            <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
              August 2026 – Aug 2025 Career History
            </span>
          </div>

          <div className="relative border-l-2 dark:border-white/10 border-slate-200 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
            {projects.map((exp) => (
              <div
                key={exp.id}
                className={`relative p-5 sm:p-7 rounded-3xl transition-all duration-300 border ${exp.isLatest
                  ? "dark:bg-white/[0.03] bg-white border-[#2ecc71]/40 shadow-lg"
                  : "dark:bg-white/[0.02] bg-white/70 dark:border-white/5 border-slate-200 hover:border-[#2ecc71]/30 shadow-sm"
                  }`}
              >
                {/* Glowing Timeline Dot */}
                <div
                  className={`absolute left-[-31px] sm:left-[-41px] top-7 w-3.5 h-3.5 rounded-full border transition-all ${exp.isLatest
                    ? "bg-[#2ecc71] border-[#2ecc71] shadow-[0_0_12px_#2ecc71]"
                    : "dark:bg-slate-900 bg-slate-300 dark:border-white/20 border-slate-400"
                    }`}
                />

                <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
                  <div className="space-y-3.5 flex-1">
                    {/* Header Row */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900">
                          {exp.role}
                        </h3>
                        {exp.isLatest && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#2ecc71]/10 text-[#2ecc71] font-bold uppercase tracking-wider border border-[#2ecc71]/20">
                            Latest Project
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono dark:text-slate-400 text-slate-600">
                        <span className="font-bold text-[#2ecc71] flex items-center gap-1">
                          <Building2 size={13} /> {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} /> {exp.date}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                      {exp.desc}
                    </p>

                    {/* Detailed Achievement Bullets */}
                    <ul className="space-y-2 pt-1">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm dark:text-slate-400 text-slate-600">
                          <CheckCircle2 size={15} className="text-[#2ecc71] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-3">
                      <button
                        onClick={() => setSelectedProject(exp.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-sm"
                      >
                        Inspect Architecture <ArrowRight size={13} />
                      </button>

                      {exp.liveUrl && (
                        <a
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-slate-200 text-slate-700 text-xs font-semibold border dark:border-white/10 border-slate-200 hover:border-[#2ecc71]/40 hover:text-[#2ecc71] transition-all"
                        >
                          <Globe size={13} /> Live Demo <ExternalLink size={11} />
                        </a>
                      )}

                      {exp.githubUrl && (
                        <a
                          href={exp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-slate-200 text-slate-700 text-xs font-semibold border dark:border-white/10 border-slate-200 hover:border-[#2ecc71]/40 hover:text-[#2ecc71] transition-all"
                        >
                          <FaGithub size={13} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Mini Screenshot Preview on Large Screens */}
                  <div
                    onClick={() => setSelectedProject(exp.id)}
                    className="relative w-full sm:w-64 h-36 rounded-2xl overflow-hidden border dark:border-white/10 border-slate-200 shrink-0 cursor-pointer group/thumb shadow-md"
                  >
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="256px"
                      className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#2ecc71] text-[11px] font-bold border border-[#2ecc71]/40">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}