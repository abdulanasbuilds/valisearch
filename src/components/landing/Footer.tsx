import { Link, useNavigate } from "react-router-dom";

const FOOTER_LINKS = {
  product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Startup Guides", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Twitter/X", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06] py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-[18px] font-bold text-white tracking-tight">
              ValiSearch
            </Link>
            <p className="mt-4 text-[14px] text-white/30 leading-relaxed max-w-[240px]">
              The technical standard for startup validation.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-white/20 uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "How it works", href: "#how-it-works" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[14px] text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-[14px] font-semibold text-[#F0F0F0] mb-4">Resources</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#888888] hover:text-[#F0F0F0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[14px] font-semibold text-[#F0F0F0] mb-4">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#888888] hover:text-[#F0F0F0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-[12px] text-[#444444]">
            © 2026 ValiSearch. All rights reserved.
          </p>
          <p className="text-[12px] text-[#444444]">
            Made for founders who build.
          </p>
        </div>
      </div>
    </footer>
  );
}
