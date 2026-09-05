import React from 'react';
import { Car, ShieldCheck, Sparkles, CheckCircle2, Heart, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutScreen: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* Brand Hero */}
      <div className="bg-gradient-to-br from-[#0A192F] to-[#1E293B] text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-amber-400 text-[#0A192F] flex items-center justify-center font-black text-2xl shadow-lg">
          CQ
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            CarQix US
          </h1>
          <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mt-0.5">
            US Automotive Companion Platform
          </p>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
          CarQix US is your independent, all-in-one portal for navigating the American used car market. We aggregate verified inventory from top US marketplaces, provide 10+ smart financial tools, and offer expert buying advice to empower American car buyers.
        </p>
      </div>

      {/* Value Pillars */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h2 className="font-bold text-base text-[#0A192F]">Our Core Principles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
            <ShieldCheck className="w-5 h-5 text-blue-600 mb-1" />
            <strong className="text-slate-900 block font-bold">100% Unbiased</strong>
            <span className="text-slate-600 leading-relaxed">
              We present accurate, real-world dealer inventory and verified US market valuations without hidden dealer fees.
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
            <Award className="w-5 h-5 text-emerald-600 mb-1" />
            <strong className="text-slate-900 block font-bold">Verified Partners</strong>
            <span className="text-slate-600 leading-relaxed">
              We partner only with premier, accredited platforms like Edmunds, Insurify, EpicVIN, Bankrate, and AAA.
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
            <Sparkles className="w-5 h-5 text-amber-600 mb-1" />
            <strong className="text-slate-900 block font-bold">Data Privacy First</strong>
            <span className="text-slate-600 leading-relaxed">
              Your calculations, budget notes, and searches stay safely on your device. We do not sell personal data.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
