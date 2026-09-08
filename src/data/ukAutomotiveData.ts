import { MarketplaceInfo, ProviderInfo, GuideArticle, PartnerConfig } from '../types';

export const UK_PARTNER_URLS: Record<string, PartnerConfig> = {
  // Buy Cars / Marketplaces
  autotrader: {
    partnerId: 'autotrader',
    name: 'AutoTrader UK',
    publicUrl: 'https://www.autotrader.co.uk/car-search',
    affiliateUrl: 'https://www.autotrader.co.uk/car-search?aff=usedcarsuk',
    isEnabled: true,
    priority: 1
  },
  gumtree: {
    partnerId: 'gumtree',
    name: 'Gumtree Cars',
    publicUrl: 'https://www.gumtree.com/cars',
    affiliateUrl: 'https://www.gumtree.com/cars?aff=usedcarsuk',
    isEnabled: true,
    priority: 2
  },
  carwow: {
    partnerId: 'carwow',
    name: 'carwow UK',
    publicUrl: 'https://www.carwow.co.uk/used-cars',
    affiliateUrl: 'https://www.carwow.co.uk/used-cars?aff=usedcarsuk',
    isEnabled: true,
    priority: 3
  },
  arnoldclark: {
    partnerId: 'arnoldclark',
    name: 'Arnold Clark',
    publicUrl: 'https://www.arnoldclark.com/used-cars',
    affiliateUrl: 'https://www.arnoldclark.com/used-cars?aff=usedcarsuk',
    isEnabled: true,
    priority: 4
  },
  googlecars: {
    partnerId: 'googlecars',
    name: 'Google Car Search UK',
    publicUrl: 'https://www.google.co.uk/search?q=used+cars+for+sale+uk',
    affiliateUrl: 'https://www.google.co.uk/search?q=used+cars+for+sale+uk',
    isEnabled: true,
    priority: 5
  },
  aacars: {
    partnerId: 'aacars',
    name: 'AA Cars',
    publicUrl: 'https://www.theaa.com/cars',
    affiliateUrl: 'https://www.theaa.com/cars',
    isEnabled: true,
    priority: 6
  },
  ebaymotors: {
    partnerId: 'ebaymotors',
    name: 'eBay Motors UK',
    publicUrl: 'https://www.ebay.co.uk/b/Cars/9801',
    affiliateUrl: 'https://www.ebay.co.uk/b/Cars/9801',
    isEnabled: true,
    priority: 7
  },
  pistonheads: {
    partnerId: 'pistonheads',
    name: 'PistonHeads',
    publicUrl: 'https://www.pistonheads.com/',
    affiliateUrl: 'https://www.pistonheads.com/',
    isEnabled: true,
    priority: 8
  },
  exchangeandmart: {
    partnerId: 'exchangeandmart',
    name: 'Exchange & Mart',
    publicUrl: 'https://www.exchangeandmart.co.uk/',
    affiliateUrl: 'https://www.exchangeandmart.co.uk/',
    isEnabled: true,
    priority: 9
  },
  vertumotors: {
    partnerId: 'vertumotors',
    name: 'Vertu Motors',
    publicUrl: 'https://www.vertumotors.com/used-cars/',
    affiliateUrl: 'https://www.vertumotors.com/used-cars/',
    isEnabled: true,
    priority: 10
  },
  evanshalshaw: {
    partnerId: 'evanshalshaw',
    name: 'Evans Halshaw',
    publicUrl: 'https://www.evanshalshaw.com/search/',
    affiliateUrl: 'https://www.evanshalshaw.com/search/',
    isEnabled: true,
    priority: 11
  },
  parkers: {
    partnerId: 'parkers',
    name: 'Parkers Cars',
    publicUrl: 'https://www.parkers.co.uk/cars-for-sale/',
    affiliateUrl: 'https://www.parkers.co.uk/cars-for-sale/?aff=usedcarsuk',
    isEnabled: true,
    priority: 12
  },
  raccars: {
    partnerId: 'raccars',
    name: 'RAC Cars',
    publicUrl: 'https://www.rac.co.uk/cars',
    affiliateUrl: 'https://www.rac.co.uk/cars?aff=usedcarsuk',
    isEnabled: true,
    priority: 13
  },
  motorpoint: {
    partnerId: 'motorpoint',
    name: 'Motorpoint',
    publicUrl: 'https://www.motorpoint.co.uk/used-cars',
    affiliateUrl: 'https://www.motorpoint.co.uk/used-cars',
    isEnabled: true,
    priority: 14
  },
  marshall: {
    partnerId: 'marshall',
    name: 'Marshall Motor Group',
    publicUrl: 'https://www.marshall.co.uk/used-cars/',
    affiliateUrl: 'https://www.marshall.co.uk/used-cars/',
    isEnabled: true,
    priority: 15
  },

  // Sell Cars & Valuations
  motorway: {
    partnerId: 'motorway',
    name: 'Motorway',
    publicUrl: 'https://motorway.co.uk',
    affiliateUrl: 'https://motorway.co.uk?aff=usedcarsuk',
    isEnabled: true,
    priority: 1
  },
  webuyanycar: {
    partnerId: 'webuyanycar',
    name: 'webuyanycar',
    publicUrl: 'https://www.webuyanycar.com',
    affiliateUrl: 'https://www.webuyanycar.com?aff=usedcarsuk',
    isEnabled: true,
    priority: 2
  },
  autotrader_sell: {
    partnerId: 'autotrader_sell',
    name: 'AutoTrader Sell My Car',
    publicUrl: 'https://www.autotrader.co.uk/sell-my-car',
    affiliateUrl: 'https://www.autotrader.co.uk/sell-my-car?aff=usedcarsuk',
    isEnabled: true,
    priority: 3
  },
  carwow_sell: {
    partnerId: 'carwow_sell',
    name: 'carwow Sell My Car',
    publicUrl: 'https://www.carwow.co.uk/sell-my-car',
    affiliateUrl: 'https://www.carwow.co.uk/sell-my-car?aff=usedcarsuk',
    isEnabled: true,
    priority: 4
  },
  arnoldclark_sell: {
    partnerId: 'arnoldclark_sell',
    name: 'Arnold Clark Sell My Car',
    publicUrl: 'https://www.arnoldclark.com/sell-my-car',
    affiliateUrl: 'https://www.arnoldclark.com/sell-my-car?aff=usedcarsuk',
    isEnabled: true,
    priority: 5
  },
  gumtree_sell: {
    partnerId: 'gumtree_sell',
    name: 'Gumtree Sell Car',
    publicUrl: 'https://www.gumtree.com/post',
    affiliateUrl: 'https://www.gumtree.com/post?aff=usedcarsuk',
    isEnabled: true,
    priority: 6
  },
  autotrader_valuation: {
    partnerId: 'autotrader_valuation',
    name: 'AutoTrader Free Car Valuation',
    publicUrl: 'https://www.autotrader.co.uk/car-valuation',
    affiliateUrl: 'https://www.autotrader.co.uk/car-valuation?aff=usedcarsuk',
    isEnabled: true,
    priority: 7
  },

  // Vehicle History & MOT
  gov_mot: {
    partnerId: 'gov_mot',
    name: 'GOV.UK MOT History',
    publicUrl: 'https://www.gov.uk/check-mot-history',
    affiliateUrl: 'https://www.gov.uk/check-mot-history',
    isEnabled: true,
    priority: 1
  },
  hpicheck: {
    partnerId: 'hpicheck',
    name: 'HPI Check',
    publicUrl: 'https://www.hpicheck.com',
    affiliateUrl: 'https://www.hpicheck.com?aff=usedcarsuk',
    isEnabled: true,
    priority: 2
  },
  carvertical: {
    partnerId: 'carvertical',
    name: 'carVertical UK',
    publicUrl: 'https://www.carvertical.com/uk',
    affiliateUrl: 'https://www.carvertical.com/uk?aff=usedcarsuk',
    isEnabled: true,
    priority: 3
  },

  // Car Finance
  autotrader_finance: {
    partnerId: 'autotrader_finance',
    name: 'AutoTrader Finance',
    publicUrl: 'https://www.autotrader.co.uk/car-finance',
    affiliateUrl: 'https://www.autotrader.co.uk/car-finance?aff=usedcarsuk',
    isEnabled: true,
    priority: 1
  },
  carwow_finance: {
    partnerId: 'carwow_finance',
    name: 'carwow Finance',
    publicUrl: 'https://www.carwow.co.uk/car-finance',
    affiliateUrl: 'https://www.carwow.co.uk/car-finance?aff=usedcarsuk',
    isEnabled: true,
    priority: 2
  },
  moneysupermarket_finance: {
    partnerId: 'moneysupermarket_finance',
    name: 'MoneySuperMarket Car Finance',
    publicUrl: 'https://www.moneysupermarket.com/car-finance/',
    affiliateUrl: 'https://www.moneysupermarket.com/car-finance/?aff=usedcarsuk',
    isEnabled: true,
    priority: 3
  },
  close_brothers: {
    partnerId: 'close_brothers',
    name: 'Close Brothers Motor Finance',
    publicUrl: 'https://www.closemotorfinance.co.uk',
    affiliateUrl: 'https://www.closemotorfinance.co.uk?aff=usedcarsuk',
    isEnabled: true,
    priority: 4
  },
  motonovo: {
    partnerId: 'motonovo',
    name: 'MotoNovo Finance',
    publicUrl: 'https://www.motonovofinance.com',
    affiliateUrl: 'https://www.motonovofinance.com?aff=usedcarsuk',
    isEnabled: true,
    priority: 5
  },
  zuto: {
    partnerId: 'zuto',
    name: 'Zuto Car Finance',
    publicUrl: 'https://www.zuto.com',
    affiliateUrl: 'https://www.zuto.com?aff=usedcarsuk',
    isEnabled: true,
    priority: 6
  },

  // Breakdown Cover
  theaa_breakdown: {
    partnerId: 'theaa_breakdown',
    name: 'AA Breakdown Cover',
    publicUrl: 'https://www.theaa.com/breakdown-cover',
    affiliateUrl: 'https://www.theaa.com/breakdown-cover?aff=usedcarsuk',
    isEnabled: true,
    priority: 1
  },
  rac_breakdown: {
    partnerId: 'rac_breakdown',
    name: 'RAC Breakdown Cover',
    publicUrl: 'https://www.rac.co.uk/breakdown-cover',
    affiliateUrl: 'https://www.rac.co.uk/breakdown-cover?aff=usedcarsuk',
    isEnabled: true,
    priority: 2
  },
  greenflag: {
    partnerId: 'greenflag',
    name: 'Green Flag',
    publicUrl: 'https://www.greenflag.com',
    affiliateUrl: 'https://www.greenflag.com?aff=usedcarsuk',
    isEnabled: true,
    priority: 3
  },
  britannia: {
    partnerId: 'britannia',
    name: 'Britannia Rescue (LV=)',
    publicUrl: 'https://www.lv.com/breakdown-cover',
    affiliateUrl: 'https://www.lv.com/breakdown-cover?aff=usedcarsuk',
    isEnabled: true,
    priority: 4
  },

  // Car Insurance
  comparethemarket: {
    partnerId: 'comparethemarket',
    name: 'Compare the Market',
    publicUrl: 'https://www.comparethemarket.com/car-insurance',
    affiliateUrl: 'https://www.comparethemarket.com/car-insurance?aff=usedcarsuk',
    isEnabled: true,
    priority: 1
  },
  moneysupermarket: {
    partnerId: 'moneysupermarket',
    name: 'MoneySuperMarket Insurance',
    publicUrl: 'https://www.moneysupermarket.com/car-insurance',
    affiliateUrl: 'https://www.moneysupermarket.com/car-insurance?aff=usedcarsuk',
    isEnabled: true,
    priority: 2
  },
  confused: {
    partnerId: 'confused',
    name: 'Confused.com',
    publicUrl: 'https://www.confused.com/car-insurance',
    affiliateUrl: 'https://www.confused.com/car-insurance?aff=usedcarsuk',
    isEnabled: true,
    priority: 3
  },
  gocompare: {
    partnerId: 'gocompare',
    name: 'Go.Compare',
    publicUrl: 'https://www.gocompare.com/car-insurance',
    affiliateUrl: 'https://www.gocompare.com/car-insurance?aff=usedcarsuk',
    isEnabled: true,
    priority: 4
  },

  // Tyres & Accessories (Amazon UK)
  amazon_tyres: {
    partnerId: 'amazon_tyres',
    name: 'Amazon UK Tyres & Wheels',
    publicUrl: 'https://www.amazon.co.uk/s?k=car+tyres+and+wheels',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=car+tyres+and+wheels&tag=usedcarsuk-21',
    isEnabled: true,
    priority: 1
  },
  amazon_accessories: {
    partnerId: 'amazon_accessories',
    name: 'Amazon UK Accessories & Care',
    publicUrl: 'https://www.amazon.co.uk/s?k=car+accessories+and+parts',
    affiliateUrl: 'https://www.amazon.co.uk/s?k=car+accessories+and+parts&tag=usedcarsuk-21',
    isEnabled: true,
    priority: 2
  },
  eurocarparts: {
    partnerId: 'eurocarparts',
    name: 'Euro Car Parts',
    publicUrl: 'https://www.eurocarparts.com',
    affiliateUrl: 'https://www.eurocarparts.com?aff=usedcarsuk',
    isEnabled: true,
    priority: 3
  },
  halfords: {
    partnerId: 'halfords',
    name: 'Halfords Motoring',
    publicUrl: 'https://www.halfords.com/motoring/',
    affiliateUrl: 'https://www.halfords.com/motoring/?aff=usedcarsuk',
    isEnabled: true,
    priority: 4
  }
};

