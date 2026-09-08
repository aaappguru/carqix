import React, { useState } from 'react';
import { 
  DollarSign, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Car, 
  ArrowRight, 
  Sparkles, 
  Calculator, 
  FileText, 
  HelpCircle,
  ExternalLink,
  Zap,
  Building2,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionDataProvider } from '../data/regionDataProvider';

export const SellCarScreen: React.FC = () => {
  const { openExternalLink, navigate, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const isUs = region === 'us';

  const sellProviders = RegionDataProvider.getProvidersByCategory(region, 'SELL');
  const popularMakes = RegionDataProvider.getPopularMakes(region);

  // Mini valuation estimator state
  const [estYear, setEstYear] = useState('2020');
  const [estMake, setEstMake] = useState(isUk ? 'Ford' : isCa ? 'Honda' : 'Toyota');
  const [estMileage, setEstMileage] = useState(isUk ? '40000' : isCa ? '65000' : '45000');
  const [estCondition, setEstCondition] = useState<'EXCELLENT' | 'GOOD' | 'FAIR'>('GOOD');
  const [calcResult, setCalcResult] = useState<{
    instantOffer: number;
    privateParty: number;
    tradeIn: number;
  } | null>(null);

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const currentYear = 2026;
    const yearNum = parseInt(estYear) || 2020;
    const age = Math.max(0, currentYear - yearNum);
    const mileageNum = parseInt(estMileage) || 45000;

    const baseNew = isUk ? 28000 : isCa ? 38000 : 32000;
    let base = baseNew * Math.pow(0.85, age);

    const normalDistance = age * (isCa ? 18000 : 12000);
    const diff = mileageNum - normalDistance;
    base -= diff * (isUk ? 0.06 : isCa ? 0.05 : 0.08);

    if (estCondition === 'EXCELLENT') base *= 1.08;
    else if (estCondition === 'FAIR') base *= 0.88;

    base = Math.max(isUk ? 1200 : isCa ? 2000 : 1500, Math.round(base / 100) * 100);

    const instantOffer = Math.round(base * 0.95);
    const privateParty = Math.round(base * 1.14);
    const tradeIn = Math.round(base * 0.90);

    setCalcResult({ instantOffer, privateParty, tradeIn });
  };

  const handlePartnerClick = (provider: any) => {
    const targetUrl = RegionDataProvider.getProviderUrl(provider, region);
    openExternalLink(
      targetUrl, 
      provider.name, 
      `Sell your vehicle directly on ${provider.name} in ${regionConfig.name}`
    );
  };

  const topInstantProvider = sellProviders[0];

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Banner */}
      <HeroBanner
        title={
          isUk
            ? 'Sell Your Car in the UK (Top Cash Offers)'
            : isCa
            ? 'Sell Your Car in Canada (Instant Online Offers)'
            : 'Sell Your Car in the US (Instant Cash Quotes)'
        }
        subtitle={
          isUk
            ? 'Compare instant online dealer bids from Motorway, webuyanycar, and AutoTrader UK to maximize your sale price with free home collection.'
            : isCa
            ? 'Get verified instant cash offers from Clutch.ca, AutoTrader.ca, and Canada Drives or list privately across Canadian provinces.'
            : 'Compare instant cash offers from certified US buyers or list privately to achieve the highest return.'
        }
        ctaText="Value Your Car First"
        badgeText={`${regionConfig.shortName} Automotive Marketplace`}
        onCtaClick={() => navigate('value_car')}
      />

      {/* Selling Channels Comparison Cards */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Choose How You Want to Sell ({regionConfig.shortName})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Option 1: Instant Online Sale */}
          <div className="bg-white rounded-3xl p-5 border border-emerald-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Fastest
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <Zap className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-sm text-[#0A192F]">Instant Online Sale</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                {isUk
                  ? 'Sell directly online to 5,000+ verified UK dealers via Motorway or webuyanycar with doorstep pickup.'
                  : isCa
                  ? 'Get guaranteed online cash offers from Clutch or AutoTrader.ca with free at-home inspection & Interac/EFT payment.'
                  : 'Get firm cash offers from certified online car buyers with rapid doorstep appraisal & instant payout.'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Money in your bank in 24–48 hrs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free home pickup / drop-off branch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero tire-kickers or private haggling</span>
                </div>
              </div>
            </div>

            {topInstantProvider && (
              <button
                onClick={() => handlePartnerClick(topInstantProvider)}
                className="mt-5 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <span>Get {topInstantProvider.name} Offer</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Option 2: Private Classifieds */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Users className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-sm text-[#0A192F]">Private Classifieds</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                {isUk
                  ? 'Advertise on AutoTrader UK or Gumtree to reach over 10 million private retail buyers directly.'
                  : isCa
                  ? 'List on AutoTrader.ca or Kijiji Autos to negotiate directly with local buyers across your province.'
                  : 'List on Cars.com, TrueCar, or Edmunds to reach serious retail buyers in your metropolitan area.'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Typically 10%–15% higher cash return</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Full control over your asking price</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Direct buyer communication</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('buy_cars')}
              className="mt-5 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Explore Classified Portals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Option 3: Part-Exchange / Dealer Trade-In */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 rounded-xl bg-purple-50 text-purple-600">
                  <Building2 className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-sm text-[#0A192F]">
                  {isUk ? 'Part-Exchange' : 'Dealer Trade-In'}
                </h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                {isUk
                  ? 'Trade your current car against your next purchase at approved UK dealerships or car supermarkets.'
                  : isCa
                  ? 'Trade your vehicle at a dealership to offset the taxable purchase price of your replacement vehicle.'
                  : 'Apply your car’s equity directly toward a replacement vehicle at any certified dealership.'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>{isCa ? 'Save sales tax on trade difference' : 'Drive in with old car, drive out with new'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Outstanding finance rolled over or cleared</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Same-day vehicle handover</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('value_car')}
              className="mt-5 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Calculate Trade Value</span>
              <Calculator className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Quick Price Calculator Widget */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Calculator className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-base text-[#0A192F]">Instant Sale Return Estimator</h3>
              <p className="text-xs text-slate-500">Compare what you could pocket across different selling methods</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleQuickEstimate} className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Registration Year</label>
            <input
              type="number"
              min="1995"
              max="2026"
              value={estYear}
              onChange={(e) => setEstYear(e.target.value)}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Make</label>
            <select
              value={estMake}
              onChange={(e) => setEstMake(e.target.value)}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900"
            >
              {popularMakes.filter(m => m !== 'All Makes').map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Mileage ({regionConfig.distanceUnit})</label>
            <input
              type="number"
              step="1000"
              value={estMileage}
              onChange={(e) => setEstMileage(e.target.value)}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Condition</label>
            <select
              value={estCondition}
              onChange={(e) => setEstCondition(e.target.value as any)}
              className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900"
            >
              <option value="EXCELLENT">Excellent (Flawless)</option>
              <option value="GOOD">Good (Minor wear)</option>
              <option value="FAIR">Fair (Visible scuffs)</option>
            </select>
          </div>

          <div className="sm:col-span-4 pt-1">
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Compare Sale Values ({regionConfig.currencySymbol})</span>
            </button>
          </div>
        </form>

        {calcResult && (
          <div className="pt-4 border-t border-slate-100 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Instant Online Dealer Bid
                </span>
                <span className="text-xl font-black text-emerald-950">
                  {regionConfig.currencySymbol}{calcResult.instantOffer.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-700 block mt-1">
                  100% Guaranteed payout in 24–48h
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block mb-1">
                  Private Party Classified
                </span>
                <span className="text-xl font-black text-blue-950">
                  {regionConfig.currencySymbol}{calcResult.privateParty.toLocaleString()}
                </span>
                <span className="text-[11px] text-blue-700 block mt-1">
                  Highest return (+{regionConfig.currencySymbol}{(calcResult.privateParty - calcResult.instantOffer).toLocaleString()})
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 block mb-1">
                  {isUk ? 'Part-Exchange Estimate' : 'Dealer Trade-In'}
                </span>
                <span className="text-xl font-black text-purple-950">
                  {regionConfig.currencySymbol}{calcResult.tradeIn.toLocaleString()}
                </span>
                <span className="text-[11px] text-purple-700 block mt-1">
                  Convenient switch toward next car
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recommended Selling Portals in Active Region */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Top Selling Portals & Instant Cash Buyers ({regionConfig.name})
          </h3>
          <span className="text-xs font-bold text-blue-600">{sellProviders.length} Verified Portals</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sellProviders.map((provider) => (
            <PartnerCard
              key={provider.id}
              name={provider.name}
              category={provider.category}
              description={provider.description}
              rating={provider.rating}
              reviewsCount={provider.reviewsCount}
              benefits={provider.benefits}
              badge={provider.badge || provider.keyRateOrFeature}
              ctaText={`Sell on ${provider.name}`}
              onContinueClick={() => handlePartnerClick(provider)}
            />
          ))}
        </div>
      </div>

      {/* Step-by-Step Legal & Transfer Checklist */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
            <FileText className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-bold text-base text-[#0A192F]">
              {isUk 
                ? 'Official UK Car Selling Checklist (DVLA & V5C)' 
                : isCa 
                ? 'Canadian Vehicle Sale & Provincial Transfer Steps' 
                : 'US Title Transfer & Bill of Sale Checklist'}
            </h3>
            <p className="text-xs text-slate-500">Follow these official steps to protect yourself and ensure a legally compliant sale</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {isUk ? (
            <>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1. Complete the V5C Logbook</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Give the green 'new keeper slip' (V5C/2) to the buyer. Keep the rest of the V5C to notify DVLA online.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>2. Notify DVLA Online Instantly</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Use the official GOV.UK service to report the sale immediately. Any remaining full months of road tax will be automatically refunded.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>3. Clear Outstanding Finance</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  If selling privately, request an official settlement letter from your lender. Motorway and webuyanycar can pay off your finance directly.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>4. Secure Payment Verification</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Never hand over keys or release the vehicle until funds show as 'cleared balance' in your online banking app.
                </p>
              </div>
            </>
          ) : isCa ? (
            <>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1. Safety Standards Certificate (Safety)</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  In Ontario, Manitoba, and several provinces, a vehicle safety certificate is required for the buyer to put plates on the car.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>2. Order Used Vehicle Info Package (UVIP)</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Mandatory in Ontario. Provides lien status, past registration history, and bill of sale templates for private sales.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>3. Sign Ownership & Keep Licence Plates</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  In Canada, licence plates stay with the seller, not the car! Remove your plates and sign the vehicle portion of the registration permit.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>4. Certified Payment (Draft / Interac)</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Accept bank drafts verified directly inside the issuing bank branch or electronic wire/EFT transfers before vehicle handover.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1. Sign the Vehicle Certificate of Title</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Sign and date the transfer section of the title. Ensure odometer reading matches the dashboard accurately.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>2. Provide a Signed Bill of Sale</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Document the VIN, purchase price, date, and buyer contact information. Keep a copy for your records.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>3. Submit Notice of Transfer to DMV</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  File a Release of Liability with your state DMV so you are not held liable for parking tickets or accidents after the sale.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-[#0A192F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>4. Remove License Plates & Cancel Insurance</span>
                </div>
                <p className="text-slate-600 pl-5 leading-relaxed">
                  Remove license plates and contact your auto insurance company immediately to remove the vehicle from your policy.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
