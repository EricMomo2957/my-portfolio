"use client";

export default function WaveBackground() {
  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-500 opacity-40 dark:opacity-25"
    >
      {/* Top Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#2ecc71]/20 via-[#38bdf8]/15 to-[#2ecc71]/20 blur-[120px] rounded-full" />

      {/* Layer 1: Slow Deep Wave */}
      <div className="absolute bottom-0 left-0 w-[200%] h-64 opacity-30 animate-wave-slow">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full text-[#2ecc71] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Layer 2: Medium Soft Wave */}
      <div className="absolute bottom-0 left-0 w-[200%] h-52 opacity-40 animate-wave-medium">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full text-[#38bdf8] fill-current"
        >
          <path d="M0,30 C200,110 450,10 650,70 C850,130 1050,20 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Layer 3: Foreground Dynamic Wave */}
      <div className="absolute bottom-0 left-0 w-[200%] h-40 opacity-25 animate-wave-fast">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full text-[#2ecc71] fill-current"
        >
          <path d="M0,50 C180,-10 380,80 580,30 C780,-20 980,70 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
}
