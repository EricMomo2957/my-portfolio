"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      title="Scroll to top"
      className="fixed bottom-8 left-8 z-40 p-3.5 rounded-full bg-[#2ecc71] text-slate-950 shadow-2xl hover:bg-[#27ae60] hover:scale-110 active:scale-95 transition-all duration-300 border border-slate-950/10 cursor-pointer animate-in fade-in duration-300"
    >
      <ArrowUp size={18} />
    </button>
  );
}
