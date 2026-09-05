import React from 'react';
import { 
  CheckCircle, 
  Store, 
  FileText, 
  ShieldCheck, 
  DollarSign, 
  CreditCard, 
  Zap, 
  Calculator, 
  ArrowRight,
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';

export const BuyingAdviceScreen: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="US Used Car Buying Guide & Advice"
        subtitle="Master the 10-point inspection process, understand Lemon Laws, avoid salvage title traps, and negotiate the best out-the-door price."
        ctaText="Try Loan Calculator"
        badgeText="Verified US Buyer Guide"
        onCtaClick={() => navigate('calculator_detail/loan')}
      />

      {/* Helpful Tool Chips */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">
          Helpful Calculators & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={() => navigate('calculator_detail/loan')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <Calculator className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold text-slate-800">Loan Calc</span>
          </button>

          <button
            onClick={() => navigate('calculator_detail/road_tax')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-bold text-slate-800">Sales Tax</span>
          </button>

          <button
            onClick={() => navigate('calculator_detail/fuel_cost')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <Zap className="w-5 h-5 text-amber-600" />
            <span className="text-xs font-bold text-slate-800">Fuel Cost</span>
          </button>

          <button
            onClick={() => navigate('vehicle_history')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span className="text-xs font-bold text-slate-800">VIN History</span>
          </button>
        </div>
      </div>

      {/* Section 1: Dealer vs Private */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#0A192F]">1. Franchise Dealer vs Independent vs Private Seller</h3>
            <p className="text-xs text-slate-500">Understanding warranties & Lemon Laws</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <strong className="text-slate-900 text-sm block mb-1">Franchised Main Dealers</strong>
            Offer Certified Pre-Owned (CPO) programs with rigorous 150+ point inspections, factory warranties, and low-interest manufacturer financing. Highest price point but maximum buyer protection.
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <strong className="text-slate-900 text-sm block mb-1">Independent Used Dealers</strong>
            Competitive prices with flexible inventory. Check Better Business Bureau (BBB) ratings and Google reviews. Many offer short 30-day powertrain warranties or third-party service contracts.
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <strong className="text-slate-900 text-sm block mb-1">Private Sellers</strong>
            Cheapest prices, but almost always sold strictly "as-is". No legal recourse if the vehicle breaks down shortly after purchase. A mandatory Pre-Purchase Inspection (PPI) is strongly advised.
          </div>
        </div>
      </div>

      {/* Section 2: 10-Point Inspection */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#0A192F]">2. 10-Point Pre-Purchase Inspection Checklist</h3>
            <p className="text-xs text-slate-500">What to check before signing the bill of sale</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            { step: '1. Engine & Cold Start', desc: 'Listen for unusual rattles or ticks. Watch for smoke from tailpipe on startup.' },
            { step: '2. Fluid Levels & Oil', desc: 'Check oil color (milky oil indicates blown head gasket) and transmission fluid.' },
            { step: '3. Tires & Tread Life', desc: 'Look for uneven tire wear (alignment issues) and dry rot cracking on sidewalls.' },
            { step: '4. Transmission Shift Quality', desc: 'Ensure smooth shifting without shudder, delay, or slipping into gear.' },
            { step: '5. Frame & Panel Gaps', desc: 'Check for paint mismatches or uneven panel gaps indicating past collision repair.' },
            { step: '6. Suspension & Shocks', desc: 'Bounce each corner firmly; it should rebound once and stabilize immediately.' },
            { step: '7. Climate Control', desc: 'Verify air conditioner blows icy cold and heater produces strong heat.' },
            { step: '8. Electronics & Warning Lights', desc: 'Ensure Check Engine, ABS, and Airbag dash lights illuminate on ACC and turn off when running.' },
            { step: '9. Flood Damage Sniff Test', desc: 'Check spare tire well and under carpet for musty mold odors or silt residue.' },
            { step: '10. Highway Speed Test Drive', desc: 'Accelerate to 65-75 mph to check for high-speed vibrations, brake shudder, or wind leaks.' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-emerald-50/40 rounded-2xl border border-emerald-100 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">{item.step}</strong>
                <span className="text-slate-600">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Title & Paperwork */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#0A192F]">3. Title & Paperwork Verification</h3>
            <p className="text-xs text-slate-500">Avoiding title jumping and branded salvage traps</p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
          <p>
            <strong>Clean vs Branded Title:</strong> Insist on a Clean Title. Avoid Salvage, Rebuilt, or Lemon Law titles unless you are an expert, as these vehicles cannot easily be financed or comprehensively insured.
          </p>
          <p>
            <strong>Title Jumping Prevention:</strong> Ensure the seller's government ID exactly matches the name printed on the physical title certificate. Never purchase from an intermediary who hasn't registered the car.
          </p>
          <p>
            <strong>Official Bill of Sale:</strong> Complete a state-compliant Bill of Sale detailing the purchase price, odometer reading, VIN, and signatures of both parties.
          </p>
        </div>
      </div>

      {/* Bottom CTA to Calculators */}
      <div className="bg-[#0A192F] text-white rounded-3xl p-6 shadow-md flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="font-black text-lg text-white mb-1">Ready to Crunch the Numbers?</h3>
          <p className="text-xs text-slate-300 max-w-md">
            Explore 10+ smart automotive calculators for auto loans, depreciation, state sales tax, fuel costs, and 5-year total ownership costs.
          </p>
        </div>
        <button
          onClick={() => navigate('smart_tools')}
          className="py-3 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A192F] font-bold text-xs flex items-center gap-2 shadow-md transition-all shrink-0"
        >
          <span>Explore All Calculators</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
