import React, { useState } from 'react';
import { 
  Calculator, 
  Bookmark, 
  RotateCcw, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  DollarSign, 
  Percent, 
  TrendingDown, 
  Zap, 
  Receipt, 
  Wallet, 
  Layers, 
  BatteryCharging, 
  ArrowLeftRight, 
  Scale, 
  ShieldCheck 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CalculatorEngine } from '../utils/calculatorLogic';
import { US_STATES } from '../data/automotiveData';
import { CA_PROVINCES } from '../data/caAutomotiveData';

export const CalculatorDetailScreen: React.FC = () => {
  const { routeParams, goBack, isItemSaved, saveItem, removeSavedItem, savedItems, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const isUs = region === 'us';
  const curr = regionConfig.currencySymbol;
  const distUnit = regionConfig.distanceUnit;

  const calcId = routeParams.id || 'loan';

  // 1. Loan States (with UK PCP / standard HP options)
  const [loanPrice, setLoanPrice] = useState(isUk ? '18000' : isCa ? '35000' : '28000');
  const [loanDown, setLoanDown] = useState(isUk ? '2500' : isCa ? '5000' : '4000');
  const [loanTradeIn, setLoanTradeIn] = useState(isUk ? '1500' : isCa ? '3000' : '2000');
  const [loanRate, setLoanRate] = useState(isUk ? '8.9' : isCa ? '7.2' : '6.5');
  const [loanTerm, setLoanTerm] = useState(isUk ? '48' : '60');
  const [loanTax, setLoanTax] = useState(isUk ? '0.0' : isCa ? '13.0' : '6.0');
  const [isPcp, setIsPcp] = useState(isUk);
  const [pcpBalloonPercent, setPcpBalloonPercent] = useState('42');

  // 2. Depreciation States
  const [depOriginalPrice, setDepOriginalPrice] = useState(isUk ? '25000' : isCa ? '42000' : '35000');
  const [depAgeYears, setDepAgeYears] = useState('3');
  const [depAnnualDistance, setDepAnnualDistance] = useState(isUk ? '9000' : isCa ? '18000' : '12000');
  const [depType, setDepType] = useState<'standard' | 'luxury' | 'truck_suv' | 'ev'>('standard');

  // 3. Fuel Cost States
  const [fuelAnnualDistance, setFuelAnnualDistance] = useState(isUk ? '10000' : isCa ? '20000' : '13500');
  const [fuelEfficiency, setFuelEfficiency] = useState(isUk ? '42' : isCa ? '8.2' : '28'); // UK MPG, CA L/100km, US MPG
  const [fuelPricePerUnit, setFuelPricePerUnit] = useState(isUk ? '1.45' : isCa ? '1.58' : '3.65'); // £/L, CA$/L, $/gal

  // 4. Sales Tax / VED States
  const [taxPrice, setTaxPrice] = useState(isUk ? '16000' : isCa ? '32000' : '25000');
  const [taxTradeIn, setTaxTradeIn] = useState(isUk ? '2000' : isCa ? '4000' : '3000');
  const [selectedStateCode, setSelectedStateCode] = useState('CA');
  const [selectedProvinceCode, setSelectedProvinceCode] = useState('ON');
  const [taxRate, setTaxRate] = useState(isUk ? '190' : isCa ? '13.0' : '7.25'); // in UK this is annual VED
  const [taxDocFee, setTaxDocFee] = useState(isUk ? '99' : isCa ? '399' : '350');
  const [taxRegFee, setTaxRegFee] = useState(isUk ? '55' : isCa ? '120' : '175');
  const [isPrivateSale, setIsPrivateSale] = useState(false);

  // 5. Affordability States
  const [affIncome, setAffIncome] = useState(isUk ? '3800' : isCa ? '7200' : '6500');
  const [affDebt, setAffDebt] = useState(isUk ? '350' : isCa ? '600' : '500');
  const [affSavings, setAffSavings] = useState(isUk ? '3500' : isCa ? '6000' : '5000');
  const [affTerm, setAffTerm] = useState('48');
  const [affRate, setAffRate] = useState(isUk ? '8.9' : isCa ? '7.2' : '6.5');

  // 6. Total Cost of Ownership
  const [tcoPrice, setTcoPrice] = useState(isUk ? '22000' : isCa ? '38000' : '32000');
  const [tcoDistance, setTcoDistance] = useState(isUk ? '10000' : isCa ? '20000' : '14000');
  const [tcoEfficiency, setTcoEfficiency] = useState(isUk ? '40' : isCa ? '8.5' : '27');
  const [tcoFuelPrice, setTcoFuelPrice] = useState(isUk ? '1.45' : isCa ? '1.58' : '3.70');
  const [tcoInsurance, setTcoInsurance] = useState(isUk ? '950' : isCa ? '2100' : '1800');
  const [tcoMaintenance, setTcoMaintenance] = useState(isUk ? '650' : isCa ? '1100' : '950');

  // 7. EV Savings States
  const [evDistance, setEvDistance] = useState(isUk ? '10000' : isCa ? '20000' : '14000');
  const [evGasEfficiency, setEvGasEfficiency] = useState(isUk ? '40' : isCa ? '8.5' : '28');
  const [evGasPrice, setEvGasPrice] = useState(isUk ? '1.45' : isCa ? '1.58' : '3.80');
  const [evKwhEfficiency, setEvKwhEfficiency] = useState(isUk ? '3.6' : isCa ? '18' : '3.5');
  const [evElectricRate, setEvElectricRate] = useState(isUk ? '0.24' : isCa ? '0.14' : '0.16');
  const [evPremium, setEvPremium] = useState(isUk ? '3500' : isCa ? '5500' : '4500');

  // 8. Trade-In Equity States
  const [equityMarketVal, setEquityMarketVal] = useState(isUk ? '12500' : isCa ? '22000' : '18500');
  const [equityLoanBal, setEquityLoanBal] = useState(isUk ? '9800' : isCa ? '17500' : '14200');

  // 9. Lease vs Buy States
  const [lvbPrice, setLvbPrice] = useState(isUk ? '28000' : isCa ? '44000' : '36000');
  const [lvbTerm, setLvbTerm] = useState('36');
  const [lvbDown, setLvbDown] = useState(isUk ? '2000' : isCa ? '4000' : '3000');
  const [lvbRate, setLvbRate] = useState(isUk ? '7.9' : isCa ? '6.8' : '6.0');

  // 10. Insurance Estimate States
  const [insAge, setInsAge] = useState('3');
  const [insType, setInsType] = useState<'sedan' | 'suv' | 'truck' | 'sports' | 'luxury' | 'ev'>('sedan');
  const [insDriverAge, setInsDriverAge] = useState<'under_25' | '25_to_65' | 'over_65'>('25_to_65');
  const [insCleanRecord, setInsCleanRecord] = useState(true);
  const [insCoverage, setInsCoverage] = useState<'minimum' | 'standard' | 'full'>('full');

  // Real-time calculations
  const loanResult = CalculatorEngine.calculateLoan(
    parseFloat(loanPrice) || 0,
    parseFloat(loanDown) || 0,
    parseFloat(loanTradeIn) || 0,
    parseFloat(loanRate) || 0,
    parseInt(loanTerm) || 60,
    parseFloat(loanTax) || 0,
    isPcp,
    parseFloat(pcpBalloonPercent) || 40
  );

  const depResult = CalculatorEngine.calculateDepreciation(
    parseFloat(depOriginalPrice) || 0,
    parseFloat(depAgeYears) || 1,
    parseFloat(depAnnualDistance) || 10000,
    depType,
    region
  );

  const fuelResult = CalculatorEngine.calculateFuelCost(
    parseFloat(fuelAnnualDistance) || 0,
    parseFloat(fuelEfficiency) || (isCa ? 8.5 : 30),
    parseFloat(fuelPricePerUnit) || 1.5,
    region
  );

  const taxResult = CalculatorEngine.calculateSalesTax(
    parseFloat(taxPrice) || 0,
    parseFloat(taxTradeIn) || 0,
    parseFloat(taxRate) || 0,
    parseFloat(taxDocFee) || 0,
    parseFloat(taxRegFee) || 0,
    region,
    isPrivateSale
  );

  const affResult = CalculatorEngine.calculateAffordability(
    parseFloat(affIncome) || 0,
    parseFloat(affDebt) || 0,
    parseFloat(affSavings) || 0,
    parseInt(affTerm) || 48,
    parseFloat(affRate) || 6.5
  );

  const tcoResult = CalculatorEngine.calculateTCO(
    parseFloat(tcoPrice) || 0,
    parseFloat(tcoDistance) || (isCa ? 20000 : 12000),
    parseFloat(tcoEfficiency) || (isCa ? 8.5 : 28),
    parseFloat(tcoFuelPrice) || (isUk ? 1.45 : isCa ? 1.58 : 3.6),
    parseFloat(tcoInsurance) || 1500,
    parseFloat(tcoMaintenance) || 800,
    region
  );

  const evResult = CalculatorEngine.calculateEvSavings(
    parseFloat(evDistance) || (isCa ? 20000 : 12000),
    parseFloat(evGasEfficiency) || (isCa ? 8.5 : 28),
    parseFloat(evGasPrice) || 1.5,
    parseFloat(evKwhEfficiency) || (isCa ? 18 : 3.5),
    parseFloat(evElectricRate) || 0.16,
    parseFloat(evPremium) || 4000,
    region
  );

  const equityResult = CalculatorEngine.calculateTradeInEquity(
    parseFloat(equityMarketVal) || 0,
    parseFloat(equityLoanBal) || 0
  );

  const lvbResult = CalculatorEngine.calculateLeaseVsBuy(
    parseFloat(lvbPrice) || 0,
    parseInt(lvbTerm) || 36,
    parseFloat(lvbDown) || 0,
    parseFloat(lvbRate) || 6.0
  );

  const insResult = CalculatorEngine.estimateInsurance(
    parseFloat(insAge) || 0,
    insType,
    insDriverAge,
    insCleanRecord,
    insCoverage,
    region
  );

  // Region specific state/province change handler
  const handleStateChange = (code: string) => {
    setSelectedStateCode(code);
    const found = US_STATES.find(s => s.code === code);
    if (found) {
      setTaxRate(found.tax.toString());
      setLoanTax(found.tax.toString());
    }
  };

  const handleProvinceChange = (code: string) => {
    setSelectedProvinceCode(code);
    const found = CA_PROVINCES.find(p => p.code === code);
    if (found) {
      const appliedRate = isPrivateSale ? found.privateSaleRate : found.rate;
      setTaxRate(appliedRate.toString());
      setLoanTax(appliedRate.toString());
    }
  };

  const getCalcTitle = () => {
    switch (calcId) {
      case 'loan': return isUk ? 'PCP & HP Finance Calculator' : isCa ? 'Canadian Auto Loan Calculator' : 'Auto Loan Calculator';
      case 'depreciation': return isUk ? 'UK Car Depreciation & Resale' : 'Depreciation & Resale Value';
      case 'fuel_cost': return isUk ? 'UK Petrol & Diesel Commute Cost' : isCa ? 'Fuel Consumption & Cost (L/100km)' : 'Fuel Cost Calculator';
      case 'road_tax': return isUk ? 'Road Tax (VED) & On-the-Road Total' : isCa ? 'Provincial Sales Tax & Out-the-Door' : 'Sales Tax & Out-the-Door';
      case 'affordability': return 'Affordability (20/4/10 Budget)';
      case 'total_cost': return `5-Year Cost of Ownership (${curr})`;
      case 'ev_savings': return 'EV vs Gas Savings & Payback';
      case 'trade_in': return isUk ? 'Part-Exchange & Settlement' : 'Trade-In Equity Calculator';
      case 'lease_vs_buy': return isUk ? 'PCH Lease vs PCP Comparison' : 'Lease vs Buy Comparison';
      case 'insurance': return isUk ? 'UK Car Insurance Estimator' : isCa ? 'Canadian Auto Insurance Estimator' : 'Insurance Estimator';
      default: return 'Automotive Calculator';
    }
  };

  const title = getCalcTitle();
  const isSaved = isItemSaved(title);

  const handleSaveCalculation = () => {
    if (isSaved) {
      const match = savedItems.find((i) => i.title.toLowerCase() === title.toLowerCase());
      if (match) removeSavedItem(match.id);
    } else {
      let subtitle = '';
      if (calcId === 'loan') subtitle = `${curr}${loanResult.monthlyPayment}/mo for ${loanTerm} mos`;
      else if (calcId === 'depreciation') subtitle = `Estimated Value: ${curr}${depResult.currentEstimatedValue.toLocaleString()}`;
      else if (calcId === 'fuel_cost') subtitle = `${curr}${fuelResult.monthlyFuelCost}/mo (${curr}${fuelResult.annualFuelCost}/yr)`;
      else if (calcId === 'road_tax') subtitle = `Out-the-Door: ${curr}${taxResult.totalOutTheDoorPrice.toLocaleString()}`;
      else subtitle = 'Calculation Result Snapshot';

      saveItem({
        itemType: 'CALCULATION',
        title,
        subtitle,
        detailDataJson: JSON.stringify({ calcId, timestamp: Date.now(), region })
      });
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">{title}</h1>
          <p className="text-xs text-slate-500">
            Real-time calculation engine calibrated for {regionConfig.name} ({regionConfig.currencyCode})
          </p>
        </div>
        <button
          onClick={handleSaveCalculation}
          className={`p-2.5 rounded-full border transition-colors flex items-center gap-1 text-xs font-semibold ${
            isSaved
              ? 'bg-amber-50 text-amber-600 border-amber-200'
              : 'text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
          <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* 1. AUTO LOAN / PCP CALCULATOR */}
      {calcId === 'loan' && (
        <div className="space-y-4">
          {/* Main Payment Card */}
          <div className="bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white rounded-3xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {isPcp ? 'Estimated Monthly PCP Payment' : 'Estimated Monthly Payment'}
              </span>
              {isUk && (
                <div className="flex bg-white/10 p-0.5 rounded-lg text-[10px] font-bold">
                  <button 
                    onClick={() => setIsPcp(false)} 
                    className={`px-2 py-0.5 rounded ${!isPcp ? 'bg-amber-400 text-slate-900' : 'text-slate-300'}`}
                  >
                    HP Loan
                  </button>
                  <button 
                    onClick={() => setIsPcp(true)} 
                    className={`px-2 py-0.5 rounded ${isPcp ? 'bg-amber-400 text-slate-900' : 'text-slate-300'}`}
                  >
                    PCP (Balloon)
                  </button>
                </div>
              )}
            </div>

            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{loanResult.monthlyPayment.toFixed(2)}
              <span className="text-sm font-normal text-slate-300"> / month</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/10 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block">Total Financed</span>
                <strong className="text-white">{curr}{loanResult.loanAmount.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Total Interest</span>
                <strong className="text-amber-300">{curr}{loanResult.totalInterest.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Total Amount Paid</span>
                <strong className="text-white">{curr}{loanResult.totalCost.toLocaleString()}</strong>
              </div>
              {isPcp && loanResult.balloonPayment && (
                <div>
                  <span className="text-amber-400 block">Balloon (GMFV)</span>
                  <strong className="text-amber-300">{curr}{loanResult.balloonPayment.toLocaleString()}</strong>
                </div>
              )}
            </div>
          </div>

          {/* Form Controls */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-[#0A192F]">Finance Parameters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Price ({curr})</label>
                <input
                  type="number"
                  value={loanPrice}
                  onChange={(e) => setLoanPrice(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Down Payment / Deposit ({curr})</label>
                <input
                  type="number"
                  value={loanDown}
                  onChange={(e) => setLoanDown(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">{isUk ? 'Part-Exchange Value' : 'Trade-in Allowance'} ({curr})</label>
                <input
                  type="number"
                  value={loanTradeIn}
                  onChange={(e) => setLoanTradeIn(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Interest Rate (APR %)</label>
                <input
                  type="number"
                  step="0.1"
                  value={loanRate}
                  onChange={(e) => setLoanRate(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Loan Term (Months)</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="24">24 Months (2 Yrs)</option>
                  <option value="36">36 Months (3 Yrs)</option>
                  <option value="48">48 Months (4 Yrs)</option>
                  <option value="60">60 Months (5 Yrs)</option>
                  <option value="72">72 Months (6 Yrs)</option>
                  <option value="84">84 Months (7 Yrs)</option>
                </select>
              </div>
              {!isUk && (
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">{isCa ? 'Provincial Sales Tax (%)' : 'State Sales Tax (%)'}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={loanTax}
                    onChange={(e) => setLoanTax(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  />
                </div>
              )}
              {isPcp && (
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">PCP Balloon GMFV (% of Price)</label>
                  <input
                    type="number"
                    value={pcpBalloonPercent}
                    onChange={(e) => setPcpBalloonPercent(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. DEPRECIATION CALCULATOR */}
      {calcId === 'depreciation' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-rose-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-1">
              Estimated Current Market Value
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{depResult.currentEstimatedValue.toLocaleString()}
            </div>
            <div className="flex items-center gap-3 text-xs text-rose-200">
              <span>Total Depreciation: <strong>-{curr}{depResult.totalDepreciation.toLocaleString()}</strong></span>
              <span>•</span>
              <span>Loss: <strong>{depResult.depreciationPercent}%</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Vehicle Inputs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Original Price When New ({curr})</label>
                <input
                  type="number"
                  value={depOriginalPrice}
                  onChange={(e) => setDepOriginalPrice(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Age (Years)</label>
                <select
                  value={depAgeYears}
                  onChange={(e) => setDepAgeYears(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="1">1 Year Old</option>
                  <option value="2">2 Years Old</option>
                  <option value="3">3 Years Old (End of typical lease/PCP)</option>
                  <option value="4">4 Years Old</option>
                  <option value="5">5 Years Old</option>
                  <option value="7">7 Years Old</option>
                  <option value="10">10 Years Old</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Classification</label>
                <select
                  value={depType}
                  onChange={(e) => setDepType(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="standard">Standard Car / Hatchback / Sedan</option>
                  <option value="truck_suv">{isUk ? 'Compact / Mid-Size SUV' : 'Truck / Full-Size SUV (Holds value best)'}</option>
                  <option value="luxury">Luxury / European (High initial loss)</option>
                  <option value="ev">Electric Vehicle (Battery curve)</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Annual {distUnit === 'km' ? 'Kilometres' : 'Mileage'}</label>
                <input
                  type="number"
                  step="1000"
                  value={depAnnualDistance}
                  onChange={(e) => setDepAnnualDistance(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Year-by-year curve */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Estimated Multi-Year Value Curve</h3>
            <div className="space-y-2">
              {depResult.yearlyDepreciationTable.map((row) => (
                <div key={row.year} className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-700">Year {row.year}</span>
                  <span className="text-slate-500">Loss: -{curr}{row.loss.toLocaleString()}</span>
                  <span className="font-bold text-slate-900">{curr}{row.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. FUEL & COMMUTE COST CALCULATOR */}
      {calcId === 'fuel_cost' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-amber-700 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
              Estimated Monthly Fuel Spending
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{fuelResult.monthlyFuelCost.toFixed(2)}
              <span className="text-sm font-normal text-slate-300"> / month</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-amber-200">
              <span>Annual: <strong>{curr}{fuelResult.annualFuelCost.toLocaleString()}</strong></span>
              <span>•</span>
              <span>Cost/{fuelResult.distanceLabel}: <strong>{curr}{fuelResult.costPerUnitDistance}</strong></span>
              <span>•</span>
              <span>Volume/Yr: <strong>{fuelResult.unitsPerYear} {fuelResult.unitLabel}</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Fuel & Commute Inputs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Annual {distUnit === 'km' ? 'Kilometres' : 'Mileage'}</label>
                <input
                  type="number"
                  value={fuelAnnualDistance}
                  onChange={(e) => setFuelAnnualDistance(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">
                  {isCa ? 'Fuel Consumption (L/100km)' : 'Fuel Economy (MPG)'}
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={fuelEfficiency}
                  onChange={(e) => setFuelEfficiency(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">
                  {isUk ? 'Fuel Price (£/Litre)' : isCa ? 'Fuel Price (CA$/Litre)' : 'Gas Price ($/Gallon)'}
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={fuelPricePerUnit}
                  onChange={(e) => setFuelPricePerUnit(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SALES TAX / ROAD TAX (VED) CALCULATOR */}
      {calcId === 'road_tax' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-emerald-800 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">
              {isUk ? 'Estimated On-the-Road Total' : 'Estimated Total Out-the-Door Price'}
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{taxResult.totalOutTheDoorPrice.toLocaleString()}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-xs text-emerald-200">
              <div>
                <span className="text-slate-300 block">{isUk ? 'VAT' : 'Sales Tax'}</span>
                <strong>{isUk ? 'Included (20%)' : `${curr}${taxResult.salesTaxAmount.toLocaleString()} (${taxResult.effectiveTaxRate}%)`}</strong>
              </div>
              <div>
                <span className="text-slate-300 block">{isUk ? 'Admin / Prep' : 'Doc Fee'}</span>
                <strong>{curr}{taxResult.estimatedDocFee}</strong>
              </div>
              <div>
                <span className="text-slate-300 block">{isUk ? 'Road Tax (VED)' : 'Reg & Title'}</span>
                <strong>{curr}{taxResult.estimatedRegistrationFee}</strong>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">
              {isUk ? 'Vehicle & Road Tax (VED) Parameters' : isCa ? 'Provincial Tax Breakdown' : 'State Tax Breakdown'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Agreed Price ({curr})</label>
                <input
                  type="number"
                  value={taxPrice}
                  onChange={(e) => setTaxPrice(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">{isUk ? 'Part-Exchange Allowance' : 'Trade-in Allowance'} ({curr})</label>
                <input
                  type="number"
                  value={taxTradeIn}
                  onChange={(e) => setTaxTradeIn(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>

              {isUs && (
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">US State</label>
                  <select
                    value={selectedStateCode}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  >
                    {US_STATES.map((s) => (
                      <option key={s.code} value={s.code}>{s.name} ({s.tax}%)</option>
                    ))}
                  </select>
                </div>
              )}

              {isCa && (
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">Canadian Province</label>
                  <select
                    value={selectedProvinceCode}
                    onChange={(e) => handleProvinceChange(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  >
                    {CA_PROVINCES.map((p) => (
                      <option key={p.code} value={p.code}>{p.name} ({p.taxType} {p.rate}%)</option>
                    ))}
                  </select>
                </div>
              )}

              {isUk ? (
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">Annual DVLA Road Tax (VED £)</label>
                  <input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  />
                </div>
              ) : (
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">Sales Tax Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  />
                </div>
              )}
            </div>

            {taxResult.taxBreakdownNote && (
              <p className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                ℹ️ {taxResult.taxBreakdownNote}
              </p>
            )}
          </div>
        </div>
      )}

      {/* 5. AFFORDABILITY CALCULATOR */}
      {calcId === 'affordability' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">
              Recommended Maximum Vehicle Price
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{affResult.maxVehiclePrice.toLocaleString()}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-xs text-indigo-200">
              <div>
                <span className="text-slate-300 block">Max Monthly Payment</span>
                <strong>{curr}{affResult.estimatedMonthlyPayment}/mo</strong>
              </div>
              <div>
                <span className="text-slate-300 block">Max Loan Amount</span>
                <strong>{curr}{affResult.maxLoanAmount.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-300 block">Suggested Down</span>
                <strong>{curr}{affResult.recommendedDownPayment.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Financial Situation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Gross Monthly Income ({curr})</label>
                <input
                  type="number"
                  value={affIncome}
                  onChange={(e) => setAffIncome(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Monthly Existing Debt ({curr})</label>
                <input
                  type="number"
                  value={affDebt}
                  onChange={(e) => setAffDebt(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Cash Savings Available ({curr})</label>
                <input
                  type="number"
                  value={affSavings}
                  onChange={(e) => setAffSavings(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. 5-YEAR TOTAL COST OF OWNERSHIP (TCO) */}
      {calcId === 'total_cost' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-purple-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-1">
              5-Year Total Cost of Ownership
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{tcoResult.total5YearCost.toLocaleString()}
            </div>
            <div className="flex items-center gap-4 text-xs text-purple-200">
              <span>Annual Average: <strong>{curr}{tcoResult.annualAverageCost.toLocaleString()}</strong></span>
              <span>•</span>
              <span>Cost/{distUnit === 'km' ? 'km' : 'mile'}: <strong>{curr}{tcoResult.costPerMileOrKm}</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">5-Year Cost Breakdown</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-500 block">Depreciation</span>
                <strong className="text-sm font-black text-slate-900">{curr}{tcoResult.depreciationCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-500 block">Fuel Spending</span>
                <strong className="text-sm font-black text-slate-900">{curr}{tcoResult.fuelCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-500 block">Insurance</span>
                <strong className="text-sm font-black text-slate-900">{curr}{tcoResult.insuranceCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-500 block">Financing</span>
                <strong className="text-sm font-black text-slate-900">{curr}{tcoResult.financingCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-500 block">Maintenance</span>
                <strong className="text-sm font-black text-slate-900">{curr}{tcoResult.maintenanceCost.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. EV VS GAS SAVINGS */}
      {calcId === 'ev_savings' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-teal-800 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block mb-1">
              5-Year EV Fuel Savings
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{evResult.fiveYearSavings.toLocaleString()}
            </div>
            <div className="flex items-center gap-4 text-xs text-teal-200">
              <span>Annual Savings: <strong>{curr}{evResult.annualSavings.toLocaleString()}</strong></span>
              <span>•</span>
              <span>Breakeven: <strong>{evResult.breakEvenMonths} months</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Energy Comparison</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-500 block">Annual Gas / Petrol Spending</span>
                <strong className="text-base text-rose-600 font-black">{curr}{evResult.annualGasCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-500 block">Annual Electricity Spending</span>
                <strong className="text-base text-emerald-600 font-black">{curr}{evResult.annualElectricityCost.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. TRADE-IN EQUITY */}
      {calcId === 'trade_in' && (
        <div className="space-y-4">
          <div className={`bg-gradient-to-br ${equityResult.isPositiveEquity ? 'from-sky-800 to-slate-900' : 'from-rose-800 to-slate-900'} text-white rounded-3xl p-6 shadow-md`}>
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block mb-1">
              {equityResult.isPositiveEquity ? 'Positive Equity Available' : 'Negative Equity (Underwater)'}
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{Math.abs(equityResult.netEquity).toLocaleString()}
            </div>
            <p className="text-xs text-slate-300">
              {equityResult.isPositiveEquity 
                ? `You can use this ${curr}${equityResult.netEquity.toLocaleString()} directly as a cash deposit on your next car.`
                : `You owe more than the car is worth. You will need to pay ${curr}${Math.abs(equityResult.netEquity).toLocaleString()} out of pocket or roll it into a new loan.`}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Vehicle Equity Inputs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">{isUk ? 'Part-Exchange Offer' : 'Trade-in Appraisal Offer'} ({curr})</label>
                <input
                  type="number"
                  value={equityMarketVal}
                  onChange={(e) => setEquityMarketVal(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">{isUk ? 'Finance Settlement Figure' : 'Remaining Loan Balance'} ({curr})</label>
                <input
                  type="number"
                  value={equityLoanBal}
                  onChange={(e) => setEquityLoanBal(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. LEASE VS BUY */}
      {calcId === 'lease_vs_buy' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-violet-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-violet-300 uppercase tracking-wider block mb-1">
              Recommended Choice: {lvbResult.betterOption === 'BUY' ? 'Buying / Financing' : 'Leasing (PCH)'}
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white mb-2">
              Save {curr}{lvbResult.costDifference.toLocaleString()} Over 3 Years
            </div>
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs text-violet-200">
              <div>
                <span className="text-slate-300 block">Monthly Lease (PCH)</span>
                <strong>{curr}{lvbResult.monthlyLeasePayment}/mo</strong>
              </div>
              <div>
                <span className="text-slate-300 block">Monthly Purchase (HP)</span>
                <strong>{curr}{lvbResult.monthlyBuyPayment}/mo</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. INSURANCE ESTIMATOR */}
      {calcId === 'insurance' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
              Estimated Annual Insurance Premium
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {curr}{insResult.estimatedAnnualPremium.toLocaleString()}
              <span className="text-sm font-normal text-slate-300"> ({curr}{insResult.estimatedMonthlyPremium}/mo)</span>
            </div>
            <p className="text-xs text-cyan-200">
              Risk Profile: <strong>{insResult.riskFactorScore}</strong>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Driver & Vehicle Profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Body Type</label>
                <select
                  value={insType}
                  onChange={(e) => setInsType(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="sedan">Hatchback / Sedan</option>
                  <option value="suv">SUV / Crossover</option>
                  <option value="truck">Truck / Pick-up</option>
                  <option value="sports">Sports / High-Performance</option>
                  <option value="luxury">Luxury / Prestige</option>
                  <option value="ev">Electric Vehicle</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Driver Age Group</label>
                <select
                  value={insDriverAge}
                  onChange={(e) => setInsDriverAge(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="under_25">Under 25 (Young Driver)</option>
                  <option value="25_to_65">25 - 65 Years Old</option>
                  <option value="over_65">Over 65 Years Old</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Policy Coverage Tier</label>
                <select
                  value={insCoverage}
                  onChange={(e) => setInsCoverage(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="full">{isUk ? 'Comprehensive' : 'Full Comprehensive'}</option>
                  <option value="standard">{isUk ? 'Third Party, Fire & Theft' : 'Standard Liability + Collision'}</option>
                  <option value="minimum">{isUk ? 'Third Party Only' : 'State / Provincial Minimum'}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
