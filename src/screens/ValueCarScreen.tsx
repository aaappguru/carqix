import React, { useState } from 'react';
import { DollarSign, Sparkles, CheckCircle2, Calculator, ExternalLink, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionDataProvider } from '../data/regionDataProvider';

export const ValueCarScreen: React.FC = () => {
  const { openExternalLink, navigate, saveItem, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const popularMakes = RegionDataProvider.getPopularMakes(region);
  const valuationProviders = RegionDataProvider.getProvidersByCategory(region, 'VALUATION');

  const [year, setYear] = useState('2020');
  const [make, setMake] = useState(isUk ? 'Ford' : 'Toyota');
  const [model, setModel] = useState(isUk ? 'Focus' : 'Camry');
  const [mileage, setMileage] = useState('45000');
  const [condition, setCondition] = useState<'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR'>('GOOD');
  
  const [estimatedValue, setEstimatedValue] = useState<{
    tradeInLow: number;
    tradeInHigh: number;
    privateParty: number;
    dealerRetail: number;
  } | null>(null);

  const calculateQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const currentYear = 2026;
    const carYear = parseInt(year) || 2020;
    const age = Math.max(0, currentYear - carYear);
    const miles = parseInt(mileage) || 45000;

    // Currency baseline multiplier
    const baseNew = isUk ? 26000 : 32000;
    let base = baseNew * Math.pow(0.85, age);
    
    // Mileage adjustment
    const normalDistance = age * (isCa ? 18000 : 12000);
    const diffDistance = miles - normalDistance;
    base -= diffDistance * (isUk ? 0.06 : 0.08);

    // Condition adjustment
    if (condition === 'EXCELLENT') base *= 1.1;
    else if (condition === 'GOOD') base *= 1.0;
    else if (condition === 'FAIR') base *= 0.88;
    else base *= 0.75;

    base = Math.max(isUk ? 1000 : 1500, Math.round(base / 100) * 100);

    const privateParty = Math.round(base * 1.15);
    const tradeInLow = Math.round(base * 0.9);
    const tradeInHigh = Math.round(base * 1.02);
    const dealerRetail = Math.round(base * 1.25);

    setEstimatedValue({
      tradeInLow,
      tradeInHigh,
      privateParty,
      dealerRetail
    });
  };

  const handleSaveEstimate = () => {
    if (!estimatedValue) return;
    saveItem({
      itemType: 'CALCULATION',
      title: `${year} ${make} ${model} Valuation`,
      subtitle: `Private Party: ${regionConfig.currencySymbol}${estimatedValue.privateParty.toLocaleString()} | Trade-in: ${regionConfig.currencySymbol}${estimatedValue.tradeInLow.toLocaleString()}`,
      detailDataJson: JSON.stringify({ year, make, model, mileage, condition, estimatedValue, region })
    });
  };

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title={`Car Valuation & ${isUk ? 'Forecourt Market Value' : 'True Market Value®'}`}
        subtitle={
          isUk
            ? 'Get instant mathematical price ranges for private sales, dealer part-exchange, and AutoTrader forecourt valuations in GBP (£).'
            : 'Get instant mathematical price ranges for private sales, dealer trade-ins, and verified market appraisals.'
        }
        badgeText={`${regionConfig.shortName} Pricing Data`}
      />

      {/* Quick Interactive Estimator */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-emerald-600" />
          <h2 className="font-bold text-base text-[#0A192F]">Instant Valuation Calculator</h2>
        </div>

        <form onSubmit={calculateQuickEstimate} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Year</label>
              <input
                type="number"
                min="1990"
                max="2026"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Make</label>
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              >
                {popularMakes.filter(m => m !== 'All Makes').map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Model</label>
              <input
                type="text"
                placeholder={isUk ? 'e.g. Focus, Golf, Qashqai' : 'e.g. Camry, Civic, F-150'}
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                Mileage ({regionConfig.distanceUnit})
              </label>
              <input
                type="number"
                min="0"
                step="1000"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Condition</label>
              <div className="grid grid-cols-4 gap-1.5">
                {(['EXCELLENT', 'GOOD', 'FAIR', 'POOR'] as const).map((cond) => (
                  <button
                    key={cond}
                    type="button"
                    onClick={() => setCondition(cond)}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                      condition === cond
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cond.charAt(0) + cond.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/15 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Calculate {regionConfig.shortName} Market Valuation</span>
          </button>
        </form>

        {/* Calculated Results */}
        {estimatedValue && (
          <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Private Party Sale
                </span>
                <span className="text-lg font-black text-emerald-950">
                  {regionConfig.currencySymbol}{estimatedValue.privateParty.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block mb-1">
                  {isUk ? 'Part-Exchange' : 'Dealer Trade-In'}
                </span>
                <span className="text-lg font-black text-blue-950">
                  {regionConfig.currencySymbol}{estimatedValue.tradeInLow.toLocaleString()} - {regionConfig.currencySymbol}{estimatedValue.tradeInHigh.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 block mb-1">
                  {isUk ? 'Forecourt Retail' : 'Dealer Retail'}
                </span>
                <span className="text-lg font-black text-purple-950">
                  {regionConfig.currencySymbol}{estimatedValue.dealerRetail.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Action
                </span>
                <button
                  onClick={handleSaveEstimate}
                  className="w-full py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Save Result
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Official Valuation Partners */}
      {valuationProviders.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Official Valuation Portals ({regionConfig.name})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {valuationProviders.map((provider) => (
              <PartnerCard
                key={provider.id}
                name={provider.name}
                category={provider.category}
                description={provider.description}
                rating={provider.rating}
                reviewsCount={provider.reviewsCount}
                benefits={provider.benefits}
                badge={provider.badge}
                ctaText={`Appraise on ${provider.name}`}
                onContinueClick={() => {
                  const targetUrl = RegionDataProvider.getProviderUrl(provider, region);
                  openExternalLink(targetUrl, provider.name, provider.description);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
