"use client";

export default function WaveBackground() {
  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-700"
    >
      {/* Base Deep Emerald / Obsidian Gradient */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#060e0a] dark:via-[#081510] dark:to-[#050b08] bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-100 opacity-100" />

      {/* Ambient Radial Glow 1 (Top Left Hero Focus) */}
      <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-emerald-500/15 dark:bg-[#10b981]/12 rounded-full blur-[140px]" />

      {/* Ambient Radial Glow 2 (Center Right Accent) */}
      <div className="absolute top-1/3 -right-24 w-[650px] h-[650px] bg-teal-500/10 dark:bg-[#2ecc71]/10 rounded-full blur-[160px]" />

      {/* Ambient Radial Glow 3 (Bottom Left Depth) */}
      <div className="absolute -bottom-32 left-1/4 w-[700px] h-[500px] bg-emerald-600/10 dark:bg-[#064e3b]/25 rounded-full blur-[150px]" />

      {/* Soft Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(46,204,113,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.14),rgba(0,0,0,0))]" />

      {/* Subtle Ambient Grain/Dot Texture Effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[radial-gradient(#2ecc71_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}

