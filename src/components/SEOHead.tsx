import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

interface RouteSEOConfig {
  title: string;
  description: string;
  keywords?: string;
  schemaType?: string;
  schemaData?: Record<string, any>;
}

export const SEOHead: React.FC = () => {
  const { currentRoute, regionConfig, routeParams } = useApp();
  const regionName = regionConfig.name;
  const isUk = regionConfig.id === 'uk';
  const isCa = regionConfig.id === 'ca';
  const currency = regionConfig.currencySymbol;

  useEffect(() => {
    const getRouteSEO = (): RouteSEOConfig => {
      switch (currentRoute) {
        case 'home':
          return {
            title: `${regionConfig.shortName} - Automotive Companion | Buy, Sell, Value Cars & Auto Loans`,
            description: `Compare 15+ top ${regionName} automotive marketplaces, get free instant car valuations, calculate loan payments, check VIN history, and compare auto insurance with ${regionConfig.shortName}.`,
            keywords: `used cars ${regionName}, buy used cars, sell car, car valuation, auto loan calculator, VIN check, car insurance, CarQix`,
            schemaType: 'WebApplication',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              'name': regionConfig.shortName,
              'applicationCategory': 'AutomotiveApplication',
              'operatingSystem': 'Web, Android, iOS',
              'description': `${regionName} Automotive Companion Platform - Buy, Sell, Value Cars, Compare Finance, Insurance & Smart Calculators.`,
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': regionConfig.currencyCode
              }
            }
          };

        case 'buy_cars':
          return {
            title: `Buy Used Cars & Compare Best Deals in ${regionName} | CarQix`,
            description: `Search & compare over 500,000 certified used cars in ${regionName}. Filter by price, mileage, make, model and body style across premier certified dealerships.`,
            keywords: `used cars for sale ${regionName}, cheap used cars, certified pre-owned, buy car online, CarQix`,
            schemaType: 'ItemList',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              'name': `Used Cars for Sale in ${regionName}`,
              'description': `Top certified used car marketplace listings across ${regionName}.`,
              'itemListOrder': 'https://schema.org/ItemListOrderDescending',
              'numberOfItems': 15
            }
          };

        case 'sell_car':
          return {
            title: `Sell Your Car Online Fast for Top Cash in ${regionName} | CarQix`,
            description: `Get instant cash offers and top dealer trade-in valuations for your vehicle in ${regionName}. Compare instant buyer rates and maximize your car's resale value.`,
            keywords: `sell my car ${regionName}, cash for cars, car trade in value, instant offer, CarQix`,
            schemaType: 'Service',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': `Online Car Selling & Instant Offer Aggregator`,
              'provider': {
                '@type': 'Organization',
                'name': 'CarQix'
              },
              'areaServed': regionName,
              'description': `Instant cash offer comparison and private listing tools to sell your car for top value in ${regionName}.`
            }
          };

        case 'value_car':
          return {
            title: `Free Car Valuation & Real-Time Price Estimator (${regionName}) | CarQix`,
            description: `Calculate your vehicle's exact market value in seconds. Accurate private party, trade-in, and dealer retail valuations updated with current market trends.`,
            keywords: `car valuation, car price estimator, what is my car worth, used car value ${regionName}, CarQix`,
            schemaType: 'WebApplication',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              'name': `CarQix Free Car Valuation Tool`,
              'applicationCategory': 'FinanceApplication',
              'description': `Accurate market valuation engine calculating trade-in, private party, and dealer values across ${regionName}.`
            }
          };

        case 'vehicle_history':
          return {
            title: isUk 
              ? `Free UK MOT History & DVLA Vehicle Check | CarQix UK`
              : `VIN Check & Vehicle History Report (${regionName}) | CarQix`,
            description: `Check full vehicle history, salvage records, title brands, odometer rollbacks, past accidents, theft status, and open recalls before you buy.`,
            keywords: `VIN check, vehicle history report, CARFAX, NMVTIS, MOT history check, mileage rollback, CarQix`,
            schemaType: 'Service',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': `Vehicle History & VIN Verification Suite`,
              'provider': { '@type': 'Organization', 'name': 'CarQix' },
              'description': `Comprehensive VIN decoding, accident history, and title verification for vehicles in ${regionName}.`
            }
          };

        case 'car_finance':
          return {
            title: `Auto Loan & Finance Calculator (${currency} Rates & Amortization) | CarQix`,
            description: `Compare auto financing options, compute monthly car payments, interest rates, and loan terms from 24 to 84 months with the CarQix finance calculator.`,
            keywords: `car finance calculator, auto loan rates, monthly payment estimator, PCP calculator, HP finance, CarQix`,
            schemaType: 'FinancialProduct',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'FinancialProduct',
              'name': `CarQix Auto Loan Comparison & Payment Calculator`,
              'description': `Interactive auto loan and finance calculator with amortization schedule and rate comparison.`,
              'currency': regionConfig.currencyCode
            }
          };

        case 'car_insurance':
          return {
            title: `Compare Cheap Car Insurance Quotes in ${regionName} | CarQix`,
            description: `Compare comprehensive, collision, and liability auto insurance quotes across top rated insurers in ${regionName}. Save up to hundreds annually.`,
            keywords: `car insurance quotes, compare auto insurance, cheap car insurance ${regionName}, comprehensive coverage, CarQix`,
            schemaType: 'Service',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': `Auto Insurance Comparison Engine`,
              'provider': { '@type': 'Organization', 'name': 'CarQix' },
              'areaServed': regionName
            }
          };

        case 'breakdown_cover':
          return {
            title: `Roadside Assistance & Breakdown Cover Comparison | CarQix`,
            description: `Find 24/7 roadside assistance, towing, flat tire support, battery jump-start, and breakdown coverage plans across ${regionName}.`,
            keywords: `breakdown cover, roadside assistance, towing service, 24/7 recovery, CarQix`,
            schemaType: 'Service',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': `Roadside Assistance & Breakdown Cover Finder`,
              'provider': { '@type': 'Organization', 'name': 'CarQix' }
            }
          };

        case 'parts_accessories':
          return {
            title: `OEM & Aftermarket Auto Parts, Tires & Accessories | CarQix`,
            description: `Find replacement auto parts, performance upgrades, batteries, brakes, tires, and maintenance supplies with fast shipping in ${regionName}.`,
            keywords: `auto parts online, car accessories, OEM car parts, discount tires, CarQix`,
            schemaType: 'Store',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'Store',
              'name': `Auto Parts & Vehicle Accessories Portal`,
              'description': `Comprehensive directory for OEM replacement parts, tires, and automotive supplies.`
            }
          };

        case 'smart_tools':
        case 'calculator_detail':
          return {
            title: `Smart Automotive Calculators (Loan, Lease, Fuel & Depreciation) | CarQix`,
            description: `Free automotive financial tools: Auto Loan Calculator, Lease vs Buy Analyzer, Fuel Economy Estimator, Depreciation Predictor, and Total Cost of Ownership.`,
            keywords: `car calculators, auto loan calculator, lease vs buy calculator, fuel economy calculator, depreciation calculator, CarQix`,
            schemaType: 'WebApplication',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              'name': `CarQix Smart Automotive Financial Suite`,
              'applicationCategory': 'FinanceApplication'
            }
          };

        case 'reviews_guides':
        case 'article_detail':
          return {
            title: `Expert Car Reviews, Buying Advice & Maintenance Guides | CarQix`,
            description: `In-depth vehicle road tests, reliability ratings, used car inspection tips, and expert ownership guides for smart buyers.`,
            keywords: `car reviews, used car buying guide, vehicle reliability ratings, maintenance tips, CarQix`,
            schemaType: 'Article',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'TechArticle',
              'headline': `CarQix Automotive Buying & Maintenance Guides`,
              'publisher': { '@type': 'Organization', 'name': 'CarQix' }
            }
          };

        case 'buying_advice':
          return {
            title: `Used Car Buying Checklist & Negotiation Guide | CarQix`,
            description: `Step-by-step pre-purchase inspection checklist, test drive advice, price negotiation strategies, and scam avoidance tips.`,
            keywords: `used car inspection checklist, test drive guide, how to negotiate used car price, CarQix`,
            schemaType: 'HowTo',
            schemaData: {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              'name': `How to Safely Buy a Used Car`,
              'description': `Comprehensive checklist and inspection guide for used car buyers in ${regionName}.`
            }
          };

        case 'saved':
          return {
            title: `My Saved Vehicles, Marketplaces & Calculators | CarQix`,
            description: `Access your bookmarked vehicle listings, favorite automotive tools, and saved valuation records in CarQix.`,
            keywords: `saved cars, favorites, car bookmarks, CarQix`
          };

        case 'about':
          return {
            title: `About CarQix - The All-in-One Global Automotive Platform`,
            description: `Learn how CarQix empowers car buyers, sellers, and owners with transparent data, real-time valuation, multi-market search, and financial calculators.`,
            keywords: `about CarQix, car marketplace aggregator, automotive app`
          };

        case 'how_to_use':
          return {
            title: `How to Use CarQix - Complete User Guide & Feature Tour`,
            description: `Explore all features of CarQix: vehicle search, valuation tools, VIN check, loan calculators, insurance comparison, and regional switching.`,
            keywords: `how to use CarQix, user guide, tutorial`
          };

        case 'privacy_policy':
          return {
            title: `Privacy Policy & Data Security | CarQix`,
            description: `Read the official CarQix Privacy Policy. Learn how we safeguard user information, anonymize searches, and protect your privacy.`,
            keywords: `CarQix privacy policy, data protection, privacy terms`
          };

        case 'terms':
          return {
            title: `Terms of Service & Disclaimer | CarQix`,
            description: `CarQix Terms of Service, platform usage guidelines, third-party marketplace disclaimers, and legal policies.`,
            keywords: `CarQix terms of service, legal disclaimers, user agreement`
          };

        default:
          return {
            title: `${regionConfig.shortName} - Automotive Companion | Buy, Sell, Value Cars`,
            description: `US, UK & Canada automotive companion app. Buy, sell, value cars, calculate loan payments, and compare vehicle history.`
          };
      }
    };

    const seo = getRouteSEO();

    // 1. Update Document Title
    document.title = seo.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seo.description);

    // 3. Update Meta Title
    let metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute('content', seo.title);
    }

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      const canonicalPath = currentRoute === 'home' ? '/' : `/#${currentRoute}`;
      ogUrl.setAttribute('content', `https://carqix.com${canonicalPath}`);
    }

    // 5. Update Twitter Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', seo.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', seo.description);

    // 6. Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const canonicalPath = currentRoute === 'home' ? (regionConfig.id === 'us' ? '/' : `/${regionConfig.id}`) : `/#${currentRoute}`;
      canonicalLink.setAttribute('href', `https://carqix.com${canonicalPath}`);
    }

    // 7. Inject Dynamic Route JSON-LD Structured Data
    const existingDynamicSchema = document.getElementById('dynamic-route-schema');
    if (existingDynamicSchema) {
      existingDynamicSchema.remove();
    }

    if (seo.schemaData) {
      const scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-route-schema';
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(seo.schemaData);
      document.head.appendChild(scriptTag);
    }
  }, [currentRoute, regionConfig, routeParams]);

  return null; // Headless SEO manager
};
