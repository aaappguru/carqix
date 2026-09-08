import { MarketplaceInfo, ProviderInfo, GuideArticle, PartnerConfig } from '../types';

export const CA_AFFILIATE_CONFIG = {
  isAffiliateEnabled: true,
  partners: [
    {
      partnerId: "autotrader_ca",
      name: "AutoTrader.ca",
      publicUrl: "https://www.autotrader.ca/",
      affiliateUrl: "https://www.autotrader.ca/",
      isEnabled: true,
      priority: 1,
      category: "buy_cars"
    },
    {
      partnerId: "kijiji_autos",
      name: "Kijiji Autos",
      publicUrl: "https://www.kijiji.ca/b-cars-trucks/canada/c174l0",
      affiliateUrl: "https://www.kijiji.ca/b-cars-trucks/canada/c174l0",
      isEnabled: true,
      priority: 2,
      category: "buy_cars"
    },
    {
      partnerId: "clutch_ca",
      name: "Clutch.ca",
      publicUrl: "https://www.clutch.ca/cars",
      affiliateUrl: "https://www.clutch.ca/cars",
      isEnabled: true,
      priority: 3,
      category: "buy_cars"
    },
    {
      partnerId: "autocatch",
      name: "AutoCatch.com",
      publicUrl: "https://www.autocatch.com/",
      affiliateUrl: "https://www.autocatch.com/",
      isEnabled: true,
      priority: 4,
      category: "buy_cars"
    },
    {
      partnerId: "carpages_ca",
      name: "Carpages.ca",
      publicUrl: "https://www.carpages.ca/used-cars/",
      affiliateUrl: "https://www.carpages.ca/used-cars/",
      isEnabled: true,
      priority: 5,
      category: "buy_cars"
    },
    {
      partnerId: "auto123",
      name: "Auto123.com",
      publicUrl: "https://www.auto123.com/en/used-cars/",
      affiliateUrl: "https://www.auto123.com/en/used-cars/",
      isEnabled: true,
      priority: 6,
      category: "buy_cars"
    },
    {
      partnerId: "autotrader_sell",
      name: "AutoTrader - Sell My Car",
      publicUrl: "https://www.autotrader.ca/sell/",
      affiliateUrl: "https://www.autotrader.ca/sell/",
      isEnabled: true,
      priority: 1,
      category: "sell_car"
    },
    {
      partnerId: "clutch_sell",
      name: "Clutch - Sell or Trade",
      publicUrl: "https://www.clutch.ca/sell",
      affiliateUrl: "https://www.clutch.ca/sell",
      isEnabled: true,
      priority: 2,
      category: "sell_car"
    },
    {
      partnerId: "canadadrives_sell",
      name: "Canada Drives - Instant Offer",
      publicUrl: "https://www.canadadrives.ca/sell-your-car",
      affiliateUrl: "https://www.canadadrives.ca/sell-your-car",
      isEnabled: true,
      priority: 3,
      category: "sell_car"
    },
    {
      partnerId: "cbb_valuation",
      name: "Canadian Black Book Value",
      publicUrl: "https://www.canadianblackbook.com/value-your-vehicle/",
      affiliateUrl: "https://www.canadianblackbook.com/value-your-vehicle/",
      isEnabled: true,
      priority: 1,
      category: "value_car"
    },
    {
      partnerId: "carfax_ca_valuation",
      name: "CARFAX Canada - Value Range",
      publicUrl: "https://www.carfax.ca/car-value",
      affiliateUrl: "https://www.carfax.ca/car-value",
      isEnabled: true,
      priority: 2,
      category: "value_car"
    },
    {
      partnerId: "canadadrives_finance",
      name: "Canada Drives - Auto Loans",
      publicUrl: "https://www.canadadrives.ca/understanding-car-loans",
      affiliateUrl: "https://www.canadadrives.ca/understanding-car-loans",
      isEnabled: true,
      priority: 1,
      category: "car_finance"
    },
    {
      partnerId: "loans_canada",
      name: "Loans Canada - Car Loans",
      publicUrl: "https://loanscanada.ca/auto-loan/",
      affiliateUrl: "https://loanscanada.ca/auto-loan/",
      isEnabled: true,
      priority: 2,
      category: "car_finance"
    },
    {
      partnerId: "ratehub_finance",
      name: "Ratehub - Auto Financing",
      publicUrl: "https://www.ratehub.ca/personal-loans/auto-loans",
      affiliateUrl: "https://www.ratehub.ca/personal-loans/auto-loans",
      isEnabled: true,
      priority: 3,
      category: "car_finance"
    },
    {
      partnerId: "ratesdotca",
      name: "RATESDOTCA - Car Insurance",
      publicUrl: "https://rates.ca/insurance-quotes/auto",
      affiliateUrl: "https://rates.ca/insurance-quotes/auto",
      isEnabled: true,
      priority: 1,
      category: "car_insurance"
    },
    {
      partnerId: "ratehub_insurance",
      name: "Ratehub - Insurance Comparison",
      publicUrl: "https://www.ratehub.ca/insurance/car",
      affiliateUrl: "https://www.ratehub.ca/insurance/car",
      isEnabled: true,
      priority: 2,
      category: "car_insurance"
    },
    {
      partnerId: "lowestrates_ca",
      name: "LowestRates.ca Auto Insurance",
      publicUrl: "https://www.lowestrates.ca/insurance/auto",
      affiliateUrl: "https://www.lowestrates.ca/insurance/auto",
      isEnabled: true,
      priority: 3,
      category: "car_insurance"
    },
    {
      partnerId: "carfax_canada",
      name: "CARFAX Canada - Vehicle History",
      publicUrl: "https://www.carfax.ca/vehicle-history-reports",
      affiliateUrl: "https://www.carfax.ca/vehicle-history-reports",
      isEnabled: true,
      priority: 1,
      category: "vehicle_history"
    },
    {
      partnerId: "cbb_vin_lookup",
      name: "Canadian Black Book VIN Check",
      publicUrl: "https://www.canadianblackbook.com/",
      affiliateUrl: "https://www.canadianblackbook.com/",
      isEnabled: true,
      priority: 2,
      category: "vehicle_history"
    },
    {
      partnerId: "caa_roadside",
      name: "CAA - Emergency Roadside Assistance",
      publicUrl: "https://www.caa.ca/",
      affiliateUrl: "https://www.caa.ca/",
      isEnabled: true,
      priority: 1,
      category: "breakdown_cover"
    },
    {
      partnerId: "canadian_tire_auto",
      name: "Canadian Tire Automotive & Parts",
      publicUrl: "https://www.canadiantire.ca/en/cat/automotive-DC0000006.html",
      affiliateUrl: "https://www.canadiantire.ca/en/cat/automotive-DC0000006.html",
      isEnabled: true,
      priority: 1,
      category: "parts_accessories"
    }
  ]
};

