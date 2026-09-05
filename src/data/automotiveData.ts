import { MarketplaceInfo, ProviderInfo, GuideArticle, PartnerConfig } from '../types';

export const PARTNER_URLS: Record<string, PartnerConfig> = {
  // Car Buy Sites (Priority 1 - 14)
  auctiondirectusa: {
    partnerId: 'auctiondirectusa',
    name: 'Auction Direct USA',
    publicUrl: 'https://www.auctiondirectusa.com/used-cars-for-sale',
    affiliateUrl: 'https://www.auctiondirectusa.com/used-cars-for-sale',
    isEnabled: true,
    priority: 1
  },
  carsforsale: {
    partnerId: 'carsforsale',
    name: 'Carsforsale.com',
    publicUrl: 'https://www.carsforsale.com/used-cars-for-sale',
    affiliateUrl: 'https://www.carsforsale.com/used-cars-for-sale',
    isEnabled: true,
    priority: 2
  },
  edmunds: {
    partnerId: 'edmunds',
    name: 'Edmunds',
    publicUrl: 'https://www.edmunds.com/',
    affiliateUrl: 'https://www.edmunds.com/',
    isEnabled: true,
    priority: 3
  },
  truecar: {
    partnerId: 'truecar',
    name: 'TrueCar',
    publicUrl: 'https://www.truecar.com/used-cars-for-sale/',
    affiliateUrl: 'https://www.truecar.com/used-cars-for-sale/',
    isEnabled: true,
    priority: 4
  },
  cars_com: {
    partnerId: 'cars_com',
    name: 'Cars.com',
    publicUrl: 'https://www.cars.com/shopping/',
    affiliateUrl: 'https://www.cars.com/shopping/',
    isEnabled: true,
    priority: 5
  },
  carsauto: {
    partnerId: 'carsauto',
    name: 'CarsAuto.com',
    publicUrl: 'https://www.carsauto.com/used-inventory.htm',
    affiliateUrl: 'https://www.carsauto.com/used-inventory.htm',
    isEnabled: true,
    priority: 6
  },
  iseecars: {
    partnerId: 'iseecars',
    name: 'iSeeCars',
    publicUrl: 'https://www.iseecars.com/',
    affiliateUrl: 'https://www.iseecars.com/',
    isEnabled: true,
    priority: 7
  },
  autolist: {
    partnerId: 'autolist',
    name: 'Autolist',
    publicUrl: 'https://www.autolist.com/',
    affiliateUrl: 'https://www.autolist.com/',
    isEnabled: true,
    priority: 8
  },
  bringatrailer: {
    partnerId: 'bringatrailer',
    name: 'Bring a Trailer',
    publicUrl: 'https://bringatrailer.com/',
    affiliateUrl: 'https://bringatrailer.com/',
    isEnabled: true,
    priority: 9
  },
  carexportsusa: {
    partnerId: 'carexportsusa',
    name: 'Car Exports USA',
    publicUrl: 'https://carexportsusa.com/inventory/',
    affiliateUrl: 'https://carexportsusa.com/inventory/',
    isEnabled: true,
    priority: 10
  },
  carexportamerica: {
    partnerId: 'carexportamerica',
    name: 'Car Export America',
    publicUrl: 'https://www.carexportamerica.com/usa-cars-for-sale/',
    affiliateUrl: 'https://www.carexportamerica.com/usa-cars-for-sale/',
    isEnabled: true,
    priority: 11
  },
  autoweb: {
    partnerId: 'autoweb',
    name: 'AutoWeb',
    publicUrl: 'https://www.autoweb.com/new-cars',
    affiliateUrl: 'https://www.autoweb.com/new-cars',
    isEnabled: true,
    priority: 12
  },
  hemmings: {
    partnerId: 'hemmings',
    name: 'Hemmings',
    publicUrl: 'https://www.hemmings.com/',
    affiliateUrl: 'https://www.hemmings.com/',
    isEnabled: true,
    priority: 13
  },
  ebaymotors: {
    partnerId: 'ebaymotors',
    name: 'eBay Motors',
    publicUrl: 'https://www.ebay.com/motors',
    affiliateUrl: 'https://www.ebay.com/motors',
    isEnabled: true,
    priority: 14
  },

  // Car Valuation Sites (Priority 1 - 2)
  edmunds_valuation: {
    partnerId: 'edmunds_valuation',
    name: 'Edmunds Appraisal',
    publicUrl: 'https://www.edmunds.com/appraisal/',
    affiliateUrl: 'https://www.edmunds.com/appraisal/',
    isEnabled: true,
    priority: 1
  },
  auctiondirectusa_valuation: {
    partnerId: 'auctiondirectusa_valuation',
    name: 'Auction Direct USA',
    publicUrl: 'https://www.auctiondirectusa.com/instant-cash-offer',
    affiliateUrl: 'https://www.auctiondirectusa.com/instant-cash-offer',
    isEnabled: true,
    priority: 2
  },

  // Car Sell Sites (Priority 3 - 8)
  edmunds_sell: {
    partnerId: 'edmunds_sell',
    name: 'Edmunds',
    publicUrl: 'https://www.edmunds.com/sell-car/private/create-listing/',
    affiliateUrl: 'https://www.edmunds.com/sell-car/private/create-listing/',
    isEnabled: true,
    priority: 3
  },
  truecar_sell: {
    partnerId: 'truecar_sell',
    name: 'TrueCar',
    publicUrl: 'https://www.truecar.com/sell-your-car/',
    affiliateUrl: 'https://www.truecar.com/sell-your-car/',
    isEnabled: true,
    priority: 4
  },
  cars_com_sell: {
    partnerId: 'cars_com_sell',
    name: 'Cars.com',
    publicUrl: 'https://www.cars.com/sell/',
    affiliateUrl: 'https://www.cars.com/sell/',
    isEnabled: true,
    priority: 5
  },
  carsauto_buyer: {
    partnerId: 'carsauto_buyer',
    name: 'CarsAuto Buyer',
    publicUrl: 'https://www.carsautobuyer.com/trade-in/',
    affiliateUrl: 'https://www.carsautobuyer.com/trade-in/',
    isEnabled: true,
    priority: 6
  },
  bringatrailer_sell: {
    partnerId: 'bringatrailer_sell',
    name: 'Bring a Trailer',
    publicUrl: 'https://bringatrailer.com/submit-a-vehicle/',
    affiliateUrl: 'https://bringatrailer.com/submit-a-vehicle/',
    isEnabled: true,
    priority: 7
  },
  hemmings_sell: {
    partnerId: 'hemmings_sell',
    name: 'Hemmings',
    publicUrl: 'https://www.hemmings.com/classifieds/bundles/carsforsale',
    affiliateUrl: 'https://www.hemmings.com/classifieds/bundles/carsforsale',
    isEnabled: true,
    priority: 8
  },

  // Vehicle History & VIN (Priority 1 - 4)
  nhtsa_vin: {
    partnerId: 'nhtsa_vin',
    name: 'NHTSA VIN Decoder',
    publicUrl: 'https://vpic.nhtsa.dot.gov/decoder/',
    affiliateUrl: 'https://vpic.nhtsa.dot.gov/decoder/',
    isEnabled: true,
    priority: 1
  },
  epicvin: {
    partnerId: 'epicvin',
    name: 'EpicVIN Reports',
    publicUrl: 'https://epicvin.com/',
    affiliateUrl: 'https://epicvin.com/?a_aid=y8d55zei795yc',
    isEnabled: true,
    priority: 2
  },
  autocheck: {
    partnerId: 'autocheck',
    name: 'AutoCheck',
    publicUrl: 'https://www.autocheck.com',
    affiliateUrl: 'https://www.autocheck.com',
    isEnabled: true,
    priority: 3
  },
  vinaudit: {
    partnerId: 'vinaudit',
    name: 'VinAudit Reports',
    publicUrl: 'https://www.vinaudit.com',
    affiliateUrl: 'https://www.vinaudit.com',
    isEnabled: true,
    priority: 4
  },

  // Car Finance Sites (Priority 1 - 3)
  bankrate: {
    partnerId: 'bankrate',
    name: 'Bankrate Loans',
    publicUrl: 'https://www.bankrate.com/loans/auto-loans/',
    affiliateUrl: 'https://www.bankrate.com/loans/auto-loans/',
    isEnabled: true,
    priority: 1
  },
  carsauto_finance: {
    partnerId: 'carsauto_finance',
    name: 'CarsAuto Finance',
    publicUrl: 'https://www.carsauto.com/finance/',
    affiliateUrl: 'https://www.carsauto.com/finance/',
    isEnabled: true,
    priority: 2
  },
  autocreditexpress: {
    partnerId: 'autocreditexpress',
    name: 'Auto Credit Express',
    publicUrl: 'https://www.autocreditexpress.com/apply/?lpgid=cfsvar0b',
    affiliateUrl: 'https://www.autocreditexpress.com/apply/?lpgid=cfsvar0b',
    isEnabled: true,
    priority: 3
  },

  // Car Insurance Sites (Priority 1 - 2)
  cheap_insurance: {
    partnerId: 'cheap_insurance',
    name: 'Cheap Car Insurance',
    publicUrl: 'https://cheap-car-insurance-quotes.com/',
    affiliateUrl: 'https://cheap-car-insurance-quotes.com/',
    isEnabled: true,
    priority: 1
  },
  insurify: {
    partnerId: 'insurify',
    name: 'Insurify Comparison',
    publicUrl: 'https://insurify.com/',
    affiliateUrl: 'https://insurify.com/',
    isEnabled: true,
    priority: 2
  },

  // Breakdown & Roadside Sites (Priority 1 - 2)
  aaa: {
    partnerId: 'aaa',
    name: 'AAA Roadside',
    publicUrl: 'https://www.aaa.com',
    affiliateUrl: 'https://www.aaa.com',
    isEnabled: true,
    priority: 1
  },
  allstate_roadside: {
    partnerId: 'allstate_roadside',
    name: 'Allstate Roadside',
    publicUrl: 'https://www.allstateroadside.com/',
    affiliateUrl: 'https://www.allstateroadside.com/',
    isEnabled: true,
    priority: 2
  },

  // Parts & Accessories Sites (Priority 1 - 2)
  amazon_us: {
    partnerId: 'amazon_us',
    name: 'Amazon Auto Parts',
    publicUrl: 'https://www.amazon.com/Auto-Parts-Accessories/b?node=15684181',
    affiliateUrl: 'https://www.amazon.com/Auto-Parts-Accessories/b?node=15684181',
    isEnabled: true,
    priority: 1
  },
  rockauto: {
    partnerId: 'rockauto',
    name: 'RockAuto Parts',
    publicUrl: 'https://www.rockauto.com',
    affiliateUrl: 'https://www.rockauto.com',
    isEnabled: true,
    priority: 2
  }
};

