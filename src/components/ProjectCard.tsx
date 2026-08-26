import Image from 'next/image';

export default function ProjectCard({ 
  title, 
  description, 
  tags,
  imageSrc // Added this
}: { 
  title: string, 
  description: string, 
  tags: string[],
  imageSrc?: string // Added this
}) {
  return (
    <div className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-blue-500/50 transition-all duration-300">
      <div className="relative h-48 w-full bg-slate-900 rounded-lg mb-4 overflow-hidden border border-white/5">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-700 font-medium italic text-xs">
            No Image Provided
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 mt-2 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}