/**
 * Complete US Automotive Calculator Logic
 */

export interface LoanCalcResult {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  loanAmount: number;
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
  gallonsPerYear: number;
  costPerMile: number;
}

export interface SalesTaxResult {
  salesTaxAmount: number;
  estimatedDocFee: number;
  estimatedRegistrationFee: number;
  totalOutTheDoorPrice: number;
  effectiveTaxRate: number;
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
  costPerMile: number;
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
   * Auto Loan Calculator
   */
  static calculateLoan(
    vehiclePrice: number,
    downPayment: number,
    tradeInValue: number,
    interestRateApr: number,
    termMonths: number,
    salesTaxPercent: number = 6.0
  ): LoanCalcResult {
    const tax = (vehiclePrice * salesTaxPercent) / 100;
    const loanAmount = Math.max(0, vehiclePrice + tax - downPayment - tradeInValue);

    if (loanAmount <= 0) {
      return { monthlyPayment: 0, totalInterest: 0, totalCost: 0, loanAmount: 0 };
    }

    const monthlyRate = interestRateApr / 100 / 12;
    let monthlyPayment = 0;
    let totalCost = 0;
    let totalInterest = 0;

    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / (termMonths || 1);
      totalCost = loanAmount;
      totalInterest = 0;
    } else {
      const factor = Math.pow(1 + monthlyRate, termMonths);
      monthlyPayment = (loanAmount * (monthlyRate * factor)) / (factor - 1);
      totalCost = monthlyPayment * termMonths;
      totalInterest = Math.max(0, totalCost - loanAmount);
    }

