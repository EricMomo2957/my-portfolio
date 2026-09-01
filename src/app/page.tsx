"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HomeView from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import WaveBackground from "@/components/WaveBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [activeView, setActiveView] = useState("Home");
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  const renderContent = () => {
    switch (activeView) {
      case "Home": return <HomeView setActiveView={setActiveView} isDark={isDark} toggleDarkMode={toggleDarkMode} />;
      case "Portfolio": return <Portfolio />;
      case "Resume": return <Resume />;
      case "Blog": return <Blog />;
      case "Contact": return <Contact />;
      default: return <AboutMe />;
    }
  };

  if (!mounted) {
    return (
      <div className="dark flex flex-col min-h-screen bg-[#0d1117] relative overflow-hidden">
        <CursorSpotlight />
        <WaveBackground />
        <Header activeView={activeView} setActiveView={setActiveView} isDark={true} toggleDarkMode={() => {}} />
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 relative z-10">
          <HomeView setActiveView={setActiveView} isDark={true} toggleDarkMode={() => {}} />
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 dark:bg-[#0d1117] dark:text-slate-300 bg-slate-100 text-slate-800 relative overflow-hidden">
      <CursorSpotlight />
      <WaveBackground />
      <ScrollToTop />
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView} 
        isDark={isDark} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main key={activeView} className="flex-1 max-w-7xl w-full mx-auto transition-colors duration-300 p-4 md:p-8 relative z-10 animate-in fade-in duration-300">
        {renderContent()}
      </main>
    </div>
  );
}