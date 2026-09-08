import React from 'react';
import { 
  ArrowLeft, 
  Search, 
  Bookmark, 
  Settings, 
  Home, 
  Car, 
  Calculator, 
  BookOpen, 
  Menu 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RegionSwitcher } from './RegionSwitcher';

interface AppTopBarProps {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  showSearchButton?: boolean;
  showSavedButton?: boolean;
  showSettingsButton?: boolean;
  showRegionSwitcher?: boolean;
  onBackClick?: () => void;
}

export const AppTopBar: React.FC<AppTopBarProps> = ({
  title,
  subtitle,
  showBackButton,
  showSearchButton = true,
  showSavedButton = true,
  showSettingsButton = false,
  showRegionSwitcher = true,
  onBackClick
}) => {
  const { navigate, goBack, savedItems, currentRoute, regionConfig } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, route: 'home' },
    { id: 'buy_cars', label: 'Buy Cars', icon: Car, route: 'buy_cars' },
    { id: 'smart_tools', label: 'Calculators', icon: Calculator, route: 'smart_tools' },
    { id: 'reviews_guides', label: 'Guides', icon: BookOpen, route: 'reviews_guides' },
    { id: 'more', label: 'More', icon: Menu, route: 'more' },
  ];

  const getIsActive = (itemId: string, itemRoute: string) => {
    if (itemId === 'home') return currentRoute === 'home';
    if (itemId === 'buy_cars') return currentRoute === 'buy_cars' || currentRoute === 'value_car' || currentRoute === 'sell_car';
    if (itemId === 'smart_tools') return currentRoute === 'smart_tools' || currentRoute === 'calculator_detail';
    if (itemId === 'reviews_guides') return currentRoute === 'reviews_guides' || currentRoute === 'article_detail' || currentRoute === 'buying_advice';
    if (itemId === 'more') return currentRoute === 'more' || currentRoute === 'settings' || currentRoute === 'about' || currentRoute === 'how_to_use' || currentRoute === 'privacy_policy' || currentRoute === 'terms';
    return currentRoute === itemRoute;
  };

  const getRouteTitle = (): { main: string; sub?: string } => {
    const isUk = regionConfig.id === 'uk';
    const isCa = regionConfig.id === 'ca';
    const regionName = regionConfig.shortName;

    switch (currentRoute) {
      case 'home': return { main: regionName, sub: regionConfig.heroSubtitle.split(',')[0] || 'Automotive Companion' };
      case 'buy_cars': return { main: 'Used Cars', sub: `Compare ${isUk ? 'UK' : isCa ? 'Canada' : 'US'} Marketplaces` };
      case 'sell_car': return { main: 'Sell Car', sub: 'Instant Offers & Online Valuation' };
      case 'value_car': return { main: 'Car Valuation', sub: isUk ? 'AutoTrader & Motorway' : isCa ? 'Canadian Market Value' : 'True Market Value®' };
      case 'vehicle_history': return { main: isUk ? 'MOT History' : isCa ? 'CARFAX Canada' : 'VIN History', sub: isUk ? 'GOV.UK & HPI Check' : isCa ? 'Lien & Accident Check' : 'NMVTIS & NHTSA Recalls' };
      case 'car_finance': return { main: 'Auto Finance', sub: isUk ? 'PCP & HP Loans (£)' : isCa ? 'Car Loans & HST (CA$)' : 'Compare Rates & Loans ($)' };
      case 'car_insurance': return { main: 'Car Insurance', sub: isUk ? 'Compare 100+ UK Insurers' : 'Compare Top Carriers' };
      case 'breakdown_cover': return { main: 'Roadside Assist', sub: isUk ? 'AA, RAC & Green Flag' : '24/7 Breakdown Cover' };
      case 'parts_accessories': return { main: 'Auto Parts', sub: 'OEM & Aftermarket Store' };
      case 'reviews_guides': return { main: 'Reviews & Guides', sub: 'Expert Buyer Advice' };
      case 'article_detail': return { main: 'Guide Detail', sub: `${regionName} Automotive Advice` };
      case 'buying_advice': return { main: 'Buyer Checklist', sub: '10-Point Inspection' };
      case 'smart_tools': return { main: 'Smart Tools', sub: '10+ Calculators' };
      case 'calculator_detail': return { main: 'Calculator', sub: 'Financial Estimator' };
      case 'search': return { main: 'Search', sub: 'Search Entire Platform' };
      case 'saved': return { main: 'Saved Items', sub: 'Your Bookmarks' };
      case 'more': return { main: 'More Options', sub: 'Settings & Documentation' };
      case 'settings': return { main: 'Settings', sub: 'Preferences & Storage' };
      case 'about': return { main: `About ${regionName}`, sub: `${regionConfig.name} Platform` };
      case 'how_to_use': return { main: 'How to Use', sub: 'Platform Guide' };
      case 'privacy_policy': return { main: 'Privacy Policy', sub: 'Data Practices' };
      case 'terms': return { main: 'Terms of Service', sub: 'Disclosures' };
      default: return { main: regionName };
    }
  };

  const routeInfo = getRouteTitle();
  const displayTitle = title || routeInfo.main;
  const displaySubtitle = subtitle !== undefined ? subtitle : routeInfo.sub;
  const isBackNeeded = showBackButton !== undefined ? showBackButton : currentRoute !== 'home';

  return (
    <header className="sticky top-0 z-40 bg-[#0A192F] text-white border-b border-slate-800 shadow-md w-full">
      {/* Top Row: Brand / Screen Title + Nav Links + Region / Actions */}
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Side: Back button or Logo mark + Title */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0">
          {isBackNeeded ? (
            <button
              id="topbar-back-btn"
              onClick={onBackClick || goBack}
              className="p-2 -ml-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors text-white focus:outline-none flex items-center gap-1 shrink-0"
              aria-label="Go back"
              title="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-amber-400" />
            </button>
          ) : (
            <button
              id="topbar-logo-btn"
              onClick={() => navigate('home')}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-[#0A192F] text-lg shadow-inner hover:opacity-90 active:scale-95 transition-all shrink-0"
              title="CarQix Home"
            >
              Q
            </button>
          )}

          <div className="flex flex-col min-w-0">
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-white leading-tight truncate">
              {displayTitle}
            </h1>
            {displaySubtitle && (
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium truncate max-w-[140px] sm:max-w-[200px]">
                {displaySubtitle}
              </span>
            )}
          </div>
        </div>

        {/* Center: Title Bar Navigation Buttons (Home | Buy Cars | Calculators | Guides | More) */}
        <nav 
          id="topbar-main-nav"
          className="hidden md:flex items-center justify-center bg-slate-900/90 border border-slate-700/80 rounded-2xl p-1 shadow-inner gap-0.5"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = getIsActive(item.id, item.route);

            return (
              <button
                key={item.id}
                id={`topbar-nav-${item.id}`}
                onClick={() => navigate(item.route)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side Actions: Region Switcher + Global Search + Bookmarks + Settings */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {showRegionSwitcher && (
            <RegionSwitcher variant="header" />
          )}

          {showSearchButton && (
            <button
              id="topbar-search-btn"
              onClick={() => navigate('global_search')}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Global Search"
              title="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

          {showSavedButton && (
            <button
              id="topbar-saved-btn"
              onClick={() => navigate('saved')}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors relative"
              aria-label="Saved Items"
              title="Saved Items"
            >
              <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
              {savedItems.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400"></span>
              )}
            </button>
          )}

          {showSettingsButton && (
            <button
              id="topbar-settings-btn"
              onClick={() => navigate('settings')}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Settings"
              title="Settings"
            >
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Secondary Row: Quick Nav Buttons (Home | Buy Cars | Calculators | Guides | More) */}
      <div className="md:hidden w-full border-t border-slate-800/80 bg-[#071324] px-2 py-1.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between min-w-[340px] gap-1 px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = getIsActive(item.id, item.route);

            return (
              <button
                key={item.id}
                id={`topbar-mobile-nav-${item.id}`}
                onClick={() => navigate(item.route)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600/90 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
