export interface BlogPostMetadata {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  image?: string;
}

export const BLOG_POSTS: BlogPostMetadata[] = [
  {
    title: "Stop Building Shadows: How to Actually Validate an Idea in 2026 (For $0)",
    slug: "how-to-validate-startup-idea-2026",
    date: "2026-04-20",
    excerpt: "Most people spend 6 months coding a ghost town. Don't be that founder. Here is the 'dirty' way to find out if people actually give a damn about your idea.",
    author: "Abdul Anas",
    readTime: "9 min read",
    category: "Validation",
  },
  {
    title: "TAM SAM SOM: Don't Let Big Numbers Lie to You",
    slug: "tam-sam-som-market-size-simply",
    date: "2026-04-27",
    excerpt: "Investors love $100B slides. But you can't eat a slide. Here is how to calculate market size without the bullshit.",
    author: "Abdul Anas",
    readTime: "7 min read",
    category: "Market",
  },
  {
    title: "The Ghost Competitor: How to Find Your Real Rivals for Free",
    slug: "how-to-find-startup-competitors-free",
    date: "2026-05-04",
    excerpt: "If you think you have 'no competitors,' you're looking in the wrong place. Your biggest rival isn't a startup—it's a spreadsheet.",
    author: "Abdul Anas",
    readTime: "8 min read",
    category: "Strategy",
  },
  {
    title: "The Founder's Toolkit: 5 Tools I Actually Use for Market Research",
    slug: "best-market-research-tools-founders",
    date: "2026-05-11",
    excerpt: "You don't need a $5,000 SEMrush subscription to know if your idea has legs. Here are the lightweight tools I use every week.",
    author: "Abdul Anas",
    readTime: "6 min read",
    category: "Tools",
  },
  {
    title: "Stop Selling Features: How to Write a Value Prop That Actually Converts",
    slug: "how-to-write-value-proposition",
    date: "2026-05-18",
    excerpt: "Your landing page header is boring. Here is how to fix it by focusing on transformation, not technology.",
    author: "Abdul Anas",
    readTime: "7 min read",
    category: "Copywriting",
  },
  {
    title: "Building ValiSearch from Ghana: No Silicon Valley Required",
    slug: "i-built-this-from-ghana",
    date: "2026-05-25",
    excerpt: "You don't need a zip code in San Francisco to build a global startup. Here is the story of how ValiSearch was born in Accra.",
    author: "Abdul Anas",
    readTime: "9 min read",
    category: "Story",
  },
  {
    title: "The Zero-Dollar GTM: How to Get Your First 100 Users",
    slug: "gtm-strategy-bootstrapped-startups",
    date: "2026-06-01",
    excerpt: "You don't need a marketing budget to launch. You need a distribution playbook that works while you sleep.",
    author: "Abdul Anas",
    readTime: "8 min read",
    category: "Growth",
  },
  {
    title: "The Ultimate Validation Checklist: 20 Points to Success",
    slug: "startup-idea-validation-checklist",
    date: "2026-06-08",
    excerpt: "Don't write a single line of code until you've checked these 20 boxes. The 2026 guide to knowing if you have a business.",
    author: "Abdul Anas",
    readTime: "5 min read",
    category: "Validation",
  },
];
