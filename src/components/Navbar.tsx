import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 border-b border-white/10">
      <div className="text-xl font-bold tracking-tight text-white">
        <Link href="/">DM.</Link>
      </div>
      <div className="flex gap-8 text-sm font-medium text-slate-400">
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </nav>
  );
}