export const AFFILIATE_URLS: Record<string, string> = Object.fromEntries(
  Object.entries(PARTNER_URLS).map(([key, val]) => [key, val.affiliateUrl])
);

export const PUBLIC_URLS: Record<string, string> = Object.fromEntries(
  Object.entries(PARTNER_URLS).map(([key, val]) => [key, val.publicUrl])
);

// -------------------------------------------------------------
// 1. CAR BUY SITES (Exclusively for Buy Car search & inventory)
// -------------------------------------------------------------
export const MARKETPLACES: MarketplaceInfo[] = [
  {
    id: 'auctiondirectusa',
    name: 'Auction Direct USA',
    category: 'Used Cars & Dealership',
    description: 'Browse transparent no-haggle used car inventory with upfront pricing and vehicle condition reports.',
    rating: 4.8,
    reviewsCount: '35k+',
    benefits: ['No-haggle pricing', 'Best value guarantee', 'Clean title verification'],
    badge: 'Top Priority',
    webUrlKey: 'auctiondirectusa',
    priority: 1,
    isPopular: true,
    publicUrl: PARTNER_URLS.auctiondirectusa.publicUrl,
    affiliateUrl: PARTNER_URLS.auctiondirectusa.affiliateUrl
  },
  {
    id: 'carsforsale',
    name: 'Carsforsale.com',
    category: 'Marketplace',
    description: 'Explore millions of used vehicles from millions of trusted dealerships across all 50 states.',
    rating: 4.7,
    reviewsCount: '80k+',
    benefits: ['Millions of listings', 'No hidden dealer fees', 'Nationwide search'],
    badge: 'Verified Deals',
    webUrlKey: 'carsforsale',
    priority: 2,
    isPopular: true,
    publicUrl: PARTNER_URLS.carsforsale.publicUrl,
    affiliateUrl: PARTNER_URLS.carsforsale.affiliateUrl
  },
  {
    id: 'edmunds',
    name: 'Edmunds',
    category: 'Marketplace & Appraisal',
    description: 'Find new and used cars with trusted True Market Value (TMV®) pricing, expert reviews, and dealer ratings.',
    rating: 4.8,
    reviewsCount: '90k+',
    benefits: ['True Market Value®', 'Expert road tests', 'Dealer price verification'],
    badge: 'Industry Standard',
    webUrlKey: 'edmunds',
    priority: 3,
    isPopular: true,
    publicUrl: PARTNER_URLS.edmunds.publicUrl,
    affiliateUrl: PARTNER_URLS.edmunds.affiliateUrl
  },
  {
    id: 'truecar',
    name: 'TrueCar',
    category: 'Marketplace',
    description: 'See upfront what others paid for the car you want so you never overpay on certified pre-owned vehicles.',
    rating: 4.6,
    reviewsCount: '65k+',
    benefits: ['Upfront price transparency', 'Actual price reports', 'Certified dealer network'],
    badge: 'Price Transparency',
    webUrlKey: 'truecar',
    priority: 4,
    isPopular: true,
    publicUrl: PARTNER_URLS.truecar.publicUrl,
    affiliateUrl: PARTNER_URLS.truecar.affiliateUrl
  },
  {
    id: 'cars_com',
    name: 'Cars.com',
    category: 'Marketplace',
    description: 'Comprehensive US inventory search with Great Deal badges, home delivery filters, and seller reviews.',
    rating: 4.6,
    reviewsCount: '110k+',
    benefits: ['Deal badging system', 'Home delivery options', 'Dealer review profiles'],
    badge: 'National Reach',
    webUrlKey: 'cars_com',
    priority: 5,
    publicUrl: PARTNER_URLS.cars_com.publicUrl,
    affiliateUrl: PARTNER_URLS.cars_com.affiliateUrl
  },
  {
    id: 'carsauto',
    name: 'CarsAuto.com',
    category: 'Inventory & Retail',
    description: 'Curated used inventory search with fast search filters, competitive trade-in values, and clean titles.',
    rating: 4.6,
    reviewsCount: '25k+',
    benefits: ['Vetted inventory', 'Transparent pricing', 'Fast approval financing'],
    badge: 'Curated Inventory',
    webUrlKey: 'carsauto',
    priority: 6,
    publicUrl: PARTNER_URLS.carsauto.publicUrl,
    affiliateUrl: PARTNER_URLS.carsauto.affiliateUrl
  },
  {
    id: 'iseecars',
    name: 'iSeeCars',
    category: 'Analytics & Search',
    description: 'Data-driven used car search engine that scores deals using 59 data points and price analysis algorithms.',
    rating: 4.7,
    reviewsCount: '50k+',
    benefits: ['Score-based deal ranking', 'Price drop tracking', 'Vehicle lifespan data'],
    badge: 'Data Driven',
    webUrlKey: 'iseecars',
    priority: 7,
    publicUrl: PARTNER_URLS.iseecars.publicUrl,
    affiliateUrl: PARTNER_URLS.iseecars.affiliateUrl
  },
  {
    id: 'autolist',
    name: 'Autolist',
    category: 'Mobile Aggregator',
    description: 'Aggregates listings from top dealer and classified sites in one place with instant price change alerts.',
    rating: 4.6,
    reviewsCount: '40k+',
    benefits: ['Multi-source aggregator', 'Instant price drop alerts', 'Clean search interface'],
    badge: 'Aggregator',
    webUrlKey: 'autolist',
    priority: 8,
    publicUrl: PARTNER_URLS.autolist.publicUrl,
    affiliateUrl: PARTNER_URLS.autolist.affiliateUrl
  },
  {
    id: 'bringatrailer',
    name: 'Bring a Trailer',
    category: 'Enthusiast Auctions',
    description: 'The premier curated auction platform for vintage, classic, muscle, and enthusiast sports cars.',
    rating: 4.9,
    reviewsCount: '45k+',
    benefits: ['Curated collector cars', 'Transparent bidder comments', 'No reserve auctions'],
    badge: 'Collector Choice',
    webUrlKey: 'bringatrailer',
    priority: 9,
    publicUrl: PARTNER_URLS.bringatrailer.publicUrl,
    affiliateUrl: PARTNER_URLS.bringatrailer.affiliateUrl
  },
  {
    id: 'carexportsusa',
    name: 'Car Exports USA',
    category: 'Export & Domestic',
    description: 'Extensive inventory of American cars, trucks, and SUVs available for domestic delivery or international export.',
    rating: 4.5,
    reviewsCount: '15k+',
    benefits: ['Worldwide shipping', 'Clean title verification', 'Direct dealer rates'],
    badge: 'Export Specialist',
    webUrlKey: 'carexportsusa',
    priority: 10,
    publicUrl: PARTNER_URLS.carexportsusa.publicUrl,
    affiliateUrl: PARTNER_URLS.carexportsusa.affiliateUrl
  },
  {
    id: 'carexportamerica',
    name: 'Car Export America',
    category: 'Export & Sale',
    description: 'Premier selection of clean title and late-model US vehicles with shipping and inspection assistance.',
    rating: 4.5,
    reviewsCount: '12k+',
    benefits: ['Inspection reports', 'Door-to-port logistics', 'Competitive US pricing'],
    badge: 'Export Logistics',
    webUrlKey: 'carexportamerica',
    priority: 11,
    publicUrl: PARTNER_URLS.carexportamerica.publicUrl,
    affiliateUrl: PARTNER_URLS.carexportamerica.affiliateUrl
  },
  {
    id: 'autoweb',
    name: 'AutoWeb',
    category: 'New & Used Inventory',
    description: 'Search local dealership inventories and connect directly with certified dealers for competitive quotes.',
    rating: 4.4,
    reviewsCount: '20k+',
    benefits: ['Local dealer network', 'Instant price quotes', 'New and late-model cars'],
    badge: 'Dealer Quotes',
    webUrlKey: 'autoweb',
    priority: 12,
    publicUrl: PARTNER_URLS.autoweb.publicUrl,
    affiliateUrl: PARTNER_URLS.autoweb.affiliateUrl
  },
  {
    id: 'hemmings',
    name: 'Hemmings',
    category: 'Classics & Muscle',
    description: 'The world’s largest collector car marketplace for classic muscle, vintage trucks, and antique autos.',
    rating: 4.8,
    reviewsCount: '25k+',
    benefits: ['Specialist classics', 'Verified antique history', 'Collector audience'],
    badge: 'Classics Specialist',
    webUrlKey: 'hemmings',
    priority: 13,
    publicUrl: PARTNER_URLS.hemmings.publicUrl,
    affiliateUrl: PARTNER_URLS.hemmings.affiliateUrl
  },
  {
    id: 'ebaymotors',
    name: 'eBay Motors',
    category: 'Auction & Retail',
    description: 'Find millions of new and used cars, rare classics, trucks, and specialty vehicles with purchase protection.',
    rating: 4.5,
    reviewsCount: '150k+',
    benefits: ['Auction bargains', 'Vehicle Purchase Protection', 'Hard-to-find models'],
    badge: 'Auction & Retail',
    webUrlKey: 'ebaymotors',
    priority: 14,
    publicUrl: PARTNER_URLS.ebaymotors.publicUrl,
    affiliateUrl: PARTNER_URLS.ebaymotors.affiliateUrl
  }
];

