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
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-16 flex items-center ${isScrolled ? 'premium-blur border-b border-white/[0.05]' : 'bg-transparent'}`}>
        <div className="section-container w-full flex items-center justify-between px-4 sm:px-6">
          {/* Left: Logo */}
          <Link to="/" className="text-[18px] font-bold tracking-tight text-white flex items-center gap-2">
            <span>ValiSearch</span>
          </Link>

          {/* Center: Navigation (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-white/60">
            {["How it Works", "Features", "Pricing"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/login" className="text-[13.5px] font-medium text-white/60 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link 
              to="/register" 
              className="bg-[#6C47FF] hover:bg-[#7C5AFF] text-white text-[13.5px] font-bold px-6 py-2.5 rounded-xl transition-all shadow-[0_10px_20px_-5px_rgba(108,71,255,0.3)]"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#0A0A0A] flex flex-col p-8 pt-24 md:hidden">
          <div className="flex flex-col gap-6 text-xl font-medium text-white/60">
            {["How it Works", "Features", "Pricing"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                className="hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="h-px bg-white/5 my-4" />
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Sign in</Link>
            <Link 
              to="/register" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#6C47FF] text-white text-center py-4 rounded-xl font-bold"
            >
              Start Free
            </Link>
          </div>
        </div>
      )}
    </>
  );
}


export function AnnouncementBar() {
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 z-[50] w-full flex justify-center px-6">
      <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 transition-all hover:bg-white/[0.06] group cursor-pointer">
        <span className="bg-[#6C47FF] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full tracking-wider">NEW</span>
        <span className="text-[13px] text-white/50">ValiSearch now validates 18 dimensions of your idea</span>
        <span className="text-[13px] text-white/80 group-hover:translate-x-0.5 transition-transform">See what's new →</span>
      </div>
    </div>
  );
}
