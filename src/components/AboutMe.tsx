"use client";

import Image from "next/image";
import { 
  Code2, 
  GraduationCap, 
  Sparkles, 
  Cpu, 
  Award, 
  Bot, 
  Wrench, 
  HeartHandshake, 
  Lightbulb, 
  Layers, 
  BookOpen,
  Palette,
  FileText,
  MapPin,
  Mail,
  Phone,
  Download
} from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJava, FaGitAlt, FaFigma, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMysql, SiCanva, SiBootstrap } from "react-icons/si";

export default function AboutMe() {
  const technicalSkills = {
    languages: [
      { name: "TypeScript", icon: <SiTypescript size={14} className="text-blue-400" /> },
      { name: "HTML5 / CSS3", icon: <Code2 size={14} className="text-[#2ecc71]" /> },
      { name: "PHP", icon: <FaPhp size={14} className="text-indigo-400" /> },
      { name: "Python", icon: <FaPython size={14} className="text-amber-400" /> },
      { name: "Java", icon: <FaJava size={14} className="text-red-400" /> },
      { name: "MySQL", icon: <SiMysql size={14} className="text-sky-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={14} className="text-cyan-400" /> }
    ],
    frameworks: [
      { name: "React", icon: <FaReact size={14} className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs size={14} className="text-emerald-500" /> },
      { name: "Express.js", icon: <Code2 size={14} className="text-slate-300" /> },
      { name: "Vue.js", icon: <Code2 size={14} className="text-emerald-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={14} className="text-purple-400" /> }
    ],
    tools: [
      { name: "Figma", icon: <FaFigma size={14} className="text-rose-400" /> },
      { name: "Canva", icon: <SiCanva size={14} className="text-cyan-300" /> },
      { name: "Photoshop & Photopea", icon: <Palette size={14} className="text-blue-500" /> },
      { name: "WordPress & Elementor", icon: <FaWordpress size={14} className="text-sky-400" /> },
      { name: "Git & GitHub", icon: <FaGitAlt size={14} className="text-amber-500" /> },
      { name: "VS Code & XAMPP", icon: <Wrench size={14} className="text-emerald-400" /> },
      { name: "MS Office Suite", icon: <BookOpen size={14} className="text-[#2ecc71]" /> }
    ],
    aiAutomation: [
      { name: "Flowise AI (Logic Chatbots)", icon: <Bot size={14} className="text-purple-400" /> },
      { name: "Artificial Intelligence (IT Elective)", icon: <Cpu size={14} className="text-cyan-400" /> }
    ],
    methodologies: [
      { name: "OOP (Object-Oriented Programming)" },
      { name: "SOLID Principles" },
      { name: "MVC Architecture" },
      { name: "SEO Optimization" }
    ]
  };

  const softSkills = [
    { title: "Proactive Work Ethic", desc: "Adaptable problem solver dedicated to delivering high-quality solutions.", icon: <Sparkles size={18} className="text-[#2ecc71]" /> },
    { title: "Team Collaboration", desc: "Eager to collaborate across design and development teams effectively.", icon: <HeartHandshake size={18} className="text-blue-400" /> },
    { title: "Solution Delivery", desc: "Translating client requirements into functional, aesthetic web applications.", icon: <Lightbulb size={18} className="text-amber-400" /> },
    { title: "Technical Documentation", desc: "Accurate logging, file backup safety, and capstone defense reporting.", icon: <Layers size={18} className="text-purple-400" /> },
    { title: "UI/UX & Asset Design", desc: "Creating visual graphic assets, logos, and responsive interface layouts.", icon: <Palette size={18} className="text-rose-400" /> }
  ];

  return (
    <section className="p-6 md:p-10 space-y-12 max-w-6xl mx-auto">
      {/* 2-Column "My Journey" Hero Layout matching sample photo design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Portrait Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden border-2 dark:border-white/10 border-slate-200/80 shadow-2xl dark:bg-[#161b22] bg-white p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="/images/daddy_manhwa.jpg" 
                alt="Eric Dominic Momo" 
                fill 
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

          {/* Quick Contact Badge Pills */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono dark:text-slate-300 text-slate-600 justify-center">
            <span className="flex items-center gap-1.5 dark:bg-white/5 bg-slate-200/60 px-3 py-1.5 rounded-lg border dark:border-white/5 border-slate-200">
              <MapPin size={13} className="text-[#2ecc71]" /> Cebu City, PH
            </span>
            <a href="mailto:momoe2957@gmail.com" className="flex items-center gap-1.5 dark:bg-white/5 bg-slate-200/60 px-3 py-1.5 rounded-lg border dark:border-white/5 border-slate-200 hover:text-[#2ecc71] transition-colors max-w-full truncate">
              <Mail size={13} className="text-[#2ecc71] shrink-0" /> <span className="truncate">momoe2957@gmail.com</span>
            </a>
            <span className="flex items-center gap-1.5 dark:bg-white/5 bg-slate-200/60 px-3 py-1.5 rounded-lg border dark:border-white/5 border-slate-200">
              <Phone size={13} className="text-[#2ecc71]" /> +63 935 273 7624
            </span>
          </div>
        </div>

        {/* Right Column: Creative Narrative Journey & Experience */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section 1: My Journey (Creative Developer Narrative) */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
              My Journey <span className="text-[#2ecc71]">🚀</span>
            </h1>

            <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-base md:text-lg">
              Ever since I wrote my first line of code at the <strong className="dark:text-white text-slate-900 font-bold">University of Cebu – Main Campus</strong>, I’ve been fascinated by how logical architecture and creative design converge. As a fresh <strong className="dark:text-white text-slate-900 font-bold">BSIT graduate</strong>, my passion lies in transforming real-world business bottlenecks into sleek, responsive, and intuitive web solutions.
            </p>

            <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-base md:text-lg">
              My engineering journey took off when I teamed up with three fellow developers to establish <strong className="dark:text-white text-slate-900 font-bold">KATD SOLUTIONS</strong>. Together, we engineered a full-fledged <strong className="dark:text-white text-slate-900 font-bold">Loan Monitoring and Financial Management System</strong> for the UC METC Campus. Working on the backend API using <strong className="text-[#2ecc71]">Node.js, Express, and PostgreSQL</strong>, I translated complex cooperative financial formulas into automated calculation routines for monthly amortizations and investment ledgers.
            </p>

            <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-base md:text-lg">
              During my internship at <strong className="dark:text-white text-slate-900 font-bold">CoreLogic Consulting & System, Inc.</strong>, I merged backend logic with frontend aesthetics. I built client landing pages with <strong className="text-[#2ecc71]">WordPress & Elementor</strong>, produced visual graphic assets in Canva and Photoshop, and single-handedly built <strong className="dark:text-white text-slate-900 font-bold">MentorLog</strong>—an in-house attendance log platform actively deployed to automate student OJT tracking.
            </p>

            <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-base md:text-lg">
              Stepping up as <strong className="text-[#2ecc71]">Lead Developer</strong> for our Capstone project, <strong className="dark:text-white text-slate-900 font-bold">ChronoNav</strong>, I orchestrated our team&apos;s Git/GitHub repository, crafted interface prototypes in Figma, and integrated OCR schedule extraction technology. Today, whether as an <strong className="text-[#2ecc71]">Associate Web Developer, Design Associate, or IT Systems Specialist</strong>, I bring clean code, proactive problem-solving, and a creative drive to every team I join.
            </p>
          </div>

          {/* Section 2: Experience & Education */}
          <div className="space-y-4 pt-4 border-t dark:border-white/10 border-slate-200/80">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 tracking-tight">
              Experience & Education 🎓
            </h2>

            <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-base md:text-lg">
              I hold a <strong className="dark:text-white text-slate-900 font-bold">Bachelor of Science in Information Technology (Graduation: June 2026)</strong> from the University of Cebu – Main Campus and am a <strong className="text-[#2ecc71]">Cisco Certified Network Associate (CCNAv7)</strong> with credentials in *Switching, Routing, and Wireless Essentials* and *Introduction to Networks*.
            </p>

            <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-base md:text-lg">
              My technical background spans full-stack software development (<strong className="dark:text-slate-200 text-slate-800">Node.js, Express, PostgreSQL, MySQL, PHP, React, Vue.js</strong>), UI/UX wireframing (<strong className="dark:text-slate-200 text-slate-800">Figma, Canva, Photoshop</strong>), AI logic workflows (<strong className="dark:text-slate-200 text-slate-800">Flowise AI Chatbots</strong>), and IT support.
            </p>
          </div>

          {/* Application / Cover Letter PDF Download Card */}
          <div className="pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl dark:bg-[#161b22] bg-white border dark:border-white/10 border-slate-200/80 shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 dark:bg-white/5 bg-emerald-50 rounded-xl text-[#2ecc71]">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white text-slate-900 text-base">Application / Cover Letter</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-500">Official letter addressed to Hiring Managers & Recruiters</p>
                </div>
              </div>

              <a 
                href="/Eric_Dominic_Momo_Cover_Letter.pdf" 
                download="Eric_Dominic_Momo_Cover_Letter.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-slate-950 font-bold px-5 py-2.5 rounded-full text-xs transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer shrink-0 text-center"
              >
                <Download size={15} /> Download Cover Letter (.pdf)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TECHNICAL SKILLS SECTION */}
      <div className="space-y-6 pt-6 border-t dark:border-white/10 border-slate-200/80">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-[#2ecc71] rounded-full" />
          <h2 className="text-3xl font-bold dark:text-white text-slate-900 tracking-tight">Technical Skills 🛠️</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-3">
            <h3 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
              <Code2 className="text-[#2ecc71]" size={20} /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.languages.map((skill) => (
                <span key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/5 bg-slate-100 rounded-lg text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-3">
            <h3 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
              <Layers className="text-blue-400" size={20} /> Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.frameworks.map((skill) => (
                <span key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/5 bg-slate-100 rounded-lg text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-3">
            <h3 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2">
              <Wrench className="text-rose-400" size={20} /> Design & Development Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.tools.map((skill) => (
                <span key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/5 bg-slate-100 rounded-lg text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* AI, Automation & Methodologies */}
          <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-4">
            <div>
              <h3 className="font-bold dark:text-white text-slate-900 text-lg flex items-center gap-2 mb-2">
                <Bot className="text-purple-400" size={20} /> AI & Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.aiAutomation.map((skill) => (
                  <span key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 dark:bg-white/5 bg-slate-100 rounded-lg text-xs font-semibold dark:text-slate-200 text-slate-800 border dark:border-white/5 border-slate-200">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t dark:border-white/5 border-slate-100">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#2ecc71] mb-2">Engineering Methodologies</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.methodologies.map((m) => (
                  <span key={m.name} className="px-2.5 py-1 dark:bg-white/5 bg-slate-100 rounded-md font-mono text-[11px] dark:text-slate-300 text-slate-700 border dark:border-white/5 border-slate-200">
                    {m.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SOFT SKILLS SECTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-[#2ecc71] rounded-full" />
          <h2 className="text-3xl font-bold dark:text-white text-slate-900 tracking-tight">Soft Skills & Competencies 💡</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {softSkills.map((soft) => (
            <div key={soft.title} className="dark:bg-[#161b22] bg-white p-5 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md hover:border-[#2ecc71]/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 dark:bg-white/5 bg-slate-100 rounded-xl">
                  {soft.icon}
                </div>
                <h4 className="font-bold dark:text-white text-slate-900 text-base">{soft.title}</h4>
              </div>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed pl-1">{soft.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION & CERTIFICATIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-4">
          <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
            <GraduationCap className="text-[#2ecc71]" size={22} /> Education
          </h3>
          <div className="space-y-2">
            <h4 className="font-bold dark:text-slate-200 text-slate-800 text-base">University of Cebu – Main Campus</h4>
            <p className="text-xs text-[#2ecc71] font-mono">Cebu City, 6000 Philippines</p>
            <p className="text-xs dark:text-slate-300 text-slate-600 font-semibold pt-1">
              Bachelor of Science in Information Technology (BSIT)
            </p>
            <p className="text-xs font-mono text-slate-400">Graduation: June 2026</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="dark:bg-[#161b22] bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200/80 shadow-md space-y-4">
          <h3 className="text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
            <Award className="text-amber-400" size={22} /> Certifications
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-bold dark:text-slate-200 text-slate-800 text-sm">Cisco Certified Network Associate (CCNAv7)</h4>
              <ul className="mt-2 space-y-1.5 text-xs dark:text-slate-300 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#2ecc71] font-bold">•</span> Switching, Routing, and Wireless Essentials <span className="font-mono text-slate-400">(Jan 2025)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2ecc71] font-bold">•</span> Introduction to Networks <span className="font-mono text-slate-400">(June 2024)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}