// -------------------------------------------------------------
// 2. CAR VALUATION SITES (Exclusively for Car Appraisal / Value)
// -------------------------------------------------------------
export const VALUATION_PROVIDERS: ProviderInfo[] = [
  {
    id: 'edmunds_valuation',
    name: 'Edmunds Appraisal',
    category: 'VALUATION',
    description: 'Get the True Market Value (TMV®) of your car based on real-world US transaction data and dealer trends.',
    rating: 4.8,
    reviewsCount: '65k+',
    keyRateOrFeature: 'TMV® Pricing',
    benefits: ['Verified market data', 'Highly accurate appraisal', 'Instant dealer trade-in benchmark'],
    badge: 'Top Recommendation',
    partnerKey: 'edmunds_valuation',
    priority: 1,
    publicUrl: PARTNER_URLS.edmunds_valuation.publicUrl,
    affiliateUrl: PARTNER_URLS.edmunds_valuation.affiliateUrl
  },
  {
    id: 'auctiondirectusa_valuation',
    name: 'Auction Direct USA',
    category: 'VALUATION',
    description: 'Receive an instant cash offer for your vehicle from Auction Direct USA with no purchase obligation.',
    rating: 4.7,
    reviewsCount: '15k+',
    keyRateOrFeature: 'Instant Cash Offer',
    benefits: ['Fast online appraisal', 'Guaranteed cash offer', 'No obligation to buy'],
    badge: 'Instant Offer',
    partnerKey: 'auctiondirectusa_valuation',
    priority: 2,
    publicUrl: PARTNER_URLS.auctiondirectusa_valuation.publicUrl,
    affiliateUrl: PARTNER_URLS.auctiondirectusa_valuation.affiliateUrl
  }
];

