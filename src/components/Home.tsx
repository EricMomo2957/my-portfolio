"use client";

import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import CitySkylineBackground from "@/components/CitySkylineBackground";

interface HomeProps {
  setActiveView: (view: string) => void;
  isDark?: boolean;
  toggleDarkMode?: () => void;
}

export default function HomeView({ setActiveView, isDark }: HomeProps) {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] dark:text-white text-slate-900 flex flex-col justify-between p-4 lg:p-6 max-w-6xl mx-auto my-0 relative">
      {/* Real-time Day/Night City Skyline Animated Background */}
      <CitySkylineBackground isDark={isDark} />

      {/* Subtle Corner Glow Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2ecc71]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Banner */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4 relative z-10">
        {/* Left Column: Text & Call to Action */}
        <div className="lg:col-span-7 space-y-4 lg:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
            <span>DEVELOPMENT | DESIGN | STRATEGY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] dark:text-white text-slate-900">
            Hi, I&apos;m Eric Dominic <br className="hidden sm:inline" />Momo<span className="text-[#2ecc71]">.</span>
          </h1>

          <p className="text-sm md:text-base dark:text-slate-300 text-slate-600 max-w-xl leading-relaxed font-normal">
            A dedicated IT graduate, full-stack developer, and Design Associate passionate about building fast, accessible, and beautiful digital web products. Welcome to my portfolio.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button 
              onClick={() => setActiveView("Portfolio")}
              className="bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 font-bold px-7 py-3 rounded-full text-xs md:text-sm flex items-center gap-2 transition-all shadow-xl shadow-[#2ecc71]/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              View Projects <ArrowRight size={16} />
            </button>

            <button 
              onClick={() => setActiveView("Resume")}
              className="dark:bg-white/10 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/20 font-bold px-7 py-3 rounded-full text-xs md:text-sm transition-all active:scale-95 cursor-pointer border dark:border-white/10 border-slate-200"
            >
              View Resume
            </button>

            <button 
              onClick={() => setActiveView("Contact")}
              className="border border-[#2ecc71]/50 text-[#2ecc71] hover:bg-[#2ecc71]/10 font-bold px-7 py-3 rounded-full text-xs md:text-sm transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Send size={14} /> Let&apos;s Talk
            </button>
          </div>
        </div>

        {/* Right Column: Organic Blob Masked Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            {/* Custom Organic Mask Container */}
            <div className="w-full h-full rounded-[45%_55%_65%_35%/50%_60%_40%_50%] overflow-hidden border-4 border-[#2ecc71]/40 shadow-2xl relative dark:bg-slate-900 bg-slate-100 hover:border-[#2ecc71] transition-colors duration-500">
              <Image 
                src="/images/daddy_manhwa.jpg" 
                alt="Eric Dominic Momo" 
                fill 
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t dark:border-white/10 border-slate-200/80 text-xs dark:text-slate-400 text-slate-500 font-medium relative z-10">
        <p>© 2026 Eric Dominic Momo. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 dark:text-slate-300 text-slate-600">
          <a href="https://github.com/EricMomo2957" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71] transition-colors" title="GitHub">
            <FaGithub size={17} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71] transition-colors" title="LinkedIn">
            <FaLinkedin size={17} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71] transition-colors" title="Twitter">
            <FaTwitter size={17} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71] transition-colors" title="Instagram">
            <FaInstagram size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}
