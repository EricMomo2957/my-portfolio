"use client";

import { Download, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Resume() {
  const experiences = [
    {
      title: "Full-Stack & Backend Engineer",
      company: "UC Coop Loan Monitoring System",
      date: "May 2025 – Present",
      desc: "Built the backend API and financial computation engine for the cooperative loan and financial management platform (KATD Solutions Freelance Team for UC METC Campus).",
      details: [
        "Worked with another developer to build the backend API from scratch using Node.js and Express to handle math formulas for monthly payments, making loan processing and tracking much faster.",
        "Focused on using automation to improve daily operations, making it easy for the client to get accurate, up-to-date financial information and transaction reports whenever they need them.",
        "Co-designed and built the database using PostgreSQL to centralize member records, move loan processes online, and cut down on manual paperwork and errors."
      ],
      image: "/images/github-preview.png",
      isLatest: true,
    },
    {
      title: "On-the-Job Trainee (IT Admin Assistant & Web Development)",
      company: "CoreLogic Consulting & System, Inc.",
      date: "Feb 2026 – April 2026",
      desc: "Handled digital documentation, client web maintenance with WordPress & Elementor, graphics in Canva/Photoshop, and built MentorLog.",
      details: [
        "Handled daily office paperwork and digital documentation and used WordPress with Elementor to design, edit, and update different web pages for real clients.",
        "Used Canva and photoshop to create graphic assets, including video editing, logos, and pictures, while independently building Mentor Log—a local-base system the company actively uses to automate trainee logs and mentorship tracking.",
        "Managed local data safety by regularly backing up client files and organizing company digital records to prevent data loss."
      ],
      image: "/images/mentorlog.png",
      isLatest: false,
    },
    {
      title: "Capstone Lead Developer",
      company: "CHRONONAV – Campus Navigation & Scheduling App",
      date: "Aug 2025 – Dec 2025",
      desc: "Spearheaded the development of a campus navigation tool with integrated OCR schedule syncing.",
      details: [
        "Served as the Lead Developer, managing the code using Git/GitHub and ensuring a stable backend to connect campus and navigation data.",
        "Integrated OCR technology to turn scanned student study loads into digital schedules, while helping write the project documentation and presenting during the defense."
      ],
      image: "/images/chrononav.png",
      isLatest: false,
    }
  ];

  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto space-y-10">
      {/* Top Bar: Title & Download Resume Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b dark:border-white/10 border-slate-200/80">
        <div>
          <h2 className="text-3xl font-bold dark:text-white text-slate-900 tracking-tight">Professional Experience & Projects</h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm mt-1">My career timeline, engineering projects, and key technical achievements.</p>
        </div>

        {/* Download Resume Action Button */}
        <div>
          <a
            href="/Eric_Dominic_Momo_Resume.pdf"
            download="Eric_Dominic_Momo_Resume.pdf"
            className="flex items-center gap-2 bg-[#2ecc71] text-slate-950 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#27ae60] hover:scale-105 transition-all shadow-lg shadow-[#2ecc71]/20 cursor-pointer"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>

      {/* Interactive Project Timeline Grid */}
      <div className="space-y-12 border-l-2 dark:border-white/10 border-slate-200 pl-6 md:pl-8 ml-2 md:ml-4">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`relative group p-6 md:p-8 rounded-2xl transition-all duration-500 border ${
              exp.isLatest 
                ? "dark:bg-white/5 bg-white border-[#2ecc71]/40 shadow-xl dark:shadow-[#2ecc71]/5" 
                : "dark:bg-white/2 bg-white/60 dark:border-white/5 border-slate-200 hover:border-[#2ecc71]/30 dark:hover:bg-white/5 hover:bg-white shadow-sm"
            }`}
          >
            {/* Timeline Dot */}
            <div 
              className={`absolute left-[-31px] md:left-[-41.5px] top-8 w-4 h-4 rounded-full border transition-all duration-300 ${
                exp.isLatest 
                  ? "bg-[#2ecc71] shadow-[0_0_15px_#2ecc71] border-[#2ecc71]" 
                  : "dark:bg-slate-900 bg-slate-200 dark:border-white/20 border-slate-400 group-hover:border-[#2ecc71]/50 group-hover:bg-[#2ecc71]"
              }`} 
            />
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className={`font-bold text-xl ${exp.isLatest ? "text-[#2ecc71]" : "dark:text-white text-slate-900"}`}>
                    {exp.title}
                  </h3>
                  {exp.isLatest && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] bg-[#2ecc71]/10 text-[#2ecc71] font-extrabold uppercase tracking-widest border border-[#2ecc71]/20">
                      <Sparkles size={10} /> Active
                    </span>
                  )}
                </div>
                
                <p className="dark:text-slate-400 text-slate-500 text-xs font-bold uppercase tracking-[0.15em]">
                  {exp.company} <span className="mx-2 dark:text-white/20 text-slate-300">|</span> {exp.date}
                </p>
                
                <p className="dark:text-slate-300 text-slate-600 text-sm md:text-base leading-relaxed">
                  {exp.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2">
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-2.5 text-sm dark:text-slate-400 text-slate-600 dark:group-hover:text-slate-300 group-hover:text-slate-800 transition-colors">
                      <CheckCircle2 size={16} className="text-[#2ecc71] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Card Image Preview */}
              <div className="relative group/img shrink-0 self-start lg:mt-2">
                <div className={`relative h-44 w-72 rounded-xl overflow-hidden border transition-all duration-700 shadow-lg ${
                  exp.isLatest ? "border-[#2ecc71]/40 ring-4 ring-[#2ecc71]/10" : "dark:border-white/10 border-slate-200 dark:grayscale group-hover:grayscale-0"
                }`}>
                  <Image
                    src={exp.image}
                    alt={`${exp.company} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 288px"
                    className={`object-cover transition-all duration-700 ${
                      exp.isLatest ? "opacity-100 scale-105" : "dark:opacity-50 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}