    return {
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100,
      loanAmount: Math.round(loanAmount * 100) / 100
    };
  }

  /**
   * Depreciation Calculator
   */
  static calculateDepreciation(
    originalPrice: number,
    ageYears: number,
    annualMileage: number = 12000,
    vehicleType: 'standard' | 'luxury' | 'truck_suv' | 'ev' = 'standard'
  ): DepreciationResult {
    let yearlyRates: number[] = [];
    switch (vehicleType) {
      case 'luxury':
        yearlyRates = [0.25, 0.18, 0.16, 0.14, 0.12, 0.10, 0.08, 0.07, 0.06, 0.05];
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

    // Mileage adjustment
    const normalMiles = 12000 * yearsToCalculate;
    const actualMiles = annualMileage * yearsToCalculate;
    if (actualMiles > normalMiles) {
      const extraMiles = actualMiles - normalMiles;
      const penalty = extraMiles * 0.08;
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
   * Fuel Cost Calculator
   */
  static calculateFuelCost(
    annualMiles: number,
    mpg: number,
    fuelPricePerGallon: number
  ): FuelCostResult {
    const validMpg = mpg > 0 ? mpg : 25;
    const gallonsPerYear = annualMiles / validMpg;
    const annualFuelCost = gallonsPerYear * fuelPricePerGallon;
    const monthlyFuelCost = annualFuelCost / 12;
    const costPerMile = annualFuelCost / (annualMiles || 1);

    return {
      monthlyFuelCost: Math.round(monthlyFuelCost * 100) / 100,
      annualFuelCost: Math.round(annualFuelCost * 100) / 100,
      gallonsPerYear: Math.round(gallonsPerYear * 10) / 10,
      costPerMile: Math.round(costPerMile * 1000) / 1000
    };
  }

  /**
   * Sales Tax & Out-the-Door Price Calculator
   */
  static calculateSalesTax(
    vehiclePrice: number,
    tradeInValue: number,
    taxRatePercent: number,
    docFee: number = 350,
    regFee: number = 150
  ): SalesTaxResult {
    // In most states, trade-in reduces taxable amount
    const taxableBasis = Math.max(0, vehiclePrice - tradeInValue);
    const salesTaxAmount = (taxableBasis * taxRatePercent) / 100;
    const totalOutTheDoorPrice = vehiclePrice + salesTaxAmount + docFee + regFee - tradeInValue;

    return {
      salesTaxAmount: Math.round(salesTaxAmount * 100) / 100,
      estimatedDocFee: docFee,
      estimatedRegistrationFee: regFee,
      totalOutTheDoorPrice: Math.round(totalOutTheDoorPrice * 100) / 100,
      effectiveTaxRate: taxRatePercent
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
    // Max 10-15% of gross monthly income for total car payment + insurance
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

    const maxVehiclePrice = maxLoan + downPaymentSavings;
    const recommendedDown = maxVehiclePrice * 0.20;

    return {
      maxVehiclePrice: Math.round(maxVehiclePrice),
      maxLoanAmount: Math.round(maxLoan),
      estimatedMonthlyPayment: Math.round(availableForPayment),
      recommendedDownPayment: Math.round(recommendedDown)
    };
  }

  /**
   * Total Cost of Ownership (5 Years)
   */
  static calculateTCO(
    vehiclePrice: number,
    annualMiles: number = 13500,
    mpg: number = 26,
    gasPrice: number = 3.60,
    annualInsurance: number = 1800,
    annualMaintenance: number = 900,
    interestRateApr: number = 6.0
  ): TcoResult {
    // 5-year depreciation
    const depResult = this.calculateDepreciation(vehiclePrice, 5, annualMiles);
    const depreciationCost = depResult.totalDepreciation;

    // 5-year financing cost
    const loanResult = this.calculateLoan(vehiclePrice, vehiclePrice * 0.1, 0, interestRateApr, 60);
    const financingCost = loanResult.totalInterest;

    // 5-year insurance
    const insuranceCost = annualInsurance * 5;

    // 5-year fuel
    const fuelCost = (annualMiles / mpg) * gasPrice * 5;

    // 5-year maintenance
    const maintenanceCost = annualMaintenance * 5;

    const total5YearCost = depreciationCost + financingCost + insuranceCost + fuelCost + maintenanceCost;
    const annualAverageCost = total5YearCost / 5;
    const totalMiles = annualMiles * 5;
    const costPerMile = total5YearCost / (totalMiles || 1);

    return {
      total5YearCost: Math.round(total5YearCost),
      annualAverageCost: Math.round(annualAverageCost),
      costPerMile: Math.round(costPerMile * 100) / 100,
      depreciationCost: Math.round(depreciationCost),
      financingCost: Math.round(financingCost),
      insuranceCost: Math.round(insuranceCost),
      fuelCost: Math.round(fuelCost),
      maintenanceCost: Math.round(maintenanceCost)
    };
  }

  /**
   * EV vs Gas Savings Calculator
   */
  static calculateEvSavings(
    annualMiles: number = 14000,
    gasMpg: number = 28,
    gasPricePerGallon: number = 3.75,
    evEfficiencyMilesPerKwh: number = 3.5,
    electricityRatePerKwh: number = 0.16,
    evPricePremium: number = 4000
  ): EvSavingsResult {
    const annualGasCost = (annualMiles / gasMpg) * gasPricePerGallon;
    const annualElectricityCost = (annualMiles / evEfficiencyMilesPerKwh) * electricityRatePerKwh;
    const annualSavings = Math.max(0, annualGasCost - annualElectricityCost);
    const fiveYearSavings = annualSavings * 5;
    const breakEvenMonths = annualSavings > 0 ? Math.round((evPricePremium / annualSavings) * 12) : 999;

    return {
      annualGasCost: Math.round(annualGasCost),
      annualElectricityCost: Math.round(annualElectricityCost),
      annualSavings: Math.round(annualSavings),
      fiveYearSavings: Math.round(fiveYearSavings),
      breakEvenMonths
    };
  }

  /**
   * Trade-In Equity Calculator
   */
  static calculateTradeInEquity(
    estimatedMarketValue: number,
    outstandingLoanBalance: number
  ): TradeInEquityResult {
    const netEquity = estimatedMarketValue - outstandingLoanBalance;
    const isPositiveEquity = netEquity >= 0;

    return {
      tradeInOffer: estimatedMarketValue,
      loanBalance: outstandingLoanBalance,
      netEquity: Math.round(netEquity * 100) / 100,
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
    downPayment: number = 2500,
    loanApr: number = 6.0,
    moneyFactor: number = 0.0025, // APR ≈ moneyFactor * 2400
    residualValuePercent: number = 55
  ): LeaseVsBuyResult {
    // Buy calculations
    const buyLoan = this.calculateLoan(vehiclePrice, downPayment, 0, loanApr, termMonths);
    const totalBuyCost = downPayment + buyLoan.monthlyPayment * termMonths;
    const estimatedResidualValue = (vehiclePrice * residualValuePercent) / 100;

    // Lease calculations
    const capitalizedCost = vehiclePrice - downPayment;
    const residualValue = (vehiclePrice * residualValuePercent) / 100;
    const depreciationFee = (capitalizedCost - residualValue) / termMonths;
    const financeFee = (capitalizedCost + residualValue) * moneyFactor;
    const monthlyLeasePayment = Math.max(50, depreciationFee + financeFee);
    const totalLeaseCost = downPayment + monthlyLeasePayment * termMonths;

    // Net buy cost factoring equity retained
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
    coverageLevel: 'minimum' | 'standard' | 'full' = 'full'
  ): InsuranceEstimateResult {
    let baseAnnual = 1500;

    // Vehicle type factor
    switch (vehicleType) {
      case 'sports': baseAnnual *= 1.45; break;
      case 'luxury': baseAnnual *= 1.35; break;
      case 'ev': baseAnnual *= 1.20; break;
      case 'suv': baseAnnual *= 0.95; break;
      case 'truck': baseAnnual *= 1.05; break;
      default: baseAnnual *= 1.0; break;
    }

    // Driver age
    if (driverAgeGroup === 'under_25') baseAnnual *= 1.6;
    else if (driverAgeGroup === 'over_65') baseAnnual *= 1.15;

    // Record
    if (!cleanRecord) baseAnnual *= 1.4;

    // Coverage
    if (coverageLevel === 'minimum') baseAnnual *= 0.6;
    else if (coverageLevel === 'standard') baseAnnual *= 0.85;

    // Vehicle Age discount
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
