import React from 'react';
import { Clock, Bookmark, Share2, Tag, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RegionDataProvider } from '../data/regionDataProvider';

export const ArticleDetailScreen: React.FC = () => {
  const { routeParams, goBack, isItemSaved, saveItem, removeSavedItem, savedItems, region } = useApp();

  const articleId = routeParams.id || 'guide_1';
  const article = RegionDataProvider.getArticleById(region, articleId) || RegionDataProvider.getArticles(region)[0];

  const isSaved = isItemSaved(article?.title || '');

  if (!article) {
    return (
      <div className="p-8 text-center">
        <p className="text-slate-500">Article not found.</p>
        <button onClick={goBack} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold">
          Go Back
        </button>
      </div>
    );
  }

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
          </div>
        </div>

        {/* Article Summary Lead */}
        <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 text-sm font-medium leading-relaxed">
          {article.summary}
        </div>

        {/* Article Full Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed whitespace-pre-line">
          {article.fullContent}
        </div>

        {/* Bottom Back Button */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Guides</span>
          </button>
        </div>
      </div>
    </div>
  );
};
