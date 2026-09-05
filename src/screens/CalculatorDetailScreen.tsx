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

export const CalculatorDetailScreen: React.FC = () => {
  const { routeParams, goBack, isItemSaved, saveItem, removeSavedItem, savedItems } = useApp();

  const calcId = routeParams.id || 'loan';

  // 1. Loan States
  const [loanPrice, setLoanPrice] = useState('28000');
  const [loanDown, setLoanDown] = useState('4000');
  const [loanTradeIn, setLoanTradeIn] = useState('2000');
  const [loanRate, setLoanRate] = useState('6.5');
  const [loanTerm, setLoanTerm] = useState('60');
  const [loanTax, setLoanTax] = useState('6.0');

  // 2. Depreciation States
  const [depOriginalPrice, setDepOriginalPrice] = useState('35000');
  const [depAgeYears, setDepAgeYears] = useState('3');
  const [depAnnualMiles, setDepAnnualMiles] = useState('12000');
  const [depType, setDepType] = useState<'standard' | 'luxury' | 'truck_suv' | 'ev'>('standard');

  // 3. Fuel Cost States
  const [fuelAnnualMiles, setFuelAnnualMiles] = useState('13500');
  const [fuelMpg, setFuelMpg] = useState('28');
  const [fuelPrice, setFuelPrice] = useState('3.65');

  // 4. Sales Tax States
  const [taxPrice, setTaxPrice] = useState('25000');
  const [taxTradeIn, setTaxTradeIn] = useState('3000');
  const [selectedStateCode, setSelectedStateCode] = useState('CA');
  const [taxRate, setTaxRate] = useState('7.25');
  const [taxDocFee, setTaxDocFee] = useState('350');
  const [taxRegFee, setTaxRegFee] = useState('175');

  // 5. Affordability States
  const [affIncome, setAffIncome] = useState('6500');
  const [affDebt, setAffDebt] = useState('500');
  const [affSavings, setAffSavings] = useState('5000');
  const [affTerm, setAffTerm] = useState('48');
  const [affRate, setAffRate] = useState('6.5');

  // 6. Total Cost of Ownership
  const [tcoPrice, setTcoPrice] = useState('32000');
  const [tcoMiles, setTcoMiles] = useState('14000');
  const [tcoMpg, setTcoMpg] = useState('27');
  const [tcoGasPrice, setTcoGasPrice] = useState('3.70');
  const [tcoInsurance, setTcoInsurance] = useState('1800');
  const [tcoMaintenance, setTcoMaintenance] = useState('950');

  // 7. EV Savings States
  const [evMiles, setEvMiles] = useState('14000');
  const [evGasMpg, setEvGasMpg] = useState('28');
  const [evGasPrice, setEvGasPrice] = useState('3.80');
  const [evKwhMiles, setEvKwhMiles] = useState('3.5');
  const [evElectricRate, setEvElectricRate] = useState('0.16');
  const [evPremium, setEvPremium] = useState('4500');

  // 8. Trade-In Equity States
  const [equityMarketVal, setEquityMarketVal] = useState('18500');
  const [equityLoanBal, setEquityLoanBal] = useState('14200');

  // 9. Lease vs Buy States
  const [lvbPrice, setLvbPrice] = useState('36000');
  const [lvbTerm, setLvbTerm] = useState('36');
  const [lvbDown, setLvbDown] = useState('3000');
  const [lvbRate, setLvbRate] = useState('6.0');

  // 10. Insurance Estimate States
  const [insAge, setInsAge] = useState('3');
  const [insType, setInsType] = useState<'sedan' | 'suv' | 'truck' | 'sports' | 'luxury' | 'ev'>('sedan');
  const [insDriverAge, setInsDriverAge] = useState<'under_25' | '25_to_65' | 'over_65'>('25_to_65');
  const [insCleanRecord, setInsCleanRecord] = useState(true);
  const [insCoverage, setInsCoverage] = useState<'minimum' | 'standard' | 'full'>('full');

  // Real-time calculation derivations
  const loanResult = CalculatorEngine.calculateLoan(
    parseFloat(loanPrice) || 0,
    parseFloat(loanDown) || 0,
    parseFloat(loanTradeIn) || 0,
    parseFloat(loanRate) || 0,
    parseInt(loanTerm) || 60,
    parseFloat(loanTax) || 0
  );

  const depResult = CalculatorEngine.calculateDepreciation(
    parseFloat(depOriginalPrice) || 0,
    parseFloat(depAgeYears) || 1,
    parseFloat(depAnnualMiles) || 12000,
    depType
  );

  const fuelResult = CalculatorEngine.calculateFuelCost(
    parseFloat(fuelAnnualMiles) || 0,
    parseFloat(fuelMpg) || 25,
    parseFloat(fuelPrice) || 3.5
  );

  const taxResult = CalculatorEngine.calculateSalesTax(
    parseFloat(taxPrice) || 0,
    parseFloat(taxTradeIn) || 0,
    parseFloat(taxRate) || 0,
    parseFloat(taxDocFee) || 0,
    parseFloat(taxRegFee) || 0
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
    parseFloat(tcoMiles) || 13500,
    parseFloat(tcoMpg) || 26,
    parseFloat(tcoGasPrice) || 3.6,
    parseFloat(tcoInsurance) || 1800,
    parseFloat(tcoMaintenance) || 900
  );

  const evResult = CalculatorEngine.calculateEvSavings(
    parseFloat(evMiles) || 14000,
    parseFloat(evGasMpg) || 28,
    parseFloat(evGasPrice) || 3.75,
    parseFloat(evKwhMiles) || 3.5,
    parseFloat(evElectricRate) || 0.16,
    parseFloat(evPremium) || 4000
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
    insCoverage
  );

  // Handle State Tax change
  const handleStateChange = (code: string) => {
    setSelectedStateCode(code);
    const found = US_STATES.find(s => s.code === code);
    if (found) {
      setTaxRate(found.tax.toString());
      setLoanTax(found.tax.toString());
    }
  };

  const getCalcTitle = () => {
    switch (calcId) {
      case 'loan': return 'Auto Loan Calculator';
      case 'depreciation': return 'Depreciation Calculator';
      case 'fuel_cost': return 'Fuel Cost Calculator';
      case 'road_tax': return 'Sales Tax & Out-the-Door';
      case 'affordability': return 'Affordability (20/4/10 Rule)';
      case 'total_cost': return '5-Year Cost of Ownership';
      case 'ev_savings': return 'EV vs Gas Savings';
      case 'trade_in': return 'Trade-In Equity Calculator';
      case 'lease_vs_buy': return 'Lease vs Buy Calculator';
      case 'insurance': return 'Insurance Estimator';
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
      if (calcId === 'loan') subtitle = `$${loanResult.monthlyPayment}/mo for ${loanTerm} mos`;
      else if (calcId === 'depreciation') subtitle = `Estimated Value: $${depResult.currentEstimatedValue.toLocaleString()}`;
      else if (calcId === 'fuel_cost') subtitle = `$${fuelResult.monthlyFuelCost}/mo ($${fuelResult.annualFuelCost}/yr)`;
      else if (calcId === 'road_tax') subtitle = `Out-the-Door: $${taxResult.totalOutTheDoorPrice.toLocaleString()}`;
      else subtitle = 'Calculation Result Snapshot';

      saveItem({
        itemType: 'CALCULATION',
        title,
        subtitle,
        detailDataJson: JSON.stringify({ calcId, timestamp: Date.now() })
      });
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">{title}</h1>
          <p className="text-xs text-slate-500">Real-time instant calculation engine</p>
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

      {/* 1. AUTO LOAN CALCULATOR */}
      {calcId === 'loan' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Estimated Monthly Payment
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-4">
              ${loanResult.monthlyPayment.toFixed(2)}
              <span className="text-sm font-normal text-slate-300"> / month</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-slate-400 block">Total Interest</span>
                <strong className="text-amber-400 font-bold">${loanResult.totalInterest.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Total Loan Paid</span>
                <strong className="text-white font-bold">${loanResult.totalCost.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Financed Amount</span>
                <strong className="text-white font-bold">${loanResult.loanAmount.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Loan Parameters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Price ($)</label>
                <input
                  type="number"
                  value={loanPrice}
                  onChange={(e) => setLoanPrice(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Down Payment ($)</label>
                <input
                  type="number"
                  value={loanDown}
                  onChange={(e) => setLoanDown(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Trade-in Allowance ($)</label>
                <input
                  type="number"
                  value={loanTradeIn}
                  onChange={(e) => setLoanTradeIn(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Interest Rate APR (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={loanRate}
                  onChange={(e) => setLoanRate(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Loan Term</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="36">36 Months (3 Years)</option>
                  <option value="48">48 Months (4 Years)</option>
                  <option value="60">60 Months (5 Years)</option>
                  <option value="72">72 Months (6 Years)</option>
                  <option value="84">84 Months (7 Years)</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Sales Tax (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={loanTax}
                  onChange={(e) => setLoanTax(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
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
              ${depResult.currentEstimatedValue.toLocaleString()}
            </div>
            <p className="text-xs text-rose-200">
              Total Depreciation: ${depResult.totalDepreciation.toLocaleString()} ({depResult.depreciationPercent}% total value loss)
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Vehicle Specifics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Original Price ($)</label>
                <input
                  type="number"
                  value={depOriginalPrice}
                  onChange={(e) => setDepOriginalPrice(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Age (Years)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={depAgeYears}
                  onChange={(e) => setDepAgeYears(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Classification</label>
                <select
                  value={depType}
                  onChange={(e) => setDepType(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="standard">Standard Car / Sedan</option>
                  <option value="truck_suv">Truck / Full-Size SUV (Holds value best)</option>
                  <option value="luxury">Luxury / European (High initial loss)</option>
                  <option value="ev">Electric Vehicle (Battery tech curve)</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Annual Mileage (Miles)</label>
                <input
                  type="number"
                  step="1000"
                  value={depAnnualMiles}
                  onChange={(e) => setDepAnnualMiles(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Year-by-year depreciation curve */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Estimated Multi-Year Value Curve</h3>
            <div className="space-y-2">
              {depResult.yearlyDepreciationTable.map((row) => (
                <div key={row.year} className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-700">Year {row.year}</span>
                  <span className="text-slate-500">Loss: -${row.loss.toLocaleString()}</span>
                  <span className="font-bold text-slate-900">${row.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. FUEL COST CALCULATOR */}
      {calcId === 'fuel_cost' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-amber-700 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
              Estimated Monthly Fuel Spending
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              ${fuelResult.monthlyFuelCost.toFixed(2)}
              <span className="text-sm font-normal text-slate-300"> / month</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-amber-200">
              <span>Annual: <strong>${fuelResult.annualFuelCost.toLocaleString()}</strong></span>
              <span>•</span>
              <span>Cost/Mile: <strong>${fuelResult.costPerMile}</strong></span>
              <span>•</span>
              <span>Gallons/Yr: <strong>{fuelResult.gallonsPerYear} gal</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Fuel & Commute Inputs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Annual Mileage</label>
                <input
                  type="number"
                  value={fuelAnnualMiles}
                  onChange={(e) => setFuelAnnualMiles(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Fuel Economy (Combined MPG)</label>
                <input
                  type="number"
                  value={fuelMpg}
                  onChange={(e) => setFuelMpg(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Gas Price ($/Gallon)</label>
                <input
                  type="number"
                  step="0.05"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SALES TAX & OUT-THE-DOOR CALCULATOR */}
      {calcId === 'road_tax' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-emerald-800 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">
              Estimated Total Out-the-Door Price
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              ${taxResult.totalOutTheDoorPrice.toLocaleString()}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-xs text-emerald-200">
              <div>
                <span className="text-slate-300 block">Sales Tax ({taxResult.effectiveTaxRate}%)</span>
                <strong>${taxResult.salesTaxAmount.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-300 block">Doc Fee</span>
                <strong>${taxResult.estimatedDocFee}</strong>
              </div>
              <div>
                <span className="text-slate-300 block">Reg / Title</span>
                <strong>${taxResult.estimatedRegistrationFee}</strong>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Price & State Tax Breakdown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Agreed Price ($)</label>
                <input
                  type="number"
                  value={taxPrice}
                  onChange={(e) => setTaxPrice(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Trade-in Allowance ($)</label>
                <input
                  type="number"
                  value={taxTradeIn}
                  onChange={(e) => setTaxTradeIn(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
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
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Dealer Doc Fee ($)</label>
                <input
                  type="number"
                  value={taxDocFee}
                  onChange={(e) => setTaxDocFee(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">DMV Registration ($)</label>
                <input
                  type="number"
                  value={taxRegFee}
                  onChange={(e) => setTaxRegFee(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. AFFORDABILITY CALCULATOR */}
      {calcId === 'affordability' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1">
              Recommended Max Vehicle Budget (20/4/10 Rule)
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              ${affResult.maxVehiclePrice.toLocaleString()}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-xs text-indigo-200">
              <div>
                <span className="text-slate-300 block">Monthly Target</span>
                <strong>${affResult.estimatedMonthlyPayment}/mo</strong>
              </div>
              <div>
                <span className="text-slate-300 block">Max Financed</span>
                <strong>${affResult.maxLoanAmount.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-300 block">Ideal Down Pay (20%)</span>
                <strong>${affResult.recommendedDownPayment.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Income & Savings Profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Gross Monthly Income ($)</label>
                <input
                  type="number"
                  value={affIncome}
                  onChange={(e) => setAffIncome(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Down Payment Savings ($)</label>
                <input
                  type="number"
                  value={affSavings}
                  onChange={(e) => setAffSavings(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Target Term (Months)</label>
                <select
                  value={affTerm}
                  onChange={(e) => setAffTerm(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="36">36 Months</option>
                  <option value="48">48 Months (20/4/10 Ideal)</option>
                  <option value="60">60 Months</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. 5-YEAR TOTAL COST OF OWNERSHIP */}
      {calcId === 'total_cost' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-purple-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-1">
              5-Year Total Cost of Ownership
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              ${tcoResult.total5YearCost.toLocaleString()}
            </div>
            <div className="flex items-center gap-4 text-xs text-purple-200">
              <span>Annual Average: <strong>${tcoResult.annualAverageCost.toLocaleString()}/yr</strong></span>
              <span>•</span>
              <span>Cost/Mile: <strong>${tcoResult.costPerMile}/mi</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">5-Year Cost Breakdown</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-500 block">Depreciation (5 Yr)</span>
                <strong className="text-slate-900 text-sm">${tcoResult.depreciationCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-500 block">Fuel (5 Yr)</span>
                <strong className="text-slate-900 text-sm">${tcoResult.fuelCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-500 block">Insurance (5 Yr)</span>
                <strong className="text-slate-900 text-sm">${tcoResult.insuranceCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-500 block">Maintenance & Tires</span>
                <strong className="text-slate-900 text-sm">${tcoResult.maintenanceCost.toLocaleString()}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-500 block">Loan Financing Interest</span>
                <strong className="text-slate-900 text-sm">${tcoResult.financingCost.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. EV SAVINGS CALCULATOR */}
      {calcId === 'ev_savings' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block mb-1">
              Estimated 5-Year Fuel Savings
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              ${evResult.fiveYearSavings.toLocaleString()}
            </div>
            <div className="flex items-center gap-4 text-xs text-teal-200">
              <span>Annual Savings: <strong>${evResult.annualSavings.toLocaleString()}/yr</strong></span>
              <span>•</span>
              <span>Breakeven: <strong>{evResult.breakEvenMonths} Months</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Electricity & Gas Comparison</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
                <span className="font-bold text-rose-800 block mb-1">Gasoline Cost / Year</span>
                <div className="text-xl font-black text-rose-950">${evResult.annualGasCost.toLocaleString()}</div>
                <span className="text-rose-700 text-[10px]">At {evGasMpg} MPG & ${evGasPrice}/gal</span>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-800 block mb-1">EV Home Charging / Year</span>
                <div className="text-xl font-black text-emerald-950">${evResult.annualElectricityCost.toLocaleString()}</div>
                <span className="text-emerald-700 text-[10px]">At {evKwhMiles} mi/kWh & ${evElectricRate}/kWh</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. TRADE-IN EQUITY CALCULATOR */}
      {calcId === 'trade_in' && (
        <div className="space-y-4">
          <div className={`rounded-3xl p-6 text-white shadow-md ${
            equityResult.isPositiveEquity 
              ? 'bg-gradient-to-br from-emerald-800 to-slate-900' 
              : 'bg-gradient-to-br from-rose-900 to-slate-900'
          }`}>
            <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-200">
              {equityResult.isPositiveEquity ? 'Positive Trade-In Equity (Cash Credit)' : 'Negative Equity (Underwater Loan)'}
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              {equityResult.isPositiveEquity ? `+$${equityResult.netEquity.toLocaleString()}` : `-$${Math.abs(equityResult.netEquity).toLocaleString()}`}
            </div>
            <p className="text-xs text-slate-300">
              {equityResult.isPositiveEquity
                ? 'Your vehicle is worth more than your loan payoff balance. This amount acts as cash down payment towards your next car.'
                : 'You owe more than your vehicle is worth. The negative equity must be paid out of pocket or rolled into your new loan.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Current Vehicle Figures</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Estimated Market / Trade Value ($)</label>
                <input
                  type="number"
                  value={equityMarketVal}
                  onChange={(e) => setEquityMarketVal(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Outstanding Loan Payoff Balance ($)</label>
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

      {/* 9. LEASE VS BUY CALCULATOR */}
      {calcId === 'lease_vs_buy' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-violet-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-violet-300 uppercase tracking-wider block mb-1">
              Financial Analysis ({lvbTerm} Months)
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white mb-2">
              {lvbResult.betterOption === 'BUY' ? 'Buying Builds More Wealth' : 'Leasing Has Lower Out-of-Pocket'}
            </div>
            <p className="text-xs text-violet-200">
              Difference after factoring vehicle retained equity: ~${lvbResult.costDifference.toLocaleString()}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-slate-500 font-bold block uppercase text-[10px]">Lease Option</span>
              <div className="text-xl font-black text-[#0A192F]">${lvbResult.monthlyLeasePayment}/mo</div>
              <span className="text-slate-500 text-[11px]">Total 3-Yr: ${lvbResult.totalLeaseCost.toLocaleString()}</span>
            </div>

            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-slate-500 font-bold block uppercase text-[10px]">Purchase Option</span>
              <div className="text-xl font-black text-[#0A192F]">${lvbResult.monthlyBuyPayment}/mo</div>
              <span className="text-emerald-600 font-bold text-[11px]">Retained Equity: ${lvbResult.equityAtEndOfTerm.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* 10. INSURANCE ESTIMATOR */}
      {calcId === 'insurance' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
              Estimated Monthly Auto Insurance
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2">
              ${insResult.estimatedMonthlyPremium}
              <span className="text-sm font-normal text-slate-300"> / month</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-cyan-200">
              <span>Annual: <strong>${insResult.estimatedAnnualPremium.toLocaleString()}/yr</strong></span>
              <span>•</span>
              <span>Profile Risk: <strong>{insResult.riskFactorScore}</strong></span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#0A192F]">Driver & Vehicle Classification</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">Vehicle Type</label>
                <select
                  value={insType}
                  onChange={(e) => setInsType(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="sedan">Sedan / Hatchback (Standard)</option>
                  <option value="suv">SUV / Crossover (Low claim risk)</option>
                  <option value="truck">Pickup Truck</option>
                  <option value="sports">Sports Car / Coupe (High premium)</option>
                  <option value="luxury">Luxury / European</option>
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
                  <option value="25_to_65">25 to 65 (Standard Adult)</option>
                  <option value="over_65">65+ (Senior)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-600 block mb-1">Coverage Level</label>
                <select
                  value={insCoverage}
                  onChange={(e) => setInsCoverage(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="full">Full Comprehensive & Collision (Recommended)</option>
                  <option value="standard">Standard Liability + Basic</option>
                  <option value="minimum">State Minimum Liability Only</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-600 block mb-1">Driving Record</label>
                <select
                  value={insCleanRecord ? 'clean' : 'violations'}
                  onChange={(e) => setInsCleanRecord(e.target.value === 'clean')}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="clean">Clean Record (No accidents/tickets in 3 yrs)</option>
                  <option value="violations">Prior Violations / Claims</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
