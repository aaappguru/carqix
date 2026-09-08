/**
 * Multi-Region Automotive Calculator Logic (US, UK, CA)
 */
import { RegionId } from '../types';

export interface LoanCalcResult {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  loanAmount: number;
  // PCP specific (UK)
  balloonPayment?: number;
  isPcp?: boolean;
}

export interface DepreciationResult {
  currentEstimatedValue: number;
  totalDepreciation: number;
  depreciationPercent: number;
  yearlyDepreciationTable: { year: number; value: number; loss: number }[];
}

export interface FuelCostResult {
  monthlyFuelCost: number;
  annualFuelCost: number;
  unitsPerYear: number;
  costPerUnitDistance: number;
  unitLabel: string;
  distanceLabel: string;
}

export interface SalesTaxResult {
  salesTaxAmount: number;
  estimatedDocFee: number;
  estimatedRegistrationFee: number;
  totalOutTheDoorPrice: number;
  effectiveTaxRate: number;
  taxBreakdownNote?: string;
}

export interface AffordabilityResult {
  maxVehiclePrice: number;
  maxLoanAmount: number;
  estimatedMonthlyPayment: number;
  recommendedDownPayment: number;
}

export interface TcoResult {
  total5YearCost: number;
  annualAverageCost: number;
  costPerMileOrKm: number;
  depreciationCost: number;
  financingCost: number;
  insuranceCost: number;
  fuelCost: number;
  maintenanceCost: number;
}

export interface EvSavingsResult {
  annualGasCost: number;
  annualElectricityCost: number;
  annualSavings: number;
  fiveYearSavings: number;
  breakEvenMonths: number;
}

export interface TradeInEquityResult {
  tradeInOffer: number;
  loanBalance: number;
  netEquity: number;
  isPositiveEquity: boolean;
  equityContribution: number;
}

export interface LeaseVsBuyResult {
  totalLeaseCost: number;
  totalBuyCost: number;
  monthlyLeasePayment: number;
  monthlyBuyPayment: number;
  equityAtEndOfTerm: number;
  costDifference: number;
  betterOption: 'LEASE' | 'BUY';
}

export interface InsuranceEstimateResult {
  estimatedMonthlyPremium: number;
  estimatedAnnualPremium: number;
  riskFactorScore: string;
}

