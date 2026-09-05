import React from 'react';
import { Star, CheckCircle, ExternalLink, Bookmark, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface PartnerCardProps {
  id?: string;
  name: string;
  category?: string;
  description: string;
  rating?: number;
  reviewsCount?: string;
  benefits?: string[];
  badge?: string;
  keyFeature?: string;
  ctaText?: string;
  onContinueClick?: () => void;
  directUrl?: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  id,
  name,
  category,
  description,
  rating,
  reviewsCount,
  benefits = [],
  badge,
  keyFeature,
  ctaText = 'Visit Platform',
  onContinueClick,
  directUrl
}) => {
  const { openExternalLink, isItemSaved, saveItem, removeSavedItem, savedItems } = useApp();

  const isSaved = isItemSaved(name);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSaved) {
      const match = savedItems.find((i) => i.title.toLowerCase() === name.toLowerCase());
      if (match) removeSavedItem(match.id);
    } else {
      saveItem({
        itemType: 'PARTNER',
        title: name,
        subtitle: description,
        detailDataJson: JSON.stringify({ category, rating, reviewsCount, badge, directUrl })
      });
    }
  };

  const handleCtaClick = () => {
    if (onContinueClick) {
      onContinueClick();
    } else if (directUrl) {
      openExternalLink(directUrl, name, description);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-bold text-base text-[#0A192F]">{name}</h3>
              {badge && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                  <Sparkles className="w-2.5 h-2.5" />
                  {badge}
                </span>
              )}
            </div>
            {category && (
              <span className="text-xs text-slate-500 font-medium block">{category}</span>
            )}
          </div>

          <button
            onClick={handleBookmarkToggle}
            className={`p-2 rounded-full border transition-colors ${
              isSaved
                ? 'bg-amber-50 text-amber-600 border-amber-200'
                : 'text-slate-400 hover:text-slate-600 border-slate-100 hover:bg-slate-50'
            }`}
            title={isSaved ? 'Remove Bookmark' : 'Save Bookmark'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
          </button>
        </div>

        {/* Rating and Reviews */}
        {rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-amber-500 gap-1 bg-amber-50/80 px-2 py-0.5 rounded-md border border-amber-200/40">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span className="text-xs font-bold text-slate-800">{rating.toFixed(1)}</span>
            </div>
            {reviewsCount && (
              <span className="text-xs text-slate-500 font-medium">({reviewsCount} reviews)</span>
            )}
            {keyFeature && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md ml-auto">
                {keyFeature}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3.5">
          {description}
        </p>

        {/* Benefits bullets */}
        {benefits.length > 0 && (
          <div className="space-y-1.5 mb-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="line-clamp-1">{b}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <button
        onClick={handleCtaClick}
        className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
      >
        <span>{ctaText}</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
