"use client";

import { useEffect, useState } from "react";

interface CitySkylineBackgroundProps {
  isDark?: boolean;
}

export default function CitySkylineBackground({ isDark }: CitySkylineBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const isNightTime = typeof isDark === "boolean" ? isDark : true;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-1000"
    >
      {/* Sky Background Gradient Overlay */}
      <div 
        className={`absolute inset-0 transition-colors duration-1000 ${
          isNightTime 
            ? "bg-gradient-to-b from-[#060a12] via-[#0d1527]/90 to-[#141b2d]/95 opacity-90" 
            : "bg-gradient-to-b from-sky-200/80 via-sky-100/60 to-slate-100/40 opacity-70"
        }`}
      />

      {/* ================= SUNNY DAY MODE ELEMENTS ================= */}
      {!isNightTime && (
        <>
          {/* Radiant Sun with Pulsing Flare */}
          <div className="absolute top-12 right-16 md:right-32 w-32 h-32 md:w-44 md:h-44 pointer-events-none">
            {/* Outer Glow Halo */}
            <div className="absolute inset-0 rounded-full bg-amber-300/30 blur-2xl animate-sun-glow" />
            <div className="absolute inset-2 rounded-full bg-amber-400/40 blur-xl animate-pulse" />
            {/* Core Sun */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-100 shadow-[0_0_50px_rgba(251,191,36,0.6)]" />
          </div>

          {/* Drifting Clouds Layer 1 (Slow Deep) */}
          <div className="absolute top-16 left-0 w-full opacity-60 animate-cloud-drift-slow">
            <svg viewBox="0 0 1200 120" className="w-[1400px] h-28 fill-white/80">
              <path d="M50 80 Q 75 40 110 50 Q 140 20 180 40 Q 220 30 250 60 Q 270 50 300 70 L 300 100 L 40 100 Z" />
              <path d="M600 70 Q 625 30 660 40 Q 690 10 730 30 Q 770 20 800 50 Q 820 40 850 60 L 850 100 L 590 100 Z" />
            </svg>
          </div>

          {/* Drifting Clouds Layer 2 (Faster Light) */}
          <div className="absolute top-28 left-0 w-full opacity-40 animate-cloud-drift-fast">
            <svg viewBox="0 0 1200 120" className="w-[1600px] h-24 fill-sky-50">
              <path d="M200 60 Q 225 30 255 40 Q 280 15 315 35 Q 345 25 370 50 L 370 90 L 190 90 Z" />
              <path d="M850 65 Q 875 35 905 45 Q 930 20 965 40 Q 995 30 1020 55 L 1020 90 L 840 90 Z" />
            </svg>
          </div>
        </>
      )}

      {/* ================= NIGHT MODE ELEMENTS ================= */}
      {isNightTime && (
        <>
          {/* Glowing Moon */}
          <div className="absolute top-12 right-16 md:right-32 w-28 h-28 md:w-36 md:h-36 pointer-events-none">
            {/* Moon Halo Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-200/15 blur-2xl" />
            {/* Moon Body */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-slate-200 via-slate-100 to-white shadow-[0_0_40px_rgba(255,255,255,0.4)] relative overflow-hidden">
              {/* Subtle Crater Details */}
              <div className="absolute top-3 left-4 w-4 h-4 rounded-full bg-slate-300/40" />
              <div className="absolute top-8 left-8 w-6 h-6 rounded-full bg-slate-300/30" />
              <div className="absolute bottom-5 right-5 w-5 h-5 rounded-full bg-slate-300/35" />
            </div>
          </div>

          {/* Field of Twinkling Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { top: "8%", left: "12%", delay: "0s", size: "w-1 h-1" },
              { top: "15%", left: "25%", delay: "1.2s", size: "w-1.5 h-1.5" },
              { top: "22%", left: "42%", delay: "0.5s", size: "w-1 h-1" },
              { top: "10%", left: "58%", delay: "2.1s", size: "w-1.5 h-1.5" },
              { top: "18%", left: "72%", delay: "1.7s", size: "w-1 h-1" },
              { top: "28%", left: "85%", delay: "0.9s", size: "w-2 h-2" },
              { top: "5%", left: "90%", delay: "2.5s", size: "w-1 h-1" },
              { top: "35%", left: "15%", delay: "1.4s", size: "w-1.5 h-1.5" },
              { top: "30%", left: "65%", delay: "0.3s", size: "w-1 h-1" },
              { top: "12%", left: "38%", delay: "2.8s", size: "w-2 h-2" },
            ].map((star, idx) => (
              <div
                key={idx}
                className={`absolute ${star.size} bg-white rounded-full animate-star-twinkle shadow-[0_0_8px_white]`}
                style={{ top: star.top, left: star.left, animationDelay: star.delay }}
              />
            ))}
          </div>

          {/* Animated Shooting / Falling Stars */}
          <div className="absolute top-10 right-1/4 w-[400px] h-[300px] pointer-events-none">
            {/* Shooting Star 1 */}
            <div className="absolute top-8 right-12 h-0.5 bg-gradient-to-l from-white via-cyan-300 to-transparent rounded-full animate-shooting-star-1 shadow-[0_0_12px_#38bdf8]" />
            {/* Shooting Star 2 */}
            <div className="absolute top-24 right-48 h-0.5 bg-gradient-to-l from-white via-emerald-300 to-transparent rounded-full animate-shooting-star-2 shadow-[0_0_12px_#2ecc71]" />
            {/* Shooting Star 3 */}
            <div className="absolute top-40 right-20 h-0.5 bg-gradient-to-l from-white via-amber-200 to-transparent rounded-full animate-shooting-star-3 shadow-[0_0_12px_#fbbf24]" />
          </div>
        </>
      )}

      {/* ================= CITY SKYLINE VECTOR SILHOUETTE ================= */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-72 md:h-96 pointer-events-none z-10">
        <svg
          viewBox="0 0 1400 400"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Background Layer: Distant Buildings */}
          <path
            d="
              M 0,400 
              L 0,220 L 40,220 L 40,400 
              L 60,400 L 60,180 L 110,180 L 110,400 
              L 140,400 L 140,240 L 190,240 L 190,400 
              L 220,400 L 220,150 L 270,150 L 270,400 
              L 300,400 L 300,210 L 350,210 L 350,400 
              L 400,400 L 400,160 L 450,160 L 450,400 
              L 490,400 L 490,230 L 540,230 L 540,400 
              L 580,400 L 580,140 L 640,140 L 640,400 
              L 680,400 L 680,200 L 730,200 L 730,400 
              L 770,400 L 770,170 L 830,170 L 830,400 
              L 870,400 L 870,240 L 920,240 L 920,400 
              L 960,400 L 960,130 L 1020,130 L 1020,400 
              L 1060,400 L 1060,210 L 1110,210 L 1110,400 
              L 1150,400 L 1150,160 L 1210,160 L 1210,400 
              L 1250,400 L 1250,230 L 1310,230 L 1310,400 
              L 1350,400 L 1350,190 L 1400,190 L 1400,400 Z
            "
            className={isNightTime ? "fill-[#0b101d]/80" : "fill-slate-300/50"}
          />

          {/* Foreground Layer: Detailed Skyscraper Silhouette & Spire Towers */}
          <path
            d="
              M 0,400 
              L 0,280 L 30,280 L 30,190 L 50,190 L 50,400 
              L 80,400 L 80,230 L 130,230 L 130,400 
              L 160,400 L 160,160 L 175,120 L 190,160 L 190,400 
              L 240,400 L 240,210 L 290,210 L 290,400 
              L 330,400 L 330,140 L 340,90 L 350,140 L 390,140 L 390,400 
              L 430,400 L 430,250 L 480,250 L 480,400 
              L 520,400 L 520,180 L 570,180 L 570,400 
              L 610,400 L 610,110 L 620,60 L 630,110 L 670,110 L 670,400 
              L 710,400 L 710,220 L 760,220 L 760,400 
              L 800,400 L 800,150 L 850,150 L 850,400 
              L 890,400 L 890,130 L 900,80 L 910,130 L 950,130 L 950,400 
              L 990,400 L 990,240 L 1040,240 L 1040,400 
              L 1080,400 L 1080,170 L 1130,170 L 1130,400 
              L 1180,400 L 1180,200 L 1230,200 L 1230,400 
              L 1270,400 L 1270,150 L 1330,150 L 1330,400 
              L 1370,400 L 1370,260 L 1400,260 L 1400,400 Z
            "
            className={isNightTime ? "fill-[#070b14]" : "fill-slate-400/70"}
          />

          {/* Night Window Lights Grid Overlay */}
          {isNightTime && (
            <g className="animate-window-pulse">
              {/* Building 1 Windows */}
              <rect x="90" y="250" width="8" height="8" className="fill-amber-300" />
              <rect x="105" y="250" width="8" height="8" className="fill-cyan-300" />
              <rect x="90" y="270" width="8" height="8" className="fill-amber-200" />
              <rect x="105" y="290" width="8" height="8" className="fill-emerald-300" />
              
              {/* Spire Tower 1 Windows */}
              <rect x="170" y="180" width="10" height="6" className="fill-emerald-300" />
              <rect x="170" y="200" width="10" height="6" className="fill-amber-300" />
              <rect x="170" y="230" width="10" height="6" className="fill-cyan-300" />

              {/* Tower 2 Windows */}
              <rect x="345" y="160" width="12" height="8" className="fill-cyan-300" />
              <rect x="365" y="160" width="12" height="8" className="fill-amber-300" />
              <rect x="345" y="185" width="12" height="8" className="fill-amber-200" />
              <rect x="365" y="210" width="12" height="8" className="fill-emerald-300" />
              <rect x="345" y="235" width="12" height="8" className="fill-cyan-200" />

              {/* Central Main Skyscraper Windows */}
              <rect x="625" y="130" width="14" height="10" className="fill-amber-300" />
              <rect x="645" y="130" width="14" height="10" className="fill-cyan-300" />
              <rect x="625" y="155" width="14" height="10" className="fill-emerald-300" />
              <rect x="645" y="180" width="14" height="10" className="fill-amber-300" />
              <rect x="625" y="205" width="14" height="10" className="fill-cyan-200" />
              <rect x="645" y="230" width="14" height="10" className="fill-amber-200" />

              {/* Tower 4 Windows */}
              <rect x="905" y="150" width="12" height="8" className="fill-cyan-300" />
              <rect x="925" y="150" width="12" height="8" className="fill-amber-300" />
              <rect x="905" y="175" width="12" height="8" className="fill-emerald-300" />
              <rect x="925" y="200" width="12" height="8" className="fill-amber-200" />

              {/* Tower 5 Windows */}
              <rect x="1095" y="190" width="10" height="8" className="fill-amber-300" />
              <rect x="1110" y="190" width="10" height="8" className="fill-cyan-300" />
              <rect x="1095" y="215" width="10" height="8" className="fill-emerald-300" />
              <rect x="1110" y="240" width="10" height="8" className="fill-amber-200" />
            </g>
          )}

          {/* Rooftop Red Aviation Beacon Warning Lights at Night */}
          {isNightTime && (
            <g>
              <circle cx="175" cy="120" r="3" className="fill-red-500 animate-ping" />
              <circle cx="345" cy="90" r="3" className="fill-red-500 animate-ping" />
              <circle cx="620" cy="60" r="3.5" className="fill-red-500 animate-ping" />
              <circle cx="900" cy="80" r="3" className="fill-red-500 animate-ping" />
            </g>
          )}
        </svg>

        {/* Bottom Ground / Street Horizon Glow Line */}
        <div 
          className={`h-2 w-full transition-colors duration-1000 ${
            isNightTime 
              ? "bg-gradient-to-r from-cyan-500/20 via-[#2ecc71]/40 to-cyan-500/20 shadow-[0_-5px_20px_rgba(46,204,113,0.3)]" 
              : "bg-gradient-to-r from-amber-400/30 via-sky-400/40 to-amber-400/30"
          }`} 
        />
      </div>
    </div>
  );
}
