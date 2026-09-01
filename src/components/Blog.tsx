"use client";

import Image from "next/image";
import { BookOpen, Clock, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Blog() {
  const articles = [
    {
      title: "Building a Cooperative Loan Amortization Engine with Node.js & PostgreSQL",
      category: "Backend Architecture",
      date: "May 2025",
      readTime: "5 min read",
      summary: "How KATD Solutions built the backend API for the UC METC Campus loan monitoring system, handling flat-rate and diminishing interest computations accurately.",
      image: "/images/uccoop.png",
      tags: ["Node.js", "Express", "PostgreSQL", "Financial Math"]
    },
    {
      title: "Automating Trainee OJT Attendance Logs with MentorLog",
      category: "Software Development",
      date: "March 2026",
      readTime: "4 min read",
      summary: "A deep dive into independently building MentorLog during my internship at CoreLogic Consulting, replacing manual sign-in sheets with a local database app.",
      image: "/images/mentorlog.png",
      tags: ["React 19", "Node.js", "MySQL", "OJT Workflow"]
    },
    {
      title: "Integrating OCR Schedule Extraction into Campus Navigation (ChronoNav Capstone)",
      category: "Capstone & AI",
      date: "Aug 2025",
      readTime: "6 min read",
      summary: "How our capstone team integrated OCR scanning to convert printed student study load schedules into interactive digital route maps.",
      image: "/images/chrononav.png",
      tags: ["OCR", "PHP", "Figma", "Git Workflow"]
    }
  ];

  return (
    <section className="p-6 md:p-10 space-y-12 max-w-6xl mx-auto">
      {/* Header with Profile & Bio */}
      <div className="flex flex-col md:flex-row items-center gap-8 border-b dark:border-white/10 border-slate-200/80 pb-10">
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 border-[#2ecc71]/30 shadow-2xl shrink-0">
          <Image
            src="/images/daddy_manhwa.jpg"
            alt="Eric Dominic Momo"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-bold uppercase tracking-wider">
            <BookOpen size={13} /> Engineering Insights & Articles
          </div>
          <h2 className="text-3xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight">
            Technical Case Studies & Feed
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm max-w-xl leading-relaxed">
            Case studies on full-stack architecture, backend financial calculations, and my experiences building software systems in Cebu City.
          </p>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
          <Sparkles className="text-[#2ecc71]" size={20} /> Project Case Studies
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group dark:bg-[#161b22]/90 bg-white border dark:border-white/10 border-slate-200/80 rounded-3xl overflow-hidden hover:border-[#2ecc71]/50 transition-all duration-500 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden dark:bg-slate-900 bg-slate-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-[10px] text-[#2ecc71] font-bold uppercase tracking-wider border border-[#2ecc71]/30">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col grow">
                <div className="flex items-center gap-4 text-xs font-mono dark:text-slate-400 text-slate-500">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>

                <h4 className="text-lg font-bold dark:text-white text-slate-900 group-hover:text-[#2ecc71] transition-colors leading-snug">
                  {article.title}
                </h4>

                <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed grow">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t dark:border-white/5 border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-700 rounded font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={16} className="dark:text-slate-500 text-slate-400 group-hover:text-[#2ecc71] group-hover:translate-x-1.5 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Social Media Cards Grid */}
      <div className="space-y-4 pt-6 border-t dark:border-white/10 border-slate-200/80">
        <h3 className="text-xl font-bold dark:text-white text-slate-900">Official Social Profiles </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="https://github.com/EricMomo2957"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl dark:bg-[#161b22] bg-white border dark:border-white/10 border-slate-200/80 shadow-md hover:border-[#2ecc71]/50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#2ecc71]/10 text-[#2ecc71]">
                <FaGithub size={20} />
              </div>
              <div>
                <p className="font-bold dark:text-white text-slate-900 text-sm">GitHub</p>
                <p className="text-xs dark:text-slate-400 text-slate-500 font-mono">@EricMomo2957</p>
              </div>
            </div>
            <ExternalLink size={16} className="dark:text-slate-500 text-slate-400 group-hover:text-[#2ecc71] transition-colors" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl dark:bg-[#161b22] bg-white border dark:border-white/10 border-slate-200/80 shadow-md hover:border-blue-400 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <FaLinkedin size={20} />
              </div>
              <div>
                <p className="font-bold dark:text-white text-slate-900 text-sm">LinkedIn</p>
                <p className="text-xs dark:text-slate-400 text-slate-500 font-mono">Eric Dominic Momo</p>
              </div>
            </div>
            <ExternalLink size={16} className="dark:text-slate-500 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl dark:bg-[#161b22] bg-white border dark:border-white/10 border-slate-200/80 shadow-md hover:border-sky-400 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                <FaTwitter size={20} />
              </div>
              <div>
                <p className="font-bold dark:text-white text-slate-900 text-sm">Twitter</p>
                <p className="text-xs dark:text-slate-400 text-slate-500 font-mono">@EricMomo2957</p>
              </div>
            </div>
            <ExternalLink size={16} className="dark:text-slate-500 text-slate-400 group-hover:text-sky-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}