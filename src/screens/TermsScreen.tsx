import React from 'react';
import { FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

export const TermsScreen: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#0A192F]">Terms of Service & Disclosures</h1>
            <p className="text-xs text-slate-500">Last updated: August 2026</p>
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full" />

        <div className="text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">1. Informational & Estimation Purpose Only</h2>
            <p>
              All valuations, loan calculations, depreciation curves, tax computations, and insurance quotes displayed in CarQix US are mathematical estimates designed for consumer guidance. Actual prices, interest rates (APR), taxes, dealership document fees, and final approval terms are determined solely by financial institutions, dealerships, state DMVs, and insurance underwriters.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">2. Affiliate & Advertising Disclosure</h2>
            <p>
              CarQix US may receive referral fees or affiliate commissions when users click out to certain third-party partner services (e.g., Edmunds, Insurify, EpicVIN, Amazon Auto) and complete an action or quote. This compensation helps us maintain our calculators and tools without charging subscription fees to car buyers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">3. Intellectual Property & Trademarks</h2>
            <p>
              Edmunds, TrueCar, CarGurus, Autotrader, Cars.com, Insurify, EpicVIN, Bankrate, AAA, and all other respective brand names, trademarks, and logos are the property of their respective owners and used solely for identification and comparison purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">4. Limitation of Liability</h2>
            <p>
              CarQix US assumes no liability for vehicle transactions, private party sales disputes, title issues, mechanical breakdowns, or loan contract agreements entered into with third-party sellers or lenders.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