// -------------------------------------------------------------
// 3. CAR SELL SITES (Exclusively for Car Selling & Trade-In)
// -------------------------------------------------------------
export const SELLING_PROVIDERS: ProviderInfo[] = [
  {
    id: 'edmunds_sell',
    name: 'Edmunds',
    category: 'SELL',
    description: 'Create a private listing to sell directly to retail buyers with price guidance and safe transaction tools.',
    rating: 4.7,
    reviewsCount: '60k+',
    keyRateOrFeature: 'Private Party Listing',
    benefits: ['Pricing guidance', 'Reach verified buyers', 'TMV® market valuation'],
    badge: 'Top Value',
    partnerKey: 'edmunds_sell',
    priority: 3,
    publicUrl: PARTNER_URLS.edmunds_sell.publicUrl,
    affiliateUrl: PARTNER_URLS.edmunds_sell.affiliateUrl
  },
  {
    id: 'truecar_sell',
    name: 'TrueCar',
    category: 'SELL',
    description: 'Get an instant cash offer from certified local dealers or list your vehicle on the TrueCar network.',
    rating: 4.6,
    reviewsCount: '45k+',
    keyRateOrFeature: 'Instant Dealer Cash Offer',
    benefits: ['Certified dealer network', 'Instant cash offer', 'Pick-up or drop-off'],
    badge: 'Fast Cash',
    partnerKey: 'truecar_sell',
    priority: 4,
    publicUrl: PARTNER_URLS.truecar_sell.publicUrl,
    affiliateUrl: PARTNER_URLS.truecar_sell.affiliateUrl
  },
  {
    id: 'cars_com_sell',
    name: 'Cars.com',
    category: 'SELL',
    description: 'Sell your car your way: choose between instant cash offers or create a listing to reach millions.',
    rating: 4.6,
    reviewsCount: '85k+',
    keyRateOrFeature: 'Multiple Selling Options',
    benefits: ['Massive buyer audience', 'Instant dealer offers', 'DIY listing manager'],
    badge: 'Widest Reach',
    partnerKey: 'cars_com_sell',
    priority: 5,
    publicUrl: PARTNER_URLS.cars_com_sell.publicUrl,
    affiliateUrl: PARTNER_URLS.cars_com_sell.affiliateUrl
  },
  {
    id: 'carsauto_buyer',
    name: 'CarsAuto Buyer',
    category: 'SELL',
    description: 'Specialized vehicle trade-in and direct buying service with fast appraisals and transparent offers.',
    rating: 4.5,
    reviewsCount: '12k+',
    keyRateOrFeature: 'Trade-In / Buy Service',
    benefits: ['Direct vehicle purchase', 'Competitive trade-in values', 'Hassle-free paperwork'],
    badge: 'Trade-In Specialist',
    partnerKey: 'carsauto_buyer',
    priority: 6,
    publicUrl: PARTNER_URLS.carsauto_buyer.publicUrl,
    affiliateUrl: PARTNER_URLS.carsauto_buyer.affiliateUrl
  },
  {
    id: 'bringatrailer_sell',
    name: 'Bring a Trailer',
    category: 'SELL',
    description: 'Submit your enthusiast, collector, or classic car for auction to a passionate global community.',
    rating: 4.9,
    reviewsCount: '40k+',
    keyRateOrFeature: 'Enthusiast Auctions',
    benefits: ['Curated auction listings', 'High-engagement bidders', 'Record sale prices'],
    badge: 'Collector Choice',
    partnerKey: 'bringatrailer_sell',
    priority: 7,
    publicUrl: PARTNER_URLS.bringatrailer_sell.publicUrl,
    affiliateUrl: PARTNER_URLS.bringatrailer_sell.affiliateUrl
  },
  {
    id: 'hemmings_sell',
    name: 'Hemmings',
    category: 'SELL',
    description: 'Classifieds bundles and auction packages targeting the world’s most active vintage and muscle car collectors.',
    rating: 4.8,
    reviewsCount: '18k+',
    keyRateOrFeature: 'Classics Classifieds',
    benefits: ['Specialist collector market', 'Multi-channel exposure', 'Verified antique enthusiasts'],
    badge: 'Classic Specialist',
    partnerKey: 'hemmings_sell',
    priority: 8,
    publicUrl: PARTNER_URLS.hemmings_sell.publicUrl,
    affiliateUrl: PARTNER_URLS.hemmings_sell.affiliateUrl
  }
];

