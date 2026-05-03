import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { JournalNavbar } from "@/components/landing/JournalNavbar";
import { JournalFooter } from "@/components/landing/JournalFooter";
import { getPostContent } from "@/lib/blog";
import { BLOG_POSTS } from "@/content/blog";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock, Sparkles, Share2, Linkedin, ChevronRight } from "lucide-react";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

interface TocItem { id: string; text: string; level: number }

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ metadata: Record<string, string>; content: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeId, setActiveId] = useState<string>("");
  const [showStickyBar, setShowStickyBar] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function loadPost() {
      if (!slug) return;
      setIsLoading(true);
      const data = await getPostContent(slug);
      if (cancelled) return;
      setPost(data);
      if (data) document.title = `${data.metadata.title} | VALISEARCH Journal`;
      setIsLoading(false);
    }
    loadPost();
    return () => { cancelled = true };
  }, [slug]);

  const toc: TocItem[] = useMemo(() => {
    if (!post) return [];
    const lines = post.content.split("\n");
    const items: TocItem[] = [];
    for (const line of lines) {
      const m = line.match(/^(#{2,3})\s+(.*)/);
      if (m) items.push({ level: m[1].length, text: m[2].replace(/[*_`]/g, ""), id: slugify(m[2]) });
    }
    return items;
  }, [post]);

  useEffect(() => {
    if (!post) return;
    const onScroll = () => {
      setShowStickyBar(window.scrollY > 400);
      const headings = articleRef.current?.querySelectorAll<HTMLElement>("h2, h3");
      if (!headings) return;
      let current = "";
      headings.forEach((h) => {
        const top = h.getBoundingClientRect().top;
        if (top < 160) current = h.id;
      });
      if (current) setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [post]);

  const handleShare = async () => {
    if (!post) return;
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: post.metadata.title, url }); } catch (e) { console.error(e); }
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-zinc-100 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white min-h-screen text-zinc-900 flex flex-col items-center justify-center p-6 font-['Plus_Jakarta_Sans']">
        <h1 className="text-3xl font-bold mb-3">Article not found</h1>
        <Link to="/blog" className="text-zinc-500 hover:text-zinc-900 underline font-medium">Back to journal</Link>
      </div>
    );
  }

  const { metadata, content } = post;
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const readMins = parseInt(String(metadata.readTime || "5")) || 5;

  const paragraphs = content.split(/\n\n+/);
  const midIdx = Math.floor(paragraphs.length / 2);
  const partA = paragraphs.slice(0, midIdx).join("\n\n");
  const partB = paragraphs.slice(midIdx).join("\n\n");

  return (
    <div className="bg-white min-h-screen text-[#1a1a1a] selection:bg-zinc-100">
      <JournalNavbar />

      {/* Sticky Secondary Nav */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -64, opacity: 0 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-zinc-100 bg-white/90 backdrop-blur-md h-14"
          >
            <div className="max-w-[1240px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between gap-8">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 shrink-0 font-['Plus_Jakarta_Sans']">Reading:</span>
                <p className="text-sm font-bold truncate font-['Plus_Jakarta_Sans']">{metadata.title}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <button onClick={handleShare} className="p-2 hover:bg-zinc-50 rounded-full transition-colors text-zinc-400 hover:text-zinc-900">
                  <Share2 className="w-4 h-4" />
                </button>
                <Link to="/register">
                  <button className="px-4 py-1.5 bg-zinc-900 text-white text-[11px] font-bold rounded-full hover:bg-zinc-800 transition-all font-['Plus_Jakarta_Sans']">
                    Try Demo
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-32">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-12 font-['Plus_Jakarta_Sans']">
            <Link to="/blog" className="hover:text-zinc-900">Journal</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-zinc-900 truncate max-w-[200px]">{metadata.title}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 relative">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-40 space-y-8">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6 font-['Plus_Jakarta_Sans']">Table of Contents</p>
                  <nav className="space-y-4 border-l border-zinc-100">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-[13px] leading-snug pl-5 -ml-px transition-all duration-300 border-l-2 font-['Plus_Jakarta_Sans'] ${
                          item.level === 3 ? "pl-9" : ""
                        } ${
                          activeId === item.id
                            ? "border-zinc-900 text-zinc-900 font-bold"
                            : "border-transparent text-zinc-400 hover:text-zinc-600 font-medium"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
                
                <div className="pt-8 border-t border-zinc-100">
                  <Link to="/register" className="group block p-5 rounded-xl bg-zinc-50 border border-zinc-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50">
                    <p className="text-[9px] font-bold tracking-widest uppercase text-zinc-400 mb-2 font-['Plus_Jakarta_Sans']">Quick Validation</p>
                    <p className="text-[13px] font-bold leading-tight text-zinc-900 mb-4 font-['Plus_Jakarta_Sans']">Analyze your startup idea in 30 seconds.</p>
                    <span className="text-[11px] font-bold text-zinc-900 flex items-center gap-1 font-['Plus_Jakarta_Sans']">
                      Get Started <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="lg:col-span-9 xl:col-span-8 xl:col-start-4">
              <header className="mb-16">
                <div className="flex items-center gap-3 text-[11px] font-bold text-zinc-400 mb-8 uppercase tracking-[0.2em] font-['Plus_Jakarta_Sans']">
                  <span className="text-zinc-900 bg-zinc-100 px-2.5 py-1 rounded-sm">{metadata.category}</span>
                  <span>{new Date(metadata.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-200" />
                  <span className="inline-flex items-center gap-1.5 font-bold"><Clock className="w-3 h-3" />{readMins} MIN READ</span>
                </div>
                <h1 className="text-4xl md:text-[56px] font-extrabold leading-[1.05] tracking-tight mb-10 font-['Plus_Jakarta_Sans']">
                  {metadata.title}
                </h1>
                
                <div className="flex items-center justify-between gap-6 py-8 border-y border-zinc-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-sm font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">AA</div>
                    <div>
                      <a href="https://www.linkedin.com/in/abdul-anas-0161b3370" target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-zinc-900 hover:underline flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
                        {metadata.author} <Linkedin className="w-3 h-3 text-[#0077b5]" />
                      </a>
                      <div className="text-[12px] font-medium text-zinc-500 font-['Plus_Jakarta_Sans']">Founder, VALISEARCH</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={handleShare} className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest font-['Plus_Jakarta_Sans']">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>
                </div>

                {/* Hero HD Image Style */}
                <div className="mt-12 aspect-[21/9] rounded-xl overflow-hidden bg-zinc-50 border border-zinc-100 relative group shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-white flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-black text-zinc-900/5 select-none font-['Plus_Jakarta_Sans'] uppercase">VALISEARCH</span>
                  </div>
                </div>
              </header>

              <div ref={articleRef} className="journal-prose max-w-[700px]">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => {
                      const text = String(children);
                      return <h2 id={slugify(text)} className="font-['Plus_Jakarta_Sans'] font-extrabold">{children}</h2>;
                    },
                    h3: ({ children }) => {
                      const text = String(children);
                      return <h3 id={slugify(text)} className="font-['Plus_Jakarta_Sans'] font-bold">{children}</h3>;
                    },
                    p: ({ children }) => (
                      <p className="font-['Source_Serif_4'] text-[#1a1a1a] text-[19px] leading-[1.7] mb-8">{children}</p>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="key-takeaway bg-zinc-50 border-l-4 border-zinc-900 p-8 my-12 rounded-r-xl">
                        <div className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] uppercase tracking-widest text-zinc-400 mb-3">Key Takeaway</div>
                        <div className="font-['Plus_Jakarta_Sans'] font-bold text-lg leading-relaxed text-zinc-900">{children}</div>
                      </blockquote>
                    ),
                  }}
                >
                  {partA}
                </ReactMarkdown>

                {/* Bento Style CTA */}
                <aside className="not-prose my-16 rounded-2xl border border-zinc-100 bg-white p-8 md:p-10 shadow-xl shadow-zinc-200/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-6 shadow-lg shadow-zinc-900/20">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-3 font-['Plus_Jakarta_Sans']">Product Insight</p>
                    <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 mb-4 font-['Plus_Jakarta_Sans']">
                      Stop guessing. Start validating.
                    </h4>
                    <p className="text-lg text-zinc-500 leading-relaxed mb-8 font-['Plus_Jakarta_Sans'] max-w-xl">
                      VALISEARCH uses this exact framework to analyze market signals, competitors, and revenue models for your idea in under 60 seconds.
                    </p>
                    <Link to="/register">
                      <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-full hover:bg-zinc-800 transition-all font-['Plus_Jakarta_Sans'] active:scale-95 shadow-lg shadow-zinc-900/20 flex items-center gap-2">
                        Get Your Free Report <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </aside>

                <ReactMarkdown
                  components={{
                    h2: ({ children }) => {
                      const text = String(children);
                      return <h2 id={slugify(text)} className="font-['Plus_Jakarta_Sans'] font-extrabold">{children}</h2>;
                    },
                    h3: ({ children }) => {
                      const text = String(children);
                      return <h3 id={slugify(text)} className="font-['Plus_Jakarta_Sans'] font-bold">{children}</h3>;
                    },
                    p: ({ children }) => (
                      <p className="font-['Source_Serif_4'] text-[#1a1a1a] text-[19px] leading-[1.7] mb-8">{children}</p>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="key-takeaway bg-zinc-50 border-l-4 border-zinc-900 p-8 my-12 rounded-r-xl">
                         <div className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] uppercase tracking-widest text-zinc-400 mb-3">Key Takeaway</div>
                        <div className="font-['Plus_Jakarta_Sans'] font-bold text-lg leading-relaxed text-zinc-900">{children}</div>
                      </blockquote>
                    ),
                  }}
                >
                  {partB}
                </ReactMarkdown>
              </div>

              {/* Author Footer */}
              <footer className="mt-24 pt-16 border-t border-zinc-100">
                <div className="flex flex-col md:flex-row items-start gap-8 bg-zinc-50/50 p-10 rounded-2xl border border-zinc-100">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center text-2xl font-bold text-white shrink-0 shadow-lg">AA</div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 font-['Plus_Jakarta_Sans']">Written by {metadata.author}</h3>
                    <p className="text-zinc-600 leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                      Founder of VALISEARCH. Builder of AI tools for startup validation and market intelligence. Passionate about helping operators ship products that actually matter.
                    </p>
                    <div className="flex items-center gap-4">
                      <a href="https://www.linkedin.com/in/abdul-anas-0161b3370" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-bold text-zinc-900 hover:border-zinc-900 transition-all font-['Plus_Jakarta_Sans'] shadow-sm">
                        <Linkedin className="w-4 h-4 text-[#0077b5]" /> Follow on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                {related.length > 0 && (
                  <div className="mt-24">
                    <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-10 font-['Plus_Jakarta_Sans']">More Intelligence</h3>
                    <div className="grid sm:grid-cols-3 gap-8">
                      {related.map((p) => (
                        <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                          <div className="aspect-[16/10] rounded-lg bg-zinc-50 border border-zinc-100 mb-4 transition-all group-hover:shadow-lg group-hover:shadow-zinc-200/50 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] text-xl font-black uppercase font-['Plus_Jakarta_Sans']">VALISEARCH</div>
                          </div>
                          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400 font-['Plus_Jakarta_Sans']">{p.category}</span>
                          <h4 className="text-sm font-bold mt-2 text-zinc-900 group-hover:text-zinc-600 leading-snug line-clamp-2 font-['Plus_Jakarta_Sans']">{p.title}</h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </footer>
            </article>
          </div>
        </div>
      </main>

      <JournalFooter />
    </div>
  );
};

export default BlogPost;
