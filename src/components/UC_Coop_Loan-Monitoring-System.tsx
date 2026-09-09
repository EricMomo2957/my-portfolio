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
  CreditCard,
  FileCheck,
  Building2,
  TrendingUp,
  Database,
  Layers,
  Server,
  FileSpreadsheet,
  BookOpen,
  UserCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

export default function UCCoopLoanMonitoringSystem({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"overview_features" | "stack_arch" | "setup_api" | "postgres_cheatsheet">("overview_features");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(label);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const tabs = [
    { id: "overview_features", label: "Overview & Features" },
    { id: "stack_arch", label: "Stack & Architecture" },
    { id: "setup_api", label: "Setup & API Endpoints" },
    { id: "postgres_cheatsheet", label: "PostgreSQL Guide" }
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
            href="https://uc-coop-loan-monitoring.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all shadow-md shadow-[#2ecc71]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Globe size={13} /> Live Demo <ExternalLink size={11} />
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-bold font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" /> Live on Railway
          </span>
          <a
            href="https://github.com/Vinzz290034/UC_Coop_Loan-Monitoring-System"
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
          <Building2 size={13} />
          KATD Solutions • UC METC Cooperative Project
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
          UC Coop Loan Monitoring System
        </h1>
        
        <p className="text-xs sm:text-sm text-[#2ecc71] font-mono tracking-wider uppercase font-bold">
          Cooperative Financial Management & Loan Amortization Engine
        </p>
        
        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 max-w-4xl leading-relaxed text-justify [text-align-last:left]">
          Engineered the backend API and financial computation engine for the UC METC Campus loan monitoring platform. Built using Node.js (Express) and PostgreSQL, the system automates interest amortization schedules (Flat-Rate & Diminishing Balance), role-based approval routing, transaction ledger accounting, and binary OpenXML Excel audit report compilation.
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {["Node.js (v20+)", "Express.js", "PostgreSQL", "Pg Client Pool", "JWT Auth", "Bcrypt.js", "ExcelJS Reports", "Helmet Security"].map((tech) => (
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
          src="/images/uccoop.png"
          alt="UC COOP Loan Monitoring System & Coop Sync Dashboard"
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
              <p className="text-white font-bold text-sm">CoopSync Member & Loan Web Portal</p>
              <p className="text-xs text-slate-300 font-mono">https://uc-coop-loan-monitoring.up.railway.app/</p>
            </div>
          </div>
          <a
            href="https://uc-coop-loan-monitoring.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md hover:scale-105 cursor-pointer shrink-0"
          >
            <Globe size={14} /> Open Live Portal <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Metric / Stat Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <TechStatCard
          icon={<FaNodeJs size={20} className="text-emerald-400" />}
          title="Runtime & Architecture"
          detail="Node.js v20+ ES Modules & Express"
        />
        <TechStatCard
          icon={<SiPostgresql size={20} className="text-sky-400" />}
          title="Database Pool"
          detail="PostgreSQL (Pg Pool, 13 Tables)"
        />
        <TechStatCard
          icon={<CreditCard size={20} className="text-[#2ecc71]" />}
          title="Calculation Engine"
          detail="Flat-Rate & Diminishing Balance"
        />
        <TechStatCard
          icon={<FileSpreadsheet size={20} className="text-amber-400" />}
          title="Audit Exporter"
          detail="OpenXML Excel Analytical Sheets"
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

      {/* TAB 1: OVERVIEW & FEATURES */}
      {activeTab === "overview_features" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <CreditCard className="text-[#2ecc71]" size={22} /> Financial Engine Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard
                icon={<CreditCard className="text-[#2ecc71]" size={20} />}
                title="Amortization Calculation Core"
                desc="Automates monthly interest calculations for Flat-Rate and Diminishing Balance loans with customizable payment frequencies."
              />
              <FeatureCard
                icon={<Building2 className="text-blue-400" size={20} />}
                title="Coop Member Ledgers"
                desc="Manages Share Capital, Fixed Deposits, and Investment ledgers with double-entry transaction auditing and live balance tracking."
              />
              <FeatureCard
                icon={<FileCheck className="text-amber-400" size={20} />}
                title="Loan Lifecycle Engine"
                desc="Handles product configuration, member eligibility screening, multi-tier approval routing, disbursement records, and collections."
              />
              <FeatureCard
                icon={<TrendingUp className="text-purple-400" size={20} />}
                title="Billing & Delinquency Aging"
                desc="Runs automated billing queues, computes overdue fines, and produces standard 30/60/90-day delinquency aging reports."
              />
              <FeatureCard
                icon={<FileSpreadsheet className="text-emerald-400" size={20} />}
                title="Excel Report Compiler"
                desc="Utilizes ExcelJS to dynamically generate binary OpenXML spreadsheets formatted for cooperative board review and external audits."
              />
              <FeatureCard
                icon={<ShieldCheck className="text-rose-400" size={20} />}
                title="Role Security & Guards"
                desc="Guards all endpoints with JWT bearer token extraction, bcrypt password hashing, Helmet headers, and rate limiting."
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STACK & ARCHITECTURE */}
      {activeTab === "stack_arch" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Tech Stack Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Layers className="text-[#2ecc71]" size={20} /> Technology Stack Details
            </h3>
            <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/[0.02] bg-white shadow-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="dark:bg-white/[0.04] bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
                  <tr>
                    <th className="p-4 w-1/4">Component</th>
                    <th className="p-4 w-3/4">Specification & Dependencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 font-sans">
                  <tr>
                    <td className="p-4 font-bold text-emerald-400 flex items-center gap-2">
                      <FaNodeJs size={16} /> Runtime
                    </td>
                    <td className="p-4">Node.js (v20+) with ES Modules (<code className="text-xs font-mono px-1.5 py-0.5 dark:bg-white/10 bg-slate-100 rounded text-emerald-400 font-semibold">&quot;type&quot;: &quot;module&quot;</code>)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-blue-400 flex items-center gap-2">
                      <Server size={16} /> Framework
                    </td>
                    <td className="p-4">Express.js REST Application Server</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-sky-400 flex items-center gap-2">
                      <SiPostgresql size={16} /> Database
                    </td>
                    <td className="p-4">PostgreSQL Relational Database (Pg Client Pool Connection)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-purple-400 flex items-center gap-2">
                      <Lock size={16} /> Security
                    </td>
                    <td className="p-4">bcryptjs (Password hashing), jsonwebtoken (Session tokens), helmet (Security headers), express-rate-limit (DoS protection)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-400 flex items-center gap-2">
                      <FileSpreadsheet size={16} /> Analytics & Reports
                    </td>
                    <td className="p-4">exceljs (Analytical OpenXML spreadsheet compiler & exporter)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Directory Tree Structure */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <FolderTree className="text-[#2ecc71]" size={20} /> Repository Directory Layout
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
                <pre>{`UC_Coop_Loan-Monitoring-System/
├── config/
│   └── db.js                 # PostgreSQL client connection pool
├── controllers/
│   ├── authController.js     # User registration, login, and sessions
│   ├── memberController.js   # CRUD & audited profile status updates
│   ├── accountController.js  # Share Capital, Fixed Deposit, & Investment ledgers
│   ├── loanController.js     # Loan products, applications, and repayments
│   ├── billingController.js  # Billing run queues and delinquency aging
│   └── reportController.js   # Analytical query engines for Excel reports
├── db/
│   ├── schema.sql            # Core database schema (13 tables, indices)
│   └── seeds.sql             # Setup seeds (Roles, Admin accounts, Products)
├── middleware/
│   ├── authMiddleware.js     # JWT extraction & Role-based restriction guards
│   └── errorMiddleware.js    # Global centralized error handler
├── routes/
│   ├── authRoutes.js         # /api/auth/* endpoints
│   ├── memberRoutes.js       # /api/members/* endpoints
│   ├── accountRoutes.js      # /api/accounts/* endpoints
│   ├── loanRoutes.js         # /api/loans/* endpoints
│   ├── billingRoutes.js      # /api/billing/* endpoints
│   └── reportRoutes.js       # /api/reports/* endpoints
├── services/
│   ├── calculationCore.js    # Financial math for Flat-Rate & Diminishing Balance
│   └── reportExporter.js     # Binary OpenXML Excel sheet compiler
├── .env.example              # Template config
├── .gitignore                # Protected environments/nodes exclusions
├── app.js                    # Express app configurations & router mounts
└── server.js                 # Server entry point listener`}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SETUP & API ENDPOINTS */}
      {activeTab === "setup_api" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Terminal className="text-[#2ecc71]" size={20} /> Developer Setup & Installation
            </h3>

            <div className="space-y-4">
              <CodeSnippetStep
                step="1"
                title="Database Initialization (PostgreSQL)"
                code={`# Connect to psql console:\npsql -U postgres\n\n# Create database:\nCREATE DATABASE uc_coop_loans;\n\n# Import schema & initial seeds:\npsql -U postgres -d uc_coop_loans -f db/schema.sql\npsql -U postgres -d uc_coop_loans -f db/seeds.sql`}
                onCopy={(c) => copyToClipboard(c, "db-setup")}
                copied={copiedCmd === "db-setup"}
              />
              <CodeSnippetStep
                step="2"
                title="Server Execution & Testing"
                code={`# Install server dependencies:\nnpm install\n\n# Start development server:\nnpm run dev\n\n# Server listening at http://localhost:5000`}
                onCopy={(c) => copyToClipboard(c, "server-run")}
                copied={copiedCmd === "server-run"}
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
                    <th className="p-3.5">Route Module</th>
                    <th className="p-3.5">Base Endpoint</th>
                    <th className="p-3.5">Core Responsibilities</th>
                    <th className="p-3.5">Guard Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 text-xs">
                  <tr>
                    <td className="p-3.5 font-bold text-blue-400 font-mono">authRoutes</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/auth/*</td>
                    <td className="p-3.5">User registration, login authentication, and JWT sessions</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono">Public</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-purple-400 font-mono">memberRoutes</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/members/*</td>
                    <td className="p-3.5">Coop member CRUD and profile status updates</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono font-bold">Admin / Manager</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-400 font-mono">accountRoutes</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/accounts/*</td>
                    <td className="p-3.5">Share Capital, Fixed Deposit, & Investment ledgers</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono font-bold">Manager</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-400 font-mono">loanRoutes</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/loans/*</td>
                    <td className="p-3.5">Loan product creation, applications, approval & repayments</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-[#2ecc71]/10 text-[#2ecc71] font-mono font-bold">Protected</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-400 font-mono">billingRoutes</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/billing/*</td>
                    <td className="p-3.5">Billing run queues, penalty computation & delinquency aging</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono font-bold">Admin</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-rose-400 font-mono">reportRoutes</td>
                    <td className="p-3.5 font-mono text-emerald-400">/api/reports/*</td>
                    <td className="p-3.5">Analytical query engines & Excel spreadsheet generation</td>
                    <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono font-bold">Admin / Manager</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: POSTGRESQL GUIDE */}
      {activeTab === "postgres_cheatsheet" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <SiPostgresql className="text-sky-400" size={22} /> PostgreSQL Database Reference
            </h3>
            <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600">
              Essential PostgreSQL CLI (<code className="font-mono text-xs px-1.5 py-0.5 bg-slate-800 text-emerald-300 rounded">psql</code>) meta-commands and query patterns applied to the UC Coop database.
            </p>
          </div>

          <CheatSheetTable
            title="Terminal & Connection Commands"
            icon={<Terminal size={16} className="text-[#2ecc71]" />}
            rows={[
              { task: "Connect to database", cmd: "psql -U postgres -d uc_coop_loans", desc: "Connects directly to the target cooperative database." },
              { task: "List databases", cmd: "\\l", desc: "Lists all databases available on PostgreSQL server." },
              { task: "List tables", cmd: "\\dt", desc: "Lists all 13 tables in the active database." },
              { task: "Describe table schema", cmd: "\\d table_name", desc: "Shows columns, data types, constraints, and foreign keys." },
              { task: "Exit psql session", cmd: "\\q", desc: "Closes the active database connection." }
            ]}
          />

          <CheatSheetTable
            title="Database Verification Queries"
            icon={<Database size={16} className="text-sky-400" />}
            rows={[
              { task: "Query users table", cmd: "SELECT id, email, role FROM users;", desc: "Checks administrative, manager, and member seed records." },
              { task: "Query loan applications", cmd: "SELECT * FROM loan_applications WHERE status = 'pending';", desc: "Inspects applications awaiting approval routing." },
              { task: "Show connection status", cmd: "\\conninfo", desc: "Displays current database, authenticated user, host, and port." }
            ]}
          />
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

function CheatSheetTable({ title, icon, rows }: { title: string, icon: React.ReactNode, rows: Array<{ task: string, cmd: string, desc: string }> }) {
  return (
    <div className="space-y-3">
      <h4 className="font-bold dark:text-white text-slate-900 text-base flex items-center gap-2">
        {icon} {title}
      </h4>
      <div className="overflow-x-auto rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/[0.02] bg-white shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="dark:bg-white/[0.04] bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
            <tr>
              <th className="p-3 w-1/4">Task</th>
              <th className="p-3 w-1/3 font-mono">Command</th>
              <th className="p-3 w-5/12">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 text-xs">
            {rows.map((r) => (
              <tr key={r.task}>
                <td className="p-3 font-semibold dark:text-slate-200 text-slate-800">{r.task}</td>
                <td className="p-3 font-mono text-emerald-400 font-bold dark:bg-black/20 bg-slate-100">{r.cmd}</td>
                <td className="p-3 dark:text-slate-400 text-slate-600">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