// Map of partner configs by partnerId for quick lookup
export const CA_PARTNER_URLS: Record<string, PartnerConfig> = CA_AFFILIATE_CONFIG.partners.reduce(
  (acc, partner) => {
    acc[partner.partnerId] = partner;
    return acc;
  },
  {
    // Aliases for backwards compatibility
    kijijiautos: {
      partnerId: 'kijiji_autos',
      name: 'Kijiji Autos',
      publicUrl: 'https://www.kijiji.ca/b-cars-trucks/canada/c174l0',
      affiliateUrl: 'https://www.kijiji.ca/b-cars-trucks/canada/c174l0',
      isEnabled: true,
      priority: 2,
      category: 'buy_cars'
    },
    canadadrives: {
      partnerId: 'canadadrives_finance',
      name: 'Canada Drives - Auto Loans',
      publicUrl: 'https://www.canadadrives.ca/understanding-car-loans',
      affiliateUrl: 'https://www.canadadrives.ca/understanding-car-loans',
      isEnabled: true,
      priority: 1,
      category: 'car_finance'
    },
    carfax_ca: {
      partnerId: 'carfax_canada',
      name: 'CARFAX Canada - Vehicle History',
      publicUrl: 'https://www.carfax.ca/vehicle-history-reports',
      affiliateUrl: 'https://www.carfax.ca/vehicle-history-reports',
      isEnabled: true,
      priority: 1,
      category: 'vehicle_history'
    },
    canadiantire_auto: {
      partnerId: 'canadian_tire_auto',
      name: 'Canadian Tire Automotive & Parts',
      publicUrl: 'https://www.canadiantire.ca/en/cat/automotive-DC0000006.html',
      affiliateUrl: 'https://www.canadiantire.ca/en/cat/automotive-DC0000006.html',
      isEnabled: true,
      priority: 1,
      category: 'parts_accessories'
    }
  } as Record<string, PartnerConfig>
);

