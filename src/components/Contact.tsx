"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check, Copy, ExternalLink, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  onCopy?: () => void;
  copied?: boolean;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data via Web3Forms free email dispatch API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "e44d3208-d2e8-4b7c-86e5-22d71391d4e0", // Web3Forms direct key
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form Message",
          message: formData.message,
          to: "momoe2957@gmail.com"
        })
      });

      if (!res.ok) {
        // Fallback to mailto link if offline or fetch fails
        window.location.href = `mailto:momoe2957@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      }
    } catch {
      // Fallback on error
      window.location.href = `mailto:momoe2957@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto space-y-12 relative">
      {/* Copy Toast Notification Banner */}
      {copiedField && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-8 z-50 bg-[#2ecc71] text-slate-950 px-5 py-3 rounded-2xl font-black text-xs shadow-2xl flex items-center justify-center gap-2.5 animate-in slide-in-from-bottom-5 duration-300 border border-slate-950/10 text-center">
          <Check size={16} className="shrink-0" />
          <span>Copied {copiedField === "email" ? "momoe2957@gmail.com" : "+63 935 273 7624"} to clipboard!</span>
        </div>
      )}

      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-[#2ecc71] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">Get In Touch </h2>
        </div>
        <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
          Have a project in mind, a Design Associate opportunity, or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new software engineering roles.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Side: Direct Contact Details & Availability */}
        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <ContactItem
              icon={<Mail size={22} />}
              title="Email"
              value="momoe2957@gmail.com"
              href="mailto:momoe2957@gmail.com"
              onCopy={() => handleCopy("momoe2957@gmail.com", "email")}
              copied={copiedField === "email"}
            />
            <ContactItem
              icon={<Phone size={22} />}
              title="Phone"
              value="+63 935 273 7624"
              href="tel:+639352737624"
              onCopy={() => handleCopy("+639352737624", "phone")}
              copied={copiedField === "phone"}
            />
            <ContactItem
              icon={<MapPin size={22} />}
              title="Location"
              value="Cebu City, Philippines"
            />
          </div>

          {/* Social Profiles */}
          <div className="pt-6 border-t dark:border-white/10 border-slate-200 space-y-3">
            <p className="dark:text-slate-400 text-slate-500 text-[10px] font-bold uppercase tracking-widest">Connect Online</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/EricMomo2957"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:bg-[#0b1611] bg-white border dark:border-white/10 border-slate-200/80 px-4 py-2.5 rounded-xl text-xs font-bold dark:text-slate-200 text-slate-800 hover:border-[#2ecc71]/50 hover:text-[#2ecc71] transition-all shadow-sm cursor-pointer"
              >
                <FaGithub size={16} /> GitHub (@EricMomo2957) <ExternalLink size={12} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:bg-[#0b1611] bg-white border dark:border-white/10 border-slate-200/80 px-4 py-2.5 rounded-xl text-xs font-bold dark:text-slate-200 text-slate-800 hover:border-blue-400 hover:text-blue-400 transition-all shadow-sm cursor-pointer"
              >
                <FaLinkedin size={16} /> LinkedIn <ExternalLink size={12} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:bg-[#0b1611] bg-white border dark:border-white/10 border-slate-200/80 px-4 py-2.5 rounded-xl text-xs font-bold dark:text-slate-200 text-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all shadow-sm cursor-pointer"
              >
                <FaTwitter size={16} /> Twitter <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Availability Status */}
          <div className="pt-6 border-t dark:border-white/10 border-slate-200">
            <p className="dark:text-slate-400 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">Current Status</p>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc71] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ecc71]"></span>
              </span>
              <span className="dark:text-white text-slate-900 text-sm font-semibold">Available for Design Associate & Developer Positions</span>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="flex-[1.2] relative">
          <div className="absolute -inset-4 bg-[#2ecc71]/10 blur-3xl rounded-full opacity-50 pointer-events-none" />

          <form
            onSubmit={handleSubmit}
            className="relative dark:bg-[#0b1611] bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border dark:border-white/10 border-slate-200/80 shadow-2xl space-y-6"
          >
            <div className="flex items-center gap-2 border-b dark:border-white/5 border-slate-100 pb-4">
              <MessageSquare className="text-[#2ecc71]" size={20} />
              <h3 className="text-xl font-bold dark:text-white text-slate-900">Send Me a Message</h3>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-[#2ecc71]/10 border border-[#2ecc71]/40 text-[#2ecc71] text-xs font-bold flex items-center gap-2 animate-in fade-in duration-300">
                <Check size={16} /> Thank you! Your message has been sent successfully. I will get back to you soon.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full dark:bg-[#060e0a] bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl p-3.5 sm:p-4 text-base sm:text-sm dark:text-white text-slate-900 focus:border-[#2ecc71] focus:ring-2 focus:ring-[#2ecc71]/20 transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full dark:bg-[#060e0a] bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl p-3.5 sm:p-4 text-base sm:text-sm dark:text-white text-slate-900 focus:border-[#2ecc71] focus:ring-2 focus:ring-[#2ecc71]/20 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject || ""}
                onChange={handleChange}
                placeholder="Design Associate Opportunity / Inquiry"
                className="w-full dark:bg-[#060e0a] bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl p-4 text-sm dark:text-white text-slate-900 focus:border-[#2ecc71] focus:ring-2 focus:ring-[#2ecc71]/20 transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold dark:text-slate-400 text-slate-500 uppercase ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message || ""}
                onChange={handleChange}
                placeholder="Hi Dominic, I'd like to discuss an opportunity..."
                rows={5}
                className="w-full dark:bg-[#060e0a] bg-slate-50 border dark:border-white/10 border-slate-200 rounded-xl p-4 text-sm dark:text-white text-slate-900 focus:border-[#2ecc71] focus:ring-2 focus:ring-[#2ecc71]/20 transition-all outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-[#2ecc71] text-slate-950 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#27ae60] transition-all active:scale-[0.98] shadow-lg shadow-[#2ecc71]/20 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, value, href, onCopy, copied }: ContactItemProps) {
  return (
    <div className="group flex items-center justify-between p-4 rounded-2xl dark:bg-[#161b22] bg-white border dark:border-white/10 border-slate-200/80 shadow-md hover:border-[#2ecc71]/40 transition-all">
      <div className="flex items-center gap-4">
        <div className="p-3 dark:bg-white/5 bg-emerald-50 rounded-xl text-[#2ecc71] group-hover:bg-[#2ecc71] group-hover:text-slate-950 transition-all duration-300">
          {icon}
        </div>
        <div>
          <p className="text-[10px] dark:text-slate-400 text-slate-500 font-extrabold uppercase tracking-widest mb-0.5">{title}</p>
          {href ? (
            <a
              href={href}
              className="dark:text-white text-slate-900 font-semibold text-sm md:text-base hover:text-[#2ecc71] transition-colors"
            >
              {value}
            </a>
          ) : (
            <p className="dark:text-white text-slate-900 font-semibold text-sm md:text-base">{value}</p>
          )}
        </div>
      </div>

      {onCopy && (
        <button
          onClick={onCopy}
          title={`Copy ${title}`}
          className="p-2 dark:text-slate-400 text-slate-500 hover:text-[#2ecc71] transition-colors cursor-pointer"
        >
          {copied ? <Check size={16} className="text-[#2ecc71]" /> : <Copy size={16} />}
        </button>
      )}
    </div>
  );
}