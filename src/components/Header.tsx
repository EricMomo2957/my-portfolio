"use client";

import { useState } from "react";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  User, 
  Briefcase, 
  FileText, 
  Rss, 
  Mail, 
  Home as HomeIcon,
  Send
} from "lucide-react";

interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isDark?: boolean;
  toggleDarkMode?: () => void;
}

export default function Header({ activeView, setActiveView, isDark = true, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", target: "Home", icon: <HomeIcon size={16} /> },
    { label: "About", target: "About Me", icon: <User size={16} /> },
    { label: "Projects", target: "Portfolio", icon: <Briefcase size={16} /> },
    { label: "Resume", target: "Resume", icon: <FileText size={16} /> },
    { label: "Blog", target: "Blog", icon: <Rss size={16} /> },
    { label: "Contact", target: "Contact", icon: <Mail size={16} /> }
  ];

  const handleNavClick = (targetView: string) => {
    setActiveView(targetView);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md dark:bg-[#0d1117]/90 bg-white/90 border-b dark:border-white/10 border-slate-200/80 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick("Home")}
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-[#2ecc71] flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-[#2ecc71]/20 group-hover:scale-105 transition-transform">
            EM
          </div>
          <div>
            <h1 className="text-base font-extrabold dark:text-white text-slate-900 tracking-tight leading-none group-hover:text-[#2ecc71] transition-colors">
              Eric Dominic Momo
            </h1>
            <p className="text-[10px] text-[#2ecc71] font-mono tracking-wider uppercase font-bold mt-1">
              Design Associate & Developer
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1.5 rounded-full border dark:border-white/10 border-slate-200/80">
          {navItems.map((item) => {
            const isActive = activeView === item.target || (activeView === "About Me" && item.target === "About Me");
            return (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#2ecc71] text-slate-950 shadow-md"
                    : "dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-3">
          {/* Hire Me CTA Button */}
          <button 
            onClick={() => handleNavClick("Contact")}
            className="hidden sm:flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 font-bold px-4 py-2 rounded-full text-xs transition-all shadow-md shadow-[#2ecc71]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Send size={14} /> Hire Me
          </button>

          {/* Dark / Light Theme Toggle */}
          {toggleDarkMode && (
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 dark:text-amber-400 text-slate-700 hover:scale-105 transition-all cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 dark:text-white text-slate-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden dark:bg-[#161b22] bg-white border-b dark:border-white/10 border-slate-200 p-4 space-y-2 animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => {
            const isActive = activeView === item.target;
            return (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left cursor-pointer ${
                  isActive
                    ? "bg-[#2ecc71] text-slate-950"
                    : "dark:text-slate-200 text-slate-700 hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