export const CA_MARKETPLACES: MarketplaceInfo[] = [
  {
    id: 'autotrader_ca',
    name: 'AutoTrader.ca',
    category: 'Used & New Cars',
    description: "Canada's largest and most trusted inventory of used and new cars for sale from dealers and private sellers across all provinces.",
    rating: 4.8,
    reviewsCount: '200,000+',
    benefits: ['400,000+ Canadian listings', 'Price badge ratings (Great, Good, Fair)', 'Free CARFAX summary on many listings'],
    badge: 'Canada #1 Marketplace',
    webUrlKey: 'autotrader_ca',
    publicUrl: 'https://www.autotrader.ca/',
    affiliateUrl: 'https://www.autotrader.ca/',
    isPopular: true,
    priority: 1
  },
  {
    id: 'kijiji_autos',
    name: 'Kijiji Autos',
    category: 'Canadian Classifieds & Dealerships',
    description: "Canada's dedicated automotive classifieds connecting millions of car buyers with certified dealers and private sellers.",
    rating: 4.7,
    reviewsCount: '150,000+',
    benefits: ['Local private deals across provinces', 'Dealer certified inventory', 'Price analysis & transparent history'],
    badge: 'Top Classifieds',
    webUrlKey: 'kijiji_autos',
    publicUrl: 'https://www.kijiji.ca/b-cars-trucks/canada/c174l0',
    affiliateUrl: 'https://www.kijiji.ca/b-cars-trucks/canada/c174l0',
    isPopular: true,
    priority: 2
  },
  {
    id: 'clutch_ca',
    name: 'Clutch.ca',
    category: '100% Online Buying & Delivery',
    description: "Buy 100% online in Canada with a 10-day / 750km test-own money back guarantee and direct doorstep delivery.",
    rating: 4.8,
    reviewsCount: '35,000+',
    benefits: ['10-Day Money Back Guarantee', '210-Point vehicle inspection', 'Nationwide home delivery'],
    badge: '100% Online',
    webUrlKey: 'clutch_ca',
    publicUrl: 'https://www.clutch.ca/cars',
    affiliateUrl: 'https://www.clutch.ca/cars',
    isPopular: true,
    priority: 3
  },
  {
    id: 'autocatch',
    name: 'AutoCatch.com',
    category: 'Dealer & Private Marketplace',
    description: "Popular Canadian search platform featuring thousands of verified used car listings with localized price comparisons.",
    rating: 4.6,
    reviewsCount: '40,000+',
    benefits: ['Extensive Ontario & Quebec inventory', 'Dealer direct pricing', 'Simple filter by city/postal code'],
    badge: 'Smart Search',
    webUrlKey: 'autocatch',
    publicUrl: 'https://www.autocatch.com/',
    affiliateUrl: 'https://www.autocatch.com/',
    isPopular: true,
    priority: 4
  },
  {
    id: 'carpages_ca',
    name: 'Carpages.ca',
    category: 'UCDA Endorsed Dealer Network',
    description: "The only car shopping portal in Canada officially endorsed by the Used Car Dealers Association (UCDA).",
    rating: 4.6,
    reviewsCount: '30,000+',
    benefits: ['UCDA dealer endorsement', 'Upfront pricing with no hidden fees', 'Buy from home options'],
    badge: 'UCDA Endorsed',
    webUrlKey: 'carpages_ca',
    publicUrl: 'https://www.carpages.ca/used-cars/',
    affiliateUrl: 'https://www.carpages.ca/used-cars/',
    priority: 5
  },
  {
    id: 'auto123',
    name: 'Auto123.com',
    category: 'Used Car Search & Reviews',
    description: "Long-standing Canadian automotive portal providing extensive used car listings, expert reviews, and price tracking.",
    rating: 4.5,
    reviewsCount: '25,000+',
    benefits: ['Bilingual Canadian portal (EN/FR)', 'Expert road test reviews', 'Comprehensive spec comparisons'],
    badge: 'Editorial & Listings',
    webUrlKey: 'auto123',
    publicUrl: 'https://www.auto123.com/en/used-cars/',
    affiliateUrl: 'https://www.auto123.com/en/used-cars/',
    priority: 6
  }
];

