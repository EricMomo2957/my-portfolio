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
  UserCheck
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
          <a
            href="https://uc-coop-loan-monitoring.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-4 py-1.5 rounded-full text-xs font-extrabold transition-all shadow-lg shadow-[#2ecc71]/25 hover:scale-105 cursor-pointer"
          >
            <Globe size={14} /> Live Demo <ExternalLink size={12} />
          </a>
          <span className="px-3 py-1 rounded-full border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-bold uppercase tracking-wider">
            Node.js (ES Modules) + PostgreSQL
          </span>
          <span className="px-3 py-1 rounded-full border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 text-xs font-bold uppercase tracking-wider">
            Status: Live on Railway
          </span>
          <a
            href="https://github.com/Vinzz290034/UC_Coop_Loan-Monitoring-System"
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
            UC COOP Loan Monitoring System <span className="text-[#2ecc71]">🏦</span>
          </h1>
        </div>
        <p className="text-[#2ecc71] font-mono text-sm tracking-widest uppercase font-bold">
          Cooperative Financial Management & Amortization Engine
        </p>
        <p className="text-base md:text-lg dark:text-slate-300 text-slate-600 max-w-4xl leading-relaxed">
          This is the backend API and financial computation engine for the UC COOP Loan Monitoring and Financial Management System. Built with Node.js (Express) and PostgreSQL, it implements role-based access control, transaction ledger auditing, interest schedule calculators (Flat-Rate & Diminishing Balance), and OpenXML Excel report generation.
        </p>

        {/* Tech Badges Row */}
        <div className="flex flex-wrap gap-2 pt-2">
          {["Node.js (v20+)", "Express.js", "PostgreSQL", "Pg Pool", "JWT", "Bcrypt.js", "ExcelJS", "Helmet"].map((tech) => (
            <span key={tech} className="px-3 py-1 dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 rounded-lg text-xs font-semibold dark:text-slate-300 text-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Interface Image Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-3xl overflow-hidden border dark:border-white/10 border-slate-200/80 shadow-2xl group dark:bg-slate-900 bg-slate-100">
        <Image
          src="/images/uccoop.png"
          alt="UC COOP Loan Monitoring System & Coop Sync Dashboard"
          fill
          sizes="(max-width: 1200px) 100vw, 1100px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-white text-xs sm:text-sm font-medium drop-shadow-md">
          <a
            href="https://uc-coop-loan-monitoring.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black/70 hover:bg-[#2ecc71] hover:text-slate-950 transition-all backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" /> Live Portal Preview <ExternalLink size={12} />
          </a>
          <span className="hidden sm:inline bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-slate-300">
            CoopSync Member & Loan Portal
          </span>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechStatCard
          icon={<FaNodeJs size={22} className="text-emerald-500" />}
          title="Runtime & Server"
          detail="Node.js v20+ ES Modules & Express"
        />
        <TechStatCard
          icon={<SiPostgresql size={22} className="text-sky-400" />}
          title="Database Pool"
          detail="PostgreSQL (Pg Pool, 13 Tables)"
        />
        <TechStatCard
          icon={<CreditCard size={20} className="text-[#2ecc71]" />}
          title="Math Engine"
          detail="Flat-Rate & Diminishing Balance"
        />
        <TechStatCard
          icon={<FileSpreadsheet size={20} className="text-amber-400" />}
          title="Report Exporter"
          detail="OpenXML Excel Analytical Sheets"
        />
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b dark:border-white/10 border-slate-200 overflow-x-auto gap-2">
        <TabButton id="overview_features" label="🚀 Overview & Capabilities" active={activeTab} onClick={setActiveTab} />
        <TabButton id="stack_arch" label="🛠️ Stack & Architecture" active={activeTab} onClick={setActiveTab} />
        <TabButton id="setup_api" label="⚙️ Setup & Endpoints" active={activeTab} onClick={setActiveTab} />
        <TabButton id="postgres_cheatsheet" label="🐘 PostgreSQL Cheat Sheet" active={activeTab} onClick={setActiveTab} />
      </div>

      {/* TAB CONTENT: OVERVIEW & CAPABILITIES */}
      {activeTab === "overview_features" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Key Capabilities */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <CreditCard className="text-[#2ecc71]" size={26} /> Financial Engine Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<CreditCard className="text-[#2ecc71]" size={24} />}
                title="Calculation Core Engine"
                desc="Implements financial math for Flat-Rate & Diminishing Balance interest schedules with custom payment frequency support."
              />
              <FeatureCard
                icon={<Building2 className="text-blue-400" size={24} />}
                title="Coop Member Ledgers"
                desc="Manages Share Capital, Fixed Deposits, and Investment ledgers with audited transaction logs and balance tracking."
              />
              <FeatureCard
                icon={<FileCheck className="text-amber-400" size={24} />}
                title="Loan Lifecycle Engine"
                desc="Manages loan products, applicant eligibility screening, approval routing, disbursements, and installment collections."
              />
              <FeatureCard
                icon={<TrendingUp className="text-purple-400" size={24} />}
                title="Billing & Delinquency Aging"
                desc="Executes automated billing run queues, computes overdue penalties, and generates delinquency aging reports."
              />
              <FeatureCard
                icon={<FileSpreadsheet className="text-emerald-400" size={24} />}
                title="Excel Report Compiler"
                desc="Leverages ExcelJS to compile binary OpenXML analytical spreadsheets for cooperative financial audits."
              />
              <FeatureCard
                icon={<ShieldCheck className="text-rose-400" size={24} />}
                title="Role Security & Guards"
                desc="Guards endpoints with JWT extraction, password bcrypt hashing, Helmet protection, and rate-limiting middleware."
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: STACK & ARCHITECTURE */}
      {activeTab === "stack_arch" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Tech Stack Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Layers className="text-[#2ecc71]" size={22} /> Technology Stack Details
            </h3>
            <div className="overflow-x-auto dark:bg-[#161b22] bg-white rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
              <table className="w-full text-left text-sm">
                <thead className="dark:bg-white/5 bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
                  <tr>
                    <th className="p-4 w-1/4">Component</th>
                    <th className="p-4 w-3/4">Specification & Dependencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700">
                  <tr>
                    <td className="p-4 font-bold text-emerald-400 flex items-center gap-2">
                      <FaNodeJs size={18} /> Runtime
                    </td>
                    <td className="p-4">Node.js (v20+) with ES Modules (<code className="text-xs font-mono px-1.5 py-0.5 bg-slate-800 rounded text-emerald-300 font-semibold">&quot;type&quot;: &quot;module&quot;</code>)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-blue-400 flex items-center gap-2">
                      <Server size={18} /> Framework
                    </td>
                    <td className="p-4">Express.js REST Application Server</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-sky-400 flex items-center gap-2">
                      <SiPostgresql size={18} /> Database
                    </td>
                    <td className="p-4">PostgreSQL Relational Database (Pg Client Pool Connection)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-purple-400 flex items-center gap-2">
                      <Lock size={18} /> Security
                    </td>
                    <td className="p-4">bcryptjs (Password hashing), jsonwebtoken (Session tokens), helmet (Security headers), express-rate-limit (DoS protection)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-400 flex items-center gap-2">
                      <FileSpreadsheet size={18} /> Analytics & Reports
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
              <FolderTree className="text-[#2ecc71]" size={22} /> Repository Directory Layout
            </h3>
            <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
              <div className="bg-[#0d1117] p-5 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed border border-white/5">
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

      {/* TAB CONTENT: SETUP & API ENDPOINTS */}
      {activeTab === "setup_api" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Setup Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Terminal className="text-[#2ecc71]" size={22} /> Developer Installation Workflow
            </h3>

            <div className="space-y-4">
              <CodeSnippetStep
                step="1"
                title="Database Setup (PostgreSQL)"
                code="# Connect to psql console:&#10;sudo -u postgres psql&#10;&#10;# Create database:&#10;CREATE DATABASE uc_coop_loans;&#10;&#10;# Import schema & seeds:&#10;cat db/schema.sql | sudo -u postgres psql -d uc_coop_loans&#10;cat db/seeds.sql | sudo -u postgres psql -d uc_coop_loans"
                onCopy={(c) => copyToClipboard(c, "db-setup")}
                copied={copiedCmd === "db-setup"}
              />
              <CodeSnippetStep
                step="3"
                title="Server Installation & Execution"
                code="# Install dependencies:&#10;npm install&#10;&#10;# Start development server:&#10;npm run dev&#10;&#10;# Server online at: http://localhost:5000"
                onCopy={(c) => copyToClipboard(c, "server-run")}
                copied={copiedCmd === "server-run"}
              />
            </div>
          </div>

          {/* API Documentation Banner */}
          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-3">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <BookOpen className="text-[#2ecc71]" size={22} /> Full API Documentation
            </h3>
            <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
              For full request body payloads, URL parameters, required roles, and query filter examples, read the complete Walkthrough Guide in the GitHub repository.
            </p>
            <a
              href="https://github.com/Vinzz290034/UC_Coop_Loan-Monitoring-System/blob/main/.gemini/antigravity/brain/8ea0a3f3-a220-45a9-9bbc-79b75a66a2b9/artifacts/walkthrough.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer mt-1"
            >
              📖 Open API Walkthrough Guide <ExternalLink size={14} />
            </a>
          </div>

          {/* Endpoint Summary Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Server className="text-[#2ecc71]" size={22} /> Key API Endpoints Overview
            </h3>
            <div className="overflow-x-auto dark:bg-[#161b22] bg-white rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
              <table className="w-full text-left text-sm">
                <thead className="dark:bg-white/5 bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
                  <tr>
                    <th className="p-3">Route Module</th>
                    <th className="p-3">Base Endpoint</th>
                    <th className="p-3">Core Responsibilities</th>
                    <th className="p-3">Guard</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 font-mono text-xs">
                  <tr>
                    <td className="p-3 font-semibold font-sans text-blue-400">authRoutes</td>
                    <td className="p-3 text-slate-200">/api/auth/*</td>
                    <td className="p-3 font-sans">User registration, login authentication, and JWT sessions</td>
                    <td className="p-3 font-sans text-slate-400">Public</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-purple-400">memberRoutes</td>
                    <td className="p-3 text-slate-200">/api/members/*</td>
                    <td className="p-3 font-sans">Coop member CRUD and profile status updates</td>
                    <td className="p-3 font-sans text-purple-400 font-bold">Admin / Manager</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-amber-400">accountRoutes</td>
                    <td className="p-3 text-slate-200">/api/accounts/*</td>
                    <td className="p-3 font-sans">Share Capital, Fixed Deposit, & Investment ledgers</td>
                    <td className="p-3 font-sans text-amber-400 font-bold">Manager</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-emerald-400">loanRoutes</td>
                    <td className="p-3 text-slate-200">/api/loans/*</td>
                    <td className="p-3 font-sans">Loan product creation, applications, approval & repayments</td>
                    <td className="p-3 font-sans text-emerald-400 font-bold">Protected</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-cyan-400">billingRoutes</td>
                    <td className="p-3 text-slate-200">/api/billing/*</td>
                    <td className="p-3 font-sans">Billing run queues, penalty computation & delinquency aging</td>
                    <td className="p-3 font-sans text-purple-400 font-bold">Admin</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold font-sans text-rose-400">reportRoutes</td>
                    <td className="p-3 text-slate-200">/api/reports/*</td>
                    <td className="p-3 font-sans">Analytical query engines & Excel spreadsheet generation</td>
                    <td className="p-3 font-sans text-purple-400 font-bold">Admin / Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: POSTGRESQL CHEAT SHEET */}
      {activeTab === "postgres_cheatsheet" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <SiPostgresql className="text-sky-400" size={26} /> PostgreSQL Developer Cheat Sheet
            </h3>
            <p className="text-sm dark:text-slate-300 text-slate-600">
              Essential PostgreSQL CLI (<code className="font-mono text-xs px-1.5 py-0.5 bg-slate-800 text-emerald-300 rounded">psql</code>) meta-commands, SQL queries, and database verification workflows for local development.
            </p>
          </div>

          {/* Connection & Terminal Commands Table */}
          <CheatSheetTable
            title="Terminal & Connection Commands"
            icon={<Terminal size={18} className="text-[#2ecc71]" />}
            rows={[
              { task: "Open Command Prompt", cmd: "Win + R → cmd", desc: "Opens the Windows command terminal." },
              { task: "Start PostgreSQL client", cmd: "psql -U postgres", desc: "Connects to PostgreSQL as the default superuser postgres." },
              { task: "Connect to specific database", cmd: "psql -U postgres -d uc_coop_loans", desc: "Connects directly to the target uc_coop_loans database." },
              { task: "Exit PostgreSQL", cmd: "\\q", desc: "Closes the active psql session." },
              { task: "Show PostgreSQL version", cmd: "psql --version", desc: "Displays installed PostgreSQL binary version." },
              { task: "Show connection info", cmd: "\\conninfo", desc: "Displays current database, user, host, and port." }
            ]}
          />

          {/* Database Commands Table */}
          <CheatSheetTable
            title="Database Commands"
            icon={<Database size={18} className="text-sky-400" />}
            rows={[
              { task: "List databases", cmd: "\\l", desc: "Lists all databases available on the server." },
              { task: "Create a database", cmd: "CREATE DATABASE database_name;", desc: "Creates a new database instance." },
              { task: "Connect to a database", cmd: "\\c database_name", desc: "Switches connection to target database." },
              { task: "Delete a database", cmd: "DROP DATABASE database_name;", desc: "Permanently removes a database instance." },
              { task: "Show current database", cmd: "SELECT current_database();", desc: "Displays active connected database name." }
            ]}
          />

          {/* Table & Schema Commands Table */}
          <CheatSheetTable
            title="Table & Schema Meta-Commands"
            icon={<FolderTree size={18} className="text-amber-400" />}
            rows={[
              { task: "List tables", cmd: "\\dt", desc: "Lists all tables in current active database." },
              { task: "Describe a table", cmd: "\\d table_name", desc: "Shows columns, data types, and primary keys." },
              { task: "Show all schemas", cmd: "\\dn", desc: "Lists available schemas inside database." },
              { task: "List views", cmd: "\\dv", desc: "Lists all created database views." }
            ]}
          />

          {/* Running SQL Files & User Roles Table */}
          <CheatSheetTable
            title="Running SQL Files & User Permissions"
            icon={<UserCheck size={18} className="text-purple-400" />}
            rows={[
              { task: "Run schema SQL file", cmd: "\\i 'D:/path/to/schema.sql'", desc: "Executes external SQL schema file." },
              { task: "Run seed SQL file", cmd: "\\i 'D:/path/to/seed.sql'", desc: "Executes setup seed records file." },
              { task: "Show current user", cmd: "SELECT current_user;", desc: "Displays current authenticated database user." },
              { task: "List users & roles", cmd: "\\du", desc: "Lists all database users and permissions." },
              { task: "Change user password", cmd: "ALTER USER postgres WITH PASSWORD 'new_pass';", desc: "Updates database account password." }
            ]}
          />

          {/* Verification Workflow Card */}
          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-4">
            <h4 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
              <Check className="text-[#2ecc71]" size={20} /> Verify Your Project Database Workflow
            </h4>
            <div className="overflow-x-auto font-mono text-xs">
              <table className="w-full text-left">
                <thead className="dark:bg-white/5 bg-slate-100 border-b dark:border-white/10 border-slate-200 dark:text-slate-300 text-slate-700 font-bold">
                  <tr>
                    <th className="p-3">Step</th>
                    <th className="p-3">Command</th>
                    <th className="p-3">Expected Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700">
                  <tr>
                    <td className="p-3 font-bold text-[#2ecc71]">1. Connect</td>
                    <td className="p-3 text-emerald-400">psql -U postgres -d uc_coop_loans</td>
                    <td className="p-3 font-sans">Connects successfully to database</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#2ecc71]">2. List tables</td>
                    <td className="p-3 text-emerald-400">\dt</td>
                    <td className="p-3 font-sans">Shows users, members, loans, ledgers, etc.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#2ecc71]">3. View users</td>
                    <td className="p-3 text-emerald-400">SELECT * FROM users;</td>
                    <td className="p-3 font-sans">Shows admin, manager, member seed records</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#2ecc71]">4. Check connection</td>
                    <td className="p-3 text-emerald-400">\conninfo</td>
                    <td className="p-3 font-sans">Displays uc_coop_loans, user postgres, port 5432</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 dark:bg-white/5 bg-slate-100 rounded-xl text-xs dark:text-slate-300 text-slate-600 space-y-2 border dark:border-white/5 border-slate-200">
              <p className="font-bold text-[#2ecc71]">💡 Important psql Syntax Notes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Every SQL statement must end with a semicolon (<code className="font-mono text-emerald-400">;</code>), e.g., <code className="font-mono text-emerald-400">SELECT * FROM users;</code></li>
                <li>Meta-commands starting with a backslash (<code className="font-mono text-emerald-400">\l</code>, <code className="font-mono text-emerald-400">\dt</code>, <code className="font-mono text-emerald-400">\q</code>, <code className="font-mono text-emerald-400">\i</code>) do <strong>NOT</strong> require a semicolon.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TabButton({ id, label, active, onClick }: { id: "overview_features" | "stack_arch" | "setup_api" | "postgres_cheatsheet", label: string, active: string, onClick: (id: "overview_features" | "stack_arch" | "setup_api" | "postgres_cheatsheet") => void }) {
  const isActive = active === id;
  return (
    <button
      onClick={() => onClick(id)}
      className={`px-4 sm:px-5 py-3 text-xs md:text-sm font-bold transition-all border-b-2 whitespace-nowrap shrink-0 cursor-pointer ${isActive
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

function CheatSheetTable({ title, icon, rows }: { title: string, icon: React.ReactNode, rows: Array<{ task: string, cmd: string, desc: string }> }) {
  return (
    <div className="space-y-3">
      <h4 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
        {icon} {title}
      </h4>
      <div className="overflow-x-auto dark:bg-[#161b22] bg-white rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
        <table className="w-full text-left text-sm">
          <thead className="dark:bg-white/5 bg-slate-100 border-b dark:border-white/10 border-slate-200 font-bold dark:text-slate-200 text-slate-800">
            <tr>
              <th className="p-3 w-1/4">Task</th>
              <th className="p-3 w-1/3 font-mono">psql Command</th>
              <th className="p-3 w-5/12">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-white/5 divide-slate-100 dark:text-slate-300 text-slate-700 text-xs">
            {rows.map((r) => (
              <tr key={r.task}>
                <td className="p-3 font-semibold dark:text-slate-200 text-slate-800">{r.task}</td>
                <td className="p-3 font-mono text-emerald-400 font-bold bg-[#0d1117]/40">{r.cmd}</td>
                <td className="p-3 dark:text-slate-400 text-slate-600">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
