import { Link } from "react-router-dom";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 20));
  }, [scrollY]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 h-14 flex items-center ${isScrolled ? 'bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/[0.05]' : 'bg-transparent'}`}>
        <div className="section-container w-full flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-lg font-bold tracking-tight text-white flex items-center gap-2 group">
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-3 h-3 bg-black rounded-sm rotate-45" />
              </div>
              <span className="text-glow">vali.search</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-zinc-400">
              <Link to="#features" className="hover:text-zinc-200 transition-colors">Features</Link>
              <Link to="#how-it-works" className="hover:text-zinc-200 transition-colors">Methodology</Link>
              <Link to="#pricing" className="hover:text-zinc-200 transition-colors">Pricing</Link>
              <Link to="https://github.com" target="_blank" className="hover:text-zinc-200 transition-colors flex items-center gap-1.5">
                GitHub
                <span className="text-[10px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-700">1.2k</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[13px] font-medium">
            <Link to="/login" className="text-zinc-400 hover:text-white transition-colors">Log in</Link>
            <Link to="/register" className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative px-5 py-1.5 bg-black rounded-full border border-white/10 text-white flex items-center leading-none">
                Get Started
              </button>
            </Link>
          </div>

          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#0A0A0A] flex flex-col p-6 pt-24 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium text-zinc-400">
            <Link to="#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
            <Link to="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <div className="h-px w-full bg-white/10 my-2" />
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="bg-white text-black text-center py-3 rounded-lg font-semibold">Sign up</Link>
          </div>
        </div>
      )}
    </>
  );
}

export function AnnouncementBar() {
  return null;
}