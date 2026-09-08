import React, { useState } from 'react';
import { Search, X, ArrowRight, ExternalLink, Sparkles, BookOpen, Layers, Car, DollarSign, Wrench } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RegionDataProvider } from '../data/regionDataProvider';

export const GlobalSearchScreen: React.FC = () => {
  const { navigate, openExternalLink, recentSearches, addRecentSearch, clearRecentSearches, region, regionConfig } = useApp();
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (searchVal: string) => {
    if (!searchVal.trim()) return;
    addRecentSearch(searchVal.trim());
  };

  const handleClear = () => {
    setQuery('');
  };

  const marketplaces = RegionDataProvider.getMarketplaces(region);
  const articles = RegionDataProvider.getArticles(region);

  const valuationProviders = RegionDataProvider.getProvidersByCategory(region, 'VALUATION');
  const sellingProviders = RegionDataProvider.getProvidersByCategory(region, 'SELLING');
  const historyProviders = RegionDataProvider.getProvidersByCategory(region, 'HISTORY');
  const financeProviders = RegionDataProvider.getProvidersByCategory(region, 'FINANCE');
  const insuranceProviders = RegionDataProvider.getProvidersByCategory(region, 'INSURANCE');
  const breakdownProviders = RegionDataProvider.getProvidersByCategory(region, 'BREAKDOWN');
  const partsProviders = RegionDataProvider.getProvidersByCategory(region, 'PARTS');

  // Aggregated search matches
  const marketplaceMatches = marketplaces.filter(m => 
    m.name.toLowerCase().includes(query.toLowerCase()) || 
    m.description.toLowerCase().includes(query.toLowerCase()) ||
    m.category.toLowerCase().includes(query.toLowerCase())
  );

  const articleMatches = articles.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.summary.toLowerCase().includes(query.toLowerCase()) ||
    a.tag.toLowerCase().includes(query.toLowerCase())
  );

  const allProviders = [
    ...valuationProviders.map(p => ({ ...p, section: 'Valuation & Appraisal', route: 'value_car' })),
    ...sellingProviders.map(p => ({ ...p, section: 'Selling & Trade-In', route: 'sell_car' })),
    ...historyProviders.map(p => ({ ...p, section: 'Vehicle History & VIN', route: 'vehicle_history' })),
    ...financeProviders.map(p => ({ ...p, section: 'Auto Financing', route: 'car_finance' })),
    ...insuranceProviders.map(p => ({ ...p, section: 'Car Insurance', route: 'car_insurance' })),
    ...breakdownProviders.map(p => ({ ...p, section: 'Roadside Assistance', route: 'breakdown_cover' })),
    ...partsProviders.map(p => ({ ...p, section: 'Parts & Accessories', route: 'parts_accessories' }))
  ];

  const providerMatches = allProviders.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      {/* Search Input Box */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200/90 shadow-sm space-y-3">
        <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(query); }} className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-4" />
          <input
            type="text"
            placeholder="Search makes, models, calculators, guides, insurance..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-10 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </form>

        {/* Recent searches chips */}
        {!query && recentSearches.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Recent Searches</span>
              <button
                onClick={clearRecentSearches}
                className="text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {recentSearches.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setQuery(s.query)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 flex items-center gap-1.5"
                >
                  <Search className="w-3 h-3 text-slate-400" />
                  <span>{s.query}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* When no query, show popular search shortcuts */}
      {!query && (
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Popular {regionConfig.shortName} Shortcuts
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { label: region === 'uk' ? 'Ford Fiesta' : region === 'ca' ? 'Honda Civic' : 'Toyota Camry', query: region === 'uk' ? 'Ford' : region === 'ca' ? 'Honda' : 'Toyota' },
              { label: region === 'uk' ? 'Vauxhall Corsa' : region === 'ca' ? 'Toyota RAV4' : 'Honda Civic', query: region === 'uk' ? 'Vauxhall' : region === 'ca' ? 'Toyota' : 'Honda' },
              { label: region === 'uk' ? 'Volkswagen Golf' : region === 'ca' ? 'Ford F-150' : 'Ford F-150', query: region === 'uk' ? 'Volkswagen' : 'Ford' },
              { label: region === 'uk' ? 'PCP & HP Calc' : region === 'ca' ? 'Auto Loan (CA$)' : 'Auto Loan Calc', route: 'calculator_detail/loan' },
              { label: region === 'uk' ? 'MOT History Check' : region === 'ca' ? 'CARFAX Canada Liens' : 'VIN Recalls', route: 'vehicle_history' },
              { label: 'Buyer Checklist', route: 'buying_advice' },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (item.route) navigate(item.route);
                  else if (item.query) setQuery(item.query);
                }}
                className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-left font-bold text-xs text-slate-800 flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Query Results */}
      {query && (
        <div className="space-y-6">
          {/* Marketplace Results */}
          {marketplaceMatches.length > 0 && (
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">
                Marketplaces ({marketplaceMatches.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marketplaceMatches.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => navigate('buy_cars')}
                    className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-sm text-[#0A192F] group-hover:text-blue-600">
                        {m.name}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{m.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Results */}
          {articleMatches.length > 0 && (
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">
                Articles & Guides ({articleMatches.length})
              </h3>
              <div className="space-y-2.5">
                {articleMatches.map((a) => (
                  <div
                    key={a.id}
                    onClick={() => navigate(`article_detail/${a.id}`)}
                    className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {a.tag}
                      </span>
                      <div className="font-bold text-sm text-[#0A192F] group-hover:text-blue-600 mt-1">
                        {a.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{a.summary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-3" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Provider Results */}
          {providerMatches.length > 0 && (
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">
                Automotive Providers ({providerMatches.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {providerMatches.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() => navigate(p.route)}
                    className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-500">
                        {p.section}
                      </span>
                      <div className="font-bold text-sm text-[#0A192F] group-hover:text-blue-600">
                        {p.name}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{p.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {marketplaceMatches.length === 0 && articleMatches.length === 0 && providerMatches.length === 0 && (
            <div className="bg-white rounded-3xl p-8 text-center border border-slate-200">
              <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <h3 className="font-bold text-slate-700 text-sm">No exact matches found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for general keywords like "Camry", "Loan", "Insurance", "Valuation", or "Edmunds".
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
