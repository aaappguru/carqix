import React from 'react';
import { ArrowLeft, Search, Bookmark, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface AppTopBarProps {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  showSearchButton?: boolean;
  showSavedButton?: boolean;
  showSettingsButton?: boolean;
  onBackClick?: () => void;
}

export const AppTopBar: React.FC<AppTopBarProps> = ({
  title,
  subtitle,
  showBackButton,
  showSearchButton = true,
  showSavedButton = true,
  showSettingsButton = false,
  onBackClick
}) => {
  const { navigate, goBack, savedItems, currentRoute } = useApp();

  const getRouteTitle = (): { main: string; sub?: string } => {
    switch (currentRoute) {
      case 'home': return { main: 'CarQix US', sub: 'Automotive Companion' };
      case 'buy_cars': return { main: 'Used Cars', sub: 'Compare US Marketplaces' };
      case 'sell_car': return { main: 'Sell Car', sub: 'Cash Offers & Private Sale' };
      case 'value_car': return { main: 'Car Valuation', sub: 'True Market Value®' };
      case 'vehicle_history': return { main: 'VIN History', sub: 'NMVTIS & NHTSA Recalls' };
      case 'car_finance': return { main: 'Auto Finance', sub: 'Compare Rates & Loans' };
      case 'car_insurance': return { main: 'Car Insurance', sub: 'Insurify & Top Carriers' };
      case 'breakdown_cover': return { main: 'Roadside Assist', sub: '24/7 Breakdown Cover' };
      case 'parts_accessories': return { main: 'Auto Parts', sub: 'OEM & Aftermarket Store' };
      case 'reviews_guides': return { main: 'Reviews & Guides', sub: 'Expert Buyer Advice' };
      case 'article_detail': return { main: 'Guide Detail', sub: 'CarQix Automotive Advice' };
      case 'buying_advice': return { main: 'Buyer Checklist', sub: '10-Point Inspection' };
      case 'smart_tools': return { main: 'Smart Tools', sub: '10+ Calculators' };
      case 'calculator_detail': return { main: 'Calculator', sub: 'Financial Estimator' };
      case 'search': return { main: 'Search', sub: 'Search Entire Platform' };
      case 'saved': return { main: 'Saved Items', sub: 'Your Bookmarks' };
      case 'more': return { main: 'More Options', sub: 'Settings & Documentation' };
      case 'settings': return { main: 'Settings', sub: 'Preferences & Storage' };
      case 'about': return { main: 'About CarQix', sub: 'US Automotive Platform' };
      case 'how_to_use': return { main: 'How to Use', sub: 'Platform Guide' };
      case 'privacy_policy': return { main: 'Privacy Policy', sub: 'Data Practices' };
      case 'terms': return { main: 'Terms of Service', sub: 'Disclosures' };
      default: return { main: 'CarQix US' };
    }
  };

  const routeInfo = getRouteTitle();
  const displayTitle = title || routeInfo.main;
  const displaySubtitle = subtitle !== undefined ? subtitle : routeInfo.sub;
  const isBackNeeded = showBackButton !== undefined ? showBackButton : currentRoute !== 'home';

  return (
    <header className="sticky top-0 z-40 bg-[#0A192F] text-white border-b border-slate-800 shadow-md w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 h-16 flex items-center justify-between">
        {/* Left Side: Back button or Logo mark */}
        <div className="flex items-center gap-3">
          {isBackNeeded ? (
            <button
              id="topbar-back-btn"
              onClick={onBackClick || goBack}
              className="p-2 -ml-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors text-white focus:outline-none"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-[#0A192F] text-lg shadow-inner">
              Q
            </div>
          )}

          <div className="flex flex-col">
            <h1 className="text-base font-bold tracking-tight text-white leading-tight flex items-center gap-1.5">
              {displayTitle}
            </h1>
            {displaySubtitle && (
              <span className="text-xs text-slate-300 font-medium line-clamp-1">
                {displaySubtitle}
              </span>
            )}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1">
          {showSearchButton && (
            <button
              id="topbar-search-btn"
              onClick={() => navigate('global_search')}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Global Search"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          {showSavedButton && (
            <button
              id="topbar-saved-btn"
              onClick={() => navigate('saved')}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors relative"
              aria-label="Saved Items"
            >
              <Bookmark className="w-5 h-5" />
              {savedItems.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400"></span>
              )}
            </button>
          )}

          {showSettingsButton && (
            <button
              id="topbar-settings-btn"
              onClick={() => navigate('settings')}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