// -------------------------------------------------------------
// 4. VEHICLE HISTORY & VIN (Exclusively for History & Recalls)
// -------------------------------------------------------------
export const HISTORY_PROVIDERS: ProviderInfo[] = [
  {
    id: 'nhtsa_vin',
    name: 'NHTSA VIN Decoder',
    category: 'HISTORY',
    description: 'Official US Department of Transportation portal for free VIN decoding, vehicle specifications, and open safety recalls.',
    rating: 4.9,
    reviewsCount: 'Official Gov',
    keyRateOrFeature: '100% Free Official Gov Data',
    benefits: ['Official safety recalls', 'Manufacturer specs', 'No cost or subscription'],
    badge: 'Official Gov',
    partnerKey: 'nhtsa_vin',
    priority: 1,
    publicUrl: PARTNER_URLS.nhtsa_vin.publicUrl,
    affiliateUrl: PARTNER_URLS.nhtsa_vin.affiliateUrl
  },
  {
    id: 'epicvin',
    name: 'EpicVIN Reports',
    category: 'HISTORY',
    description: 'Approved NMVTIS data provider offering full vehicle history, salvage/theft records, odometer rollback, and accident history.',
    rating: 4.8,
    reviewsCount: '50k+',
    keyRateOrFeature: 'Official NMVTIS Reports',
    benefits: ['Full accident history', 'Title brands & junk check', 'Odometer verification'],
    badge: 'Recommended',
    partnerKey: 'epicvin',
    priority: 2,
    publicUrl: PARTNER_URLS.epicvin.publicUrl,
    affiliateUrl: PARTNER_URLS.epicvin.affiliateUrl
  },
  {
    id: 'autocheck',
    name: 'AutoCheck',
    category: 'HISTORY',
    description: 'Experian’s premier vehicle history service featuring the AutoCheck Score to easily assess vehicle risk and history.',
    rating: 4.7,
    reviewsCount: '95k+',
    keyRateOrFeature: 'AutoCheck Score & History',
    benefits: ['Patented AutoCheck Score', 'Accident & frame damage', 'Auction history data'],
    badge: 'Experian Powered',
    partnerKey: 'autocheck',
    priority: 3,
    publicUrl: PARTNER_URLS.autocheck.publicUrl,
    affiliateUrl: PARTNER_URLS.autocheck.affiliateUrl
  },
  {
    id: 'vinaudit',
    name: 'VinAudit Reports',
    category: 'HISTORY',
    description: 'Affordable, official NMVTIS vehicle history reports with clean title confirmation, recall status, and ownership records.',
    rating: 4.6,
    reviewsCount: '42k+',
    keyRateOrFeature: 'Affordable History Reports',
    benefits: ['Clean title confirmation', 'Low-cost single reports', 'Commercial & personal data'],
    badge: 'Cost-Effective',
    partnerKey: 'vinaudit',
    priority: 4,
    publicUrl: PARTNER_URLS.vinaudit.publicUrl,
    affiliateUrl: PARTNER_URLS.vinaudit.affiliateUrl
  }
];

// -------------------------------------------------------------
// 5. CAR FINANCE SITES (Exclusively for Loans & Financing)
// -------------------------------------------------------------
export const FINANCE_PROVIDERS: ProviderInfo[] = [
  {
    id: 'bankrate',
    name: 'Bankrate Loans',
    category: 'FINANCE',
    description: 'Compare daily auto loan interest rates from top banks, credit unions, and online lenders across the nation.',
    rating: 4.8,
    reviewsCount: '45k+',
    keyRateOrFeature: 'Daily Rate Comparisons',
    benefits: ['Daily updated APRs', 'Loan pre-qualification', 'Expert lender reviews'],
    badge: 'Top Rates',
    partnerKey: 'bankrate',
    priority: 1,
    publicUrl: PARTNER_URLS.bankrate.publicUrl,
    affiliateUrl: PARTNER_URLS.bankrate.affiliateUrl
  },
  {
    id: 'carsauto_finance',
    name: 'CarsAuto Finance',
    category: 'FINANCE',
    description: 'Fast, secure auto finance applications connecting you with competitive direct lenders and loan terms.',
    rating: 4.6,
    reviewsCount: '15k+',
    keyRateOrFeature: 'Flexible Auto Financing',
    benefits: ['Simple online application', 'Direct lender network', 'New and used car loans'],
    badge: 'Direct Lenders',
    partnerKey: 'carsauto_finance',
    priority: 2,
    publicUrl: PARTNER_URLS.carsauto_finance.publicUrl,
    affiliateUrl: PARTNER_URLS.carsauto_finance.affiliateUrl
  },
  {
    id: 'autocreditexpress',
    name: 'Auto Credit Express',
    category: 'FINANCE',
    description: 'Leading US network specializing in bad credit, poor credit, and no credit auto loan approvals with quick turnaround.',
    rating: 4.5,
    reviewsCount: '30k+',
    keyRateOrFeature: 'Subprime & Bad Credit Expert',
    benefits: ['Special finance approval', 'Fast 24-hr decisions', 'Nationwide dealer network'],
    badge: 'Credit Specialist',
    partnerKey: 'autocreditexpress',
    priority: 3,
    publicUrl: PARTNER_URLS.autocreditexpress.publicUrl,
    affiliateUrl: PARTNER_URLS.autocreditexpress.affiliateUrl
  }
];

