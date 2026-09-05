import React from 'react';
import { DollarSign, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { SELLING_PROVIDERS, AFFILIATE_URLS } from '../data/automotiveData';

export const SellCarScreen: React.FC = () => {
  const { openExternalLink, navigate } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="Sell Your Car in the USA"
        subtitle="Compare instant cash offers from certified US buyers or list privately to get the highest market return."
        ctaText="Value Your Car First"
        badgeText="Instant Cash Offers Available"
        onCtaClick={() => navigate('value_car')}
      />

      {/* Selling Option Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <DollarSign className="w-5 h-5" />
              </span>
              <h3 className="font-bold text-base text-[#0A192F]">Instant Cash Offers</h3>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Fastest & safest option. Complete an online appraisal to get guaranteed cash offers from verified dealership networks.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Paid within 24-48 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free vehicle pickup & paperwork handling</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => openExternalLink(AFFILIATE_URLS.truecar_sell, 'TrueCar Sell', 'Instant dealer cash offer')}
            className="mt-4 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
          >
            Get TrueCar Cash Offer
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <TrendingUp className="w-5 h-5" />
              </span>
              <h3 className="font-bold text-base text-[#0A192F]">Private Party Sale</h3>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Maximize your return by listing directly to retail buyers on Edmunds and Cars.com private marketplaces.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>10% to 20% higher sale price</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Reach millions of active buyers</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => openExternalLink(AFFILIATE_URLS.edmunds_sell, 'Edmunds Private Sale', 'List your car to private buyers')}
            className="mt-4 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
          >
            List on Edmunds Private Sale
          </button>
        </div>
      </div>

      {/* Selling Partners Catalog */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Top US Car Selling Services & Auctions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SELLING_PROVIDERS.map((provider) => (
            <PartnerCard
              key={provider.id}
              name={provider.name}
              description={provider.description}
              rating={provider.rating}
              reviewsCount={provider.reviewsCount}
              benefits={provider.benefits}
              badge={provider.badge || provider.keyRateOrFeature}
              ctaText={`Sell on ${provider.name}`}
              onContinueClick={() => {
                const url = AFFILIATE_URLS[provider.partnerKey] || 'https://www.edmunds.com/sell-car/';
                openExternalLink(url, provider.name, provider.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
