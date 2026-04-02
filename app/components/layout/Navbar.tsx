import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-xl bg-linear-to-br from-yellow-400 to-red-600 p-0.5 transition-transform group-hover:rotate-12 group-active:scale-95">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900 font-black text-white text-xs">
              TCG
            </div>
          </div>
          <span className="hidden text-xl font-black uppercase tracking-tighter text-white sm:block">
            Poke<span className="text-red-500 font-outline-2">Battle</span>
          </span>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 sm:gap-6">
          <Link 
            href="/home" 
            className="px-3 py-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            Home
          </Link>

          <Link 
            href="/dashboard" 
            className="px-3 py-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            Dashboard
          </Link>

          {/* High Contrast Battle Button */}
          <Link 
            href="/battle" 
            className="group relative overflow-hidden rounded-lg bg-red-600 px-6 py-2.5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] active:scale-95"
          >
            <span className="relative z-10">Battle</span>
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
