import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { INSURANCE_PROVIDERS, AFFILIATE_URLS } from '../data/automotiveData';

export const CarInsuranceScreen: React.FC = () => {
  const { openExternalLink, navigate } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="Compare US Car Insurance Quotes"
        subtitle="Compare real-time quotes from top US insurance providers to save an average of $450-$585 annually."
        ctaText="Get Insurify Quote"
        badgeText="Save Up to $585/Year"
        onCtaClick={() => openExternalLink(AFFILIATE_URLS.insurify, 'Insurify', 'The #1 US auto insurance comparison engine')}
      />

      {/* Featured Insurify Recommendation Card */}
      <div 
        onClick={() => openExternalLink(AFFILIATE_URLS.insurify, 'Insurify Official Finder', 'Compare 100+ US insurance carriers')}
        className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-[#0A192F] group-hover:text-blue-600 transition-colors">
                Insurify Official Rate Finder
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                #1 Recommended
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              The #1 US comparison platform for instant, accurate auto insurance quotes from 100+ carriers.
            </p>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
      </div>

      {/* Insurance Providers Catalog */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Leading US Auto Insurance Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {INSURANCE_PROVIDERS.map((p) => (
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
                const url = AFFILIATE_URLS[p.partnerKey] || 'https://insurify.com/car-insurance/';
                openExternalLink(url, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
