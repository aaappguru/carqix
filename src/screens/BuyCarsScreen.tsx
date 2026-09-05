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
import { MARKETPLACES, POPULAR_MAKES, BODY_TYPES } from '../data/automotiveData';
import { SearchFilterState } from '../types';
import { SearchUrlBuilder } from '../utils/searchUrlBuilder';

export const BuyCarsScreen: React.FC = () => {
  const { openExternalLink, isItemSaved, saveItem, removeSavedItem, savedItems } = useApp();

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
    const url = SearchUrlBuilder.buildPartnerSearchUrl(partnerKey, filter);
    openExternalLink(url, `${partnerName} Inventory`, `Searching with your custom filters`);
  };

  const filteredMarketplaces = MARKETPLACES.filter((m) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'POPULAR') return m.isPopular;
    if (selectedCategory === 'AUCTION') return m.category.includes('Auction') || m.category.includes('Enthusiast');
    if (selectedCategory === 'CLASSIC') return m.category.includes('Classic');
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="Find Used Cars Across Top US Sites"
        subtitle="Configure your search criteria once, then search live inventory directly across Auction Direct USA, Carsforsale.com, Edmunds, TrueCar, and Cars.com."
        badgeText="14 Curated Car Buy Marketplaces"
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
              {POPULAR_MAKES.map((make) => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>

          {/* Model */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">Model</label>
            <input
              type="text"
              placeholder="e.g. Camry, F-150, Civic"
              value={filter.model}
              onChange={(e) => setFilter({ ...filter, model: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">Max Price ($)</label>
            <select
              value={filter.maxPrice}
              onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">Any Max Price</option>
              <option value="10000">$10,000</option>
              <option value="15000">$15,000</option>
              <option value="20000">$20,000</option>
              <option value="25000">$25,000</option>
              <option value="30000">$30,000</option>
              <option value="40000">$40,000</option>
              <option value="50000">$50,000</option>
              <option value="75000">$75,000</option>
            </select>
          </div>

          {/* ZIP Code */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">ZIP Code</label>
            <input
              type="text"
              placeholder="e.g. 90210"
              maxLength={5}
              value={filter.zipCode}
              onChange={(e) => setFilter({ ...filter, zipCode: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          {/* Min Year */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">Min Year</label>
            <select
              value={filter.minYear}
              onChange={(e) => setFilter({ ...filter, minYear: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">Any Year</option>
              <option value="2024">2024</option>
              <option value="2022">2022</option>
              <option value="2020">2020</option>
              <option value="2018">2018</option>
              <option value="2015">2015</option>
              <option value="2010">2010</option>
              <option value="2000">2000</option>
            </select>
          </div>

          {/* Body Type */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">Body Type</label>
            <select
              value={filter.bodyType}
              onChange={(e) => setFilter({ ...filter, bodyType: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              {BODY_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Radius */}
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">Search Radius</label>
            <select
              value={filter.radiusMiles}
              onChange={(e) => setFilter({ ...filter, radiusMiles: e.target.value })}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="25">Within 25 Miles</option>
              <option value="50">Within 50 Miles</option>
              <option value="100">Within 100 Miles</option>
              <option value="250">Within 250 Miles</option>
              <option value="nationwide">Nationwide</option>
            </select>
          </div>
        </div>

        {/* Multi-Launcher Quick Buttons */}
        <div className="pt-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
            One-Click Launch Query on Top Marketplaces:
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSearchPartner('auctiondirectusa', 'Auction Direct USA')}
              className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span>Auction Direct USA</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={() => handleSearchPartner('carsforsale', 'Carsforsale.com')}
              className="px-3.5 py-2 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span>Carsforsale.com</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={() => handleSearchPartner('edmunds', 'Edmunds')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 transition-all"
            >
              <span>Edmunds TMV®</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={() => handleSearchPartner('truecar', 'TrueCar')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 transition-all"
            >
              <span>TrueCar</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={() => handleSearchPartner('cars_com', 'Cars.com')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 transition-all"
            >
              <span>Cars.com</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Marketplace Catalog Section */}
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="font-black text-base text-[#0A192F]">
            Browse All US Auto Marketplaces
          </h2>

          <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
            {['ALL', 'POPULAR', 'AUCTION', 'CLASSIC'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-blue-600 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              ctaText={`Search on ${m.name}`}
              onContinueClick={() => handleSearchPartner(m.webUrlKey, m.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
