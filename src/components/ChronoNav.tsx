import { useState } from "react";
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
  Download,
  Copy,
  Check
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
            PHP 8.0+ PSR-4
          </span>
          <span className="px-3 py-1 rounded-full border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 text-xs font-bold uppercase tracking-wider">
            Status: Partial / Scaffolded
          </span>
          <a 
            href="https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS" 
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
            ChronoNav <span className="text-[#2ecc71]">🛰️</span>
          </h1>
        </div>
        <p className="text-[#2ecc71] font-mono text-sm tracking-widest uppercase font-bold">
          Campus Navigation & Scheduling Web App
        </p>
        <p className="text-base md:text-lg dark:text-slate-300 text-slate-600 max-w-4xl leading-relaxed">
          ChronoNav is a PHP-based web application designed to help students digitize their official study loads using OCR, organize schedules into a smart calendar, receive automated reminders, and navigate across campus with offline map support.
        </p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechStatCard 
          icon={<FaPhp size={22} className="text-[#777BB4]" />} 
          title="Backend Core" 
          detail="PHP 8.0+ with PSR-4 Autoloading" 
        />
        <TechStatCard 
          icon={<Cpu size={20} className="text-[#2ecc71]" />} 
          title="OCR Processing" 
          detail="Tesseract OCR Wrapper" 
        />
        <TechStatCard 
          icon={<Globe size={20} className="text-blue-400" />} 
          title="Campus Maps" 
          detail="Turn-by-Turn Offline Access" 
        />
        <TechStatCard 
          icon={<ShieldCheck size={20} className="text-emerald-400" />} 
          title="Security" 
          detail="CSRF, Prepared SQL, Sanitization" 
        />
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b dark:border-white/10 border-slate-200 overflow-x-auto gap-2">
        <TabButton id="features" label="Key Features" active={activeTab} onClick={setActiveTab} />
        <TabButton id="architecture" label="Architecture & Structure" active={activeTab} onClick={setActiveTab} />
        <TabButton id="install" label="Dev Setup & .env" active={activeTab} onClick={setActiveTab} />
        <TabButton id="team" label="Team & Credits" active={activeTab} onClick={setActiveTab} />
      </div>

      {/* TAB CONTENT: FEATURES */}
      {activeTab === "features" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Zap className="text-[#2ecc71]" size={24} />}
              title="Smart Schedule Import (OCR)"
              desc="Uses Tesseract OCR PHP wrapper (thiagoalessio/tesseract_ocr) to automatically extract course codes, room numbers, and schedules from uploaded study load images."
            />
            <FeatureCard 
              icon={<Globe className="text-blue-400" size={24} />}
              title="Turn-by-Turn Campus Navigation"
              desc="Provides visual direction and location routing across campus buildings to prevent students from missing class location changes."
            />
            <FeatureCard 
              icon={<Eye className="text-amber-400" size={24} />}
              title="Offline Resilience"
              desc="Ensures critical maps and schedule data remain cached and accessible even when offline or experiencing poor mobile connectivity."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-emerald-400" size={24} />}
              title="Accessibility & High Contrast"
              desc="Built with inclusive design considerations, including voice guidance support, high-contrast visual modes, and screen reader compatibility."
            />
          </div>

          <div className="dark:bg-white/5 bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md">
            <h4 className="font-bold dark:text-white text-slate-900 text-lg mb-3 flex items-center gap-2">
              <Lock className="text-[#2ecc71]" size={20} /> Security & Data Safety Principles
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm dark:text-slate-300 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> Validates file types (images only) & enforces 5MB upload caps.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> Server-side input sanitization & CSRF token form protection.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> Parameterized PDO queries to prevent SQL Injection vulnerabilities.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ecc71] font-bold">•</span> Secrets stored in strictly uncommitted .env environment configs.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB CONTENT: ARCHITECTURE */}
      {activeTab === "architecture" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-4">
              <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <FolderTree className="text-[#2ecc71]" size={22} /> Repository Directory Layout
              </h3>
              <div className="bg-[#0d1117] p-4 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed border border-white/5">
                <pre>{`CHRONONAV_WEB_DOSS/
├── index.php         # Main landing & front-end entrypoint
├── composer.json     # PSR-4 Autoload: Ericdominicmomo\\ChrononavWebDoss\\ -> src/
├── .env.example      # Sample environment variables config
├── assets/           # Frontend static files (CSS, JS, images)
├── auth/             # Authentication pages (login.php, register.php)
├── api/              # REST endpoints for OCR & schedule API
├── src/              # PHP Application Logic & PSR-4 Classes
└── uploads/          # Secure file uploads folder (5MB cap)`}</pre>
              </div>
            </div>

            <div className="space-y-6">
              <div className="dark:bg-white/5 bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-3">
                <h4 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
                  <Code2 className="text-blue-400" size={20} /> PSR-4 Namespace Mapping
                </h4>
                <p className="text-xs dark:text-slate-400 text-slate-600">
                  Configured via Composer for clean class autoloading:
                </p>
                <div className="bg-slate-900 dark:bg-[#0d1117] p-3 rounded-lg font-mono text-xs text-slate-200 border border-white/5">
                  <code>&quot;Ericdominicmomo\\ChrononavWebDoss\\&quot;: &quot;src/&quot;</code>
                </div>
              </div>

              <div className="dark:bg-white/5 bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-3">
                <h4 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
                  <Terminal className="text-amber-400" size={20} /> Required PHP Extensions
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["ext-fileinfo", "ext-mbstring", "ext-json", "ext-ctype", "ext-curl", "ext-dom", "pdo_mysql"].map((ext) => (
                    <span key={ext} className="px-2.5 py-1 dark:bg-white/10 bg-slate-100 rounded-md font-mono text-xs dark:text-slate-300 text-slate-700 font-semibold border dark:border-white/5 border-slate-200">
                      {ext}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: INSTALLATION & ENV */}
      {activeTab === "install" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Terminal className="text-[#2ecc71]" size={22} /> Developer Command Workflow
            </h3>

            {/* Steps */}
            <div className="space-y-4">
              <CodeSnippetStep 
                step="1" 
                title="Clone Repository" 
                code="git clone https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS.git&#10;cd CHRONONAV_WEB_DOSS"
                onCopy={(c) => copyToClipboard(c, "clone")}
                copied={copiedCmd === "clone"}
              />
              <CodeSnippetStep 
                step="2" 
                title="Install Composer Dependencies" 
                code="composer install"
                onCopy={(c) => copyToClipboard(c, "composer")}
                copied={copiedCmd === "composer"}
              />
              <CodeSnippetStep 
                step="3" 
                title="Install Tesseract OCR (System Binary)" 
                code="# Ubuntu / Debian:&#10;sudo apt update && sudo apt install -y tesseract-ocr&#10;&#10;# MacOS:&#10;brew install tesseract"
                onCopy={(c) => copyToClipboard(c, "tesseract")}
                copied={copiedCmd === "tesseract"}
              />
              <CodeSnippetStep 
                step="4" 
                title="Start Local Development Server" 
                code="php -S 127.0.0.1:8000 -t ."
                onCopy={(c) => copyToClipboard(c, "serve")}
                copied={copiedCmd === "serve"}
              />
            </div>
          </div>

          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-4">
            <h4 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
              <Globe className="text-[#2ecc71]" size={20} /> Sample Environment File (.env)
            </h4>
            <div className="bg-[#0d1117] p-4 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed border border-white/5">
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

      {/* TAB CONTENT: TEAM & CREDITS */}
      {activeTab === "team" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <Users className="text-[#2ecc71]" size={24} /> Project Contributors & Roles
            </h3>
            <p className="dark:text-slate-400 text-slate-600 text-sm">
              Meet the core engineering and design team behind ChronoNav:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard 
              name="Vince Andrew Santoya"
              role="Project Lead & Repo Owner"
              link="https://github.com/Vinzz290034"
              handle="Vinzz290034"
              isLead
            />
            <TeamMemberCard 
              name="Eric Dominic Momo"
              role="Head Developer"
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

          <div className="p-6 dark:bg-white/5 bg-slate-100 rounded-2xl border dark:border-white/10 border-slate-200 text-center space-y-3">
            <h4 className="font-bold dark:text-white text-slate-900 text-base">Open for Contributions</h4>
            <p className="text-xs dark:text-slate-400 text-slate-600 max-w-xl mx-auto">
              Contributions are welcome under the MIT License. Create feature branches from main, follow PSR-12 coding standards, and submit pull requests to the repository.
            </p>
            <a 
              href="https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-[#2ecc71]/20 cursor-pointer"
            >
              <FaGithub size={16} /> Open GitHub Repository <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// Subcomponents
function TechStatCard({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="group dark:bg-[#161b22] bg-white p-5 rounded-2xl border dark:border-white/10 border-slate-200/80 hover:border-[#2ecc71]/40 transition-all duration-300 shadow-sm hover:shadow-lg">
      <div className="mb-3 p-2.5 dark:bg-white/5 bg-slate-100 w-fit rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="dark:text-white text-slate-900 font-bold text-sm mb-1">{title}</h4>
      <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed font-medium">{detail}</p>
    </div>
  );
}

function TabButton({ id, label, active, onClick }: { id: "features" | "architecture" | "install" | "team", label: string, active: string, onClick: (id: "features" | "architecture" | "install" | "team") => void }) {
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

function TeamMemberCard({ name, role, link, email, handle, isLead }: { name: string, role: string, link?: string, email?: string, handle: string, isLead?: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border transition-all shadow-md ${
      isLead 
        ? "dark:bg-emerald-500/10 bg-emerald-50 border-[#2ecc71]/40" 
        : "dark:bg-[#161b22] bg-white dark:border-white/10 border-slate-200/80"
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold dark:text-white text-slate-900 text-lg">{name}</h4>
        {isLead && (
          <span className="px-2 py-0.5 rounded-full bg-[#2ecc71] text-white text-[10px] font-extrabold uppercase tracking-wider">
            Lead
          </span>
        )}
      </div>
      <p className="text-xs text-[#2ecc71] font-semibold mb-3">{role}</p>
      <div className="flex items-center gap-3 text-xs dark:text-slate-400 text-slate-500">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#2ecc71] transition-colors">
            <FaGithub size={14} /> @{handle} <ExternalLink size={10} />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-[#2ecc71] transition-colors font-mono">
            {email}
          </a>
        )}
      </div>
    </div>
  );
}