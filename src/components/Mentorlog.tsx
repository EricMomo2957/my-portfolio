"use client";
import { useState } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  Code2, 
  Cpu, 
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
  Database,
  Server,
  FileText,
  KeyRound,
  User
} from "lucide-react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMysql, SiTypescript, SiVite, SiTailwindcss, SiPhp } from "react-icons/si";

export default function Mentorlog({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"features" | "stack_arch" | "install_api" | "license_author">("features");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(label);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="p-6 md:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b dark:border-white/10 border-slate-200 pb-6">
        <button 
          onClick={onBack} 
          className="group flex items-center gap-2 dark:text-slate-400 text-slate-600 hover:text-[#2ecc71] transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-semibold">Back to Projects</span>
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-bold uppercase tracking-wider">
            React 19 + Node.js + TypeScript
          </span>
          <span className="px-3 py-1 rounded-full border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 text-xs font-bold uppercase tracking-wider">
            Status: Production Ready
          </span>
          <a 
            href="https://github.com/EricMomo2957/MentorLog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#161b22] hover:bg-[#21262d] text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all border border-white/10 shadow-sm hover:border-[#2ecc71]/50 cursor-pointer"
          >
            <FaGithub size={14} /> GitHub Repo <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            MentorLog <span className="text-[#2ecc71]">🎓</span>
          </h1>
        </div>
        <p className="text-[#2ecc71] font-mono text-sm tracking-widest uppercase font-bold">
          OJT Attendance & Task Management System
        </p>
        <p className="text-base md:text-lg dark:text-slate-300 text-slate-600 max-w-4xl leading-relaxed">
          MentorLog is a comprehensive, full-stack On-the-Job Training (OJT) Management Platform designed to streamline attendance logging, task assignments, document submissions, progress tracking, and communication between mentors, administrators, and student interns.
        </p>

        {/* Tech Badges Row */}
        <div className="flex flex-wrap gap-2 pt-2">
          {["React 19", "TypeScript", "Node.js", "Express.js", "MySQL", "Vite", "Tailwind CSS", "PHP Bridge"].map((tech) => (
            <span key={tech} className="px-3 py-1 dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 rounded-lg text-xs font-semibold dark:text-slate-300 text-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Interface Image Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-3xl overflow-hidden border dark:border-white/10 border-slate-200/80 shadow-2xl group dark:bg-slate-900 bg-slate-100">
        <Image
          src="/images/mentorlog.png"
          alt="MentorLog Web App Interface"
          fill
          sizes="(max-width: 1200px) 100vw, 1100px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechStatCard 
          icon={<FaReact size={22} className="text-cyan-400" />} 
          title="Frontend Suite" 
          detail="React 19, TypeScript, Vite & Tailwind" 
        />
        <TechStatCard 
          icon={<FaNodeJs size={22} className="text-emerald-500" />} 
          title="Backend API" 
          detail="Node.js, Express & JWT Auth" 
        />
        <TechStatCard 
          icon={<SiMysql size={24} className="text-sky-500" />} 
          title="Database & Bridge" 
          detail="MySQL2 + PHP Bridge Layer" 
        />
        <TechStatCard 
          icon={<ShieldCheck size={20} className="text-[#2ecc71]" />} 
          title="Audit & Security" 
          detail="Role-Based Controls & Action Logs" 
        />
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b dark:border-white/10 border-slate-200 overflow-x-auto gap-2">
        <TabButton id="features" label="🚀 Key Features" active={activeTab} onClick={setActiveTab} />
        <TabButton id="stack_arch" label="🛠️ Stack & Structure" active={activeTab} onClick={setActiveTab} />
        <TabButton id="install_api" label="⚙️ Setup & Endpoints" active={activeTab} onClick={setActiveTab} />
        <TabButton id="license_author" label="📜 License & Author" active={activeTab} onClick={setActiveTab} />
      </div>

      {/* TAB CONTENT: KEY FEATURES */}
      {activeTab === "features" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Student Portal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <GraduationCap className="text-[#2ecc71]" size={26} /> 👨‍🎓 Student Portal Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<BarChart3 className="text-emerald-400" size={24} />}
                title="Dashboard Overview"
                desc="Real-time metrics for completed tasks, total rendered OJT hours, upcoming deadlines, and announcement feeds."
              />
              <FeatureCard 
                icon={<ClipboardList className="text-blue-400" size={24} />}
                title="Task Management & Submissions"
                desc="View assigned tasks, track status (Pending, In Progress, Completed), and submit deliverables with file attachments."
              />
              <FeatureCard 
                icon={<UserCheck className="text-cyan-400" size={24} />}
                title="Attendance & Schedule Upload"
                desc="Log clock-in / clock-out timestamps and upload study schedules with OCR schedule verification support."
              />
              <FeatureCard 
                icon={<FileSpreadsheet className="text-amber-400" size={24} />}
                title="Document Management"
                desc="Submit mandatory OJT requirements including Resume, MOA, Endorsement Letters, and Daily Time Records."
              />
              <FeatureCard 
                icon={<FileText className="text-purple-400" size={24} />}
                title="Q&A & Leave Requests"
                desc="Submit inquiries directly to mentors via the Ask Question portal and file leave or schedule adjustment requests."
              />
              <FeatureCard 
                icon={<Globe className="text-pink-400" size={24} />}
                title="Announcements & Calendar"
                desc="Interactive event calendar and real-time announcement feed to stay updated with institutional news."
              />
            </div>
          </div>

          {/* Admin & Mentor Portal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Shield className="text-blue-400" size={26} /> 🛡️ Admin & Mentor Portal Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<UserCheck className="text-blue-400" size={24} />}
                title="Student Management"
                desc="Overview of all registered interns, status controls, progress monitoring, and student profile management."
              />
              <FeatureCard 
                icon={<ClipboardList className="text-[#2ecc71]" size={24} />}
                title="Task Assignment & Review"
                desc="Create, update, assign, and delete tasks for individual students or cohorts. Review and approve student submissions."
              />
              <FeatureCard 
                icon={<Lock className="text-amber-400" size={24} />}
                title="Attendance & Audit Log System"
                desc="Comprehensive audit logging tracking all system actions, student sign-ins, and attendance verification history."
              />
              <FeatureCard 
                icon={<BarChart3 className="text-purple-400" size={24} />}
                title="Analytics & Reporting"
                desc="Interactive charts (Chart.js & Recharts) visualizing completion rates, attendance trends, and weekly report summaries."
              />
              <FeatureCard 
                icon={<KeyRound className="text-rose-400" size={24} />}
                title="Security & Access Control"
                desc="Admin verification codes management, password reset handler, and protected role-based routing middleware."
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: STACK & STRUCTURE */}
      {activeTab === "stack_arch" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Tech Stack Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Layers className="text-[#2ecc71]" size={22} /> Technology Stack Table
            </h3>
            <div className="overflow-x-auto dark:bg-[#161b22] bg-white rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
              <table className="w-full text-left text-sm">
                <thead className="dark:bg-white/5 bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
                  <tr>
                    <th className="p-4 w-1/4">Layer</th>
                    <th className="p-4 w-3/4">Technologies</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700">
                  <tr>
                    <td className="p-4 font-bold text-[#2ecc71] flex items-center gap-2">
                      <FaReact size={18} /> Frontend
                    </td>
                    <td className="p-4">React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Chart.js, Recharts, React Router v7, Axios</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-emerald-400 flex items-center gap-2">
                      <FaNodeJs size={18} /> Backend
                    </td>
                    <td className="p-4">Node.js, Express.js, TypeScript, MySQL2, JSON Web Tokens (JWT), Bcrypt.js, Multer (File Uploads), Nodemon</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-sky-400 flex items-center gap-2">
                      <SiMysql size={18} /> Database
                    </td>
                    <td className="p-4">MySQL (XAMPP / Standalone server)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-indigo-400 flex items-center gap-2">
                      <SiPhp size={18} /> Bridge Layer
                    </td>
                    <td className="p-4">PHP (Direct MySQL endpoints for custom web service integration)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Directory Tree Structure */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <FolderTree className="text-[#2ecc71]" size={22} /> Project Structure Layout
            </h3>
            <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
              <div className="bg-[#0d1117] p-5 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed border border-white/5">
                <pre>{`MentorLog/
├── backend/                        # Node.js + Express TypeScript REST API
│   ├── src/
│   │   ├── app.ts                  # Server entry point & API route definitions
│   │   ├── config/                 # Database connection pool (MySQL2)
│   │   ├── controllers/            # 14 Controller modules for core services
│   │   ├── middleware/             # JWT Authentication middleware
│   │   ├── routes/                 # Express route definitions
│   │   └── utils/                  # Utility functions & helpers
│   ├── uploads/                    # File upload directory (Avatars, Submissions, OCR)
│   ├── .env                        # Server environment configuration
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   └── frontend/                   # React + Vite TypeScript Frontend App
│       ├── src/
│       │   ├── App.tsx             # Main routing & application state
│       │   ├── auth/               # Auth components (Login, Register)
│       │   ├── components/         # Protected routes & reusable components
│       │   ├── pages/
│       │   │   ├── admin/          # 20 Admin/Mentor management views
│       │   │   ├── student/        # 11 Student portal views
│       │   │   └── LandingPage.tsx # Public landing page
│       │   └── services/           # Axios API service client
│       ├── package.json
│       ├── tailwind.config.js
│       └── vite.config.ts
│
└── php-bridge/                     # PHP Scripts for standalone DB services
    ├── db_connection.php           # MySQL connection setup
    ├── get-tasks.php / assign-task.php / create-task.php
    ├── get-students.php / update-profile.php
    └── update-task-status.php`}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: INSTALLATION & API ENDPOINTS */}
      {activeTab === "install_api" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Installation steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Terminal className="text-[#2ecc71]" size={22} /> Developer Setup & Installation Guide
            </h3>

            <div className="space-y-4">
              <CodeSnippetStep 
                step="1" 
                title="Clone the Repository" 
                code="git clone https://github.com/EricMomo2957/MentorLog.git&#10;cd MentorLog"
                onCopy={(c) => copyToClipboard(c, "clone")}
                copied={copiedCmd === "clone"}
              />
              <CodeSnippetStep 
                step="2" 
                title="Database Setup" 
                code="# Start Apache & MySQL in XAMPP Control Panel&#10;# Open http://localhost/phpmyadmin&#10;# Create database: mentorlog_db&#10;# Import database schema tables into mentorlog_db"
                onCopy={(c) => copyToClipboard(c, "db")}
                copied={copiedCmd === "db"}
              />
              <CodeSnippetStep 
                step="3" 
                title="Backend Setup" 
                code="cd backend&#10;npm install&#10;&#10;# Configure backend/.env:&#10;# PORT=5000&#10;# DB_HOST=localhost&#10;# DB_USER=root&#10;# DB_PASSWORD=&#10;# DB_NAME=mentorlog_db&#10;# JWT_SECRET=your_super_secret_jwt_key_here&#10;&#10;npm run dev"
                onCopy={(c) => copyToClipboard(c, "backend")}
                copied={copiedCmd === "backend"}
              />
              <CodeSnippetStep 
                step="4" 
                title="Frontend Setup" 
                code="cd frontend/frontend&#10;npm install&#10;npm run dev&#10;&#10;# Access app at: http://localhost:5173"
                onCopy={(c) => copyToClipboard(c, "frontend")}
                copied={copiedCmd === "frontend"}
              />
              <CodeSnippetStep 
                step="5" 
                title="PHP Bridge Setup (Optional)" 
                code="# Ensure root is located within web server directory:&#10;# Path: c:/xampp/htdocs/MentorLog/php-bridge/&#10;# Test at: http://localhost/MentorLog/php-bridge/db_connection.php"
                onCopy={(c) => copyToClipboard(c, "php")}
                copied={copiedCmd === "php"}
              />
            </div>
          </div>

          {/* API Endpoints Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Server className="text-[#2ecc71]" size={22} /> Key API Endpoints Overview
            </h3>
            <div className="overflow-x-auto dark:bg-[#161b22] bg-white rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
              <table className="w-full text-left text-sm">
                <thead className="dark:bg-white/5 bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
                  <tr>
                    <th className="p-3">Service</th>
                    <th className="p-3">Method</th>
                    <th className="p-3">Endpoint</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 font-mono text-xs">
                  <tr>
                    <td className="p-3 font-semibold font-sans text-blue-400">Auth</td>
                    <td className="p-3 text-emerald-400 font-bold">POST</td>
                    <td className="p-3 text-slate-200">/api/auth/register</td>
                    <td className="p-3 font-sans">Register new student or mentor account</td>
                    <td className="p-3 font-sans text-slate-400">Public</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-blue-400">Auth</td>
                    <td className="p-3 text-emerald-400 font-bold">POST</td>
                    <td className="p-3 text-slate-200">/api/auth/login</td>
                    <td className="p-3 font-sans">Authenticate user and issue JWT token</td>
                    <td className="p-3 font-sans text-slate-400">Public</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-purple-400">Students</td>
                    <td className="p-3 text-sky-400 font-bold">GET</td>
                    <td className="p-3 text-slate-200">/api/admin/students</td>
                    <td className="p-3 font-sans">Retrieve list of all registered interns</td>
                    <td className="p-3 font-sans text-purple-400 font-bold">Admin</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-purple-400">Audit Logs</td>
                    <td className="p-3 text-sky-400 font-bold">GET</td>
                    <td className="p-3 text-slate-200">/api/admin/audit-logs</td>
                    <td className="p-3 font-sans">Retrieve system action & audit logs</td>
                    <td className="p-3 font-sans text-purple-400 font-bold">Admin</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-amber-400">Tasks</td>
                    <td className="p-3 text-amber-400 font-bold">GET / POST</td>
                    <td className="p-3 text-slate-200">/api/tasks</td>
                    <td className="p-3 font-sans">Fetch and assign OJT student tasks</td>
                    <td className="p-3 font-sans text-emerald-400 font-bold">Protected</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-emerald-400">Attendance</td>
                    <td className="p-3 text-emerald-400 font-bold">POST</td>
                    <td className="p-3 text-slate-200">/api/attendance</td>
                    <td className="p-3 font-sans">Log clock-in / clock-out daily records</td>
                    <td className="p-3 font-sans text-cyan-400 font-bold">Student</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-cyan-400">Submissions</td>
                    <td className="p-3 text-emerald-400 font-bold">POST</td>
                    <td className="p-3 text-slate-200">/api/documents/upload</td>
                    <td className="p-3 font-sans">Upload document deliverables & forms</td>
                    <td className="p-3 font-sans text-cyan-400 font-bold">Student</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-purple-400">Analytics</td>
                    <td className="p-3 text-sky-400 font-bold">GET</td>
                    <td className="p-3 text-slate-200">/api/analytics</td>
                    <td className="p-3 font-sans">Fetch summary report & progress metrics</td>
                    <td className="p-3 font-sans text-purple-400 font-bold">Admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: LICENSE & AUTHOR */}
      {activeTab === "license_author" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* License Section */}
          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <ShieldCheck className="text-[#2ecc71]" size={22} /> Open Source License
            </h3>
            <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
              This project is licensed under the <strong className="text-[#2ecc71]">GNU General Public License v3.0 (GPL-3.0)</strong>.
            </p>
            <div className="bg-[#0d1117] p-4 rounded-xl text-xs dark:text-slate-300 text-slate-400 space-y-2 border border-white/5">
              <p className="font-semibold text-emerald-400">Under this license:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Anyone is free to use, modify, and distribute this software.</li>
                <li>Any modified or derivative versions of this project must remain open-source under GPL-3.0.</li>
                <li>Credit and Copyright attribution to <strong>Eric Dominic Momo</strong> must be preserved in all copies or substantial portions of the software.</li>
              </ul>
            </div>
          </div>

          {/* Author Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <User className="text-[#2ecc71]" size={22} /> Project Author
            </h3>
            <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold dark:text-white text-slate-900">Eric Dominic Momo</h4>
                <p className="text-xs text-[#2ecc71] font-semibold mt-1">Lead Full-Stack Developer & Systems Architect</p>
              </div>
              <a 
                href="https://github.com/EricMomo2957" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#161b22] hover:bg-[#21262d] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 shadow-sm hover:border-[#2ecc71]/50 cursor-pointer"
              >
                <FaGithub size={18} /> @EricMomo2957 <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TabButton({ id, label, active, onClick }: { id: "features" | "stack_arch" | "install_api" | "license_author", label: string, active: string, onClick: (id: "features" | "stack_arch" | "install_api" | "license_author") => void }) {
  const isActive = active === id;
  return (
    <button 
      onClick={() => onClick(id)}
      className={`px-4 sm:px-5 py-3 text-xs md:text-sm font-bold transition-all border-b-2 whitespace-nowrap shrink-0 cursor-pointer ${
        isActive 
          ? "border-[#2ecc71] text-[#2ecc71]" 
          : "border-transparent dark:text-slate-400 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
      }`}
    >
      {label}
    </button>
  );
}

function TechStatCard({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="dark:bg-[#161b22] bg-white p-5 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-2">
      <div className="flex items-center gap-3">
        <div className="p-2.5 dark:bg-white/5 bg-slate-100 rounded-xl">
          {icon}
        </div>
        <div>
          <h4 className="font-bold dark:text-white text-slate-900 text-sm">{title}</h4>
          <p className="text-xs dark:text-slate-400 text-slate-500 font-mono mt-0.5">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md hover:border-[#2ecc71]/40 transition-all space-y-3">
      <div className="p-3 dark:bg-white/5 bg-slate-100 w-fit rounded-xl">
        {icon}
      </div>
      <h4 className="font-bold dark:text-white text-slate-900 text-lg">{title}</h4>
      <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function CodeSnippetStep({ step, title, code, onCopy, copied }: { step: string, title: string, code: string, onCopy: (c: string) => void, copied: boolean }) {
  return (
    <div className="dark:bg-[#161b22] bg-white p-5 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2ecc71] flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#2ecc71]/20 flex items-center justify-center text-xs font-bold text-[#2ecc71]">{step}</span>
          {title}
        </span>
        <button 
          onClick={() => onCopy(code)} 
          className="text-xs dark:text-slate-400 text-slate-500 hover:text-[#2ecc71] flex items-center gap-1 cursor-pointer transition-colors"
        >
          {copied ? <Check size={14} className="text-[#2ecc71]" /> : <Copy size={14} />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <div className="bg-[#0d1117] p-3 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto border border-white/5">
        <pre>{code}</pre>
      </div>
    </div>
  );
}