export const UK_MARKETPLACES: MarketplaceInfo[] = [
  {
    id: 'autotrader',
    name: 'AutoTrader UK',
    category: 'Used & New Cars',
    description: "The UK's largest automotive marketplace with over 400,000+ verified cars for sale nationwide.",
    rating: 4.8,
    reviewsCount: '250,000+',
    benefits: ['400,000+ UK verified listings', 'Free vehicle history summary', 'Dealer reviews & transparent pricing'],
    badge: 'UK #1 Marketplace',
    webUrlKey: 'autotrader',
    isPopular: true,
    priority: 1
  },
  {
    id: 'carwow',
    name: 'carwow UK',
    category: 'New & Used Car Deals',
    description: 'Get verified dealership offers with clear upfront savings on brand new and nearly new approved cars.',
    rating: 4.7,
    reviewsCount: '80,000+',
    benefits: ['Upfront dealer pricing', 'Part-exchange quotes in minutes', 'Hassle-free negotiation'],
    badge: 'Best Dealer Offers',
    webUrlKey: 'carwow',
    isPopular: true,
    priority: 2
  },
  {
    id: 'gumtree',
    name: 'Gumtree Cars',
    category: 'Private & Dealer Classifieds',
    description: 'Popular UK classifieds platform for local private sellers, bargain vehicles, and local dealers.',
    rating: 4.5,
    reviewsCount: '120,000+',
    benefits: ['Local private sellers', 'Direct seller messaging', 'Bargains and quick sales'],
    badge: 'Top Classifieds',
    webUrlKey: 'gumtree',
    isPopular: true,
    priority: 3
  },
  {
    id: 'arnoldclark',
    name: 'Arnold Clark',
    category: 'Franchised Dealership Group',
    description: "Europe's largest independent car dealer group offering 20,000+ inspected cars with warranty.",
    rating: 4.6,
    reviewsCount: '65,000+',
    benefits: ['20,000+ quality checked cars', 'Click & Collect across the UK', 'Best Deal Guarantee'],
    badge: 'Top UK Dealer Group',
    webUrlKey: 'arnoldclark',
    isPopular: true,
    priority: 4
  },
  {
    id: 'aacars',
    name: 'AA Cars',
    category: 'AA Inspected Vehicles',
    description: 'Every car comes with free AA History Check and 12 months free AA Breakdown Cover.',
    rating: 4.7,
    reviewsCount: '45,000+',
    benefits: ['Free AA History Check', 'Free 12-Month AA Breakdown Cover', 'AA Approved Dealers'],
    badge: 'AA Verified',
    webUrlKey: 'aacars',
    priority: 5
  },
  {
    id: 'ebaymotors',
    name: 'eBay Motors UK',
    category: 'Online Vehicle Auctions & Classifieds',
    description: 'Huge variety of classic cars, modern daily drivers, project cars, and certified dealers.',
    rating: 4.5,
    reviewsCount: '300,000+',
    benefits: ['Auction and Buy-It-Now formats', 'Rare & classic vehicle models', 'Secure payment protection'],
    badge: 'Best Variety',
    webUrlKey: 'ebaymotors',
    priority: 6
  },
  {
    id: 'pistonheads',
    name: 'PistonHeads',
    category: 'Specialist & Performance Cars',
    description: "The UK's premier destination for performance, sports, track, luxury, and enthusiast cars.",
    rating: 4.8,
    reviewsCount: '40,000+',
    benefits: ['Verified enthusiast cars', 'Detailed seller spec sheets', 'Active community forums'],
    badge: 'Enthusiast Choice',
    webUrlKey: 'pistonheads',
    priority: 7
  },
  {
    id: 'motorpoint',
    name: 'Motorpoint',
    category: 'Car Supermarket',
    description: 'UK car supermarket specializing in nearly new, low mileage vehicles with price match promise.',
    rating: 4.6,
    reviewsCount: '50,000+',
    benefits: ['Price Match Promise', 'Low mileage nearly-new cars', 'Nationwide home delivery'],
    badge: 'Nearly New Specialist',
    webUrlKey: 'motorpoint',
    priority: 8
  },
  {
    id: 'raccars',
    name: 'RAC Cars',
    category: 'Inspected Used Vehicles',
    description: 'RAC BuySure guarantee on participating vehicles with multi-point vehicle health checks.',
    rating: 4.6,
    reviewsCount: '35,000+',
    benefits: ['RAC BuySure guarantee', 'Complimentary RAC breakdown cover', 'HPI checked listings'],
    badge: 'RAC Approved',
    webUrlKey: 'raccars',
    priority: 9
  },
  {
    id: 'parkers',
    name: 'Parkers Cars',
    category: 'Valuations & Classifieds',
    description: 'Trusted UK automotive buying guide with independent expert reviews, price checkers, and listings.',
    rating: 4.5,
    reviewsCount: '25,000+',
    benefits: ['Independent road test reviews', 'Accurate price valuations', 'Real-world MPG stats'],
    badge: 'Trusted Reviews',
    webUrlKey: 'parkers',
    priority: 10
  },
  {
    id: 'vertumotors',
    name: 'Vertu Motors',
    category: 'Franchised Dealerships',
    description: 'National dealer group representing Audi, BMW, Honda, Mercedes-Benz, Toyota, and Volkswagen.',
    rating: 4.6,
    reviewsCount: '30,000+',
    benefits: ['Manufacturer approved warranties', 'Flexible PCP & HP finance', 'Expert brand technicians'],
    webUrlKey: 'vertumotors',
    priority: 11
  },
  {
    id: 'evanshalshaw',
    name: 'Evans Halshaw',
    category: 'National Dealer Network',
    description: 'One of the UK’s leading volume motor retail networks offering used cars with Price Guarantee.',
    rating: 4.4,
    reviewsCount: '40,000+',
    benefits: ['Price Guarantee on all stock', 'Sell Your Car service', 'Move Me Closer branch delivery'],
    webUrlKey: 'evanshalshaw',
    priority: 12
  },
  {
    id: 'marshall',
    name: 'Marshall Motor Group',
    category: 'Prestige & Volume Dealerships',
    description: 'Top-tier UK motor group with 140+ franchised dealerships across England.',
    rating: 4.5,
    reviewsCount: '28,000+',
    benefits: ['140+ franchised locations', 'Manufacturer certified used cars', 'Complete service history'],
    webUrlKey: 'marshall',
    priority: 13
  },
  {
    id: 'exchangeandmart',
    name: 'Exchange & Mart',
    category: 'Classifieds Pioneer',
    description: 'One of the UK’s oldest and most established motoring classified advertising services.',
    rating: 4.3,
    reviewsCount: '15,000+',
    benefits: ['Simple classified browsing', 'Established UK motoring brand', 'Direct dealer contact'],
    webUrlKey: 'exchangeandmart',
    priority: 14
  }
];

