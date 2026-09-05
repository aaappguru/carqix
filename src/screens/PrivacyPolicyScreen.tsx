import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyScreen: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#0A192F]">Privacy Policy</h1>
            <p className="text-xs text-slate-500">Effective Date: August 2026</p>
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full" />

        <div className="text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">1. Information We Do NOT Collect</h2>
            <p>
              CarQix US operates primarily as an offline-friendly, client-side automotive aggregator and calculation utility. We do not require account registration, and we do not store your personal identity, SSN, bank credentials, or driver's license numbers on our servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">2. Local Device Storage</h2>
            <p>
              When you save calculations, bookmark dealerships, or retain search queries, this data is saved directly in your browser's `localStorage` sandbox. You have full control to clear this data at any time via App Settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">3. External Partner Links</h2>
            <p>
              When you click external buttons to visit partners (e.g., Edmunds, Insurify, EpicVIN, Bankrate, AAA, Amazon), you will navigate to their respective secure domains. Those third-party sites maintain their own independent privacy practices and terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-base text-[#0A192F]">4. Contact & Inquiries</h2>
            <p>
              If you have any questions regarding our privacy practices or data handling, please contact support@carqix.us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
