import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionDataProvider } from '../data/regionDataProvider';

export const CarInsuranceScreen: React.FC = () => {
  const { openExternalLink, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const insuranceProviders = RegionDataProvider.getProvidersByCategory(region, 'INSURANCE');

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title={`Compare ${regionConfig.name} Car Insurance Quotes`}
        subtitle={
          isUk
            ? 'Compare over 100+ UK motor insurance providers on Compare the Market, MoneySuperMarket, and Confused.com to save up to £504 annually.'
            : isCa
            ? 'Compare Canadian comprehensive and collision auto insurance quotes tailored to your province.'
            : 'Compare real-time quotes from top US insurance providers to save an average of $450-$585 annually.'
        }
        ctaText={isUk ? 'Compare 100+ UK Insurers' : 'Get Instant Quote'}
        badgeText={isUk ? 'Save Up to £504/Year' : 'Save Up to $585/Year'}
        onCtaClick={() => {
          if (insuranceProviders.length > 0) {
            openExternalLink(insuranceProviders[0].partnerKey, insuranceProviders[0].name, 'Compare top insurance quotes');
          }
        }}
      />

      {/* Featured Insurance Recommendation Card */}
      {insuranceProviders.length > 0 && (
        <div 
          onClick={() => openExternalLink(insuranceProviders[0].partnerKey, insuranceProviders[0].name, 'Compare verified policies')}
          className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-[#0A192F] group-hover:text-blue-600 transition-colors">
                  {insuranceProviders[0].name}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                  #1 Recommended
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {insuranceProviders[0].description}
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>
      )}

      {/* Insurance Providers Catalog */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Leading {regionConfig.name} Auto Insurance Comparison Portals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {insuranceProviders.map((p) => (
            <PartnerCard
              key={p.id}
              name={p.name}
              description={p.description}
              rating={p.rating}
              reviewsCount={p.reviewsCount}
              benefits={p.benefits}
              badge={p.badge || p.keyRateOrFeature}
              ctaText={`Compare on ${p.name}`}
              onContinueClick={() => {
                openExternalLink(p.partnerKey, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
