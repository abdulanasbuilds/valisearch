import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.05] bg-[#0A0A0A]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[58px] max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" data-testid="link-logo">
          <div className="flex items-center justify-center w-7 h-7 rounded-[6px] bg-white">
            <span className="text-[11px] font-black text-black leading-none tracking-[-0.04em]">VS</span>
          </div>
          <span className="text-[15px] font-semibold text-white/90 tracking-[-0.02em]">
            ValiSearch
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-[13.5px] font-medium text-white/40 rounded-md transition-colors duration-150 hover:text-white/80 hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-1.5">
          <button className="px-3.5 py-2 text-[13.5px] font-medium text-white/40 hover:text-white/80 rounded-md transition-colors duration-150 hover:bg-white/[0.04]">
            Log in
          </button>
          <button
            data-testid="button-get-started-nav"
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold text-black bg-white rounded-[8px] hover:bg-white/90 transition-all duration-150 active:scale-[0.98]"
          >
            Get started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 text-white/40 hover:text-white/70 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.05] bg-[#0A0A0A] md:hidden">
          <div className="flex flex-col p-3 gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2.5 text-[14px] font-medium text-white/50 rounded-md hover:text-white/80 hover:bg-white/[0.04] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-white/[0.05]">
              <button
                onClick={() => { navigate("/"); setMobileOpen(false); }}
                className="w-full py-2.5 rounded-[8px] text-[14px] font-semibold text-black bg-white hover:bg-white/90 transition-all"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