export const UK_PROVIDERS: ProviderInfo[] = [
  // Valuation & Sell
  {
    id: 'motorway',
    name: 'Motorway',
    category: 'SELL',
    description: 'Sell your car 100% online directly to verified UK dealer network for the best possible price.',
    rating: 4.8,
    reviewsCount: '110,000+',
    keyRateOrFeature: 'Up to £1,000 more vs trade-in',
    benefits: ['5,000+ verified dealers bid on your car', 'Free home collection', 'Fast same-day payment'],
    badge: 'UK #1 Sell Online',
    partnerKey: 'motorway',
    publicUrl: 'https://motorway.co.uk',
    affiliateUrl: 'https://motorway.co.uk?aff=usedcarsuk',
    priority: 1
  },
  {
    id: 'webuyanycar',
    name: 'webuyanycar',
    category: 'SELL',
    description: 'Quickest way to sell your car in the UK with over 500+ local drop-off branches nationwide.',
    rating: 4.7,
    reviewsCount: '200,000+',
    keyRateOrFeature: 'Sell in under an hour',
    benefits: ['500+ convenient local branches', 'Instant valuation in 30 seconds', 'Immediate payment option'],
    badge: 'Fastest Sale',
    partnerKey: 'webuyanycar',
    publicUrl: 'https://www.webuyanycar.com',
    affiliateUrl: 'https://www.webuyanycar.com?aff=usedcarsuk',
    priority: 2
  },
  {
    id: 'autotrader_sell',
    name: 'AutoTrader Sell My Car',
    category: 'SELL',
    description: 'Choose between instant cash offer or create a private advert seen by millions of UK buyers.',
    rating: 4.8,
    reviewsCount: '95,000+',
    keyRateOrFeature: 'Instant Offer or Private Ad',
    benefits: ['Reach 10M+ UK car buyers', 'Instant cash offer guarantee', 'Smart advert builder'],
    badge: 'Maximum Reach',
    partnerKey: 'autotrader_sell',
    publicUrl: 'https://www.autotrader.co.uk/sell-my-car',
    affiliateUrl: 'https://www.autotrader.co.uk/sell-my-car?aff=usedcarsuk',
    priority: 3
  },
  {
    id: 'carwow_sell',
    name: 'carwow Sell My Car',
    category: 'SELL',
    description: 'Sell to 4,000+ trusted dealers who compete with their best cash bids. Hassle-free home collection.',
    rating: 4.8,
    reviewsCount: '80,000+',
    keyRateOrFeature: 'Dealers Bid For Your Car',
    benefits: ['4,000+ trusted dealers bid', '100% free to sell', 'Free doorstep collection'],
    badge: 'Dealer Bidding',
    partnerKey: 'carwow_sell',
    publicUrl: 'https://www.carwow.co.uk/sell-my-car',
    affiliateUrl: 'https://www.carwow.co.uk/sell-my-car?aff=usedcarsuk',
    priority: 4
  },
  {
    id: 'arnoldclark_sell',
    name: 'Arnold Clark Sell Your Car',
    category: 'SELL',
    description: 'Sell your car directly to Europe’s largest independent car retailer with guaranteed best price.',
    rating: 4.7,
    reviewsCount: '70,000+',
    keyRateOrFeature: 'Best Deal Guarantee',
    benefits: ['200+ local branches', 'Fast bank transfer payment', 'No hidden admin fees'],
    badge: 'Direct Retailer',
    partnerKey: 'arnoldclark_sell',
    publicUrl: 'https://www.arnoldclark.com/sell-my-car',
    affiliateUrl: 'https://www.arnoldclark.com/sell-my-car?aff=usedcarsuk',
    priority: 5
  },
  {
    id: 'autotrader_valuation',
    name: 'AutoTrader Valuation',
    category: 'VALUATION',
    description: 'Free, accurate UK market valuation based on millions of real-time market data points.',
    rating: 4.9,
    reviewsCount: '150,000+',
    keyRateOrFeature: 'Free Real-time Valuation',
    benefits: ['Private sale valuation', 'Part-exchange estimate', 'Dealer forecourt value'],
    badge: 'Most Accurate',
    partnerKey: 'autotrader_valuation',
    publicUrl: 'https://www.autotrader.co.uk/car-valuation',
    affiliateUrl: 'https://www.autotrader.co.uk/car-valuation?aff=usedcarsuk',
    priority: 1
  },

  // Vehicle History & MOT
  {
    id: 'gov_mot',
    name: 'GOV.UK MOT History',
    category: 'HISTORY',
    description: 'Official UK government database to check a vehicle MOT status, test history, advisories, and recorded mileage.',
    rating: 4.9,
    reviewsCount: 'Official UK Portal',
    keyRateOrFeature: '100% Free Official Record',
    benefits: ['Complete MOT pass/fail history', 'Mileage discrepancy alerts', 'Official DVSA failure reasons & advisories'],
    badge: 'Official & Free',
    partnerKey: 'gov_mot',
    priority: 1
  },
  {
    id: 'hpicheck',
    name: 'HPI Check®',
    category: 'HISTORY',
    description: 'The definitive vehicle history check in the UK. Identifies outstanding finance, write-offs, and stolen markers.',
    rating: 4.8,
    reviewsCount: '80,000+',
    keyRateOrFeature: 'Up to £30k Guarantee',
    benefits: ['Outstanding finance detection', 'Insurance write-off register (Cat S/N/A/B)', 'Stolen vehicle register check'],
    badge: 'Gold Standard',
    partnerKey: 'hpicheck',
    priority: 2
  },
  {
    id: 'carvertical',
    name: 'carVertical UK',
    category: 'HISTORY',
    description: 'Comprehensive blockchain-backed vehicle report with damage photos, theft records, and historical odometer logs.',
    rating: 4.7,
    reviewsCount: '60,000+',
    keyRateOrFeature: 'Photo Damage Archive',
    benefits: ['Archived accident photos', 'Mileage rollback detector', 'European import history'],
    badge: 'Photo Reports',
    partnerKey: 'carvertical',
    priority: 3
  },

  // Car Finance
  {
    id: 'zuto',
    name: 'Zuto Car Finance',
    category: 'FINANCE',
    description: 'UK car finance broker comparing 15+ trusted lenders with soft credit search that does not impact your credit score.',
    rating: 4.7,
    reviewsCount: '25,000+',
    keyRateOrFeature: 'Soft Search / 15+ Lenders',
    benefits: ['No impact on credit rating to check', 'Buy from any reputable UK dealer', 'Bad credit & self-employed considered'],
    badge: 'Soft Credit Search',
    partnerKey: 'zuto',
    priority: 1
  },
  {
    id: 'moneysupermarket_finance',
    name: 'MoneySuperMarket Finance',
    category: 'FINANCE',
    description: 'Compare low-rate personal car loans and HP/PCP finance deals tailored to your financial profile.',
    rating: 4.8,
    reviewsCount: '90,000+',
    keyRateOrFeature: 'Compare Personal Loans & HP',
    benefits: ['Low representative APR rates', 'Eligibility check before applying', 'Compare top UK banks'],
    badge: 'Best Comparison',
    partnerKey: 'moneysupermarket_finance',
    priority: 2
  },
  {
    id: 'autotrader_finance',
    name: 'AutoTrader Finance',
    category: 'FINANCE',
    description: 'Explore personalized finance quotes directly on thousands of used car listings.',
    rating: 4.7,
    reviewsCount: '40,000+',
    keyRateOrFeature: 'Instant In-Search Quotes',
    benefits: ['PCP and HP payment sliders', 'Pre-approval with soft credit check', 'Integrated dealer finance'],
    partnerKey: 'autotrader_finance',
    priority: 3
  },
  {
    id: 'motonovo',
    name: 'MotoNovo Finance',
    category: 'FINANCE',
    description: 'Major UK point-of-sale motor finance provider helping thousands of motorists buy used vehicles.',
    rating: 4.5,
    reviewsCount: '30,000+',
    keyRateOrFeature: 'Dealer Point of Sale',
    benefits: ['Approved dealer network', 'Manage account with MotoRate app', 'Flexible payment terms'],
    partnerKey: 'motonovo',
    priority: 4
  },
  {
    id: 'close_brothers',
    name: 'Close Brothers Motor Finance',
    category: 'FINANCE',
    description: 'Specialist UK motor finance provider working with over 8,000 franchised and independent dealers.',
    rating: 4.5,
    reviewsCount: '20,000+',
    keyRateOrFeature: '8,000+ UK Dealers',
    benefits: ['Bespoke finance solutions', 'Hire Purchase & Conditional Sale', 'Dedicated account managers'],
    partnerKey: 'close_brothers',
    priority: 5
  },

  // Breakdown Cover
  {
    id: 'theaa_breakdown',
    name: 'AA Breakdown Cover',
    category: 'BREAKDOWN',
    description: 'The UK’s largest breakdown recovery provider with more patrol vans and mechanics than anyone else.',
    rating: 4.8,
    reviewsCount: '130,000+',
    keyRateOrFeature: 'Fixes 8/10 at roadside',
    benefits: ['8 out of 10 cars fixed at roadside', 'Smart Breakdown app with GPS tracking', 'Free vehicle health checks'],
    badge: 'UK #1 Breakdown',
    partnerKey: 'theaa_breakdown',
    priority: 1
  },
  {
    id: 'rac_breakdown',
    name: 'RAC Breakdown Cover',
    category: 'BREAKDOWN',
    description: 'RAC patrols fix 4 out of 5 cars on the spot with universal spare wheel and battery replacement.',
    rating: 4.7,
    reviewsCount: '100,000+',
    keyRateOrFeature: 'All-weather 24/7 Patrols',
    benefits: ['Electric vehicle mobile charging boost', 'RAC All-Wheels-Up recovery system', 'Free UK rescue app'],
    badge: 'Fast Arrival',
    partnerKey: 'rac_breakdown',
    priority: 2
  },
  {
    id: 'greenflag',
    name: 'Green Flag',
    category: 'BREAKDOWN',
    description: 'Great value UK breakdown cover with a national network of local independent breakdown mechanics.',
    rating: 4.5,
    reviewsCount: '30,000+',
    keyRateOrFeature: 'Affordable Value Cover',
    benefits: ['50% cheaper than renewal quotes', 'Local expert mechanics', 'Discounts for low annual mileage'],
    badge: 'Best Value',
    partnerKey: 'greenflag',
    priority: 3
  },
  {
    id: 'britannia',
    name: 'Britannia Rescue (LV=)',
    category: 'BREAKDOWN',
    description: 'Award-winning breakdown cover backed by LV= insurance with 4,000+ recovery technicians.',
    rating: 4.6,
    reviewsCount: '20,000+',
    keyRateOrFeature: 'Defaqto 5-Star Rated',
    benefits: ['Onward travel & hotel cover', 'UK & European options', 'LV= customer discounts'],
    partnerKey: 'britannia',
    priority: 4
  },

  // Car Insurance
  {
    id: 'comparethemarket',
    name: 'Compare the Market',
    category: 'INSURANCE',
    description: 'Compare over 100+ UK car insurance providers and get rewards with Meerkat Meals and Cinema tickets.',
    rating: 4.8,
    reviewsCount: '250,000+',
    keyRateOrFeature: 'Meerkat Meals & Cinema',
    benefits: ['100+ UK insurance brands', '51% could save up to £504', '1 year of Meerkat Rewards'],
    badge: 'Most Popular UK',
    partnerKey: 'comparethemarket',
    priority: 1
  },
  {
    id: 'moneysupermarket',
    name: 'MoneySuperMarket Insurance',
    category: 'INSURANCE',
    description: 'Compare comprehensive, third party fire & theft quotes with price comparison guarantee.',
    rating: 4.7,
    reviewsCount: '180,000+',
    keyRateOrFeature: 'Compare 110+ Insurers',
    benefits: ['Huge panel of UK underwriters', 'SuperSave price alerts', 'Tailored voluntary excess'],
    badge: 'Top Savings',
    partnerKey: 'moneysupermarket',
    priority: 2
  },
  {
    id: 'confused',
    name: 'Confused.com',
    category: 'INSURANCE',
    description: 'The first comparison site in the UK helping millions of drivers find cheaper car insurance quotes.',
    rating: 4.6,
    reviewsCount: '140,000+',
    keyRateOrFeature: 'Quick 5-minute Quote',
    benefits: ['Guaranteed price match guarantee', 'Exclusive rewards on purchase', 'Telematics & black box options'],
    badge: 'Pioneer Comparison',
    partnerKey: 'confused',
    priority: 3
  },
  {
    id: 'gocompare',
    name: 'Go.Compare',
    category: 'INSURANCE',
    description: 'Compare comprehensive motor cover with £250 free excess cover included on qualifying policies.',
    rating: 4.6,
    reviewsCount: '100,000+',
    keyRateOrFeature: 'Free £250 Excess Cover',
    benefits: ['£250 free excess refund cover', 'Independent Defaqto star ratings', 'Clear policy exclusions breakdown'],
    badge: 'Free Excess Cover',
    partnerKey: 'gocompare',
    priority: 4
  },

  // Parts & Accessories
  {
    id: 'amazon_tyres',
    name: 'Amazon UK Tyres & Alloys',
    category: 'PARTS',
    description: 'Premium Michelin, Goodyear, Pirelli tyres, alloy wheels, tyre inflators, and puncture repair kits.',
    rating: 4.7,
    reviewsCount: 'Amazon Prime Next-Day',
    keyRateOrFeature: 'Prime Next-Day Delivery',
    benefits: ['Fast Prime UK delivery', 'Customer verified reviews', 'Tyre pressure gauges & 12V compressors'],
    badge: 'Amazon Prime',
    partnerKey: 'amazon_tyres',
    priority: 1
  },
  {
    id: 'amazon_accessories',
    name: 'Amazon UK Auto Accessories',
    category: 'PARTS',
    description: 'Car care kits, Meguiar’s shampoo, dash cameras, OBD2 diagnostic scanners, and roof racks.',
    rating: 4.8,
    reviewsCount: '500,000+ Auto Items',
    keyRateOrFeature: 'Top Rated Auto Gadgets',
    benefits: ['Dash cams & GPS navigators', 'Professional detailing & ceramic coatings', 'Bluetooth FM transmitters & phone mounts'],
    badge: 'Best Sellers',
    partnerKey: 'amazon_accessories',
    priority: 2
  },
  {
    id: 'eurocarparts',
    name: 'Euro Car Parts',
    category: 'PARTS',
    description: 'The UK’s largest distributor of car parts, batteries, brake discs, oils, and filters with 250+ branches.',
    rating: 4.7,
    reviewsCount: '300,000+',
    keyRateOrFeature: 'Same-Day Click & Collect',
    benefits: ['250+ UK branches', 'Reg number car parts finder', 'Free UK delivery over £25'],
    badge: 'UK #1 Parts Retailer',
    partnerKey: 'eurocarparts',
    priority: 3
  },
  {
    id: 'halfords',
    name: 'Halfords Motoring',
    category: 'PARTS',
    description: 'UK nationwide motoring retailer offering free battery health checks, wiper blade fitting, dash cams, and roof boxes.',
    rating: 4.6,
    reviewsCount: '150,000+',
    keyRateOrFeature: 'WeFit In-Store Service',
    benefits: ['Free 5-point car check', 'WeFit battery & bulb fitting', 'Cycle & roof rack equipment'],
    badge: 'Motoring Specialist',
    partnerKey: 'halfords',
    priority: 4
  }
];

