import { useState } from "react";

const articles = [
  {
    id: 1,
    category: "Corporate Law",
    title: "Navigating M&A Due Diligence in a Volatile Market",
    excerpt: "As market volatility continues to shape corporate strategy, dealmakers must adapt their due diligence practices to account for new risks and opportunities in an evolving regulatory landscape.",
    author: "William Harrington III",
    date: "March 12, 2024",
    read: "5 min",
    featured: true,
  },
  {
    id: 2,
    category: "Intellectual Property",
    title: "Protecting Your Brand Identity in the Age of AI",
    excerpt: "Artificial intelligence is transforming how brands are created, used, and potentially infringed. Here's what businesses need to know to protect their intellectual property in this new era.",
    author: "Dr. Sarah Chen",
    date: "February 28, 2024",
    read: "4 min",
    featured: false,
  },
  {
    id: 3,
    category: "Employment Law",
    title: "New Federal Guidelines for Remote Work Compliance",
    excerpt: "The Department of Labor has issued sweeping new guidance on remote work arrangements, wage-and-hour compliance, and multistate employment issues that every employer should understand.",
    author: "Marcus Thompson",
    date: "February 14, 2024",
    read: "6 min",
    featured: false,
  },
  {
    id: 4,
    category: "Real Estate",
    title: "Commercial Real Estate in Transition: Legal Considerations",
    excerpt: "The post-pandemic commercial real estate market presents unique legal challenges for landlords, tenants, and investors. Our analysis of the key issues shaping today's transactions.",
    author: "Elena Vasquez",
    date: "January 30, 2024",
    read: "7 min",
    featured: false,
  },
  {
    id: 5,
    category: "Criminal Defense",
    title: "Digital Evidence: What Every Client Must Know",
    excerpt: "As digital footprints become increasingly central to criminal proceedings, understanding how electronic evidence is gathered, preserved, and challenged is more important than ever.",
    author: "James Whitfield",
    date: "January 20, 2024",
    read: "5 min",
    featured: false,
  },
  {
    id: 6,
    category: "Tax Law",
    title: "2024 Tax Law Changes: A Business Owner's Guide",
    excerpt: "Significant changes to the tax code are taking effect in 2024. Here's our comprehensive breakdown of what business owners and high-net-worth individuals need to know and do now.",
    author: "Priya Nair",
    date: "January 8, 2024",
    read: "8 min",
    featured: false,
  },
  {
    id: 7,
    category: "Litigation",
    title: "Class Action Trends: What Companies Should Prepare For",
    excerpt: "A wave of class action filings is reshaping litigation exposure for businesses across industries. Our litigation team analyzes the key trends and strategies for defense preparedness.",
    author: "Robert Cunningham",
    date: "December 18, 2023",
    read: "6 min",
    featured: false,
  },
  {
    id: 8,
    category: "Family Law",
    title: "Asset Protection in High-Net-Worth Divorce Proceedings",
    excerpt: "Protecting wealth in complex divorce cases requires early planning and sophisticated legal strategies. Our family law team outlines the key considerations for high-net-worth individuals.",
    author: "Olivia Park",
    date: "December 5, 2023",
    read: "5 min",
    featured: false,
  },
];

const categories = ["All", "Corporate Law", "Intellectual Property", "Employment Law", "Real Estate", "Criminal Defense", "Tax Law", "Litigation", "Family Law"];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);
  const filtered = activeCategory === "All" ? rest : rest.filter((a) => a.category === activeCategory);

  return (
    <main className="">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 20% 60%, #c9a84c 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">Knowledge Hub</span>
          <h1 className="section-title-white text-4xl md:text-6xl max-w-2xl">
            Legal Insights & Perspectives
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 max-w-xl text-sm leading-relaxed">
            Commentary, analysis, and practical guidance from our attorneys on
            the legal developments shaping business and society.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="bg-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-200 overflow-hidden group">
              {/* Image placeholder */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#0a1628] to-[#1a2f5a] min-h-[280px] flex items-center justify-center relative overflow-hidden">
                <div className="text-[#c9a84c]/10 font-serif text-9xl font-light select-none">F</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-semibold">Featured</span>
                </div>
              </div>
              {/* Content */}
              <div className="lg:col-span-3 p-10 flex flex-col justify-center">
                <span className="text-[#c9a84c] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
                  {featured.category}
                </span>
                <h2 className="font-serif text-3xl text-[#0a1628] mb-4 leading-tight group-hover:text-[#c9a84c] transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-400 text-[11px] uppercase tracking-widest border-t border-slate-100 pt-5">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.read} read</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="bg-[#faf8f3] border-b border-slate-200 sticky top-[60px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-1.5 text-[10px] tracking-widest uppercase font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === c
                  ? "bg-[#0a1628] text-[#c9a84c]"
                  : "bg-white text-slate-500 border border-slate-200 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="group border border-slate-100 hover:border-[#c9a84c]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[#0a1628] to-[#122040] h-40 flex items-end p-6 relative overflow-hidden">
                  <div className="absolute top-4 left-6">
                    <span className="text-[#c9a84c] text-[9px] tracking-[0.3em] uppercase font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-4 text-white/10 font-serif text-6xl font-light select-none">
                    {article.id}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl text-[#0a1628] leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <span className="text-slate-400 text-[10px]">{article.date}</span>
                    <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase font-semibold">{article.read} read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400 text-sm">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0a1628] py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="section-label">Stay Informed</span>
          <h2 className="section-title-white text-3xl md:text-4xl mb-4">
            Legal Updates in Your Inbox
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Subscribe to our monthly legal insights newsletter. No spam — just
            the developments that matter to you.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 px-5 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
            <button className="btn-gold-solid shrink-0 text-xs">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
