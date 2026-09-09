"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  Code2, 
  Cpu, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ExternalLink,
  Terminal,
  FolderTree,
  Users,
  Eye,
  Lock,
  Copy,
  Check,
  Compass,
  Sparkles
} from "lucide-react";
import { FaGithub, FaPhp } from "react-icons/fa";

export default function ChronoNav({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"features" | "architecture" | "install" | "team">("features");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(label);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const tabs = [
    { id: "features", label: "Key Features" },
    { id: "architecture", label: "Architecture & PSR-4" },
    { id: "install", label: "Setup & .env Config" },
    { id: "team", label: "Team & Credits" }
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-bold font-mono">
            PHP 8.0+ PSR-4
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 text-xs font-bold font-mono">
            Capstone Project
          </span>
          <a 
            href="https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS" 
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
          <Compass size={13} />
          University of Cebu • Capstone Project
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
          ChronoNav
        </h1>
        
        <p className="text-xs sm:text-sm text-[#2ecc71] font-mono tracking-wider uppercase font-bold">
          Campus Navigation & Automated OCR Schedule Extraction Platform
        </p>
        
        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 max-w-4xl leading-relaxed text-justify [text-align-last:left]">
          ChronoNav is a web application designed to help university students digitize their study loads using OCR image processing, organize schedules into an interactive calendar, receive automated reminders, and navigate across campus buildings with offline map routing.
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {["PHP 8.0+", "Tesseract OCR", "Composer PSR-4", "MySQL", "PDO Prepared", "JavaScript", "Figma", "Git/GitHub"].map((tech) => (
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
          src="/images/chrononav.png"
          alt="ChronoNav Web Interface"
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
              <p className="text-white font-bold text-sm">ChronoNav Campus Routing Engine</p>
              <p className="text-xs text-slate-300 font-mono">Automated Study Load Digitization & Route Finder</p>
            </div>
          </div>
          <a
            href="https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md hover:scale-105 cursor-pointer shrink-0"
          >
            <FaGithub size={14} /> View Repository <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Metric / Stat Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <TechStatCard 
          icon={<FaPhp size={20} className="text-[#777BB4]" />} 
          title="Backend Architecture" 
          detail="PHP 8.0+ with PSR-4 Autoloading" 
        />
        <TechStatCard 
          icon={<Cpu size={20} className="text-[#2ecc71]" />} 
          title="OCR Schedule Parser" 
          detail="Tesseract OCR Image Extraction" 
        />
        <TechStatCard 
          icon={<Globe size={20} className="text-blue-400" />} 
          title="Campus Navigation" 
          detail="Interactive Map Visualizer" 
        />
        <TechStatCard 
          icon={<ShieldCheck size={20} className="text-emerald-400" />} 
          title="Security Principles" 
          detail="CSRF, PDO Queries & Sanitization" 
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FeatureCard 
              icon={<Zap className="text-[#2ecc71]" size={20} />}
              title="Smart Study Load Import (OCR)"
              desc="Integrates Tesseract OCR to scan student assessment forms, parsing subject codes, room locations, time slots, and instructor details."
            />
            <FeatureCard 
              icon={<Globe className="text-blue-400" size={20} />}
              title="Turn-by-Turn Campus Navigation"
              desc="Provides visual route guides and classroom floor directions to assist new students and prevent late arrivals."
            />
            <FeatureCard 
              icon={<Eye className="text-amber-400" size={20} />}
              title="Offline Availability"
              desc="Caches schedule rosters and building maps so students can check class rooms even with spotty cellular reception."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-emerald-400" size={20} />}
              title="Accessibility & High Contrast"
              desc="Designed with high contrast visual settings, clear iconography, and responsive mobile-first typography."
            />
          </div>

          <div className="p-5 sm:p-6 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3">
            <h4 className="font-bold dark:text-white text-slate-900 text-base flex items-center gap-2">
              <Lock className="text-[#2ecc71]" size={18} /> Security & Data Safety Principles
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm dark:text-slate-300 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> File type validation and upload limits for security.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> Server-side input sanitization and CSRF protection.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> Parameterized PDO queries to eliminate SQL injection.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> Environment credentials safely abstracted in uncommitted .env files.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: ARCHITECTURE & STRUCTURE */}
      {activeTab === "architecture" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <FolderTree className="text-[#2ecc71]" size={20} /> Directory Layout
              </h3>
              
              <div className="rounded-2xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-slate-200 overflow-hidden shadow-md">
                <div className="flex items-center px-4 py-3 border-b dark:border-white/10 border-slate-200 dark:bg-white/[0.03] bg-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">Project File Tree</span>
                  </div>
                </div>
                <div className="p-4 font-mono text-xs text-emerald-400 dark:bg-black/40 bg-slate-950 overflow-x-auto leading-relaxed">
                  <pre>{`CHRONONAV_WEB_DOSS/
├── index.php         # Main landing & front-end entrypoint
├── composer.json     # PSR-4 Autoload mappings -> src/
├── .env.example      # Sample environment variables config
├── assets/           # Frontend CSS, JS & icons
├── auth/             # Authentication (login.php, register.php)
├── api/              # REST endpoints for OCR & schedules
├── src/              # PHP Application Logic & PSR-4 Classes
└── uploads/          # Secure file upload storage`}</pre>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-2">
                <h4 className="font-bold dark:text-white text-slate-900 text-sm flex items-center gap-2">
                  <Code2 className="text-blue-400" size={18} /> PSR-4 Namespace Autoloading
                </h4>
                <p className="text-xs dark:text-slate-400 text-slate-500">
                  Configured via Composer for class autoloading:
                </p>
                <div className="dark:bg-black/50 bg-slate-950 p-3 rounded-xl font-mono text-xs text-emerald-400 border border-white/5">
                  <code>&quot;Ericdominicmomo\\ChrononavWebDoss\\&quot;: &quot;src/&quot;</code>
                </div>
              </div>

              <div className="p-5 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-2">
                <h4 className="font-bold dark:text-white text-slate-900 text-sm flex items-center gap-2">
                  <Terminal className="text-amber-400" size={18} /> Required PHP Extensions
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["ext-fileinfo", "ext-mbstring", "ext-json", "ext-ctype", "ext-curl", "ext-dom", "pdo_mysql"].map((ext) => (
                    <span key={ext} className="px-2.5 py-1 dark:bg-white/[0.04] bg-slate-100 rounded-lg font-mono text-xs dark:text-slate-300 text-slate-700 border dark:border-white/5 border-slate-200">
                      {ext}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: INSTALLATION & ENV */}
      {activeTab === "install" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Terminal className="text-[#2ecc71]" size={20} /> Developer Command Workflow
            </h3>

            <div className="space-y-4">
              <CodeSnippetStep 
                step="1" 
                title="Clone Repository" 
                code={`git clone https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS.git\ncd CHRONONAV_WEB_DOSS`}
                onCopy={(c) => copyToClipboard(c, "clone")}
                copied={copiedCmd === "clone"}
              />
              <CodeSnippetStep 
                step="2" 
                title="Install Composer Packages" 
                code={`composer install`}
                onCopy={(c) => copyToClipboard(c, "composer")}
                copied={copiedCmd === "composer"}
              />
              <CodeSnippetStep 
                step="3" 
                title="Install Tesseract OCR" 
                code={`# Ubuntu / Debian:\nsudo apt update && sudo apt install -y tesseract-ocr\n\n# macOS:\nbrew install tesseract`}
                onCopy={(c) => copyToClipboard(c, "tesseract")}
                copied={copiedCmd === "tesseract"}
              />
              <CodeSnippetStep 
                step="4" 
                title="Start Local Server" 
                code={`php -S 127.0.0.1:8000 -t .`}
                onCopy={(c) => copyToClipboard(c, "serve")}
                copied={copiedCmd === "serve"}
              />
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl dark:bg-white/[0.03] bg-slate-900/[0.02] border dark:border-white/10 border-slate-200 space-y-3">
            <h4 className="font-bold dark:text-white text-slate-900 text-base flex items-center gap-2">
              <Globe className="text-[#2ecc71]" size={18} /> Sample Environment File (.env)
            </h4>
            <div className="dark:bg-black/50 bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed border border-white/5">
              <pre>{`APP_ENV=development
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=chrononav
DB_USERNAME=root
DB_PASSWORD=

UPLOADS_PATH=uploads
MAX_UPLOAD_SIZE=5242880
TESSERACT_BINARY=/usr/bin/tesseract`}</pre>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TEAM & CREDITS */}
      {activeTab === "team" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Users className="text-[#2ecc71]" size={22} /> Capstone Engineering Team
            </h3>
            <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm">
              Core contributors to the ChronoNav campus navigation capstone system:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TeamMemberCard 
              name="Vince Andrew Santoya"
              role="Project Lead & Repo Owner"
              link="https://github.com/Vinzz290034"
              handle="Vinzz290034"
              isLead
            />
            <TeamMemberCard 
              name="Eric Dominic Momo"
              role="Head Developer & Git Lead"
              link="https://github.com/EricMomo2957"
              email="Momoe2957@gmail.com"
              handle="EricMomo2957"
            />
            <TeamMemberCard 
              name="Tristan Jesus V. Elvinia"
              role="UI/UX Designer & Frontend Dev"
              link="https://github.com/AKUMON12"
              handle="AKUMON12"
            />
            <TeamMemberCard 
              name="Karl Kent Amarila"
              role="Tester & Database Engineer"
              handle="Tester/DB"
            />
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

function TeamMemberCard({ name, role, link, email, handle, isLead }: { name: string, role: string, link?: string, email?: string, handle: string, isLead?: boolean }) {
  return (
    <div className={`p-5 sm:p-6 rounded-2xl border transition-all shadow-sm ${
      isLead 
        ? "dark:bg-emerald-500/10 bg-emerald-50 border-[#2ecc71]/40" 
        : "dark:bg-white/[0.03] bg-slate-900/[0.02] dark:border-white/10 border-slate-200"
    }`}>
      <div className="flex justify-between items-start mb-1.5">
        <h4 className="font-bold dark:text-white text-slate-900 text-base">{name}</h4>
        {isLead && (
          <span className="px-2 py-0.5 rounded-full bg-[#2ecc71] text-slate-950 text-[10px] font-extrabold uppercase tracking-wider font-mono">
            Lead
          </span>
        )}
      </div>
      <p className="text-xs text-[#2ecc71] font-mono font-semibold mb-3">{role}</p>
      <div className="flex flex-wrap items-center gap-3 text-xs dark:text-slate-400 text-slate-500">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#2ecc71] transition-colors">
            <FaGithub size={13} /> @{handle} <ExternalLink size={10} />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="inline-flex items-center gap-1 hover:text-[#2ecc71] transition-colors font-mono">
            {email}
          </a>
        )}
      </div>
    </div>
  );
}