export const CA_PROVIDERS: ProviderInfo[] = [
  // 1. Valuation
  {
    id: 'cbb_valuation',
    name: 'Canadian Black Book Value',
    category: 'VALUATION',
    description: "Canada's premier automotive appraisal authority powering trade-in values, wholesale guides, and residual forecasts.",
    rating: 4.9,
    reviewsCount: 'Canada Benchmark',
    keyRateOrFeature: 'Official Canadian Valuation',
    benefits: ['Trusted by Canadian banks & dealerships', 'Trade-in vs Private sale ranges', 'Historical depreciation curves'],
    badge: 'Industry Standard',
    partnerKey: 'cbb_valuation',
    publicUrl: 'https://www.canadianblackbook.com/value-your-vehicle/',
    affiliateUrl: 'https://www.canadianblackbook.com/value-your-vehicle/',
    priority: 1
  },
  {
    id: 'carfax_ca_valuation',
    name: 'CARFAX Canada - Value Range',
    category: 'VALUATION',
    description: 'Accurate vehicle valuation tailored to vehicle history, past accident claims, mileage, and provincial location.',
    rating: 4.8,
    reviewsCount: '150k+',
    keyRateOrFeature: 'History-Adjusted Value',
    benefits: ['Accident impact valuation adjustment', 'Provincial market comparisons', 'Free instant valuation snapshot'],
    badge: 'History Adjusted',
    partnerKey: 'carfax_ca_valuation',
    publicUrl: 'https://www.carfax.ca/car-value',
    affiliateUrl: 'https://www.carfax.ca/car-value',
    priority: 2
  },

  // 2. Selling
  {
    id: 'autotrader_sell',
    name: 'AutoTrader - Sell My Car',
    category: 'SELL',
    description: "Sell your car privately to Canada's largest audience of buyers or get instant cash offers from certified dealers.",
    rating: 4.8,
    reviewsCount: '250,000+',
    keyRateOrFeature: 'Top Market Reach',
    benefits: ['Free & premium private listing packages', 'Instant Dealer Cash Offer options', 'Integrated CARFAX report promotion'],
    badge: '#1 Seller Audience',
    partnerKey: 'autotrader_sell',
    publicUrl: 'https://www.autotrader.ca/sell/',
    affiliateUrl: 'https://www.autotrader.ca/sell/',
    priority: 1
  },
  {
    id: 'clutch_sell',
    name: 'Clutch - Sell or Trade',
    category: 'SELL',
    description: 'Get an instant guaranteed cash offer online with free doorstep pickup across Ontario, BC, Alberta, and Nova Scotia.',
    rating: 4.8,
    reviewsCount: '25,000+',
    keyRateOrFeature: 'Instant Cash Offer & Pickup',
    benefits: ['Guaranteed offer in 2 minutes', 'Free at-home inspection & pickup', 'Direct Interac/EFT bank payout'],
    badge: 'Doorstep Pickup',
    partnerKey: 'clutch_sell',
    publicUrl: 'https://www.clutch.ca/sell',
    affiliateUrl: 'https://www.clutch.ca/sell',
    priority: 2
  },
  {
    id: 'canadadrives_sell',
    name: 'Canada Drives - Instant Offer',
    category: 'SELL',
    description: 'Sell or trade-in your car 100% online with competitive valuation and rapid vehicle pickup.',
    rating: 4.7,
    reviewsCount: '50,000+',
    keyRateOrFeature: 'Fast Online Sale',
    benefits: ['Zero private tire-kicker hassle', 'Fast payment directly to bank account', 'Lien payout assistance'],
    badge: 'Instant Offer',
    partnerKey: 'canadadrives_sell',
    publicUrl: 'https://www.canadadrives.ca/sell-your-car',
    affiliateUrl: 'https://www.canadadrives.ca/sell-your-car',
    priority: 3
  },
  {
    id: 'kijiji_sell',
    name: 'Kijiji Autos - Post Private Ad',
    category: 'SELL',
    description: 'Canada’s most visited classifieds marketplace to list your vehicle privately and reach local retail buyers.',
    rating: 4.7,
    reviewsCount: '200,000+',
    keyRateOrFeature: 'Top Classifieds Reach',
    benefits: ['Free standard ad listing', 'Huge local buyer traffic in every province', 'Direct buyer chat messaging'],
    badge: 'Top Classifieds',
    partnerKey: 'kijiji_autos',
    publicUrl: 'https://www.kijiji.ca/b-cars-trucks/canada/c174l0',
    affiliateUrl: 'https://www.kijiji.ca/b-cars-trucks/canada/c174l0',
    priority: 4
  },
  {
    id: 'mintlist_sell',
    name: 'MintList Canada',
    category: 'SELL',
    description: 'AI-driven online marketplace where hundreds of certified Canadian dealers bid on your car in a 24-hour auction.',
    rating: 4.6,
    reviewsCount: '10,000+',
    keyRateOrFeature: 'Dealer Auction Marketplace',
    benefits: ['Hundreds of dealers bid', 'No tire kickers or strangers at your home', 'Guaranteed sale in 24 hours'],
    badge: 'Dealer Bids',
    partnerKey: 'mintlist_sell',
    publicUrl: 'https://www.mintlist.com/',
    affiliateUrl: 'https://www.mintlist.com/',
    priority: 5
  },

  // 3. Vehicle History
  {
    id: 'carfax_canada',
    name: 'CARFAX Canada - Vehicle History',
    category: 'HISTORY',
    description: 'The definitive vehicle history report in Canada with accident repair dollar amounts, service records, and cross-provincial lien checks.',
    rating: 4.9,
    reviewsCount: 'Canada Official',
    keyRateOrFeature: 'Canadian Lien & Accident History',
    benefits: ['Provincial registration & import history', 'Lien check across all Canadian provinces', 'Accident repair cost estimates'],
    badge: 'Gold Standard CA',
    partnerKey: 'carfax_canada',
    publicUrl: 'https://www.carfax.ca/vehicle-history-reports',
    affiliateUrl: 'https://www.carfax.ca/vehicle-history-reports',
    priority: 1
  },
  {
    id: 'cbb_vin_lookup',
    name: 'Canadian Black Book VIN Check',
    category: 'HISTORY',
    description: 'Verify Canadian vehicle build data, original equipment manufacturer specs, and historical valuation trends.',
    rating: 4.7,
    reviewsCount: 'Official Guide',
    keyRateOrFeature: 'VIN Spec & Build Verification',
    benefits: ['Factory equipment decoder', 'Trim level identification', 'Historical Canadian price trends'],
    badge: 'OEM Decoder',
    partnerKey: 'cbb_vin_lookup',
    publicUrl: 'https://www.canadianblackbook.com/',
    affiliateUrl: 'https://www.canadianblackbook.com/',
    priority: 2
  },

  // 4. Finance
  {
    id: 'canadadrives_finance',
    name: 'Canada Drives - Auto Loans',
    category: 'FINANCE',
    description: 'Get pre-approved for a Canadian auto loan in minutes with options for prime, near-prime, and rebuilding credit.',
    rating: 4.8,
    reviewsCount: '70,000+',
    keyRateOrFeature: 'All-Credit Auto Approval',
    benefits: ['2-Minute online application', 'No obligation pre-approval', 'Nationwide certified dealer network'],
    badge: 'Fast Pre-Approval',
    partnerKey: 'canadadrives_finance',
    publicUrl: 'https://www.canadadrives.ca/understanding-car-loans',
    affiliateUrl: 'https://www.canadadrives.ca/understanding-car-loans',
    priority: 1
  },
  {
    id: 'loans_canada',
    name: 'Loans Canada - Car Loans',
    category: 'FINANCE',
    description: "Canada's first and largest loan comparison platform matching you with competitive lenders across all provinces.",
    rating: 4.7,
    reviewsCount: '60,000+',
    keyRateOrFeature: 'Multi-Lender Marketplace',
    benefits: ['Compare bank & alternative lenders', 'Custom loan terms up to 84 months', 'Free credit assessment'],
    badge: 'Multi-Lender',
    partnerKey: 'loans_canada',
    publicUrl: 'https://loanscanada.ca/auto-loan/',
    affiliateUrl: 'https://loanscanada.ca/auto-loan/',
    priority: 2
  },
  {
    id: 'ratehub_finance',
    name: 'Ratehub - Auto Financing',
    category: 'FINANCE',
    description: 'Compare prime auto loan interest rates across top Canadian banks, credit unions, and alternative auto lenders.',
    rating: 4.8,
    reviewsCount: '80,000+',
    keyRateOrFeature: 'Compare Top Canadian Banks',
    benefits: ['RBC, TD, Scotiabank, BMO rate insights', 'Bi-weekly and monthly payment calculator', 'Unbiased rate comparisons'],
    badge: 'Best Rates CA',
    partnerKey: 'ratehub_finance',
    publicUrl: 'https://www.ratehub.ca/personal-loans/auto-loans',
    affiliateUrl: 'https://www.ratehub.ca/personal-loans/auto-loans',
    priority: 3
  },

  // 5. Insurance
  {
    id: 'ratesdotca',
    name: 'RATESDOTCA - Car Insurance',
    category: 'INSURANCE',
    description: 'Compare auto insurance quotes across 30+ Canadian insurance providers to save up to $800 annually.',
    rating: 4.8,
    reviewsCount: '150,000+',
    keyRateOrFeature: 'Save up to $800/year',
    benefits: ['Over 30 top Canadian insurers', 'Instant side-by-side policy compare', 'Ontario, Alberta, Quebec & Atlantic coverage'],
    badge: 'Top Insurance CA',
    partnerKey: 'ratesdotca',
    publicUrl: 'https://rates.ca/insurance-quotes/auto',
    affiliateUrl: 'https://rates.ca/insurance-quotes/auto',
    priority: 1
  },
  {
    id: 'ratehub_insurance',
    name: 'Ratehub - Insurance Comparison',
    category: 'INSURANCE',
    description: 'Compare competitive Canadian auto insurance rates and unlock multi-vehicle and winter tire discounts.',
    rating: 4.7,
    reviewsCount: '95,000+',
    keyRateOrFeature: 'Compare 20+ Insurers',
    benefits: ['Winter tire discount calculator', 'Bundle auto & home insurance', 'Fast online rate quotes in 3 mins'],
    badge: 'Best Price Match',
    partnerKey: 'ratehub_insurance',
    publicUrl: 'https://www.ratehub.ca/insurance/car',
    affiliateUrl: 'https://www.ratehub.ca/insurance/car',
    priority: 2
  },
  {
    id: 'lowestrates_ca',
    name: 'LowestRates.ca Auto Insurance',
    category: 'INSURANCE',
    description: 'Find the lowest auto insurance rates in Canada with instant quote comparisons from leading brokers and insurers.',
    rating: 4.7,
    reviewsCount: '90,000+',
    keyRateOrFeature: 'Instant Rate Match',
    benefits: ['Comprehensive & Collision options', 'Safe driver discounts', 'Young driver savings'],
    badge: 'Rate Match',
    partnerKey: 'lowestrates_ca',
    publicUrl: 'https://www.lowestrates.ca/insurance/auto',
    affiliateUrl: 'https://www.lowestrates.ca/insurance/auto',
    priority: 3
  },

  // 6. Roadside / Breakdown
  {
    id: 'caa_roadside',
    name: 'CAA - Emergency Roadside Assistance',
    category: 'BREAKDOWN',
    description: 'Canada’s most trusted automotive club providing 24/7 nationwide emergency roadside assistance, towing, and battery boost.',
    rating: 4.9,
    reviewsCount: '6.5 Million Members',
    keyRateOrFeature: 'Canada’s Premier Auto Club',
    benefits: ['24/7 dispatch across all provinces & territories', 'Battery testing and replacement on the spot', 'CAA Rewards member discounts'],
    badge: 'Canada #1 Club',
    partnerKey: 'caa_roadside',
    publicUrl: 'https://www.caa.ca/',
    affiliateUrl: 'https://www.caa.ca/',
    priority: 1
  },

  // 7. Parts & Accessories
  {
    id: 'canadian_tire_auto',
    name: 'Canadian Tire Automotive & Parts',
    category: 'PARTS',
    description: 'Canada’s go-to retailer for automotive parts, winter tires, oils, batteries, wiper blades, and certified bay installation.',
    rating: 4.8,
    reviewsCount: '500k+',
    keyRateOrFeature: 'Nationwide Stores & Tires',
    benefits: ['Winter & All-Weather tire specialist (3PMSF)', 'Fitment guarantee by Year/Make/Model', 'In-store pickup & mechanic service bays'],
    badge: 'Canadian Icon',
    partnerKey: 'canadian_tire_auto',
    publicUrl: 'https://www.canadiantire.ca/en/cat/automotive-DC0000006.html',
    affiliateUrl: 'https://www.canadiantire.ca/en/cat/automotive-DC0000006.html',
    priority: 1
  },
  {
    id: 'partsource_ca',
    name: 'PartSource Canada',
    category: 'PARTS',
    description: 'Specialty automotive parts chain with commercial quality brake pads, alternators, filters, and free code-reading services.',
    rating: 4.7,
    reviewsCount: '60,000+',
    keyRateOrFeature: 'Pro-Grade Auto Parts',
    benefits: ['Free OBD2 diagnostic checks', 'Extensive OE replacement catalog', 'Experienced parts pros on staff'],
    badge: 'Pro Parts',
    partnerKey: 'partsource_ca',
    publicUrl: 'https://www.partsource.ca/',
    affiliateUrl: 'https://www.partsource.ca/',
    priority: 2
  },
  {
    id: 'napa_canada',
    name: 'NAPA Auto Parts Canada',
    category: 'PARTS',
    description: 'Over 600 Canadian locations carrying 500,000+ quality automotive parts, tools, and heavy duty accessories.',
    rating: 4.7,
    reviewsCount: '80,000+',
    keyRateOrFeature: '600+ Canadian Stores',
    benefits: ['NAPA legendary parts warranty', 'Heavy duty & light vehicle components', 'Online reserve & in-store pickup in 30 mins'],
    badge: '600+ Stores',
    partnerKey: 'napa_canada',
    publicUrl: 'https://www.napacanada.com/',
    affiliateUrl: 'https://www.napacanada.com/',
    priority: 3
  },
  {
    id: 'amazon_ca_auto',
    name: 'Amazon Canada Automotive',
    category: 'PARTS',
    description: 'Prime fast shipping on dash cams, winter seat covers, emergency jump starters, LED headlights, and car cleaning kits.',
    rating: 4.8,
    reviewsCount: 'Prime Delivery',
    keyRateOrFeature: 'Fast Prime Delivery',
    benefits: ['Fast nationwide delivery across Canada', 'Verified customer buyer reviews', 'OEM and aftermarket accessories'],
    badge: 'Prime Delivery',
    partnerKey: 'amazon_ca_auto',
    publicUrl: 'https://www.amazon.ca/b?node=681026011',
    affiliateUrl: 'https://www.amazon.ca/b?node=681026011',
    priority: 4
  }
];

