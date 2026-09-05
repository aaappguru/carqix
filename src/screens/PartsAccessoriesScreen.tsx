import React from 'react';
import { ShoppingBag, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { PARTS_PROVIDERS, AFFILIATE_URLS } from '../data/automotiveData';

export const PartsAccessoriesScreen: React.FC = () => {
  const { openExternalLink } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="US Auto Parts & Accessories"
        subtitle="Find millions of OEM replacement parts, performance upgrades, accessories, and maintenance supplies at warehouse prices."
        ctaText="Shop Amazon Auto"
        badgeText="Millions of OEM & Aftermarket Parts"
        onCtaClick={() => openExternalLink(AFFILIATE_URLS.amazon_us, 'Amazon Auto Parts', 'Fast Prime delivery & OEM parts')}
      />

      {/* Parts Providers List */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Top US Auto Parts Retailers & Catalogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PARTS_PROVIDERS.map((p) => (
            <PartnerCard
              key={p.id}
              name={p.name}
              description={p.description}
              rating={p.rating}
              reviewsCount={p.reviewsCount}
              benefits={p.benefits}
              badge={p.badge || p.keyRateOrFeature}
              ctaText={`Shop on ${p.name}`}
              onContinueClick={() => {
                const url = AFFILIATE_URLS[p.partnerKey] || 'https://www.rockauto.com/';
                openExternalLink(url, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
