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
  FileCheck2,
  AlertTriangle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';

export const BuyingAdviceScreen: React.FC = () => {
  const { navigate, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const isUs = region === 'us';

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title={`${regionConfig.name} Used Car Buying Guide & Legal Advice`}
        subtitle={
          isUk
            ? 'Master the UK 10-point inspection checklist, V5C logbook verification, free GOV.UK MOT test history checks, PCP vs HP finance, and consumer rights under CRA 2015.'
            : isCa
            ? 'Master Canadian provincial UVIP verification, safety inspection certificates, provincial sales tax rules (HST/PST/GST), CARFAX Canada lien checks, and winter tire requirements.'
            : 'Master the 10-point inspection process, understand state Lemon Laws, avoid salvage title traps, and negotiate the best out-the-door price.'
        }
        ctaText={isUk ? 'PCP & HP Calculator' : isCa ? 'CAD Loan Calculator' : 'Try Loan Calculator'}
        badgeText={`Verified ${regionConfig.name} Buyer Guide`}
        onCtaClick={() => navigate('calculator_detail/loan')}
      />

      {/* Helpful Tool Chips */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">
          Helpful {regionConfig.shortName} Calculators & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={() => navigate('calculator_detail/loan')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <Calculator className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-bold text-slate-800">{isUk ? 'PCP/HP Calc' : isCa ? 'CA$ Loan Calc' : 'Loan Calc'}</span>
          </button>

          <button
            onClick={() => navigate('value_car')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-bold text-slate-800">Car Valuation</span>
          </button>

          <button
            onClick={() => navigate('calculator_detail/fuel_cost')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <Zap className="w-5 h-5 text-amber-600" />
            <span className="text-xs font-bold text-slate-800">{isCa ? 'Fuel (L/100km)' : 'Fuel & Energy'}</span>
          </button>

          <button
            onClick={() => navigate('vehicle_history')}
            className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 text-center transition-all flex flex-col items-center gap-1.5"
          >
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span className="text-xs font-bold text-slate-800">{isUk ? 'MOT History' : isCa ? 'CARFAX Canada' : 'VIN History'}</span>
          </button>
        </div>
      </div>

      {/* Section 1: Buying Channels & Legal Rights */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#0A192F]">
              {isUk ? '1. Franchised Dealer vs Car Supermarket vs Private Seller' : isCa ? '1. OMVIC/UCDA Certified Dealers vs Private Sellers in Canada' : '1. Franchise Dealer vs Independent vs Private Seller'}
            </h3>
            <p className="text-xs text-slate-500">
              {isUk ? 'Consumer Rights Act 2015 & statutory return protections' : isCa ? 'Consumer Protection Act, UVIP (Ontario), and Provincial Sales Taxes' : 'Understanding warranties & Lemon Laws'}
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
          <p>
            {isUk ? (
              <>
                <strong>Franchise Dealerships & Supermarkets:</strong> Covered by the Consumer Rights Act 2015. If a fault develops within the first 30 days, you have a statutory right to reject the car for a full refund. Between 30 days and 6 months, the dealer gets one attempt to repair before you can request a refund.
              </>
            ) : isCa ? (
              <>
                <strong>OMVIC (Ontario) / AMVIC (Alberta) / VSA (BC) Registered Dealers:</strong> Canadian provincial dealer regulations require full mandatory written disclosures of previous collision damage over $3,000, out-of-province registration, and accurate odometer readings. All sales are protected by provincial compensation funds.
              </>
            ) : (
              <>
                <strong>Franchise Dealerships:</strong> Best for Certified Pre-Owned (CPO) vehicles backed by manufacturer warranties and multi-point inspections. Higher pricing but greatest legal protection.
              </>
            )}
          </p>
          <p>
            {isUk ? (
              <>
                <strong>Private Sellers:</strong> 'Caveat Emptor' (buyer beware) applies. The vehicle must only be roadworthy and match the description given. Always verify the seller’s name and address against the official V5C logbook before handing over any money.
              </>
            ) : isCa ? (
              <>
                <strong>Private Party Sellers in Canada:</strong> In Ontario, private sellers are legally obligated to purchase and provide the Used Vehicle Information Package (UVIP). In other provinces (BC, Alberta, Quebec), arrange a certified Safety Standards inspection. Always run a CARFAX Canada report with cross-provincial lien check to avoid inheriting the previous owner's bank debts.
              </>
            ) : (
              <>
                <strong>Private Party Sellers:</strong> Typically 10-15% cheaper than dealerships. Sold strictly "as-is" in most US states. Always arrange a Pre-Purchase Inspection (PPI) before payment.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Section 2: 10-Point Pre-Purchase Inspection */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#0A192F]">2. The 10-Point Vehicle Inspection Checklist</h3>
            <p className="text-xs text-slate-500">Step-by-step physical and mechanical examination for {regionConfig.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: isUk ? '1. V5C Watermark & VIN Stamping' : isCa ? '1. Provincial Ownership & VIN Match' : '1. Clean Title & VIN Match',
              desc: isUk ? 'Check V5C logbook watermark. Match 17-digit VIN on chassis plate, windscreen, and V5C.' : isCa ? 'Check provincial registration permit (Ownership). Match 17-digit VIN on windshield base and door jamb.' : 'Verify 17-digit VIN on driver door jamb, windshield base, and title document.'
            },
            {
              title: '2. Cold Start Engine Test',
              desc: 'Ensure engine is cold before starting. Watch for blue (oil burning) or white (head gasket) smoke.'
            },
            {
              title: isUk ? '3. Tyres & Tread Depth (1.6mm UK Legal)' : isCa ? '3. Winter / All-Weather Tire Condition' : '3. Tire Wear & Tread Depth',
              desc: isCa ? 'Check 3PMSF snowflake symbol for mandatory winter tire compliance (Quebec/BC) and remaining tread depth.' : 'Inspect for uneven edge wear indicating suspension misalignment or worn control arm bushes.'
            },
            {
              title: '4. Oil Cap & Coolant Check',
              desc: 'Inspect under the engine oil filler cap for milky "mayonnaise" residue indicating coolant breach.'
            },
            {
              title: isUk ? '5. MOT History & Advisory Check' : isCa ? '5. Subframe & Rocker Panel Rust (Road Salt)' : '5. Underside Rust & Frame Condition',
              desc: isUk ? 'Review previous MOT advisories on GOV.UK for corroded brake pipes or subframe rust.' : isCa ? 'Thoroughly inspect underbody, wheel wells, and rocker panels for Canadian road salt corrosion and brine damage.' : 'Use a flashlight to check subframe, rocker panels, and floor pans for excessive corrosion.'
            },
            {
              title: '6. Transmission & Clutch Operation',
              desc: 'Check gear engagement smoothness, clutch bite point, and lack of shuddering or slipping.'
            },
            {
              title: '7. Brake Rotor & Pad Inspection',
              desc: 'Test for brake pedal pulsation or steering wheel vibration when braking firmly from speed.'
            },
            {
              title: '8. Electronics & Warning Lights',
              desc: 'Ensure all warning lights (Check Engine, ABS, Airbag) illuminate during ignition test and shut off.'
            },
            {
              title: '9. Body Panel Gaps & Paint Depth',
              desc: 'Uneven gaps between bonnet, wings, and doors indicate previous collision impact repair.'
            },
            {
              title: '10. Air Conditioning & Heating',
              desc: 'Test AC blows ice cold in 60 seconds and heater core blows warm air without sweet coolant odor.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-[#0A192F]">{item.title}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