export const CA_ARTICLES: GuideArticle[] = [
  {
    id: 'guide_ca_1',
    title: 'How to Buy a Used Car in Canada (Provincial Rules)',
    summary: 'Safety standards certificates (Safety Inspection), UVIP in Ontario, PST/GST/HST tax differences, and CARFAX Canada checks.',
    fullContent: `Buying a used vehicle in Canada requires navigating specific provincial rules and documentation:

1. Request a CARFAX Canada Report with Lien Check
Never buy a private car in Canada without verifying liens. A bank lien stays with the vehicle, meaning you could lose the car if the previous owner defaulted.

2. Used Vehicle Information Package (UVIP) in Ontario
In Ontario, private sellers are legally required to provide a UVIP before sale. It lists previous registered owners, lien status, and wholesale value for sales tax calculations.

3. Provincial Safety Standards Certificate
Most provinces (Ontario, Alberta, Quebec, BC) require a certified mechanic safety inspection certificate before you can transfer plates and register the car.

4. Understand Sales Tax (GST, PST, HST)
- In Ontario, New Brunswick, Nova Scotia, NL, PEI: 13-15% HST applies.
- In Alberta, Northwest Territories, Yukon, Nunavut: Only 5% GST applies.
- In BC, Manitoba, Saskatchewan, Quebec: GST (5%) + Provincial PST/QST (6-9.975%) apply. Tax is calculated on either the bill of sale purchase price or the Red Book wholesale value, whichever is higher.`,
    category: 'Buying Guides',
    readTimeMinutes: 7,
    isFeatured: true,
    tag: 'Canada Guide'
  },
  {
    id: 'guide_ca_2',
    title: 'PST, GST & HST on Canadian Used Car Purchases',
    summary: 'Detailed tax breakdown for dealership vs private purchases across every Canadian province.',
    fullContent: `When purchasing a vehicle in Canada, the tax amount varies significantly depending on your province and whether you buy from a dealership or a private seller:

- Alberta / Yukon / NWT:
  • Dealer: 5% GST
  • Private Seller: 0% Tax (No sales tax on private sales)

- Ontario:
  • Dealer: 13% HST
  • Private: 13% RST collected at ServiceOntario based on Canadian Red Book wholesale value or purchase price (whichever is higher).

- British Columbia:
  • Dealer: 5% GST + 7%-10% PST
  • Private: 12% PST collected at ICBC on book value.

- Quebec:
  • Dealer: 5% GST + 9.975% QST (14.975% total)
  • Private: 9.975% QST calculated at SAAQ based on estimated wholesale guide value.`,
    category: 'Finance',
    readTimeMinutes: 6,
    tag: 'Canadian Tax'
  },
  {
    id: 'guide_ca_3',
    title: 'Winter Tires & Rust Protection Guide for Canadian Cars',
    summary: 'Mandatory winter tire laws (Quebec, BC), Krown/Rust Check undercoating, and cold-weather battery care.',
    fullContent: `Canadian winters place extreme demands on vehicles:

1. Winter Tire Regulations
- Quebec: Winter tires marked with the 3PMSF (Three-Peak Mountain Snowflake) symbol are legally mandatory on all passenger vehicles from December 1 to March 15.
- British Columbia: Winter tires or chains are required on most designated highways from October 1 to April 30.
- Ontario & Others: While not legally mandatory, insurance companies in Ontario are legally required to offer an auto insurance discount (usually 2-5%) if you install winter tires.

2. Annual Rust Proofing (Krown / Oil Spray)
Road salt and liquid brine (calcium chloride) accelerate underbody rust rapidly. Applying an oil-based penetrating rust inhibitor annually protects brake lines, rocker panels, and suspension components.`,
    category: 'Ownership',
    readTimeMinutes: 5,
    tag: 'Winter Care'
  }
];