export const UK_ARTICLES: GuideArticle[] = [
  {
    id: 'guide_uk_1',
    title: 'How to Buy a Used Car Safely in the UK',
    summary: '10 essential inspection steps, test drive tips, V5C logbook verification, and fraud prevention advice.',
    fullContent: `Buying a used car in the UK is an exciting milestone, but thorough preparation is vital to avoid costly surprises.

1. Always Inspect in Daylight
Never inspect a car in the dark, in heavy rain, or under artificial garage lighting. Water droplets and shadows can hide scratches, bodywork dents, or uneven paint lines that indicate past accident repairs.

2. Verify the V5C Logbook
Ensure the seller's V5C registration document is genuine. Check that the document watermark is present when held to the light, and verify that the VIN (Vehicle Identification Number) on the logbook matches the VIN stamped on the car chassis and dashboard.

3. Perform an Independent History Check
A V5C alone does not prove the car is free of debt. Run a Vehicle History Check using Experian, HPI, or carVertical to confirm the car has no outstanding finance, has never been declared a total loss write-off (Category A, B, S, or N), and is not reported stolen.

4. Check MOT History Online on GOV.UK
Use the free GOV.UK MOT history tool to review past test results. Pay close attention to recurring advisories such as corroded brake pipes, worn suspension bushes, or oil leaks that could require expensive maintenance soon.

5. Take a 20-Minute Cold Test Drive
Insist on starting the engine when it is completely cold. Watch for unusual exhaust smoke, check that all dashboard warning lights illuminate and turn off properly, and test all gears, clutch biting point, air conditioning, and electrical accessories.`,
    category: 'Buying Guides',
    readTimeMinutes: 8,
    isFeatured: true,
    tag: 'Essential Guide'
  },
  {
    id: 'guide_uk_2',
    title: 'PCP vs Hire Purchase (HP) Car Finance Explained',
    summary: 'Understand monthly payment structures, balloon payments, mileage limits, and ownership at the end of agreement.',
    fullContent: `Choosing between Personal Contract Purchase (PCP) and Hire Purchase (HP) can save you thousands of pounds over your finance term.

What is Hire Purchase (HP)?
With HP, you pay a deposit followed by equal monthly payments over 2 to 5 years. Once the final payment (plus an option-to-purchase fee around £10) is made, you own the car outright. There are no annual mileage restrictions or wear-and-tear penalties.

What is Personal Contract Purchase (PCP)?
PCP offers lower monthly payments than HP because a large portion of the car's value is deferred until the end of the contract as a "Balloon Payment" (Guaranteed Minimum Future Value / GMFV).

At the end of a PCP agreement, you have 3 options:
1. Pay the balloon payment to keep the car.
2. Hand the car back to the finance company with nothing more to pay (provided mileage and condition terms are met).
3. Part-exchange the car using any equity above the balloon payment as a deposit for your next vehicle.

Which should you choose?
- Choose HP if you want to own the car long-term with no mileage limits.
- Choose PCP if you prefer lower monthly costs and like changing your car every 3 years.`,
    category: 'Finance',
    readTimeMinutes: 6,
    isFeatured: true,
    tag: 'Finance Guide'
  },
  {
    id: 'guide_uk_3',
    title: 'Best Reliable Used Cars Under £10,000 in the UK',
    summary: 'Top dependable family hatchbacks, SUVs, and commuter cars with low road tax and solid resale value.',
    fullContent: `With a £10,000 budget, you can buy a well-maintained, reliable used vehicle in the UK with modern tech, low emissions, and great fuel economy.

1. Toyota Yaris / Corolla (Hybrid)
Renowned for bulletproof reliability, low road tax, and incredible urban fuel economy (60+ MPG). Toyota's self-charging hybrid system is low-maintenance and highly durable.

2. Ford Fiesta 1.0 EcoBoost (Post-2018)
The UK's best-selling hatchback offers sharp handling, cheap spare parts, and excellent availability. Ensure wet timing belt service intervals have been strictly adhered to.

3. Honda Civic 1.8 i-VTEC or 1.6 i-DTEC
Spacious boot, futuristic dashboard, and class-leading mechanical dependability make the Civic an outstanding long-distance cruiser.

4. Volkswagen Golf Mk7 / Mk7.5
Refined build quality, quiet highway ride, and timeless styling. The 1.4 TSI and 2.0 TDI engines offer the perfect balance of performance and efficiency.

5. Kia Sportage / Hyundai Tucson (2016-2019)
Practical family SUVs with high seating positions, generous equipment levels, and strong manufacturer reliability ratings.`,
    category: 'Reviews',
    readTimeMinutes: 7,
    tag: 'Top Picks'
  },
  {
    id: 'guide_uk_4',
    title: 'How to Lower Your UK Car Insurance Premium',
    summary: 'Proven strategies to reduce annual premiums: renewal timing, voluntary excess, named drivers, and security devices.',
    fullContent: `UK car insurance costs can be optimized by following these industry-tested recommendations:

- Buy 20-26 Days Before Renewal: Insurers view drivers who renew last-minute as higher risk. Purchasing quotes 3 weeks in advance can lower quotes significantly.
- Add an Experienced Named Driver: Adding a parent or spouse with a clean driving record and high NCB can reduce risk profiling for young drivers.
- Tweak Your Job Title Legitimately: Using "Administrator" instead of "Clerk", or "Kitchen Staff" instead of "Chef" can alter insurance band risk calculations while remaining accurate.
- Increase Voluntary Excess Reasonably: Agreeing to a slightly higher voluntary excess lowers the insurer's potential payout, reducing your annual premium.`,
    category: 'Insurance',
    readTimeMinutes: 5,
    tag: 'Money Saving'
  }
];

