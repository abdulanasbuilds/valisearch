import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

export function JournalFooter() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-zinc-100 py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-zinc-900 rounded-md rotate-45" />
                <div className="relative w-2.5 h-2.5 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-sm font-black tracking-tighter text-zinc-900 uppercase">
                VALISEARCH
              </span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-6">
              The intelligence platform for the next generation of builders. Validate ideas, analyze markets, and execute with clarity.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/abdulanasbuilds" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/abdulanasbuilds" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-anas-0161b3370" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Journal</Link></li>
              <li><a href="/#how-it-works" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Methodology</a></li>
              <li><a href="/#pricing" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-zinc-200/50 gap-6">
          <p className="text-[12px] text-zinc-400">
            © {new Date().getFullYear()} VALISEARCH. All rights reserved.
          </p>
          <p className="text-[12px] text-zinc-400">
            Built by <a href="https://www.linkedin.com/in/abdul-anas-0161b3370" className="text-zinc-900 font-medium hover:underline">Abdul Anas</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