export const CA_POPULAR_MAKES = [
  'Toyota',
  'Honda',
  'Ford',
  'Hyundai',
  'Subaru',
  'Chevrolet',
  'Nissan',
  'Mazda',
  'Kia',
  'GMC',
  'Ram',
  'Jeep',
  'Volkswagen',
  'BMW',
  'Audi',
  'Mercedes-Benz',
  'Lexus',
  'Tesla'
];

export const CA_POSTCODES = [
  'M5V 2T6 (Toronto, ON)',
  'V6B 1A1 (Vancouver, BC)',
  'H3B 1A7 (Montreal, QC)',
  'T2P 1J9 (Calgary, AB)',
  'T5J 0N3 (Edmonton, AB)',
  'K1P 1J1 (Ottawa, ON)',
  'R3C 0P8 (Winnipeg, MB)',
  'B3J 1S9 (Halifax, NS)'
];

export interface CanadianProvince {
  code: string;
  name: string;
  taxType: 'HST' | 'GST' | 'GST+PST' | 'GST+QST';
  rate: number;
  privateSaleRate: number;
}

export const CA_PROVINCES: CanadianProvince[] = [
  { code: 'ON', name: 'Ontario', taxType: 'HST', rate: 13.0, privateSaleRate: 13.0 },
  { code: 'AB', name: 'Alberta', taxType: 'GST', rate: 5.0, privateSaleRate: 0.0 },
  { code: 'BC', name: 'British Columbia', taxType: 'GST+PST', rate: 12.0, privateSaleRate: 12.0 },
  { code: 'QC', name: 'Quebec', taxType: 'GST+QST', rate: 14.975, privateSaleRate: 9.975 },
  { code: 'MB', name: 'Manitoba', taxType: 'GST+PST', rate: 12.0, privateSaleRate: 7.0 },
  { code: 'SK', name: 'Saskatchewan', taxType: 'GST+PST', rate: 11.0, privateSaleRate: 6.0 },
  { code: 'NS', name: 'Nova Scotia', taxType: 'HST', rate: 15.0, privateSaleRate: 15.0 },
  { code: 'NB', name: 'New Brunswick', taxType: 'HST', rate: 15.0, privateSaleRate: 15.0 },
  { code: 'NL', name: 'Newfoundland & Labrador', taxType: 'HST', rate: 15.0, privateSaleRate: 15.0 },
  { code: 'PE', name: 'Prince Edward Island', taxType: 'HST', rate: 15.0, privateSaleRate: 15.0 },
  { code: 'YT', name: 'Yukon', taxType: 'GST', rate: 5.0, privateSaleRate: 0.0 },
  { code: 'NT', name: 'Northwest Territories', taxType: 'GST', rate: 5.0, privateSaleRate: 0.0 },
  { code: 'NU', name: 'Nunavut', taxType: 'GST', rate: 5.0, privateSaleRate: 0.0 }
];
