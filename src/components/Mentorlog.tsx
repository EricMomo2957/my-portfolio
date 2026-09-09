"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  Globe,
  ShieldCheck,
  ExternalLink,
  Terminal,
  FolderTree,
  Lock,
  Copy,
  Check,
  ClipboardList,
  UserCheck,
  FileSpreadsheet,
  BarChart3,
  GraduationCap,
  Shield,
  Layers,
  Server,
  FileText,
  KeyRound,
  User,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiPhp } from "react-icons/si";

export default function Mentorlog({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"features" | "stack_arch" | "install_api" | "license_author">("features");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(label);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const tabs = [
    { id: "features", label: "Key Features" },
    { id: "stack_arch", label: "Stack & Architecture" },
    { id: "install_api", label: "Setup & API Endpoints" },
    { id: "license_author", label: "License & Author" }
  ] as const;

  return (
    <div className="p-4 sm:p-6 md:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-6xl mx-auto">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b dark:border-white/10 border-slate-200/80 pb-6">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl dark:bg-white/[0.04] bg-slate-100 border dark:border-white/10 border-slate-200 dark:text-slate-300 text-slate-700 hover:text-[#2ecc71] hover:border-[#2ecc71]/40 transition-all cursor-pointer text-xs font-bold"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects & Experience</span>
        </button>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="https://mentor-log-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all shadow-md shadow-[#2ecc71]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Globe size={13} /> Live Demo <ExternalLink size={11} />
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-bold font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" /> React 19 + Node.js
          </span>
          <a
            href="https://github.com/EricMomo2957/MentorLog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 dark:bg-white/[0.04] bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 dark:text-slate-200 text-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border dark:border-white/10 border-slate-200 hover:border-[#2ecc71]/40 cursor-pointer"
          >
            <FaGithub size={14} /> Repository <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border dark:border-white/10 border-slate-300 dark:bg-white/[0.04] bg-slate-100 text-xs font-semibold uppercase tracking-wider text-[#2ecc71]">
          <GraduationCap size={13} />
          CoreLogic Consulting & System, Inc. • OJT Platform
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
          MentorLog
        </h1>
        
        <p className="text-xs sm:text-sm text-[#2ecc71] font-mono tracking-wider uppercase font-bold">
          Digital OJT Attendance, Task Tracking & Mentorship Management System
        </p>
        
        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 max-w-4xl leading-relaxed text-justify [text-align-last:left]">
          MentorLog is a full-stack On-the-Job Training management platform built to replace paper sign-in sheets and manual paperwork. It features clock-in / clock-out attendance logging, task assignment pipelines, document submissions with OCR schedule upload, real-time analytics charts, and dual portal workflows for students and mentors.
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {["React 19", "TypeScript", "Node.js", "Express.js", "MySQL", "Vite", "Tailwind CSS", "PHP Bridge"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 dark:bg-white/[0.04] bg-slate-100 border dark:border-white/5 border-slate-200 rounded-xl text-xs font-medium dark:text-slate-300 text-slate-700 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Interface Image Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-3xl overflow-hidden border dark:border-white/10 border-slate-200 shadow-2xl group dark:bg-slate-900 bg-slate-100">
        <Image
          src="/images/mentorlog.png"
          alt="MentorLog Web App Interface"
          fill
          sizes="(max-width: 1200px) 100vw, 1100px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
        
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] animate-pulse" />
            <div>
              <p className="text-white font-bold text-sm">MentorLog Production Application</p>
              <p className="text-xs text-slate-300 font-mono">https://mentor-log-two.vercel.app/</p>
            </div>
          </div>
          <a
            href="https://mentor-log-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md hover:scale-105 cursor-pointer shrink-0"
          >
            <Globe size={14} /> Open Live Web App <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Metric / Stat Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <TechStatCard 
          icon={<FaReact size={20} className="text-cyan-400" />} 
          title="Frontend Suite" 
          detail="React 19, TypeScript, Vite & Tailwind" 
        />
        <TechStatCard 
          icon={<FaNodeJs size={20} className="text-emerald-400" />} 
          title="Backend REST API" 
          detail="Node.js, Express & JWT Auth" 
        />
        <TechStatCard 
          icon={<SiMysql size={20} className="text-sky-400" />} 
          title="Database & Bridge" 
          detail="MySQL2 + PHP Bridge Layer" 
        />
        <TechStatCard 
          icon={<ShieldCheck size={20} className="text-[#2ecc71]" />} 
          title="Audit & Security" 
          detail="Role-Based Controls & Action Logs" 
        />
      </div>

      {/* Modern Minimalist Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-2xl dark:bg-white/[0.04] bg-slate-100 border dark:border-white/10 border-slate-200 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
              activeTab === t.id
                ? "bg-[#2ecc71] text-slate-950 shadow-md"
                : "dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: KEY FEATURES */}
      {activeTab === "features" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Student Portal */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <GraduationCap className="text-[#2ecc71]" size={22} /> Student Intern Portal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard 
                icon={<BarChart3 className="text-emerald-400" size={20} />}
                title="Dashboard Overview"
                desc="Real-time progress bars for rendered OJT hours, completed tasks, upcoming deadlines, and announcements."
              />
              <FeatureCard 
                icon={<ClipboardList className="text-blue-400" size={20} />}
                title="Task Management"
                desc="View task requirements, change status (Pending, In Progress, Done), and submit deliverables with attachments."
              />
              <FeatureCard 
                icon={<UserCheck className="text-cyan-400" size={20} />}
                title="Daily Attendance Logs"
                desc="Timestamped clock-in / clock-out logging with automated calculation of rendered hours."
              />
              <FeatureCard 
                icon={<FileSpreadsheet className="text-amber-400" size={20} />}
                title="Document Upload Hub"
                desc="Upload mandatory OJT forms such as MOA, Endorsement Letters, Daily Time Records, and Resumes."
              />
              <FeatureCard 
                icon={<FileText className="text-purple-400" size={20} />}
                title="Q&A & Leave Requests"
                desc="Ask questions directly to assigned mentors and file absence notifications with supporting files."
              />
              <FeatureCard 
                icon={<Globe className="text-pink-400" size={20} />}
                title="Calendar & Announcements"
                desc="Visual event calendar highlighting company activities, holidays, and submission deadlines."
              />
            </div>
          </div>

          {/* Admin & Mentor Portal */}
          <div className="space-y-4 pt-4 border-t dark:border-white/10 border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Shield className="text-blue-400" size={22} /> Mentor & Admin Portal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard 
                icon={<UserCheck className="text-blue-400" size={20} />}
                title="Student Management"
                desc="Comprehensive roster of all interns, progress percentages, active statuses, and detailed profiles."
              />
              <FeatureCard 
                icon={<ClipboardList className="text-[#2ecc71]" size={20} />}
                title="Task Assignment & Grading"
                desc="Assign tasks to individual students or groups, set deadlines, and review student file submissions."
              />
              <FeatureCard 
                icon={<Lock className="text-amber-400" size={20} />}
                title="Audit Action Logs"
                desc="Detailed audit logs capturing every attendance edit, status approval, and administrative action."
              />
              <FeatureCard 
                icon={<BarChart3 className="text-purple-400" size={20} />}
                title="Visual Analytics"
                desc="Interactive charts visualizing student completion rates, average hours, and department distributions."
              />
              <FeatureCard 
                icon={<KeyRound className="text-rose-400" size={20} />}
                title="Access Guards"
                desc="Admin verification codes, secure password reset pipelines, and role-based endpoint protection."
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STACK & ARCHITECTURE */}
      {activeTab === "stack_arch" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Layers className="text-[#2ecc71]" size={20} /> Technology Stack Details
            </h3>
            <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/[0.02] bg-white shadow-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="dark:bg-white/[0.04] bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
                  <tr>
                    <th className="p-4 w-1/4">Layer</th>
                    <th className="p-4 w-3/4">Technologies & Libraries</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 font-sans">
                  <tr>
                    <td className="p-4 font-bold text-[#2ecc71] flex items-center gap-2">
                      <FaReact size={16} /> Frontend
                    </td>
                    <td className="p-4">React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Chart.js, Recharts, React Router v7, Axios</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-emerald-400 flex items-center gap-2">
                      <FaNodeJs size={16} /> Backend API
                    </td>
                    <td className="p-4">Node.js, Express.js, TypeScript, MySQL2, JSON Web Tokens (JWT), Bcrypt.js, Multer (File Uploads)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-sky-400 flex items-center gap-2">
                      <SiMysql size={16} /> Database
                    </td>
                    <td className="p-4">MySQL (XAMPP / Standalone server)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-indigo-400 flex items-center gap-2">
                      <SiPhp size={16} /> Bridge Layer
                    </td>
                    <td className="p-4">PHP (Direct MySQL bridge endpoints for legacy web server integration)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Directory Tree Structure */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <FolderTree className="text-[#2ecc71]" size={20} /> Project Structure Layout
            </h3>
            
            <div className="rounded-2xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-slate-200 overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-3 border-b dark:border-white/10 border-slate-200 dark:bg-white/[0.03] bg-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">Project File Tree</span>
                </div>
              </div>
              <div className="p-5 font-mono text-xs text-emerald-400 dark:bg-black/40 bg-slate-950 overflow-x-auto leading-relaxed">
                <pre>{`MentorLog/
├── backend/                        # Node.js + Express TypeScript REST API
│   ├── src/
│   │   ├── app.ts                  # Server entry point & route initialization
│   │   ├── config/                 # MySQL2 connection pool
│   │   ├── controllers/            # 14 Controller modules for core services
│   │   ├── middleware/             # JWT Auth & error handling
│   │   └── routes/                 # Express REST routes
│   ├── uploads/                    # File uploads folder (Avatars, Submissions)
│   ├── .env                        # Server configurations
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   └── frontend/                   # React 19 + Vite TypeScript Frontend App
│       ├── src/
│       │   ├── App.tsx             # Routing & auth state
│       │   ├── auth/               # Login & Register views
│       │   ├── components/         # Protected routes & UI components
│       │   ├── pages/
│       │   │   ├── admin/          # Admin & Mentor views (20 modules)
│       │   │   ├── student/        # Student portal views (11 modules)
│       │   │   └── LandingPage.tsx # Public landing page
│       │   └── services/           # Axios API client
│       ├── package.json
│       ├── tailwind.config.js
│       └── vite.config.ts
│
└── php-bridge/                     # PHP MySQL Bridge Scripts
    ├── db_connection.php           # Database connection
    ├── get-tasks.php / assign-task.php
    └── update-profile.php`}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SETUP & API ENDPOINTS */}
      {activeTab === "install_api" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Terminal className="text-[#2ecc71]" size={20} /> Developer Setup & Installation Guide
            </h3>

            <div className="space-y-4">
              <CodeSnippetStep 
                step="1" 
                title="Clone Repository" 
                code={`git clone https://github.com/EricMomo2957/MentorLog.git\ncd MentorLog`}
                onCopy={(c) => copyToClipboard(c, "clone")}
                copied={copiedCmd === "clone"}
              />
              <CodeSnippetStep 
                step="2" 
                title="Backend API Setup" 
                code={`cd backend\nnpm install\n\n# Configure .env (PORT=5000, DB_NAME=mentorlog_db, JWT_SECRET=...)\nnpm run dev`}
                onCopy={(c) => copyToClipboard(c, "backend")}
                copied={copiedCmd === "backend"}
              />
              <CodeSnippetStep 
                step="3" 
                title="Frontend Setup" 
                code={`cd frontend/frontend\nnpm install\nnpm run dev\n\n# Web app available at http://localhost:5173`}
                onCopy={(c) => copyToClipboard(c, "frontend")}
                copied={copiedCmd === "frontend"}
              />
            </div>
          </div>

          {/* Endpoints Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Server className="text-[#2ecc71]" size={20} /> Key API Endpoints Overview
            </h3>
            <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/[0.02] bg-white shadow-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="dark:bg-white/[0.04] bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
                  <tr>
                    <th className="p-3.5">Service</th>
                    <th className="p-3.5">Method</th>
                    <th className="p-3.5">Endpoint</th>
                    <th className="p-3.5">Description</th>
                    <th className="p-3.5">Access Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 text-xs">
                  <tr>
                    <td className="p-3.5 font-bold text-blue-400 font-mono">Auth</td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">POST</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/auth/register</td>
                    <td className="p-3.5">Register new student or mentor account</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono">Public</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-blue-400 font-mono">Auth</td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">POST</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/auth/login</td>
                    <td className="p-3.5">Authenticate user and issue JWT bearer token</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono">Public</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-purple-400 font-mono">Students</td>
                    <td className="p-3.5 font-mono text-sky-400 font-bold">GET</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/admin/students</td>
                    <td className="p-3.5">Retrieve list of registered student interns</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono font-bold">Admin</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-400 font-mono">Tasks</td>
                    <td className="p-3.5 font-mono text-amber-400 font-bold">GET / POST</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/tasks</td>
                    <td className="p-3.5">Fetch and assign OJT student task deliverables</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-[#2ecc71]/10 text-[#2ecc71] font-mono font-bold">Protected</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-400 font-mono">Attendance</td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">POST</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/attendance</td>
                    <td className="p-3.5">Log clock-in / clock-out daily records</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono font-bold">Student</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: LICENSE & AUTHOR */}
      {activeTab === "license_author" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="p-5 sm:p-6 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3">
            <h3 className="text-lg font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <ShieldCheck className="text-[#2ecc71]" size={20} /> Open Source License
            </h3>
            <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
              This project is licensed under the <strong className="text-[#2ecc71]">GNU General Public License v3.0 (GPL-3.0)</strong>. You are free to modify, inspect, and distribute the software while preserving attribution.
            </p>
          </div>

          <div className="p-6 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold dark:text-white text-slate-900">Eric Dominic Momo</h4>
              <p className="text-xs text-[#2ecc71] font-mono font-bold mt-1">Lead Full-Stack Developer & Systems Architect</p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <a 
                href="https://mentor-log-two.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                <Globe size={14} /> Live Demo <ExternalLink size={12} />
              </a>
              <a 
                href="https://github.com/EricMomo2957" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 dark:bg-white/5 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/10 dark:text-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold transition-all border dark:border-white/10 border-slate-200 hover:border-[#2ecc71]/40 cursor-pointer"
              >
                <FaGithub size={14} /> @EricMomo2957 <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TechStatCard({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 hover:border-[#2ecc71]/40 transition-all shadow-sm space-y-2">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl dark:bg-white/[0.05] bg-slate-100">
          {icon}
        </div>
        <div>
          <h4 className="font-bold dark:text-white text-slate-900 text-sm">{title}</h4>
          <p className="text-[11px] dark:text-slate-400 text-slate-500 font-mono mt-0.5">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 hover:border-[#2ecc71]/40 transition-all shadow-sm space-y-3">
      <div className="p-2.5 dark:bg-white/[0.05] bg-slate-100 w-fit rounded-xl">
        {icon}
      </div>
      <h4 className="font-bold dark:text-white text-slate-900 text-base">{title}</h4>
      <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed text-justify [text-align-last:left]">
        {desc}
      </p>
    </div>
  );
}

function CodeSnippetStep({ step, title, code, onCopy, copied }: { step: string, title: string, code: string, onCopy: (c: string) => void, copied: boolean }) {
  return (
    <div className="rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 overflow-hidden shadow-sm">
      <div className="flex justify-between items-center px-4 py-2.5 dark:bg-white/[0.03] bg-slate-100 border-b dark:border-white/10 border-slate-200">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2ecc71] flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#2ecc71]/20 flex items-center justify-center text-[10px] font-extrabold text-[#2ecc71]">{step}</span>
          {title}
        </span>
        <button
          onClick={() => onCopy(code)}
          className="text-xs dark:text-slate-400 text-slate-500 hover:text-[#2ecc71] flex items-center gap-1 cursor-pointer transition-colors"
        >
          {copied ? <Check size={13} className="text-[#2ecc71]" /> : <Copy size={13} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="p-4 dark:bg-black/50 bg-slate-950 font-mono text-xs text-emerald-400 overflow-x-auto">
        <pre className="leading-relaxed">{code}</pre>
      </div>
    </div>
  );
}
