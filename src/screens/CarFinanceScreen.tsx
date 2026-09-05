import React from 'react';
import { DollarSign, Percent, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { FINANCE_PROVIDERS, AFFILIATE_URLS } from '../data/automotiveData';

export const CarFinanceScreen: React.FC = () => {
  const { openExternalLink, navigate } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="US Auto Financing & Loan Rates"
        subtitle="Compare daily auto loan interest rates, pre-qualification lenders, and specialized bad-credit approval networks."
        ctaText="Try Loan Calculator"
        badgeText="Daily Interest Rate Updates"
        onCtaClick={() => navigate('calculator_detail/loan')}
      />

      {/* Quick Calculator Action Box */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-5 shadow-md flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Percent className="w-4 h-4" />
            <span>Interactive Financial Engine</span>
          </div>
          <h3 className="text-lg font-black text-white">Know Your Monthly Payment Before Applying</h3>
          <p className="text-xs text-blue-100 max-w-md mt-0.5">
            Test different down payments, terms (36 to 84 months), and state sales taxes.
          </p>
        </div>
        <button
          onClick={() => navigate('calculator_detail/loan')}
          className="py-2.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A192F] font-bold text-xs flex items-center gap-2 shadow-md transition-all shrink-0"
        >
          <span>Open Loan Calc</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Finance Providers Catalog */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Top US Auto Lenders & Rate Comparators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FINANCE_PROVIDERS.map((p) => (
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
                const url = AFFILIATE_URLS[p.partnerKey] || 'https://www.bankrate.com/loans/auto-loans/rates/';
                openExternalLink(url, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
