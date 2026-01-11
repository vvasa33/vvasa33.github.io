export default function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6 border-b border-black pb-4 gap-3 opacity-60 hover:opacity-100 transition-opacity">
      <div className="flex gap-4 md:gap-8">
        <p className="text-xs md:text-sm font-bold tracking-widest uppercase font-['IBM_Plex_Mono']">Vol. 1</p>
        <p className="text-xs md:text-sm font-bold tracking-widest uppercase font-['IBM_Plex_Mono']">No. 1</p>
      </div>
      
      {/* CMYK Registration Marks */}
      <div className="hidden md:flex gap-1">
        <div className="w-3 h-3 rounded-full bg-cmyk-cyan mix-blend-multiply" />
        <div className="w-3 h-3 rounded-full bg-cmyk-magenta mix-blend-multiply" />
        <div className="w-3 h-3 rounded-full bg-cmyk-yellow mix-blend-multiply" />
        <div className="w-3 h-3 rounded-full bg-black mix-blend-multiply" />
      </div>

      <p className="text-xs md:text-sm font-bold tracking-tighter uppercase">
        Mount Airy, MD
      </p>
      <p className="text-xs md:text-sm font-bold tracking-tighter uppercase hidden sm:block">
        Price: Free
      </p>
    </div>
  );
}
