import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  Calculator, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { REGIONS_CONFIG } from '../data/regionsConfig';
import { RegionId } from '../types';

export const AppFooter: React.FC = () => {
  const { navigate, regionConfig, setRegion } = useApp();

  const isUk = regionConfig.id === 'uk';
  const isCa = regionConfig.id === 'ca';

  return (
    <footer className="w-full bg-[#0A192F] text-slate-300 border-t border-slate-800 mt-12 pb-20 md:pb-12 text-sm">
      {/* Top Footer Ribbon: Trust & Key Highlights */}
      <div className="border-b border-slate-800/80 bg-[#071324]/90 py-4 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">CarQix {regionConfig.shortName}</span>
            <span className="text-slate-500">•</span>
            <span>Real-time market comparisons, calculators & buyer protection</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Independent & 100% Free</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Updated for {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Regional Hub (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-[#0A192F] text-xl shadow-md">
                Q
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  CarQix <span className="text-amber-400 font-extrabold text-sm">{regionConfig.shortName}</span>
                </span>
                <p className="text-[11px] text-slate-400 font-medium">
                  {regionConfig.name} Automotive Decision Engine
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your all-in-one platform for comparing verified used car marketplaces, running accurate financial calculators, checking vehicle histories, and saving on auto ownership.
            </p>

            {/* Region Switcher Pills */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Selected Region</span>
              </div>
              <div className="flex items-center gap-2">
                {(Object.keys(REGIONS_CONFIG) as RegionId[]).map((regId) => {
                  const reg = REGIONS_CONFIG[regId];
                  const isSelected = reg.id === regionConfig.id;
                  return (
                    <button
                      key={reg.id}
                      id={`footer-region-${reg.id}`}
                      onClick={() => setRegion(reg.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-blue-600/90 text-white border-blue-400/50 shadow-sm'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <span>{reg.flag}</span>
                      <span>{reg.shortName}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({reg.currencySymbol})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Marketplaces & Vehicles */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Car className="w-4 h-4" />
              <span>Buy & Sell</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('buy_cars')}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Search Used Cars</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('value_car')}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Free Car Valuation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('sell_car')}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Sell Car Instant Offers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('vehicle_history')}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{isUk ? 'MOT & Mileage Check' : isCa ? 'CARFAX Canada Check' : 'VIN & Title History'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('car_finance')}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Auto Financing & Loans</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('car_insurance')}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Insurance Quotes</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Smart Calculators */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Calculator className="w-4 h-4" />
              <span>Smart Tools</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('smart_tools')}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 text-left font-semibold"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>All 10+ Calculators</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('calculator_detail/auto_loan')}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Auto Loan & APR Estimator</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('calculator_detail/lease_vs_buy')}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Lease vs. Buy Calculator</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('calculator_detail/depreciation')}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>5-Year Depreciation Curve</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('calculator_detail/total_cost_of_ownership')}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Total Cost of Ownership</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('calculator_detail/fuel_vs_ev')}
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Fuel vs. EV Cost Comparison</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Guides & Platform Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Guides & Legal</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('buying_advice')}
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>10-Point Buyer Checklist</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('reviews_guides')}
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Car Reviews & Buying Advice</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('how_to_use')}
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>How to Use CarQix</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('about')}
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>About Our Platform</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('privacy_policy')}
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('terms')}
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Terms of Service</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer / Regulatory Notice */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Consumer Disclaimer:</strong> CarQix is an independent automotive information and tools hub. All marketplace trademarks, logos, and brand names (including AutoTrader, CarGurus, Edmunds, KBB, CarFax, Motorway, and others) are the property of their respective owners and used solely for identification purposes. Calculations and valuations are estimates based on standard regional market models and should be verified prior to signing any purchase or credit contract.
          </p>
        </div>

        {/* Bottom Copyright & Built With Line */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="font-bold text-slate-200">CarQix</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('privacy_policy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('settings')}
              className="hover:text-slate-200 transition-colors"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
