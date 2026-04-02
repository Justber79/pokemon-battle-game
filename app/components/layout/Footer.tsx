const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-left">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest">PokeBattle TCG</h3>
            <p className="mt-1 text-xs text-slate-500">
              © {new Date().getFullYear()} - Built with Next.js & Tailwind CSS.
            </p>
          </div>

          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-red-500 transition-colors">Support</a>
            <a href="#" className="hover:text-red-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8">
          <p className="mx-auto max-w-3xl text-[9px] leading-relaxed text-slate-600 italic uppercase">
            Pokémon and Pokémon character names are trademarks of Nintendo. 
            This website is a WBS Coding School project and is not affiliated with, sponsored, 
            or endorsed by Nintendo, Creatures, GAME FREAK, or The Pokémon Company.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