// -------------------------------------------------------------
// 6. CAR INSURANCE SITES (Exclusively for Insurance Quotes)
// -------------------------------------------------------------
export const INSURANCE_PROVIDERS: ProviderInfo[] = [
  {
    id: 'cheap_insurance',
    name: 'Cheap Car Insurance',
    category: 'INSURANCE',
    description: 'Find affordable state-minimum and comprehensive insurance coverage with quotes tailored to your budget.',
    rating: 4.7,
    reviewsCount: '25k+',
    keyRateOrFeature: 'Affordable Minimum Quotes',
    benefits: ['Budget-friendly rates', 'Quick quote generator', 'Discounts finder'],
    badge: 'Lowest Rates',
    partnerKey: 'cheap_insurance',
    priority: 1,
    publicUrl: PARTNER_URLS.cheap_insurance.publicUrl,
    affiliateUrl: PARTNER_URLS.cheap_insurance.affiliateUrl
  },
  {
    id: 'insurify',
    name: 'Insurify Comparison',
    category: 'INSURANCE',
    description: 'The premier US auto insurance comparison marketplace. Compare 100+ trusted carriers and save up to $585/year.',
    rating: 4.9,
    reviewsCount: '120k+',
    keyRateOrFeature: 'Compare 100+ Top Carriers',
    benefits: ['Real-time side-by-side quotes', 'Official carrier partners', 'Zero spam guarantee'],
    badge: 'Top Recommended',
    partnerKey: 'insurify',
    priority: 2,
    publicUrl: PARTNER_URLS.insurify.publicUrl,
    affiliateUrl: PARTNER_URLS.insurify.affiliateUrl
  }
];

// -------------------------------------------------------------
// 7. BREAKDOWN & ROADSIDE SITES (Exclusively for Roadside Cover)
// -------------------------------------------------------------
export const BREAKDOWN_PROVIDERS: ProviderInfo[] = [
  {
    id: 'aaa',
    name: 'AAA Roadside',
    category: 'BREAKDOWN',
    description: 'America’s leading motor club offering 24/7 nationwide emergency roadside assistance, towing, jumpstarts, and travel perks.',
    rating: 4.8,
    reviewsCount: '550k+',
    keyRateOrFeature: 'America’s #1 Motor Club',
    benefits: ['24/7 nationwide dispatch', 'Towing & battery delivery', 'Exclusive member discounts'],
    badge: 'Industry Leader',
    partnerKey: 'aaa',
    priority: 1,
    publicUrl: PARTNER_URLS.aaa.publicUrl,
    affiliateUrl: PARTNER_URLS.aaa.affiliateUrl
  },
  {
    id: 'allstate_roadside',
    name: 'Allstate Roadside',
    category: 'BREAKDOWN',
    description: 'On-demand and membership-based roadside protection from Allstate with fast GPS-tracked mobile dispatch.',
    rating: 4.7,
    reviewsCount: '160k+',
    keyRateOrFeature: '24/7 On-Demand & Plans',
    benefits: ['Pay-per-use or membership', 'GPS real-time tracking', 'Flat tire & lockout aid'],
    badge: 'Trusted Name',
    partnerKey: 'allstate_roadside',
    priority: 2,
    publicUrl: PARTNER_URLS.allstate_roadside.publicUrl,
    affiliateUrl: PARTNER_URLS.allstate_roadside.affiliateUrl
  }
];

// -------------------------------------------------------------
// 8. PARTS & ACCESSORIES SITES (Exclusively for Parts & Supplies)
// -------------------------------------------------------------
export const PARTS_PROVIDERS: ProviderInfo[] = [
  {
    id: 'amazon_us',
    name: 'Amazon Auto Parts',
    category: 'PARTS',
    description: 'Vast marketplace for automotive replacement parts, tools, electronics, detailing gear, and Prime fast delivery.',
    rating: 4.8,
    reviewsCount: '600k+',
    keyRateOrFeature: 'Vast Selection & Prime',
    benefits: ['Millions of OEM & aftermarket parts', 'Amazon Confirmed Fit filter', 'Fast Prime 1-2 day delivery'],
    badge: 'Largest Selection',
    partnerKey: 'amazon_us',
    priority: 1,
    publicUrl: PARTNER_URLS.amazon_us.publicUrl,
    affiliateUrl: PARTNER_URLS.amazon_us.affiliateUrl
  },
  {
    id: 'rockauto',
    name: 'RockAuto Parts',
    category: 'PARTS',
    description: 'All the parts your car will ever need at warehouse prices from a trusted family-owned auto parts business.',
    rating: 4.7,
    reviewsCount: '55k+',
    keyRateOrFeature: 'Direct Warehouse Prices',
    benefits: ['Reliably low prices', 'Exhaustive vehicle parts catalog', 'Direct manufacturer warehouses'],
    badge: 'Best Value',
    partnerKey: 'rockauto',
    priority: 2,
    publicUrl: PARTNER_URLS.rockauto.publicUrl,
    affiliateUrl: PARTNER_URLS.rockauto.affiliateUrl
  }
];