export const UK_POPULAR_MAKES = [
  'Ford',
  'Vauxhall',
  'Volkswagen',
  'BMW',
  'Audi',
  'Mercedes-Benz',
  'Toyota',
  'Nissan',
  'Kia',
  'Hyundai',
  'Honda',
  'Peugeot',
  'Renault',
  'Skoda',
  'Land Rover',
  'Volvo',
  'SEAT',
  'MINI',
  'Mazda',
  'Jaguar',
  'Tesla',
  'Porsche'
];

export const UK_POSTCODES = [
  'SW1A 1AA (Central London)',
  'B1 1BB (Birmingham)',
  'M1 1AE (Manchester)',
  'LS1 1BA (Leeds)',
  'G1 1DA (Glasgow)',
  'BS1 1AA (Bristol)',
  'EH1 1YZ (Edinburgh)',
  'CF10 1EP (Cardiff)',
  'BT1 1AA (Belfast)',
  'NE1 1AD (Newcastle)',
  'S1 1AA (Sheffield)',
  'L1 1AA (Liverpool)',
  'NG1 1AA (Nottingham)',
  'SO14 0AA (Southampton)'
];

export const UK_REGIONS = [
  { code: 'LON', name: 'Greater London' },
  { code: 'SE', name: 'South East England' },
  { code: 'NW', name: 'North West England' },
  { code: 'WM', name: 'West Midlands' },
  { code: 'EM', name: 'East Midlands' },
  { code: 'YOR', name: 'Yorkshire and the Humber' },
  { code: 'SW', name: 'South West England' },
  { code: 'EE', name: 'East of England' },
  { code: 'NE', name: 'North East England' },
  { code: 'SCT', name: 'Scotland' },
  { code: 'WLS', name: 'Wales' },
  { code: 'NIR', name: 'Northern Ireland' }
];

