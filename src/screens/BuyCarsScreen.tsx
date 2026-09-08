import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  ExternalLink, 
  Car, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Sparkles,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionDataProvider } from '../data/regionDataProvider';
import { SearchFilterState } from '../types';
import { SearchUrlBuilder } from '../utils/searchUrlBuilder';

export const BuyCarsScreen: React.FC = () => {
  const { openExternalLink, isItemSaved, saveItem, removeSavedItem, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';

  const popularMakes = RegionDataProvider.getPopularMakes(region);
  const marketplaces = RegionDataProvider.getMarketplaces(region);

  const [filter, setFilter] = useState<SearchFilterState>({
    make: 'All Makes',
    model: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    zipCode: '',
    radiusMiles: '50',
    bodyType: 'All Types',
    transmission: 'any',
    fuelType: 'any'
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const handleReset = () => {
    setFilter({
      make: 'All Makes',
      model: '',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: '',
      zipCode: '',
      radiusMiles: '50',
      bodyType: 'All Types',
      transmission: 'any',
      fuelType: 'any'
    });
  };

  const handleSearchPartner = (partnerKey: string, partnerName: string) => {
    const url = SearchUrlBuilder.buildPartnerSearchUrl(partnerKey, filter, region);
    openExternalLink(url, `${partnerName} Inventory`, `Searching with your custom filters on ${partnerName}`);
  };

  const filteredMarketplaces = marketplaces.filter((m) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'POPULAR') return m.isPopular;
    if (selectedCategory === 'AUCTION') return m.category.includes('Auction') || m.category.includes('Enthusiast') || m.category.includes('Classifieds');
    return true;
  });

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
      <HeroBanner
        title={`Find Used Cars Across Top ${regionConfig.name} Sites`}
        subtitle={
          isUk
            ? 'Configure your vehicle preferences once, then launch live searches directly across AutoTrader UK, carwow, Gumtree Cars, Arnold Clark, and AA Cars.'
            : isCa
            ? 'Configure your criteria and launch live searches across AutoTrader.ca, Kijiji Autos, Clutch.ca, AutoCatch.com, Carpages.ca, and Auto123.com.'
            : 'Configure your search criteria once, then search live inventory directly across Auction Direct USA, Carsforsale.com, Edmunds, TrueCar, and Cars.com.'
        }
        badgeText={`${marketplaces.length} Curated ${regionConfig.shortName} Marketplaces`}
      />

      {/* Unified Search Filter Box */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-600" />
            <h2 className="font-bold text-sm text-[#0A192F]">Customize Your Search Filters</h2>
          </div>
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Make */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">Make</label>
            <select
              value={filter.make}
              onChange={(e) => setFilter({ ...filter, make: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="All Makes">All Makes</option>
              {popularMakes.map((make) => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>

          {/* Model */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">Model</label>
            <input
              type="text"
              placeholder={isUk ? 'e.g. Golf, Fiesta, Qashqai' : 'e.g. Camry, F-150, Civic'}
              value={filter.model}
              onChange={(e) => setFilter({ ...filter, model: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
              Max Price ({regionConfig.currencySymbol})
            </label>
            <select
              value={filter.maxPrice}
              onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">Any Max Price</option>
              {priceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Postcode / ZIP */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
              {regionConfig.postalCodeLabel}
            </label>
            <input
              type="text"
              placeholder={regionConfig.postalCodePlaceholder}
              maxLength={isUk ? 10 : 8}
              value={filter.zipCode}
              onChange={(e) => setFilter({ ...filter, zipCode: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Quick Launch Buttons */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-700">Quick Launch Search On:</span>
          {marketplaces.slice(0, 4).map((m) => (
            <button
              key={m.id}
              onClick={() => handleSearchPartner(m.webUrlKey, m.name)}
              className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-blue-200/60"
            >
              <span>{m.name}</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { id: 'ALL', label: `All Portals (${marketplaces.length})` },
          { id: 'POPULAR', label: 'Top Rated & Featured' },
          { id: 'AUCTION', label: isUk ? 'Auctions & Classifieds' : 'Auctions & Classifieds' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === tab.id
                ? 'bg-[#0A192F] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Partner Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMarketplaces.map((m) => (
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
            onContinueClick={() => handleSearchPartner(m.webUrlKey, m.name)}
          />
        ))}
      </div>
    </div>
  );
};
