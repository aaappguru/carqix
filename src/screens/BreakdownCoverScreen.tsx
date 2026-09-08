import React from 'react';
import { Wrench, Shield, CheckCircle2, PhoneCall } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionDataProvider } from '../data/regionDataProvider';

export const BreakdownCoverScreen: React.FC = () => {
  const { openExternalLink, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const breakdownProviders = RegionDataProvider.getProvidersByCategory(region, 'BREAKDOWN');

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title={
          isUk
            ? 'UK Breakdown Cover & Roadside Recovery'
            : '24/7 Roadside Assistance & Recovery'
        }
        subtitle={
          isUk
            ? 'Compare AA Breakdown, RAC, Green Flag, and Britannia Rescue for 24/7 roadside recovery, home start, and onward travel.'
            : 'Compare nationwide 24/7 roadside assistance, towing, battery jumpstarts, lockout services, and fuel delivery.'
        }
        ctaText={isUk ? 'View AA Breakdown Cover' : 'Get Roadside Coverage'}
        badgeText={isUk ? '8/10 Fixed at Roadside' : 'Nationwide 24/7 Support'}
        onCtaClick={() => {
          if (breakdownProviders.length > 0) {
            openExternalLink(breakdownProviders[0].partnerKey, breakdownProviders[0].name, 'UK roadside assistance comparison');
          }
        }}
      />

      {/* Emergency Quick Info Box */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#0A192F]">Instant Emergency Patrol Dispatch</h3>
            <p className="text-xs text-slate-500">
              {isUk
                ? 'Average UK roadside response time: 30-40 minutes • 80%+ fix rate on the spot'
                : 'Average emergency dispatch time: 25-35 minutes'}
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          {isUk ? 'Nationwide UK & Europe' : 'Full National Coverage'}
        </span>
      </div>

      {/* Breakdown Providers List */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Leading {regionConfig.shortName} Breakdown & Roadside Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {breakdownProviders.map((p) => (
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
                openExternalLink(p.partnerKey, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
