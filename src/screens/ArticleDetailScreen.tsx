import React from 'react';
import { Clock, Bookmark, Share2, Tag, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ARTICLES } from '../data/automotiveData';

export const ArticleDetailScreen: React.FC = () => {
  const { routeParams, goBack, isItemSaved, saveItem, removeSavedItem, savedItems } = useApp();

  const articleId = routeParams.id || 'guide_1';
  const article = ARTICLES.find((a) => a.id === articleId) || ARTICLES[0];

  const isSaved = isItemSaved(article.title);

  const handleBookmarkToggle = () => {
    if (isSaved) {
      const match = savedItems.find((i) => i.title.toLowerCase() === article.title.toLowerCase());
      if (match) removeSavedItem(match.id);
    } else {
      saveItem({
        itemType: 'ARTICLE',
        title: article.title,
        subtitle: `${article.category} • ${article.readTimeMinutes} min read`,
        detailDataJson: JSON.stringify(article)
      });
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Article Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        {/* Header Metadata */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
              {article.tag}
            </span>
            <button
              onClick={handleBookmarkToggle}
              className={`p-2.5 rounded-full border transition-colors ${
                isSaved
                  ? 'bg-amber-50 text-amber-600 border-amber-200'
                  : 'text-slate-400 hover:text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title={isSaved ? 'Remove Bookmark' : 'Save Article'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#0A192F] tracking-tight leading-tight mb-3">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span>Category: <strong className="text-slate-700">{article.category}</strong></span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTimeMinutes} min read
            </span>
            <span>•</span>
            <span>Published {article.datePublished || 'Aug 2026'}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full" />

        {/* Full Markdown/Text Content */}
        <div className="text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
          {article.fullContent}
        </div>
      </div>
    </div>
  );
};
