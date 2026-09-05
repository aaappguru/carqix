import React, { useState } from 'react';
import { BookOpen, Clock, Tag, Search, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { ARTICLES } from '../data/automotiveData';

export const ReviewsGuidesScreen: React.FC = () => {
  const { navigate } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'Buying Guides', 'Finance', 'Insurance', 'Inspection', 'Legal', 'Negotiation'];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'ALL' || article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="US Used Car Guides & Advice"
        subtitle="Expert insights on pre-purchase inspections, vehicle titles, Lemon Laws, auto loans, and negotiating out-the-door prices."
        ctaText="10-Point Checklist"
        badgeText="Verified US Buyer Guides"
        onCtaClick={() => navigate('buying_advice')}
      />

      {/* Search & Category Filter */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200/90 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search guides, inspections, tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all font-medium ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-3.5">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => navigate(`article_detail/${article.id}`)}
            className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                  {article.tag}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTimeMinutes} min read
                </span>
                <span className="text-xs text-slate-400">
                  • {article.category}
                </span>
              </div>

              <h3 className="font-bold text-base text-[#0A192F] group-hover:text-blue-600 transition-colors mb-1.5 leading-snug">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {article.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
              <span className="text-slate-400">Published {article.datePublished || 'Aug 2026'}</span>
              <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
