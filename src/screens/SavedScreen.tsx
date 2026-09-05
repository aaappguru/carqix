import React, { useState } from 'react';
import { Bookmark, Trash2, ExternalLink, Calculator, BookOpen, Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';

export const SavedScreen: React.FC = () => {
  const { savedItems, removeSavedItem, clearSavedItems, navigate, openExternalLink } = useApp();
  const [activeTab, setActiveTab] = useState<'ALL' | 'PARTNER' | 'ARTICLE' | 'CALCULATION' | 'SEARCH'>('ALL');

  const filtered = savedItems.filter(item => {
    if (activeTab === 'ALL') return true;
    return item.itemType === activeTab;
  });

  const handleItemClick = (item: any) => {
    if (item.itemType === 'ARTICLE') {
      try {
        const parsed = JSON.parse(item.detailDataJson || '{}');
        if (parsed.id) navigate(`article_detail/${parsed.id}`);
        else navigate('reviews_guides');
      } catch {
        navigate('reviews_guides');
      }
    } else if (item.itemType === 'CALCULATION') {
      try {
        const parsed = JSON.parse(item.detailDataJson || '{}');
        if (parsed.calcId) navigate(`calculator_detail/${parsed.calcId}`);
        else navigate('smart_tools');
      } catch {
        navigate('smart_tools');
      }
    } else if (item.itemType === 'PARTNER') {
      try {
        const parsed = JSON.parse(item.detailDataJson || '{}');
        if (parsed.directUrl) openExternalLink(parsed.directUrl, item.title, item.subtitle);
        else navigate('buy_cars');
      } catch {
        navigate('buy_cars');
      }
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">Saved & Bookmarks</h1>
          <p className="text-xs text-slate-500">Your bookmarked platforms, guides, calculations, and searches</p>
        </div>
        {savedItems.length > 0 && (
          <button
            onClick={clearSavedItems}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Tabs filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {[
          { id: 'ALL', label: `All (${savedItems.length})` },
          { id: 'PARTNER', label: 'Partners' },
          { id: 'ARTICLE', label: 'Guides' },
          { id: 'CALCULATION', label: 'Calculations' },
          { id: 'SEARCH', label: 'Searches' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Items list */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-700 text-sm">No saved items found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Tap the bookmark icon on any marketplace, calculator result, or buying guide to save it here for quick access.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {item.itemType}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Saved {new Date(item.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#0A192F] group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSavedItem(item.id);
                  }}
                  className="p-2 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
