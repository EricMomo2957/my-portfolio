import Image from "next/image";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaUser, 
  FaBriefcase, 
  FaEnvelope, 
  FaFileAlt, 
  FaRss, 
  FaPaperPlane,
  FaHome 
} from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isDark?: boolean;
  toggleDarkMode?: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Sidebar({ activeView, setActiveView, isDark = true, toggleDarkMode }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 dark:bg-[#1e2530] bg-white border-r dark:border-white/5 border-slate-200 h-screen sticky top-0 flex flex-col z-50 dark:text-slate-300 text-slate-700 transition-colors duration-300 shadow-xl">
      {/* Top Profile Section */}
      <div className="p-6 flex flex-col items-center border-b dark:border-white/5 border-slate-200">
        <h2 className="text-lg font-bold dark:text-white text-slate-900 mb-4">Eric Dominic Momo</h2>
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 dark:border-white/10 border-slate-200 mb-4 shadow-lg">
          <Image 
            src="/images/daddy_manhwa.jpg" 
            alt="Eric Dominic Momo" 
            fill 
            sizes="96px"
            className="object-cover"
            priority
          />
        </div>
        <p className="text-[13px] leading-relaxed text-center px-1 dark:text-slate-400 text-slate-500">
          Hi, my name is Dominic and I&apos;m a full-stack developer. Welcome to my personal website!
        </p>
        
        {/* Social Icons Row */}
        <div className="flex gap-2 mt-4">
          <SocialIcon icon={<FaTwitter className="text-xs" />} href="#" />
          <SocialIcon icon={<FaLinkedin className="text-xs" />} href="#" />
          <SocialIcon icon={<FaGithub className="text-xs" />} href="https://github.com/EricMomo2957" />
          <SocialIcon icon={<FaRss className="text-xs" />} href="#" />
        </div>
      </div>

      {/* Navigation Menu with Custom Scrollbar */}
      <nav className="flex-1 overflow-y-auto py-4 
        [&::-webkit-scrollbar]:w-1 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-slate-300
        dark:[&::-webkit-scrollbar-thumb]:bg-white/10">
        <ul className="space-y-1 px-3">
          <NavItem 
            icon={<FaHome />} 
            label="Home" 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
          <NavItem 
            icon={<FaUser />} 
            label="About Me" 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
          <NavItem 
            icon={<FaBriefcase />} 
            label="Portfolio" 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
          <NavItem 
            icon={<FaFileAlt />} 
            label="Resume" 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
          <NavItem 
            icon={<FaRss />} 
            label="Blog" 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
          <NavItem 
            icon={<FaEnvelope />} 
            label="Contact" 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-6 border-t dark:border-white/5 border-slate-200 space-y-4">
        <button 
          onClick={() => setActiveView("Contact")}
          className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#2ecc71]/20 active:scale-95 cursor-pointer"
        >
          <FaPaperPlane className="text-xs" /> Hire Me
        </button>
        
        {/* Dark / Light Mode Toggle Button */}
        {toggleDarkMode && (
          <button 
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl dark:bg-slate-800/80 bg-slate-100 dark:border-white/5 border-slate-200 border text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-pointer shadow-xs"
          >
            <span className="flex items-center gap-2">
              {isDark ? <Moon size={14} className="text-amber-400" /> : <Sun size={14} className="text-amber-500" />}
              <span className="normal-case font-bold">{isDark ? "Dark Mode" : "Light Mode"}</span>
            </span>
            <div className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 flex items-center ${isDark ? "bg-[#2ecc71]" : "bg-slate-300"}`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDark ? "translate-x-4" : "translate-x-0"}`} />
            </div>
          </button>
        )}
      </div>
    </aside>
  );
}

function NavItem({ icon, label, activeView, setActiveView }: NavItemProps) {
  const isActive = activeView === label;
  
  return (
    <li>
      <button 
        onClick={() => setActiveView(label)}
        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all font-medium text-[13px] cursor-pointer
          ${isActive 
            ? 'text-[#2ecc71] dark:bg-emerald-500/10 bg-emerald-50 font-bold border-l-4 border-[#2ecc71] shadow-xs' 
            : 'dark:text-slate-300 text-slate-600 hover:text-[#2ecc71] dark:hover:bg-white/5 hover:bg-slate-100'}`}
      >
        <span className={`text-sm ${isActive ? 'text-[#2ecc71]' : 'opacity-70'}`}>{icon}</span>
        <span>{label}</span>
      </button>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-7 h-7 rounded-full dark:bg-white/5 bg-slate-100 text-[#2ecc71] flex items-center justify-center hover:bg-[#2ecc71] hover:text-white transition-all shadow-xs"
    >
      {icon}
    </a>
  );
}