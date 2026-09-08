import React from 'react';
import { 
  Calculator, 
  TrendingDown, 
  Zap, 
  Receipt, 
  Wallet, 
  Layers, 
  BatteryCharging, 
  ArrowLeftRight, 
  Scale, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';

export const SmartToolsScreen: React.FC = () => {
  const { navigate, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const curr = regionConfig.currencySymbol;

  const tools = [
    {
      id: 'loan',
      name: isUk ? 'PCP & HP Finance Calculator' : isCa ? 'Auto Loan & Tax Calculator (CA$)' : 'Auto Loan Calculator',
      description: isUk 
        ? 'Calculate monthly PCP payments with balloon values or standard Hire Purchase (HP) amortization.'
        : isCa 
        ? 'Calculate Canadian bi-weekly & monthly loan payments including provincial sales tax.'
        : 'Calculate monthly payments, total interest, and amortization schedule for US auto loans.',
      category: 'FINANCE',
      icon: Calculator,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 'depreciation',
      name: isUk ? 'UK Car Depreciation & Resale' : isCa ? 'Depreciation & Residual Value (CAD)' : 'Depreciation & Resale Value',
      description: isUk 
        ? `Estimate vehicle depreciation loss per year based on UK mileage and segment retain values.`
        : `Estimate multi-year value curve and residual worth in ${curr}.`,
      category: 'VALUATION',
      icon: TrendingDown,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    },
    {
      id: 'fuel_cost',
      name: isUk ? 'UK Petrol & Diesel Commute Cost' : isCa ? 'Fuel Consumption & Cost (L/100km)' : 'Fuel & Commute Cost',
      description: isUk 
        ? 'Calculate monthly fuel costs using UK pence/litre and Imperial MPG.'
        : isCa 
        ? 'Calculate monthly fuel expenditure based on L/100km and $/litre prices.'
        : 'Calculate monthly and annual fuel spending based on MPG and current gas prices.',
      category: 'OWNERSHIP',
      icon: Zap,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      id: 'road_tax',
      name: isUk ? 'Road Tax (VED) & On-the-Road Price' : isCa ? 'Provincial Sales Tax & Out-the-Door (HST/PST)' : 'Sales Tax & Out-the-Door Price',
      description: isUk 
        ? 'Check DVLA Road Tax (VED) rates and complete on-the-road purchase totals.'
        : isCa 
        ? 'Calculate provincial sales tax (HST, GST+PST, QST) for private vs dealer purchases.'
        : 'Calculate state sales tax by state rate, dealer doc fees, and title registration fees.',
      category: 'TAX & FEES',
      icon: Receipt,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      id: 'affordability',
      name: isUk ? 'Affordability & Budget Planner' : isCa ? 'Canadian Car Affordability (20/4/10)' : 'Car Affordability (20/4/10 Rule)',
      description: `Determine your realistic vehicle price ceiling based on monthly take-home salary and budget limits in ${curr}.`,
      category: 'BUDGET',
      icon: Wallet,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      id: 'total_cost',
      name: isUk ? '5-Year UK Running Cost (TCO)' : isCa ? '5-Year Cost of Ownership (CAD)' : '5-Year Total Cost of Ownership',
      description: `Complete multi-year projection of fuel, insurance, servicing, road tax, and depreciation in ${curr}.`,
      category: 'ANALYSIS',
      icon: Layers,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      id: 'ev_savings',
      name: isUk ? 'EV vs Petrol Savings & Payback' : isCa ? 'EV vs Gas Payback Calculator' : 'EV vs Gas Savings & Payback',
      description: isUk 
        ? 'Compare UK electricity home charging (pence/kWh) vs petrol and find break-even timeline.'
        : isCa 
        ? 'Compare Canadian hydro rates vs gas costs and calculate payback on electric vehicles.'
        : 'Compare electricity vs gasoline costs and calculate your EV breakeven timeline.',
      category: 'GREEN & EV',
      icon: BatteryCharging,
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    },
    {
      id: 'trade_in',
      name: isUk ? 'Part-Exchange & Negative Equity' : isCa ? 'Trade-In Equity Calculator (CAD)' : 'Trade-In Equity Calculator',
      description: isUk 
        ? 'Calculate your part-exchange equity position against your outstanding finance settlement figure.'
        : 'Determine if you have positive or negative equity on your current vehicle loan.',
      category: 'EQUITY',
      icon: ArrowLeftRight,
      color: 'text-sky-600',
      bg: 'bg-sky-50'
    },
    {
      id: 'lease_vs_buy',
      name: isUk ? 'PCH Lease vs PCP / Buying' : isCa ? 'Lease vs Finance Comparison (CAD)' : 'Lease vs Buy Comparison',
      description: `Side-by-side total financial comparison between contractual leasing and outright purchase in ${curr}.`,
      category: 'DECISION',
      icon: Scale,
      color: 'text-violet-600',
      bg: 'bg-violet-50'
    },
    {
      id: 'insurance',
      name: isUk ? 'UK Car Insurance Estimator' : isCa ? 'Canadian Auto Insurance Estimator' : 'Insurance Premium Estimator',
      description: isUk 
        ? 'Estimate insurance group premiums based on driver age, no-claims bonus (NCB), and vehicle type.'
        : isCa 
        ? 'Estimate provincial auto insurance rates across Ontario, BC, Alberta, and Quebec.'
        : 'Estimate approximate monthly insurance premiums by vehicle type and driver profile.',
      category: 'INSURANCE',
      icon: ShieldCheck,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50'
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title={`10+ Smart ${regionConfig.shortName} Calculators`}
        subtitle={`Make data-driven vehicle decisions with instant mathematical models calibrated specifically for ${regionConfig.name} automotive rules and currency (${curr}).`}
        badgeText={`Instant ${regionConfig.currencyCode} Calculations`}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.id}
              onClick={() => navigate(`calculator_detail/${tool.id}`)}
              className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-2xl ${tool.bg} ${tool.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {tool.category}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#0A192F] group-hover:text-blue-600 transition-colors mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <span className="font-bold text-blue-600 group-hover:text-blue-700">Open Calculator</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
