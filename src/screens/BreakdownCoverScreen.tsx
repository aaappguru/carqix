import React from 'react';
import { Wrench, Shield, CheckCircle2, PhoneCall } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { BREAKDOWN_PROVIDERS, AFFILIATE_URLS } from '../data/automotiveData';

export const BreakdownCoverScreen: React.FC = () => {
  const { openExternalLink } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="24/7 US Roadside Assistance"
        subtitle="Compare nationwide 24/7 roadside assistance, towing, battery jumpstarts, lockout services, and fuel delivery."
        ctaText="Get AAA Coverage"
        badgeText="Nationwide 24/7 Support"
        onCtaClick={() => openExternalLink(AFFILIATE_URLS.aaa, 'AAA Roadside Assistance', 'America’s premier motor club')}
      />

      {/* Emergency Quick Info Box */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#0A192F]">Instant Emergency Support</h3>
            <p className="text-xs text-slate-500">Average US emergency dispatch time: 25-35 minutes</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          50-State Coverage
        </span>
      </div>

      {/* Breakdown Providers List */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Leading US Motor Clubs & Roadside Assistance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BREAKDOWN_PROVIDERS.map((p) => (
            <PartnerCard
              key={p.id}
              name={p.name}
              description={p.description}
              rating={p.rating}
              reviewsCount={p.reviewsCount}
              benefits={p.benefits}
              badge={p.badge || p.keyRateOrFeature}
              ctaText={`View Cover on ${p.name}`}
              onContinueClick={() => {
                const url = AFFILIATE_URLS[p.partnerKey] || 'https://www.aaa.com/stop/';
                openExternalLink(url, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
