"use client";
import { useState } from "react";
import { ExternalLink, ArrowRight, Layers, Filter } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

// Import ChronoNav detail component
import ChronoNav from "./ChronoNav";
import Mentorlog from "./Mentorlog";
import UCCoopLoanMonitoringSystem from "./UC_Coop_Loan-Monitoring-System";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack & Backend", "OJT & Systems", "Capstone & AI"];

  const projects = [
    { 
      title: "UC Coop Loan Monitoring System", 
      id: "uccoop", 
      category: "Full-Stack & Backend",
      tags: ["Node.js", "Express", "PostgreSQL"], 
      desc: "Cooperative loan application, approval & financial amortization management system with PostgreSQL ledger engines.", 
      image: "/images/uccoop.png", 
      githubUrl: "https://github.com/Vinzz290034/UC_Coop_Loan-Monitoring-System" 
    },
    { 
      title: "Mentor Log", 
      id: "mentor", 
      category: "OJT & Systems",
      tags: ["React 19", "Node.js", "MySQL"], 
      desc: "Digital OJT attendance logging, task assignments & fleet workflow management platform.", 
      image: "/images/mentorlog.png", 
      githubUrl: "https://github.com/EricMomo2957/MentorLog",
      liveUrl: "https://mentor-log-two.vercel.app/"
    },
    { 
      title: "ChronoNav", 
      id: "chrono", 
      category: "Capstone & AI",
      tags: ["PHP", "OCR", "Figma"], 
      desc: "Campus navigation tool with automated study load OCR schedule extraction.", 
      image: "/images/chrononav.png", 
      githubUrl: "https://github.com/Vinzz290034/CHRONONAV_WEB_DOSS" 
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory || (activeCategory === "Full-Stack & Backend" && p.id === "mentor"));

  // Logic to show detail views
  if (selectedProject === "chrono") return <ChronoNav onBack={() => setSelectedProject(null)} />;
  if (selectedProject === "mentor") return <Mentorlog onBack={() => setSelectedProject(null)} />;
  if (selectedProject === "uccoop") return <UCCoopLoanMonitoringSystem onBack={() => setSelectedProject(null)} />;

  return (
    <section className="p-6 md:p-10 space-y-10 max-w-6xl mx-auto">
      {/* Header & Category Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b dark:border-white/10 border-slate-200/80">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#2ecc71] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">Featured Projects 🚀</h2>
          </div>
          <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base max-w-xl">
            Click any project to inspect technical architecture, database schemas, and live repository source code.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl border dark:border-white/10 border-slate-200/80 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? "bg-[#2ecc71] text-slate-950 shadow-md"
                  : "dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => (
          <div 
            key={p.id} 
            onClick={() => setSelectedProject(p.id)}
            className="group dark:bg-[#161b22]/90 bg-white border dark:border-white/10 border-slate-200/80 rounded-3xl overflow-hidden hover:border-[#2ecc71]/50 transition-all duration-500 cursor-pointer flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 relative"
          >
            <div className="relative h-52 w-full overflow-hidden dark:bg-slate-900 bg-slate-100">
              <Image 
                src={p.image} 
                alt={p.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              {p.liveUrl && (
                <div className="absolute top-3 right-3 z-10">
                  <a 
                    href={p.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-1 bg-[#2ecc71] text-slate-950 text-xs font-extrabold rounded-full shadow-lg hover:bg-[#27ae60] hover:scale-105 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                    Live Demo
                  </a>
                </div>
              )}
            </div>

            <div className="p-6 space-y-4 flex flex-col grow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold dark:text-white text-slate-900 group-hover:text-[#2ecc71] transition-colors">{p.title}</h3>
                <div className="flex items-center gap-3 dark:text-slate-400 text-slate-500" onClick={(e) => e.stopPropagation()}>
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" title="View GitHub Source">
                    <FaGithub size={18} className="dark:hover:text-[#2ecc71] hover:text-[#2ecc71] transition-colors" />
                  </a>
                  {p.liveUrl ? (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" title="Open Live Deployment">
                      <ExternalLink size={18} className="text-[#2ecc71] hover:scale-115 transition-transform" />
                    </a>
                  ) : (
                    <span title="View Details">
                      <ExternalLink size={18} className="dark:hover:text-[#2ecc71] hover:text-[#2ecc71] transition-colors" />
                    </span>
                  )}
                </div>
              </div>
              <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed grow">{p.desc}</p>
              
              <div className="flex items-center justify-between pt-3 border-t dark:border-white/5 border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 bg-[#2ecc71]/10 text-[#2ecc71] rounded-md font-bold uppercase tracking-wider border border-[#2ecc71]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight size={16} className="dark:text-slate-500 text-slate-400 group-hover:text-[#2ecc71] group-hover:translate-x-1.5 transition-all shrink-0 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}