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
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';

export const SmartToolsScreen: React.FC = () => {
  const { navigate } = useApp();

  const tools = [
    {
      id: 'loan',
      name: 'Auto Loan Calculator',
      description: 'Calculate monthly payments, total interest, and amortization schedule for US auto loans.',
      category: 'FINANCE',
      icon: Calculator,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 'depreciation',
      name: 'Depreciation & Resale Value',
      description: 'Estimate future value loss by year, age, mileage, and vehicle classification.',
      category: 'VALUATION',
      icon: TrendingDown,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    },
    {
      id: 'fuel_cost',
      name: 'Fuel & Commute Cost',
      description: 'Calculate monthly and annual fuel spending based on MPG and current gas prices.',
      category: 'OWNERSHIP',
      icon: Zap,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      id: 'road_tax',
      name: 'Sales Tax & Out-the-Door Price',
      description: 'Calculate state sales tax by state rate, dealer doc fees, and title registration fees.',
      category: 'TAX & FEES',
      icon: Receipt,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      id: 'affordability',
      name: 'Car Affordability (20/4/10 Rule)',
      description: 'Determine your realistic vehicle budget based on monthly income and debt limits.',
      category: 'BUDGET',
      icon: Wallet,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      id: 'total_cost',
      name: '5-Year Total Cost of Ownership',
      description: 'Calculate complete multi-year cost including depreciation, finance, fuel, insurance & repairs.',
      category: 'ANALYSIS',
      icon: Layers,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      id: 'ev_savings',
      name: 'EV vs Gas Savings & Payback',
      description: 'Compare electricity vs gasoline costs and calculate your EV breakeven timeline.',
      category: 'GREEN & EV',
      icon: BatteryCharging,
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    },
    {
      id: 'trade_in',
      name: 'Trade-In Equity Calculator',
      description: 'Determine if you have positive or negative equity on your current auto loan.',
      category: 'EQUITY',
      icon: ArrowLeftRight,
      color: 'text-sky-600',
      bg: 'bg-sky-50'
    },
    {
      id: 'lease_vs_buy',
      name: 'Lease vs Buy Comparison',
      description: 'Side-by-side financial comparison between 3-year auto leasing and purchasing.',
      category: 'DECISION',
      icon: Scale,
      color: 'text-violet-600',
      bg: 'bg-violet-50'
    },
    {
      id: 'insurance',
      name: 'Insurance Premium Estimator',
      description: 'Estimate approximate monthly insurance premiums by vehicle type and driver profile.',
      category: 'INSURANCE',
      icon: ShieldCheck,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50'
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="10+ Smart Automotive Calculators"
        subtitle="Make data-driven vehicle decisions with instant mathematical models designed specifically for US buyers."
        badgeText="Instant Reactive Calculations"
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
