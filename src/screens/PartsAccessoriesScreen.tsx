import React from 'react';
import { ShoppingBag, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionDataProvider } from '../data/regionDataProvider';
import { AFFILIATE_URLS } from '../data/automotiveData';
import { UK_PARTNER_URLS } from '../data/ukAutomotiveData';

export const PartsAccessoriesScreen: React.FC = () => {
  const { openExternalLink, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';

  const partsProviders = RegionDataProvider.getProvidersByCategory(region, 'PARTS');

  const heroCtaUrl = isUk 
    ? (UK_PARTNER_URLS.amazon_accessories?.affiliateUrl || 'https://www.amazon.co.uk')
    : isCa 
    ? 'https://www.canadiantire.ca/en/cat/automotive-DC0000006.html'
    : AFFILIATE_URLS.amazon_us;

  const heroTitle = isUk 
    ? 'UK Car Parts & Accessories' 
    : isCa 
    ? 'Canadian Auto Parts & Accessories' 
    : 'US Auto Parts & Accessories';

  const heroSubtitle = isUk
    ? 'Find millions of OEM replacement parts, winter tyres, dash cams, detailing kits, and tools with fast UK delivery.'
    : isCa
    ? 'Find OEM & aftermarket replacement parts, 3PMSF winter tires, batteries, and accessories with coast-to-coast delivery.'
    : 'Find millions of OEM replacement parts, performance upgrades, accessories, and maintenance supplies at warehouse prices.';

  const handleProviderClick = (p: any) => {
    let url = p.affiliateUrl || p.publicUrl;
    if (!url) {
      if (isUk && UK_PARTNER_URLS[p.partnerKey]) {
        url = UK_PARTNER_URLS[p.partnerKey].affiliateUrl || UK_PARTNER_URLS[p.partnerKey].publicUrl;
      } else if (AFFILIATE_URLS[p.partnerKey]) {
        url = AFFILIATE_URLS[p.partnerKey];
      } else {
        url = 'https://www.google.com';
      }
    }
    openExternalLink(url, p.name, p.description);
  };

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={isUk ? 'Shop Amazon UK Motoring' : isCa ? 'Shop Canadian Tire' : 'Shop Amazon Auto'}
        badgeText="Verified Quality Auto Parts"
        onCtaClick={() => openExternalLink(heroCtaUrl, `${regionConfig.shortName} Auto Parts`, 'Fast delivery on verified parts')}
      />

      {/* Parts Providers List */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Top {regionConfig.name} Auto Parts Retailers & Catalogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {partsProviders.map((p) => (
            <PartnerCard
              key={p.id}
              name={p.name}
              description={p.description}
              rating={p.rating}
              reviewsCount={p.reviewsCount}
              benefits={p.benefits}
              badge={p.badge || p.keyRateOrFeature}
              ctaText={`Shop on ${p.name}`}
              onContinueClick={() => handleProviderClick(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
