import React, { useState } from 'react';
import { 
  Car, 
  Calculator, 
  DollarSign, 
  PoundSterling,
  ShieldCheck, 
  FileSearch, 
  Wrench, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Search,
  BookOpen,
  CheckCircle,
  Clock,
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBannerSlider } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionSwitcher } from '../components/RegionSwitcher';
import { RegionDataProvider } from '../data/regionDataProvider';
import { SearchUrlBuilder } from '../utils/searchUrlBuilder';

export const HomeScreen: React.FC = () => {
  const { navigate, openExternalLink, region, regionConfig } = useApp();

  // Quick Search Bar state
  const [selectedMake, setSelectedMake] = useState('All Makes');
  const [postalCode, setPostalCode] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const isUs = region === 'us';

  const popularMakes = RegionDataProvider.getPopularMakes(region);
  const marketplaces = RegionDataProvider.getMarketplaces(region);
  const featuredMarketplaces = marketplaces.slice(0, 4);
  const articles = RegionDataProvider.getArticles(region);

  const defaultSearchPartnerKey = RegionDataProvider.getDefaultSearchPartnerKey(region);
  const defaultSearchPartnerName = RegionDataProvider.getDefaultSearchPartnerName(region);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const url = SearchUrlBuilder.buildPartnerSearchUrl(defaultSearchPartnerKey, {
      make: selectedMake === 'All Makes' ? '' : selectedMake,
      model: '',
      minPrice: '',
      maxPrice,
      minYear: '',
      maxYear: '',
      zipCode: postalCode,
      radiusMiles: '50',
      bodyType: '',
      transmission: '',
      fuelType: ''
    }, region);

    openExternalLink(
      url, 
      `${defaultSearchPartnerName} ${selectedMake !== 'All Makes' ? selectedMake : ''} Search`, 
      `Searching verified inventory across ${regionConfig.name}`
    );
  };

  const quickTools = [
    {
      id: 'loan',
      title: isUk ? 'PCP & HP Calc' : isCa ? 'Auto Loan (CA$)' : 'Auto Loan Calc',
      subtitle: isUk ? 'Monthly PCP / HP rates' : isCa ? 'Provincial tax & rates' : 'Estimate monthly rates',
      icon: Calculator,
      route: 'calculator_detail/loan',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 'value',
      title: isUk ? 'Free Valuation' : isCa ? 'Black Book® Value' : 'Car Valuation',
      subtitle: isUk ? 'Forecourt & trade-in' : isCa ? 'Canadian Black Book®' : 'True Market Value®',
      icon: isUk ? PoundSterling : isCa ? TrendingUp : DollarSign,
      route: 'value_car',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      id: 'history',
      title: isUk ? 'GOV.UK MOT Check' : isCa ? 'CARFAX Canada' : 'VIN History',
      subtitle: isUk ? 'Test history & advisories' : isCa ? 'Provincial liens & damage' : 'Accidents & recalls',
      icon: FileSearch,
      route: 'vehicle_history',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      id: 'advice',
      title: 'Buyer Guide',
      subtitle: isUk ? 'V5C & inspection tips' : isCa ? 'Safety cert & UVIP tips' : '10-pt inspection tips',
      icon: BookOpen,
      route: 'buying_advice',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ];

  const priceOptions = isUk ? [
    { value: '3000', label: '£3,000' },
    { value: '5000', label: '£5,000' },
    { value: '8000', label: '£8,000' },
    { value: '10000', label: '£10,000' },
    { value: '15000', label: '£15,000' },
    { value: '20000', label: '£20,000' },
    { value: '30000', label: '£30,000' },
    { value: '50000', label: '£50,000' }
  ] : [
    { value: '10000', label: `${regionConfig.currencySymbol}10,000` },
    { value: '15000', label: `${regionConfig.currencySymbol}15,000` },
    { value: '20000', label: `${regionConfig.currencySymbol}20,000` },
    { value: '25000', label: `${regionConfig.currencySymbol}25,000` },
    { value: '35000', label: `${regionConfig.currencySymbol}35,000` },
    { value: '50000', label: `${regionConfig.currencySymbol}50,000` },
    { value: '75000', label: `${regionConfig.currencySymbol}75,000` }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Global Region Switcher Banner */}
      <RegionSwitcher variant="banner" />

      {/* Hero Carousel */}
      <HeroBannerSlider onNavigate={navigate} />

      {/* Quick Search Form */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-blue-600" />
            <h2 className="font-bold text-sm text-[#0A192F]">
              Quick {regionConfig.shortName} Car Search
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <span>{regionConfig.flag}</span>
            <span>{isUk ? '400,000+ UK Listings' : isCa ? 'Canada-wide Inventory' : 'Millions of US Cars'}</span>
          </span>
        </div>

        <form onSubmit={handleQuickSearch} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Make</label>
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                <option value="All Makes">All Popular Makes</option>
                {popularMakes.map((make) => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                Max Price ({regionConfig.currencySymbol})
              </label>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                <option value="">Any Price</option>
                {priceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                {regionConfig.postalCodeLabel}
              </label>
              <input
                type="text"
                placeholder={regionConfig.postalCodePlaceholder}
                maxLength={isUk ? 10 : 8}
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="submit"
              className="flex-1 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/10 transition-all"
            >
              <Search className="w-4 h-4" />
              <span>Search {defaultSearchPartnerName}</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('buy_cars')}
              className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All {marketplaces.length} Marketplaces</span>
            </button>
          </div>
        </form>
      </div>

      {/* Quick Launchpad Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Essential {regionConfig.shortName} Tools
          </h2>
          <button
            onClick={() => navigate('smart_tools')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>View 10+ Calculators</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => navigate(tool.route)}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div className={`w-10 h-10 rounded-xl ${tool.bg} ${tool.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#0A192F] group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {tool.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Marketplaces */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Leading {regionConfig.shortName} Marketplaces
            </h2>
          </div>
          <button
            onClick={() => navigate('buy_cars')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>See All ({marketplaces.length})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredMarketplaces.map((m) => (
            <PartnerCard
              key={m.id}
              name={m.name}
              category={m.category}
              description={m.description}
              rating={m.rating}
              reviewsCount={m.reviewsCount}
              benefits={m.benefits}
              badge={m.badge}
              ctaText={`Search ${m.name}`}
              onContinueClick={() => {
                const url = SearchUrlBuilder.buildPartnerSearchUrl(m.webUrlKey, {
                  make: '', model: '', minPrice: '', maxPrice: '', minYear: '', maxYear: '', zipCode: '', radiusMiles: '', bodyType: '', transmission: '', fuelType: ''
                }, region);
                openExternalLink(url, m.name, m.description);
              }}
            />
          ))}
        </div>
      </div>

      {/* Services Spectrum Banner */}
      <div className="bg-gradient-to-r from-[#0A192F] to-[#1E293B] rounded-3xl p-6 text-white border border-slate-800 shadow-md">
        <h3 className="font-black text-lg text-white mb-1">
          {regionConfig.shortName} Motoring Spectrum
        </h3>
        <p className="text-xs text-slate-300 mb-4 max-w-md">
          {isUk
            ? 'Explore verified UK portals across valuation, selling, PCP/HP finance, insurance, MOT, and breakdown assistance.'
            : isCa
            ? 'Explore Canadian services across valuation, selling, auto loans, CARFAX Canada reports, and warranty.'
            : 'Explore trusted US partners across valuation, selling, financing, insurance, and roadside assistance.'}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => navigate('car_finance')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            {isUk ? (
              <PoundSterling className="w-4 h-4 text-emerald-400 mb-1" />
            ) : isCa ? (
              <Calculator className="w-4 h-4 text-emerald-400 mb-1" />
            ) : (
              <DollarSign className="w-4 h-4 text-emerald-400 mb-1" />
            )}
            <div className="text-xs font-bold text-white">
              {isUk ? 'Car Finance (PCP/HP)' : isCa ? 'Auto Finance (CA$)' : 'Car Finance ($)'}
            </div>
            <div className="text-[10px] text-slate-300">
              {isUk ? 'Zuto & AutoTrader' : isCa ? 'Canadian Rates & HST' : 'Bankrate & Lenders'}
            </div>
          </button>

          <button
            onClick={() => navigate('car_insurance')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <ShieldCheck className="w-4 h-4 text-blue-400 mb-1" />
            <div className="text-xs font-bold text-white">Car Insurance</div>
            <div className="text-[10px] text-slate-300">
              {isUk ? 'Compare the Market' : 'Compare Top Rates'}
            </div>
          </button>

          <button
            onClick={() => navigate('breakdown_cover')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <Wrench className="w-4 h-4 text-amber-400 mb-1" />
            <div className="text-xs font-bold text-white">
              {isUk ? 'Breakdown Cover' : 'Roadside Assist'}
            </div>
            <div className="text-[10px] text-slate-300">
              {isUk ? 'AA, RAC & Green Flag' : 'AAA & 24/7 Patrols'}
            </div>
          </button>

          <button
            onClick={() => navigate('sell_car')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <Car className="w-4 h-4 text-purple-400 mb-1" />
            <div className="text-xs font-bold text-white">Sell Your Car</div>
            <div className="text-[10px] text-slate-300">
              {isUk ? 'Motorway & webuyanycar' : 'Instant Cash Offers'}
            </div>
          </button>

          <button
            onClick={() => navigate('vehicle_history')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <FileSearch className="w-4 h-4 text-rose-400 mb-1" />
            <div className="text-xs font-bold text-white">
              {isUk ? 'MOT & HPI History' : isCa ? 'CARFAX Canada' : 'VIN History'}
            </div>
            <div className="text-[10px] text-slate-300">
              {isUk ? 'Free GOV.UK Check' : isCa ? 'Accidents & Liens' : 'NMVTIS Reports'}
            </div>
          </button>

          <button
            onClick={() => navigate('buying_advice')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <BookOpen className="w-4 h-4 text-cyan-400 mb-1" />
            <div className="text-xs font-bold text-white">Buyer Checklist</div>
            <div className="text-[10px] text-slate-300">
              {isUk ? 'V5C & MOT Verification' : '10-Point Inspection'}
            </div>
          </button>
        </div>
      </div>

      {/* Featured Articles & Guides */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Featured {regionConfig.shortName} Guides
          </h2>
          <button
            onClick={() => navigate('reviews_guides')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>All Articles</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-3">
          {articles.slice(0, 3).map((article) => (
            <button
              key={article.id}
              onClick={() => navigate(`article_detail/${article.id}`)}
              className="w-full text-left bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex items-start justify-between gap-4 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {article.tag}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTimeMinutes} min read
                  </span>
                </div>
                <h3 className="font-bold text-sm text-[#0A192F] group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {article.summary}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
            </button>
          ))}
        </div>
      </div>

      {/* SEO Information & FAQ Hub */}
      <section className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-6" aria-label="Automotive Information and Frequently Asked Questions">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose CarQix</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">
            {regionConfig.shortName} – The Complete Used Car Portal & Financial Suite
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
            CarQix aggregates live listings and verified automotive tools across {regionConfig.name}. Whether you are buying a certified pre-owned vehicle, evaluating trade-in equity, checking NMVTIS/CARFAX history reports, comparing auto loan rates, or finding the cheapest insurance quotes, CarQix delivers transparent automotive data at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-xs text-[#0A192F]">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>500,000+ Verified Listings</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Aggregated across top trusted marketplaces in {regionConfig.name}.
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-xs text-[#0A192F]">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Real-Time Market Valuation</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Accurate trade-in, private sale, and forecourt retail price predictions.
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-xs text-[#0A192F]">
              <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Smart Financial Calculators</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Auto loan APR, amortization schedules, lease vs. buy, and total ownership costs.
            </p>
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-sm font-bold text-[#0A192F] mb-3">
            Frequently Asked Questions about {regionConfig.shortName}
          </h2>
          <div className="space-y-2.5">
            <details className="group rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-xs text-slate-800 hover:text-blue-600">
                <span>How does CarQix compare vehicle prices across marketplaces?</span>
                <span className="transition group-open:rotate-180">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 rotate-90" />
                </span>
              </summary>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                CarQix provides direct deep-linking and search filters across leading dealer networks and classified portals including AutoTrader, Cars.com, CarGurus, Edmunds, Kijiji Autos, and Motors.co.uk so you never miss a verified bargain.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-xs text-slate-800 hover:text-blue-600">
                <span>How can I check a car's history before buying?</span>
                <span className="transition group-open:rotate-180">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 rotate-90" />
                </span>
              </summary>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Use the Vehicle History section in CarQix to access official NMVTIS, CARFAX, AutoCheck, or UK GOV.UK MOT databases to verify previous accidents, structural damage, title brands, and mileage records.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-xs text-slate-800 hover:text-blue-600">
                <span>Can I switch between US, UK, and Canada editions?</span>
                <span className="transition group-open:rotate-180">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 rotate-90" />
                </span>
              </summary>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Yes! CarQix features instantaneous regional switching between CarQix US ($ / miles), CarQix UK (£ / MOT / PCP), and CarQix Canada (CA$ / km / provincial taxes) with tailored partner marketplaces and calculators for each territory.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};
