import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/content/blog";
import { JournalNavbar } from "@/components/landing/JournalNavbar";
import { JournalFooter } from "@/components/landing/JournalFooter";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const Blog = () => {
  const sorted = [...BLOG_POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="bg-[#FDFDFD] min-h-screen text-[#1a1a1a] selection:bg-zinc-200">
      <JournalNavbar />

      <main className="pt-24 pb-24">
        {/* Header */}
        <section className="bg-white border-b border-zinc-100">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
                The Journal
              </h1>
              <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                Expert insights on market validation, startup frameworks, and the art of shipping great products.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="border-b border-zinc-100 bg-white">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-12">
              <Link to={`/blog/${featured.slug}`} className="group block">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-sm border border-zinc-100 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-zinc-200/50">
                      <div className="w-full h-full bg-zinc-50 relative flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-white" />
                        <div className="relative text-[120px] font-black text-zinc-900/5 select-none font-['Plus_Jakarta_Sans'] uppercase">
                          VALISEARCH
                        </div>
                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                           <span className="inline-block self-start text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-zinc-900 px-3 py-1.5 rounded-sm mb-4">
                            Featured · {featured.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4 font-['Plus_Jakarta_Sans']">
                      <span>{formatDate(featured.date)}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-200" />
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-3 h-3" />{featured.readTime} read</span>
                    </div>
                    <h2 className="text-3xl md:text-[44px] font-extrabold leading-[1.05] tracking-tight mb-5 font-['Plus_Jakarta_Sans'] group-hover:text-zinc-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-zinc-600 text-lg leading-[1.6] mb-8 font-['Source_Serif_4']">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-900 border border-zinc-200">
                        AA
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">{featured.author}</div>
                        <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Founder, VALISEARCH</div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                        Read Story <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Grid Feed */}
        <section className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center justify-between mb-12 border-b border-zinc-100 pb-6">
            <h3 className="text-xl font-bold tracking-tight font-['Plus_Jakarta_Sans']">Latest Intelligence</h3>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-400 font-['Plus_Jakarta_Sans']">{rest.length} Entries</span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-zinc-50 border border-zinc-100 mb-6 relative shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-zinc-200/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-4xl font-black uppercase font-['Plus_Jakarta_Sans']">
                      VALISEARCH
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-900 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-zinc-200">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.15em] font-['Plus_Jakarta_Sans']">
                    <span>{formatDate(post.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-200" />
                    <span>{post.readTime} read</span>
                  </div>
                  <h4 className="text-2xl font-bold leading-tight tracking-tight text-[#1a1a1a] mb-4 group-hover:text-zinc-600 transition-colors font-['Plus_Jakarta_Sans']">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 text-[16px] leading-relaxed line-clamp-3 mb-6 font-['Source_Serif_4']">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[9px] font-bold text-zinc-900 border border-zinc-200">AA</div>
                    <span className="text-xs text-zinc-900 font-bold font-['Plus_Jakarta_Sans']">{post.author}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Substack Style Lead Gen */}
          <div className="mt-32 rounded-2xl bg-zinc-900 p-10 md:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-['Plus_Jakarta_Sans']">The Weekly Intelligence</span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 font-['Plus_Jakarta_Sans']">
                Better insights for faster builders.
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-['Plus_Jakarta_Sans']">
                Join 5,000+ founders receiving our weekly teardowns on validation frameworks and market intelligence.
              </p>
              <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-4 text-white text-sm outline-none focus:bg-white/15 focus:border-white/30 transition-all font-['Plus_Jakarta_Sans']"
                />
                <button className="px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-all font-['Plus_Jakarta_Sans'] active:scale-95">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <JournalFooter />
    </div>
  );
};

export default Blog;