export const ARTICLES: GuideArticle[] = [
  {
    id: 'guide_1',
    title: 'How to Buy a Used Car Safely in the USA',
    summary: '10 essential inspection steps, test drive tips, title verification, and Lemon Law awareness.',
    fullContent: `Buying a used car in the USA requires thorough preparation to ensure you get a reliable vehicle at a fair price.

1. Always Inspect in Daylight
Never inspect a car in the dark or in heavy rain. Water droplets and shadows can hide scratches, bodywork dents, or uneven paint lines that indicate past accident repairs.

2. Verify the Vehicle Title
Ensure the title is "Clean." Avoid "Salvage," "Rebuilt," or "Lemon" titles unless you are an expert, as these indicate major past damage or recurring issues. Verify the VIN on the title matches the car.

3. Get a Professional History Report
Don't take the seller's word. Run a CARFAX or AutoCheck report to check for accidents, service records, and title history.

4. Pre-Purchase Inspection (PPI)
Spend $100-$200 for a trusted mechanic to perform a full inspection. They can find hidden issues like frame damage, engine leaks, or worn suspension that you might miss.

5. Understand State Lemon Laws
Lemon laws vary by state. Research your state's specific protections for used car buyers to know your rights if the car has major issues shortly after purchase.`,
    category: 'Buying Guides',
    readTimeMinutes: 8,
    isFeatured: true,
    datePublished: 'Aug 2026',
    tag: 'Essential Guide'
  },
  {
    id: 'guide_2',
    title: 'Auto Loan Basics: APR, Terms, and Credit Scores',
    summary: 'Understand how interest rates are calculated, the pros and cons of different loan terms, and how to improve your rate.',
    fullContent: `Financing a used car in the US involves several key factors that determine your monthly payment and total cost.

1. Annual Percentage Rate (APR)
This is the interest rate you'll pay on your loan. It's heavily influenced by your credit score. Generally, scores above 700 get the best rates.

2. Loan Term
Most auto loans range from 36 to 72 months. While longer terms lower your monthly payment, they increase the total interest you'll pay over the life of the loan.

3. Down Payment
Aim for at least 10-20% down. This reduces your loan amount, can lower your interest rate, and helps prevent you from becoming "upside down" on the loan (owing more than the car is worth).

4. Pre-Approval
Get pre-approved for a loan from your bank or credit union before visiting a dealership. This gives you leverage and helps you stay within your budget.`,
    category: 'Finance',
    readTimeMinutes: 6,
    isFeatured: true,
    datePublished: 'Aug 2026',
    tag: 'Finance Guide'
  },
  {
    id: 'guide_4',
    title: 'How to Lower Your US Auto Insurance Premium',
    summary: 'Proven strategies to reduce annual premiums: multi-policy bundling, defensive driving, and higher deductibles.',
    fullContent: `US auto insurance costs can be optimized by following these industry-tested recommendations:

1. Bundle Your Policies
Combine your auto insurance with homeowners or renters insurance. Most US providers like GEICO, State Farm, and Progressive offer significant "bundling" discounts.

2. Increase Your Deductible
Raising your deductible (e.g., from $500 to $1,000) can lower your monthly premium significantly. Just ensure you have the funds set aside in case of an accident.

3. Maintain a Good Credit Score
In most US states, your credit score directly impacts your insurance rate. Insurers view drivers with higher credit scores as lower risk.

4. Take a Defensive Driving Course
Many insurance companies offer discounts if you complete an accredited defensive driving or accident prevention course.

5. Ask About Telematics
Programs like Snapshot (Progressive) or Drive Safe & Save (State Farm) track your driving habits via an app or plug-in device. Safe drivers can save up to 30%.`,
    category: 'Insurance',
    readTimeMinutes: 5,
    datePublished: 'Aug 2026',
    tag: 'Money Saving'
  },
  {
    id: 'guide_5',
    title: 'The 10-Point Used Car Pre-Purchase Inspection',
    summary: 'A professional checklist for evaluating a used vehicle\'s condition before you sign the contract.',
    fullContent: `Don't buy a used car without checking these 10 critical points. A thorough inspection can save you thousands in future repairs.

1. Fluid Levels and Condition
Check the engine oil (should not be black or gritty), transmission fluid (should be reddish, not burnt smelling), and coolant. Milky oil indicates a potential head gasket failure.

2. Tire Tread and Wear Patterns
Uneven wear suggests alignment or suspension issues. Check for "dry rot" cracks on sidewalls, which means the tires need immediate replacement.

3. Brake Performance and Rotor Condition
Listen for squealing or grinding. Pulsing in the pedal during braking often indicates warped rotors.

4. Frame and Body Alignment
Look for inconsistent gaps between body panels. This is a primary indicator of past major accident repairs that weren't reported.

5. Interior Tech and Electronics
Test every button. Check the AC (cold), heater (hot), all windows, and the infotainment system. Electronic repairs can be deceptively expensive.

6. Exhaust Smoke Colors
Blue smoke means burning oil. White smoke (after warm-up) suggests coolant leaking into the engine. Black smoke indicates the engine is running too rich.

7. Suspension Bounce Test
Push down hard on each corner of the car. It should bounce once and stop. Continuous bouncing means the shocks or struts are shot.

8. Service History Log
A well-documented service history is worth more than a low price. It proves the previous owner cared for the mechanical health of the vehicle.

9. Transmission Shift Quality
During the test drive, ensure the car shifts smoothly without hesitation or "hunting" for gears.

10. The 'Flood Damage' Sniff Test
Smell for mustiness inside. Look under the carpets and spare tire well for silt or water lines, which indicate the car was submerged in a flood.`,
    category: 'Inspection',
    readTimeMinutes: 10,
    datePublished: 'Aug 2026',
    tag: 'Expert Tips'
  },
  {
    id: 'guide_6',
    title: 'Understanding US Title Status: Clean vs. Salvage',
    summary: 'Learn the crucial differences between vehicle titles and why \'branded\' titles can be a financial risk.',
    fullContent: `In the US, a vehicle's title is its most important document. Understanding the 'brand' on a title is essential for any buyer.

1. Clean Title
The vehicle has never been declared a total loss by an insurance company. This is the preferred status for most buyers and lenders.

2. Salvage Title
The car was damaged to the point where repair costs exceeded a certain percentage of its value (usually 75-90%). These cars are difficult to insure and have very low resale value.

3. Rebuilt Title
A salvage vehicle that has been repaired and inspected by the state to be roadworthy again. While better than salvage, it still carries a stigma and lower value.

4. Lemon Law Title
The manufacturer bought the car back from the original owner due to persistent, unfixable defects. Proceed with extreme caution.

5. Flood Title
The vehicle was submerged in water deep enough to fill the engine compartment. Electrical issues in these cars often appear months or years later.`,
    category: 'Legal',
    readTimeMinutes: 7,
    datePublished: 'Aug 2026',
    tag: 'Buyer Beware'
  },
  {
    id: 'guide_7',
    title: 'Mastering Car Price Negotiation',
    summary: 'Psychological tips and data-driven strategies to get the absolute best price from dealerships or private sellers.',
    fullContent: `Negotiating doesn't have to be stressful. Follow these rules to keep the upper hand.

1. Know the Numbers First
Use Edmunds TMV or KBB values before you even talk to the seller. Knowing the "fair purchase price" gives you a concrete target.

2. Separate the Trade-In
If buying from a dealer, never negotiate the new car price and your trade-in value at the same time. Treat them as two separate transactions to avoid "shell game" pricing.

3. The Power of Walking Away
The strongest negotiating tool you have is your feet. If the price isn't right, walk away. Dealers will often call you back with a better offer within 24 hours.

4. Focus on the Out-the-Door Price
Dealers love to talk about "monthly payments." Ignore this. Only negotiate the "Out-the-Door" (OTD) price, which includes all taxes, tags, and fees.

5. Be Polite but Firm
You don't need to be aggressive to win. Being a calm, informed buyer makes the seller take your offers more seriously.`,
    category: 'Negotiation',
    readTimeMinutes: 6,
    datePublished: 'Aug 2026',
    tag: 'Money Saving'
  }
];

