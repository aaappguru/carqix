import React, { useState } from 'react';
import { DollarSign, Sparkles, CheckCircle2, Calculator, ExternalLink, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { VALUATION_PROVIDERS, POPULAR_MAKES, AFFILIATE_URLS } from '../data/automotiveData';

export const ValueCarScreen: React.FC = () => {
  const { openExternalLink, navigate, saveItem } = useApp();

  const [year, setYear] = useState('2020');
  const [make, setMake] = useState('Toyota');
  const [model, setModel] = useState('Camry');
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
    const miles = parseInt(mileage) || 50000;

    // Baseline rough calculation for instant feedback
    let base = 32000 * Math.pow(0.85, age);
    
    // Mileage adjustment
    const normalMiles = age * 12000;
    const diffMiles = miles - normalMiles;
    base -= diffMiles * 0.08;

    // Condition adjustment
    if (condition === 'EXCELLENT') base *= 1.1;
    else if (condition === 'GOOD') base *= 1.0;
    else if (condition === 'FAIR') base *= 0.88;
    else base *= 0.75;

    base = Math.max(1500, Math.round(base / 100) * 100);

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
      subtitle: `Private Party: $${estimatedValue.privateParty.toLocaleString()} | Trade-in: $${estimatedValue.tradeInLow.toLocaleString()}`,
      detailDataJson: JSON.stringify({ year, make, model, mileage, condition, estimatedValue })
    });
  };

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="Car Valuation & True Market Value®"
        subtitle="Get instant mathematical price ranges for private sales, dealer trade-ins, and verified Edmunds TMV® appraisals."
        badgeText="US Market Pricing Data"
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
                {POPULAR_MAKES.filter(m => m !== 'All Makes').map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Model</label>
              <input
                type="text"
                placeholder="e.g. Camry, Civic, F-150"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">Mileage (Miles)</label>
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
            <span>Calculate Valuation Range</span>
          </button>
        </form>

        {/* Results Banner */}
        {estimatedValue && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Estimated Values for {year} {make} {model}:</span>
              <button
                onClick={handleSaveEstimate}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Save to Bookmarks
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100">
                <span className="text-[10px] font-bold uppercase text-emerald-800 block">Private Party Sale</span>
                <div className="text-lg font-black text-emerald-950">${estimatedValue.privateParty.toLocaleString()}</div>
                <span className="text-[10px] text-emerald-700">Recommended listing price</span>
              </div>

              <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100">
                <span className="text-[10px] font-bold uppercase text-blue-800 block">Dealer Trade-In</span>
                <div className="text-lg font-black text-blue-950">${estimatedValue.tradeInLow.toLocaleString()} - ${estimatedValue.tradeInHigh.toLocaleString()}</div>
                <span className="text-[10px] text-blue-700">Instant cash offer basis</span>
              </div>

              <div className="bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold uppercase text-slate-700 block">Dealer Retail</span>
                <div className="text-lg font-black text-slate-900">${estimatedValue.dealerRetail.toLocaleString()}</div>
                <span className="text-[10px] text-slate-600">Lot certified price</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Official Appraisal Partners */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Verified US Appraisal Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUATION_PROVIDERS.map((p) => (
            <PartnerCard
              key={p.id}
              name={p.name}
              description={p.description}
              rating={p.rating}
              reviewsCount={p.reviewsCount}
              benefits={p.benefits}
              badge={p.badge || p.keyRateOrFeature}
              ctaText={`Appraise on ${p.name}`}
              onContinueClick={() => {
                const url = AFFILIATE_URLS[p.partnerKey] || 'https://www.edmunds.com/appraisal/';
                openExternalLink(url, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
