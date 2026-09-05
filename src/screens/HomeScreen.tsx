import React, { useState } from 'react';
import { 
  Car, 
  Calculator, 
  DollarSign, 
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
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBannerSlider } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { MARKETPLACES, ARTICLES, POPULAR_MAKES, US_STATES } from '../data/automotiveData';
import { SearchUrlBuilder } from '../utils/searchUrlBuilder';

export const HomeScreen: React.FC = () => {
  const { navigate, openExternalLink } = useApp();

  // Quick Search Bar state
  const [selectedMake, setSelectedMake] = useState('All Makes');
  const [zipCode, setZipCode] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const url = SearchUrlBuilder.buildPartnerSearchUrl('auctiondirectusa', {
      make: selectedMake === 'All Makes' ? '' : selectedMake,
      model: '',
      minPrice: '',
      maxPrice,
      minYear: '',
      maxYear: '',
      zipCode,
      radiusMiles: '50',
      bodyType: '',
      transmission: '',
      fuelType: ''
    });
    openExternalLink(url, `Auction Direct USA ${selectedMake} Search`, 'Searching nationwide US inventory');
  };

  const quickTools = [
    {
      id: 'loan',
      title: 'Auto Loan Calc',
      subtitle: 'Estimate monthly rates',
      icon: Calculator,
      route: 'calculator_detail/loan',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 'value',
      title: 'Car Valuation',
      subtitle: 'True Market Value®',
      icon: DollarSign,
      route: 'value_car',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      id: 'history',
      title: 'VIN History',
      subtitle: 'Accidents & recalls',
      icon: FileSearch,
      route: 'vehicle_history',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      id: 'advice',
      title: 'Buyer Guide',
      subtitle: '10-pt inspection tips',
      icon: BookOpen,
      route: 'buying_advice',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ];

  const featuredMarketplaces = MARKETPLACES.slice(0, 4);

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Carousel */}
      <HeroBannerSlider onNavigate={navigate} />

      {/* Quick Search Form */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-blue-600" />
            <h2 className="font-bold text-sm text-[#0A192F]">Quick Used Car Search</h2>
          </div>
          <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            Millions of US Cars
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
                {POPULAR_MAKES.map((make) => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Max Price ($)</label>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                <option value="">Any Price</option>
                <option value="10000">$10,000</option>
                <option value="15000">$15,000</option>
                <option value="20000">$20,000</option>
                <option value="25000">$25,000</option>
                <option value="35000">$35,000</option>
                <option value="50000">$50,000</option>
                <option value="75000">$75,000</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">ZIP Code</label>
              <input
                type="text"
                placeholder="e.g. 90210"
                maxLength={5}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
              <span>Search Edmunds Inventory</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('buy_cars')}
              className="h-11 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All 10+ Marketplaces</span>
            </button>
          </div>
        </form>
      </div>

      {/* Quick Launchpad Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Essential Tools
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
              Leading US Marketplaces
            </h2>
          </div>
          <button
            onClick={() => navigate('buy_cars')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>See All Marketplaces</span>
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
                });
                openExternalLink(url, m.name, m.description);
              }}
            />
          ))}
        </div>
      </div>

      {/* Services Spectrum Banner */}
      <div className="bg-gradient-to-r from-[#0A192F] to-[#1E293B] rounded-3xl p-6 text-white border border-slate-800 shadow-md">
        <h3 className="font-black text-lg text-white mb-1">
          Complete Automotive Lifecycle
        </h3>
        <p className="text-xs text-slate-300 mb-4 max-w-md">
          Explore trusted US partners across valuation, selling, financing, insurance, and roadside assistance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => navigate('car_finance')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <DollarSign className="w-4 h-4 text-emerald-400 mb-1" />
            <div className="text-xs font-bold text-white">Car Finance</div>
            <div className="text-[10px] text-slate-300">Bankrate & Lenders</div>
          </button>

          <button
            onClick={() => navigate('car_insurance')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <ShieldCheck className="w-4 h-4 text-blue-400 mb-1" />
            <div className="text-xs font-bold text-white">Car Insurance</div>
            <div className="text-[10px] text-slate-300">Insurify & Rates</div>
          </button>

          <button
            onClick={() => navigate('breakdown_cover')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <Wrench className="w-4 h-4 text-amber-400 mb-1" />
            <div className="text-xs font-bold text-white">Roadside Assist</div>
            <div className="text-[10px] text-slate-300">AAA & Allstate</div>
          </button>

          <button
            onClick={() => navigate('sell_car')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <Car className="w-4 h-4 text-purple-400 mb-1" />
            <div className="text-xs font-bold text-white">Sell Your Car</div>
            <div className="text-[10px] text-slate-300">Instant Cash Offers</div>
          </button>

          <button
            onClick={() => navigate('parts_accessories')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <TrendingUp className="w-4 h-4 text-rose-400 mb-1" />
            <div className="text-xs font-bold text-white">Auto Parts</div>
            <div className="text-[10px] text-slate-300">Amazon & RockAuto</div>
          </button>

          <button
            onClick={() => navigate('buying_advice')}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-left transition-colors border border-white/5"
          >
            <BookOpen className="w-4 h-4 text-cyan-400 mb-1" />
            <div className="text-xs font-bold text-white">Buyer Guide</div>
            <div className="text-[10px] text-slate-300">Inspection Checklist</div>
          </button>
        </div>
      </div>

      {/* Featured Articles & Guides */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Featured Guides & Advice
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
          {ARTICLES.slice(0, 3).map((article) => (
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
    </div>
  );
};