export const POPULAR_MAKES = [
  'All Makes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Jeep', 
  'BMW', 'Mercedes-Benz', 'Hyundai', 'Subaru', 'Kia', 'Lexus', 'Audi', 'Tesla'
];

export const BODY_TYPES = [
  'All Types', 'Sedan', 'SUV', 'Truck', 'Coupe', 'Hatchback', 'Van/Minivan', 'Convertible', 'Wagon'
];

export const US_STATES = [
  { code: 'AL', name: 'Alabama', tax: 4.0 },
  { code: 'AK', name: 'Alaska', tax: 0.0 },
  { code: 'AZ', name: 'Arizona', tax: 5.6 },
  { code: 'AR', name: 'Arkansas', tax: 6.5 },
  { code: 'CA', name: 'California', tax: 7.25 },
  { code: 'CO', name: 'Colorado', tax: 2.9 },
  { code: 'CT', name: 'Connecticut', tax: 6.35 },
  { code: 'DE', name: 'Delaware', tax: 0.0 },
  { code: 'FL', name: 'Florida', tax: 6.0 },
  { code: 'GA', name: 'Georgia', tax: 6.6 },
  { code: 'HI', name: 'Hawaii', tax: 4.0 },
  { code: 'ID', name: 'Idaho', tax: 6.0 },
  { code: 'IL', name: 'Illinois', tax: 6.25 },
  { code: 'IN', name: 'Indiana', tax: 7.0 },
  { code: 'IA', name: 'Iowa', tax: 5.0 },
  { code: 'KS', name: 'Kansas', tax: 6.5 },
  { code: 'KY', name: 'Kentucky', tax: 6.0 },
  { code: 'LA', name: 'Louisiana', tax: 4.45 },
  { code: 'ME', name: 'Maine', tax: 5.5 },
  { code: 'MD', name: 'Maryland', tax: 6.0 },
  { code: 'MA', name: 'Massachusetts', tax: 6.25 },
  { code: 'MI', name: 'Michigan', tax: 6.0 },
  { code: 'MN', name: 'Minnesota', tax: 6.875 },
  { code: 'MS', name: 'Mississippi', tax: 5.0 },
  { code: 'MO', name: 'Missouri', tax: 4.225 },
  { code: 'MT', name: 'Montana', tax: 0.0 },
  { code: 'NE', name: 'Nebraska', tax: 5.5 },
  { code: 'NV', name: 'Nevada', tax: 8.25 },
  { code: 'NH', name: 'New Hampshire', tax: 0.0 },
  { code: 'NJ', name: 'New Jersey', tax: 6.625 },
  { code: 'NM', name: 'New Mexico', tax: 4.0 },
  { code: 'NY', name: 'New York', tax: 4.0 },
  { code: 'NC', name: 'North Carolina', tax: 3.0 },
  { code: 'ND', name: 'North Dakota', tax: 5.0 },
  { code: 'OH', name: 'Ohio', tax: 5.75 },
  { code: 'OK', name: 'Oklahoma', tax: 3.25 },
  { code: 'OR', name: 'Oregon', tax: 0.0 },
  { code: 'PA', name: 'Pennsylvania', tax: 6.0 },
  { code: 'RI', name: 'Rhode Island', tax: 7.0 },
  { code: 'SC', name: 'South Carolina', tax: 5.0 },
  { code: 'SD', name: 'South Dakota', tax: 4.0 },
  { code: 'TN', name: 'Tennessee', tax: 7.0 },
  { code: 'TX', name: 'Texas', tax: 6.25 },
  { code: 'UT', name: 'Utah', tax: 6.85 },
  { code: 'VT', name: 'Vermont', tax: 6.0 },
  { code: 'VA', name: 'Virginia', tax: 4.15 },
  { code: 'WA', name: 'Washington', tax: 6.5 },
  { code: 'WV', name: 'West Virginia', tax: 6.0 },
  { code: 'WI', name: 'Wisconsin', tax: 5.0 },
  { code: 'WY', name: 'Wyoming', tax: 4.0 }
];
