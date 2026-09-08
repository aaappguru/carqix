import React from 'react';
import { HelpCircle, Search, Calculator, ShieldCheck, DollarSign, ArrowRight, Bookmark, Wrench } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HowToUseScreen: React.FC = () => {
  const { navigate, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';

  const steps = isUk ? [
    {
      step: '1',
      title: 'Search UK Dealer & Private Stock',
      desc: 'Use the Buy Cars screen to set your desired Make, Model, Max Price (£), and Postcode. Tap verified partners (AutoTrader UK, carwow, Arnold Clark, Gumtree, AA Cars) to instantly view matching listings.',
      icon: Search,
      actionText: 'Browse UK Cars',
      route: 'buy_cars'
    },
    {
      step: '2',
      title: 'Run PCP, HP & VED Tax Calculators',
      desc: 'Calculate monthly Personal Contract Purchase (PCP) quotes with balloon payments (GMFV), Hire Purchase (HP) schedules, and DVLA Road Tax (VED) bands before negotiating.',
      icon: Calculator,
      actionText: 'UK Calculators',
      route: 'smart_tools'
    },
    {
      step: '3',
      title: 'Check Free GOV.UK MOT & HPI History',
      desc: 'Enter any UK Registration Number to view complete official DVSA MOT test passes/fails, advisories, recorded mileage timelines, and check for outstanding finance or write-offs.',
      icon: ShieldCheck,
      actionText: 'Check UK Reg Plate',
      route: 'vehicle_history'
    },
    {
      step: '4',
      title: 'Compare UK Insurance & Breakdown',
      desc: 'Compare quotes across 100+ UK insurers via Compare the Market, Confused.com, and secure 24/7 patrol coverage through The AA or RAC.',
      icon: DollarSign,
      actionText: 'Insurance & Breakdown',
      route: 'car_insurance'
    }
  ] : isCa ? [
    {
      step: '1',
      title: 'Search Coast-to-Coast Inventory',
      desc: 'Use the Buy Cars screen to set your Make, Model, Max Price (CA$), and Postal Code. Browse verified inventory on AutoTrader.ca, Kijiji Autos, Clutch.ca, and AutoCatch.',
      icon: Search,
      actionText: 'Browse Canadian Cars',
      route: 'buy_cars'
    },
    {
      step: '2',
      title: 'Calculate Auto Loan & Provincial Tax',
      desc: 'Calculate monthly & bi-weekly payments with provincial sales tax (HST in ON/NS/NB, PST/GST in BC/SK/MB/QC, GST in AB) and 5-year depreciation schedules.',
      icon: Calculator,
      actionText: 'CAD Loan Tools',
      route: 'smart_tools'
    },
    {
      step: '3',
      title: 'Verify CARFAX Canada & Lien Status',
      desc: 'Enter any 17-digit VIN to verify provincial registration, past insurance accident claims, and run nationwide cross-provincial lien checks.',
      icon: ShieldCheck,
      actionText: 'CARFAX Canada Check',
      route: 'vehicle_history'
    },
    {
      step: '4',
      title: 'Compare Canadian Insurance & CAA',
      desc: 'Compare auto insurance quotes on RATESDOTCA and Ratehub to save on provincial premiums, and secure 24/7 roadside assistance with CAA.',
      icon: DollarSign,
      actionText: 'View Insurance & CAA',
      route: 'car_insurance'
    }
  ] : [
    {
      step: '1',
      title: 'Search & Compare Inventory',
      desc: 'Use the Buy Cars screen to set your desired Make, Model, Max Price, and ZIP code. Tap any partner (Edmunds, CarsDirect, TrueCar, CarGurus) to instantly view matching listings.',
      icon: Search,
      actionText: 'Browse Used Cars',
      route: 'buy_cars'
    },
    {
      step: '2',
      title: 'Run Financial Calculators',
      desc: 'Use our 10+ calculators to determine monthly loan payments, state sales taxes, depreciation curves, and 5-year total ownership costs before stepping into a dealership.',
      icon: Calculator,
      actionText: 'Explore Calculators',
      route: 'smart_tools'
    },
    {
      step: '3',
      title: 'Check VIN & Title History',
      desc: 'Enter any 17-digit VIN in the History tab to run NMVTIS title checks, look for past accidents, and verify free NHTSA safety recalls.',
      icon: ShieldCheck,
      actionText: 'Check a VIN',
      route: 'vehicle_history'
    },
    {
      step: '4',
      title: 'Compare Insurance & Roadside',
      desc: 'Compare quotes from over 100 top US insurance providers on Insurify and secure 24/7 roadside coverage through AAA.',
      icon: DollarSign,
      actionText: 'View Insurance',
      route: 'car_insurance'
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">
          How to Use {regionConfig.shortName}
        </h1>
        <p className="text-xs text-slate-500">
          A step-by-step guide to finding, valuing, and buying used cars in {regionConfig.name}
        </p>
      </div>

      <div className="space-y-3.5">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm shrink-0">
                  {s.step}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-[#0A192F]">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => navigate(s.route)}
                  className="py-2 px-4 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-600 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>{s.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