export class CalculatorEngine {
  /**
   * Auto Loan / HP / PCP Calculator
   */
  static calculateLoan(
    vehiclePrice: number,
    downPayment: number,
    tradeInValue: number,
    interestRateApr: number,
    termMonths: number,
    salesTaxPercent: number = 6.0,
    isPcp: boolean = false,
    balloonPaymentPercent: number = 40
  ): LoanCalcResult {
    const tax = (vehiclePrice * salesTaxPercent) / 100;
    const totalFinancedBasis = Math.max(0, vehiclePrice + tax - downPayment - tradeInValue);

    if (totalFinancedBasis <= 0) {
      return { monthlyPayment: 0, totalInterest: 0, totalCost: 0, loanAmount: 0 };
    }

    const monthlyRate = interestRateApr / 100 / 12;

    if (isPcp) {
      // UK PCP: Balloon (Guaranteed Minimum Future Value / GMFV)
      const balloon = (vehiclePrice * balloonPaymentPercent) / 100;
      const financedPrincipal = Math.max(0, totalFinancedBasis - balloon);

      // Monthly payment on the depreciating portion + interest on total amount including balloon
      let monthlyDeprec = financedPrincipal / (termMonths || 1);
      let monthlyInterest = (totalFinancedBasis + balloon) * (monthlyRate / 2);
      let monthlyPayment = monthlyDeprec + monthlyInterest;

      const totalMonthlyPayments = monthlyPayment * termMonths;
      const totalCost = downPayment + tradeInValue + totalMonthlyPayments + balloon;
      const totalInterest = Math.max(0, totalCost - (vehiclePrice + tax));

      return {
        monthlyPayment: Math.round(monthlyPayment * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalCost: Math.round(totalCost * 100) / 100,
        loanAmount: Math.round(totalFinancedBasis * 100) / 100,
        balloonPayment: Math.round(balloon),
        isPcp: true
      };
    }

    // Standard Hire Purchase / Auto Loan Amortization
    let monthlyPayment = 0;
    let totalCost = 0;
    let totalInterest = 0;

    if (monthlyRate === 0) {
      monthlyPayment = totalFinancedBasis / (termMonths || 1);
      totalCost = totalFinancedBasis;
      totalInterest = 0;
    } else {
      const factor = Math.pow(1 + monthlyRate, termMonths);
      monthlyPayment = (totalFinancedBasis * (monthlyRate * factor)) / (factor - 1);
      totalCost = monthlyPayment * termMonths;
      totalInterest = Math.max(0, totalCost - totalFinancedBasis);
    }

    return {
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100,
      loanAmount: Math.round(totalFinancedBasis * 100) / 100
    };
  }

  /**
   * Depreciation Calculator
   */
  static calculateDepreciation(
    originalPrice: number,
    ageYears: number,
    annualDistance: number = 10000,
    vehicleType: 'standard' | 'luxury' | 'truck_suv' | 'ev' = 'standard',
    region: RegionId = 'us'
  ): DepreciationResult {
    let yearlyRates: number[] = [];
    switch (vehicleType) {
      case 'luxury':
        yearlyRates = [0.26, 0.18, 0.16, 0.14, 0.12, 0.10, 0.08, 0.07, 0.06, 0.05];
        break;
      case 'truck_suv':
        yearlyRates = [0.17, 0.12, 0.10, 0.09, 0.08, 0.07, 0.06, 0.05, 0.04, 0.04];
        break;
      case 'ev':
        yearlyRates = [0.28, 0.20, 0.15, 0.12, 0.10, 0.08, 0.07, 0.06, 0.05, 0.05];
        break;
      default:
        yearlyRates = [0.20, 0.15, 0.12, 0.10, 0.09, 0.08, 0.07, 0.06, 0.05, 0.05];
        break;
    }

    let currentValue = originalPrice;
    const table: { year: number; value: number; loss: number }[] = [];

    const yearsToCalculate = Math.min(Math.max(1, Math.round(ageYears)), 10);

    for (let i = 0; i < yearsToCalculate; i++) {
      const rate = yearlyRates[i] || 0.05;
      const loss = currentValue * rate;
      currentValue -= loss;
      table.push({
        year: i + 1,
        value: Math.round(currentValue),
        loss: Math.round(loss)
      });
    }

    // Distance penalty
    const baselineDistance = (region === 'ca' ? 18000 : 10000) * yearsToCalculate;
    const actualDistance = annualDistance * yearsToCalculate;
    if (actualDistance > baselineDistance) {
      const extra = actualDistance - baselineDistance;
      const penalty = extra * (region === 'uk' ? 0.07 : region === 'ca' ? 0.05 : 0.08);
      currentValue = Math.max(currentValue * 0.15, currentValue - penalty);
    }

    const totalDepreciation = originalPrice - currentValue;
    const depreciationPercent = (totalDepreciation / originalPrice) * 100;

    return {
      currentEstimatedValue: Math.round(currentValue),
      totalDepreciation: Math.round(totalDepreciation),
      depreciationPercent: Math.round(depreciationPercent * 10) / 10,
      yearlyDepreciationTable: table
    };
  }

  /**
   * Fuel & Energy Cost Calculator
   */
  static calculateFuelCost(
    annualDistance: number,
    efficiency: number, // MPG (US/UK) or L/100km (CA)
    fuelPricePerUnit: number, // $/gal, £/litre, CA$/litre
    region: RegionId = 'us'
  ): FuelCostResult {
    let unitsPerYear = 0;
    let unitLabel = 'gal';
    let distanceLabel = 'mile';

    if (region === 'uk') {
      // In UK: MPG is Imperial (4.546 L/gal), but petrol is sold in £/litre
      unitLabel = 'litres';
      distanceLabel = 'mile';
      const ukGallons = annualDistance / (efficiency || 38);
      unitsPerYear = ukGallons * 4.54609;
    } else if (region === 'ca') {
      // In Canada: L/100km and $/litre
      unitLabel = 'litres';
      distanceLabel = 'km';
      const litresPerHundred = efficiency || 8.5;
      unitsPerYear = (annualDistance / 100) * litresPerHundred;
    } else {
      // US: MPG and $/gallon
      unitLabel = 'gallons';
      distanceLabel = 'mile';
      unitsPerYear = annualDistance / (efficiency || 28);
    }

    const annualFuelCost = unitsPerYear * fuelPricePerUnit;
    const monthlyFuelCost = annualFuelCost / 12;
    const costPerUnitDistance = annualFuelCost / (annualDistance || 1);

    return {
      monthlyFuelCost: Math.round(monthlyFuelCost * 100) / 100,
      annualFuelCost: Math.round(annualFuelCost * 100) / 100,
      unitsPerYear: Math.round(unitsPerYear * 10) / 10,
      costPerUnitDistance: Math.round(costPerUnitDistance * 1000) / 1000,
      unitLabel,
      distanceLabel
    };
  }

  /**
   * Sales Tax / VED / Provincial Out-the-Door Price Calculator
   */
  static calculateSalesTax(
    vehiclePrice: number,
    tradeInValue: number,
    taxRatePercent: number,
    docFee: number = 350,
    regFee: number = 150,
    region: RegionId = 'us',
    isPrivateSale: boolean = false
  ): SalesTaxResult {
    if (region === 'uk') {
      // UK: VAT (20%) is already inclusive in forecourt/retail price; VED (Road Tax) is annual fee.
      // Private sales in UK have 0% VAT.
      const vedAnnual = taxRatePercent > 0 ? taxRatePercent : 190; // Standard UK VED rate (£190/yr)
      const dvlaTransferFee = 0;
      const totalOutTheDoorPrice = vehiclePrice - tradeInValue + vedAnnual + docFee;

      return {
        salesTaxAmount: 0,
        estimatedDocFee: docFee,
        estimatedRegistrationFee: vedAnnual,
        totalOutTheDoorPrice: Math.round(totalOutTheDoorPrice * 100) / 100,
        effectiveTaxRate: 0,
        taxBreakdownNote: 'In the UK, VAT (20%) is already inclusive in retail dealer prices. Road Tax (VED) is paid annually to DVLA.'
      };
    }

    if (region === 'ca') {
      // Canada: Provincial HST or GST+PST
      const taxableBasis = Math.max(0, vehiclePrice - tradeInValue);
      const taxAmount = (taxableBasis * taxRatePercent) / 100;
      const totalOutTheDoorPrice = vehiclePrice + taxAmount + docFee + regFee - tradeInValue;

      return {
        salesTaxAmount: Math.round(taxAmount * 100) / 100,
        estimatedDocFee: docFee,
        estimatedRegistrationFee: regFee,
        totalOutTheDoorPrice: Math.round(totalOutTheDoorPrice * 100) / 100,
        effectiveTaxRate: taxRatePercent,
        taxBreakdownNote: isPrivateSale 
          ? 'Private sales tax is collected at the provincial vehicle licensing registry (ServiceOntario / SAAQ / ICBC).'
          : 'Dealership sales tax includes provincial HST / GST+PST.'
      };
    }

    // US State Sales Tax
    const taxableBasis = Math.max(0, vehiclePrice - tradeInValue);
    const salesTaxAmount = (taxableBasis * taxRatePercent) / 100;
    const totalOutTheDoorPrice = vehiclePrice + salesTaxAmount + docFee + regFee - tradeInValue;

    return {
      salesTaxAmount: Math.round(salesTaxAmount * 100) / 100,
      estimatedDocFee: docFee,
      estimatedRegistrationFee: regFee,
      totalOutTheDoorPrice: Math.round(totalOutTheDoorPrice * 100) / 100,
      effectiveTaxRate: taxRatePercent,
      taxBreakdownNote: 'Trade-in value directly reduces the taxable basis in most US states.'
    };
  }

  /**
   * Affordability Calculator (20/4/10 Rule)
   */
  static calculateAffordability(
    monthlyGrossIncome: number,
    monthlyDebtPayments: number,
    downPaymentSavings: number,
    loanTermMonths: number = 48,
    interestRateApr: number = 6.5
  ): AffordabilityResult {
    const availableForPayment = Math.max(100, monthlyGrossIncome * 0.12);
    const r = interestRateApr / 100 / 12;
    const n = loanTermMonths;
    const factor = Math.pow(1 + r, n);

    let maxLoan = 0;
    if (r === 0) {
      maxLoan = availableForPayment * n;
    } else {
      maxLoan = (availableForPayment * (factor - 1)) / (r * factor);
    }

    const recommendedDown = Math.max(downPaymentSavings, maxLoan * 0.2);
    const maxVehiclePrice = maxLoan + downPaymentSavings;

    return {
      maxVehiclePrice: Math.round(maxVehiclePrice),
      maxLoanAmount: Math.round(maxLoan),
      estimatedMonthlyPayment: Math.round(availableForPayment),
      recommendedDownPayment: Math.round(recommendedDown)
    };
  }

  /**
   * 5-Year Total Cost of Ownership (TCO)
   */
  static calculateTCO(
    purchasePrice: number,
    annualDistance: number = 12000,
    efficiency: number = 28,
    fuelPricePerUnit: number = 3.6,
    annualInsurance: number = 1800,
    annualMaintenance: number = 900,
    region: RegionId = 'us'
  ): TcoResult {
    // 1. 5-Year Depreciation (approx 55% loss)
    const depreciationCost = purchasePrice * 0.55;

    // 2. 5-Year Financing interest
    const loan = this.calculateLoan(purchasePrice, purchasePrice * 0.15, 0, 6.5, 60, 6.0);
    const financingCost = loan.totalInterest;

    // 3. 5-Year Fuel Cost
    const fuel = this.calculateFuelCost(annualDistance, efficiency, fuelPricePerUnit, region);
    const fuelCost = fuel.annualFuelCost * 5;

    // 4. 5-Year Insurance & Maintenance
    const insuranceCost = annualInsurance * 5;
    const maintenanceCost = annualMaintenance * 5;

    const total5YearCost = depreciationCost + financingCost + fuelCost + insuranceCost + maintenanceCost;
    const totalDistance = annualDistance * 5;
    const costPerUnit = total5YearCost / (totalDistance || 1);

    return {
      total5YearCost: Math.round(total5YearCost),
      annualAverageCost: Math.round(total5YearCost / 5),
      costPerMileOrKm: Math.round(costPerUnit * 100) / 100,
      depreciationCost: Math.round(depreciationCost),
      financingCost: Math.round(financingCost),
      insuranceCost: Math.round(insuranceCost),
      fuelCost: Math.round(fuelCost),
      maintenanceCost: Math.round(maintenanceCost)
    };
  }

  /**
   * EV vs Gas Savings & Payback
   */
  static calculateEvSavings(
    annualDistance: number,
    gasEfficiency: number,
    gasPrice: number,
    evEfficiencyKwhPerDistance: number, // e.g. 3.5 miles/kWh or 18 kWh/100km
    electricityPricePerKwh: number,
    evPurchasePremium: number,
    region: RegionId = 'us'
  ): EvSavingsResult {
    const gas = this.calculateFuelCost(annualDistance, gasEfficiency, gasPrice, region);
    const annualGasCost = gas.annualFuelCost;

    let kwhNeededAnnual = 0;
    if (region === 'ca') {
      // in CA: evEfficiency in kWh/100km
      kwhNeededAnnual = (annualDistance / 100) * (evEfficiencyKwhPerDistance > 10 ? evEfficiencyKwhPerDistance : 18);
    } else {
      // US/UK: evEfficiency in miles/kWh
      kwhNeededAnnual = annualDistance / (evEfficiencyKwhPerDistance > 0 && evEfficiencyKwhPerDistance < 10 ? evEfficiencyKwhPerDistance : 3.5);
    }

    const annualElectricityCost = kwhNeededAnnual * electricityPricePerKwh;
    const annualSavings = Math.max(0, annualGasCost - annualElectricityCost);
    const fiveYearSavings = annualSavings * 5;
    const monthlySavings = annualSavings / 12;

    const breakEvenMonths = monthlySavings > 0 ? Math.round(evPurchasePremium / monthlySavings) : 0;

    return {
      annualGasCost: Math.round(annualGasCost),
      annualElectricityCost: Math.round(annualElectricityCost),
      annualSavings: Math.round(annualSavings),
      fiveYearSavings: Math.round(fiveYearSavings),
      breakEvenMonths: Math.max(0, breakEvenMonths)
    };
  }

  /**
   * Trade-In Equity Calculator
   */
  static calculateTradeInEquity(tradeInOffer: number, loanBalance: number): TradeInEquityResult {
    const netEquity = tradeInOffer - loanBalance;
    const isPositiveEquity = netEquity >= 0;

    return {
      tradeInOffer,
      loanBalance,
      netEquity: Math.round(netEquity),
      isPositiveEquity,
      equityContribution: isPositiveEquity ? netEquity : 0
    };
  }

  /**
   * Lease vs Buy Calculator
   */
  static calculateLeaseVsBuy(
    vehiclePrice: number,
    termMonths: number = 36,
    downPayment: number = 3000,
    interestRateApr: number = 6.0,
    residualValuePercent: number = 55
  ): LeaseVsBuyResult {
    const buyLoan = this.calculateLoan(vehiclePrice, downPayment, 0, interestRateApr, termMonths, 6.0);
    const totalBuyCost = downPayment + buyLoan.totalCost;

    const estimatedResidualValue = (vehiclePrice * residualValuePercent) / 100;
    const netDepreciation = Math.max(0, vehiclePrice - downPayment - estimatedResidualValue);
    const depreciationFee = netDepreciation / termMonths;
    const financeFee = ((vehiclePrice + estimatedResidualValue) * (interestRateApr / 100)) / 24;

    const monthlyLeasePayment = Math.max(50, depreciationFee + financeFee);
    const totalLeaseCost = downPayment + monthlyLeasePayment * termMonths;

    const netBuyCost = totalBuyCost - estimatedResidualValue;
    const costDifference = Math.abs(totalLeaseCost - netBuyCost);

    return {
      totalLeaseCost: Math.round(totalLeaseCost),
      totalBuyCost: Math.round(totalBuyCost),
      monthlyLeasePayment: Math.round(monthlyLeasePayment * 100) / 100,
      monthlyBuyPayment: Math.round(buyLoan.monthlyPayment * 100) / 100,
      equityAtEndOfTerm: Math.round(estimatedResidualValue),
      costDifference: Math.round(costDifference),
      betterOption: netBuyCost < totalLeaseCost ? 'BUY' : 'LEASE'
    };
  }

  /**
   * Insurance Estimator
   */
  static estimateInsurance(
    vehicleAge: number,
    vehicleType: 'sedan' | 'suv' | 'truck' | 'sports' | 'luxury' | 'ev',
    driverAgeGroup: 'under_25' | '25_to_65' | 'over_65',
    cleanRecord: boolean = true,
    coverageLevel: 'minimum' | 'standard' | 'full' = 'full',
    region: RegionId = 'us'
  ): InsuranceEstimateResult {
    // UK base average is £850/yr, US is $1600/yr, CA is CA$1850/yr
    let baseAnnual = region === 'uk' ? 850 : region === 'ca' ? 1850 : 1600;

    switch (vehicleType) {
      case 'sports': baseAnnual *= 1.45; break;
      case 'luxury': baseAnnual *= 1.35; break;
      case 'ev': baseAnnual *= 1.20; break;
      case 'suv': baseAnnual *= 0.95; break;
      case 'truck': baseAnnual *= 1.05; break;
      default: baseAnnual *= 1.0; break;
    }

    if (driverAgeGroup === 'under_25') baseAnnual *= 1.6;
    else if (driverAgeGroup === 'over_65') baseAnnual *= 1.15;

    if (!cleanRecord) baseAnnual *= 1.4;

    if (coverageLevel === 'minimum') baseAnnual *= 0.6;
    else if (coverageLevel === 'standard') baseAnnual *= 0.85;

    if (vehicleAge > 8) baseAnnual *= 0.85;
    else if (vehicleAge > 4) baseAnnual *= 0.92;

    const monthly = baseAnnual / 12;
    let risk = 'Low to Moderate Risk';
    if (driverAgeGroup === 'under_25' || !cleanRecord || vehicleType === 'sports') {
      risk = 'Higher Risk Profile';
    }

    return {
      estimatedMonthlyPremium: Math.round(monthly),
      estimatedAnnualPremium: Math.round(baseAnnual),
      riskFactorScore: risk
    };
  }
}
