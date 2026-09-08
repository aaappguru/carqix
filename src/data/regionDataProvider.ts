import { RegionId, MarketplaceInfo, ProviderInfo, GuideArticle, PartnerConfig } from '../types';
import { MARKETPLACES, PROVIDERS, ARTICLES, POPULAR_MAKES, US_STATES, PARTNER_URLS } from './automotiveData';
import { UK_MARKETPLACES, UK_PROVIDERS, UK_ARTICLES, UK_POPULAR_MAKES, UK_POSTCODES, UK_PARTNER_URLS } from './ukAutomotiveData';
import { CA_MARKETPLACES, CA_PROVIDERS, CA_ARTICLES, CA_POPULAR_MAKES, CA_POSTCODES, CA_PARTNER_URLS } from './caAutomotiveData';

export class RegionDataProvider {
  static getMarketplaces(region: RegionId): MarketplaceInfo[] {
    switch (region) {
      case 'uk': return UK_MARKETPLACES;
      case 'ca': return CA_MARKETPLACES;
      case 'us':
      default: return MARKETPLACES;
    }
  }

  static getProviders(region: RegionId): ProviderInfo[] {
    switch (region) {
      case 'uk': return UK_PROVIDERS;
      case 'ca': return CA_PROVIDERS;
      case 'us':
      default: return PROVIDERS;
    }
  }

  static getProvidersByCategory(region: RegionId, category: string): ProviderInfo[] {
    const all = this.getProviders(region);
    return all.filter((p) => p.category === category);
  }

  static getArticles(region: RegionId): GuideArticle[] {
    switch (region) {
      case 'uk': return UK_ARTICLES;
      case 'ca': return CA_ARTICLES;
      case 'us':
      default: return ARTICLES;
    }
  }

  static getArticleById(region: RegionId, id: string): GuideArticle | undefined {
    const list = this.getArticles(region);
    const found = list.find((a) => a.id === id);
    if (found) return found;
    // fallback cross-search
    return [...UK_ARTICLES, ...CA_ARTICLES, ...ARTICLES].find((a) => a.id === id);
  }

  static getPopularMakes(region: RegionId): string[] {
    switch (region) {
      case 'uk': return UK_POPULAR_MAKES;
      case 'ca': return CA_POPULAR_MAKES;
      case 'us':
      default: return POPULAR_MAKES;
    }
  }

  static getLocationsOrPostcodes(region: RegionId): string[] {
    switch (region) {
      case 'uk': return UK_POSTCODES;
      case 'ca': return CA_POSTCODES;
      case 'us':
      default: return US_STATES.map((s) => s.code);
    }
  }

  static getDefaultSearchPartnerKey(region: RegionId): string {
    switch (region) {
      case 'uk': return 'autotrader';
      case 'ca': return 'autotrader_ca';
      case 'us':
      default: return 'auctiondirectusa';
    }
  }

  static getDefaultSearchPartnerName(region: RegionId): string {
    switch (region) {
      case 'uk': return 'AutoTrader UK';
      case 'ca': return 'AutoTrader.ca';
      case 'us':
      default: return 'Auction Direct USA';
    }
  }

  /**
   * Resolves the best destination URL for a given provider or partner key for a specific region.
   */
  static getProviderUrl(provider: ProviderInfo | undefined, region: RegionId, fallbackKey?: string): string {
    if (provider?.affiliateUrl) return provider.affiliateUrl;
    if (provider?.publicUrl) return provider.publicUrl;

    const key = provider?.partnerKey || fallbackKey || '';
    if (!key) return 'https://www.google.com';

    return this.getPartnerUrlByKey(region, key);
  }

  static getPartnerUrlByKey(region: RegionId, key: string): string {
    if (region === 'uk') {
      const ukPartner = UK_PARTNER_URLS[key];
      if (ukPartner) return ukPartner.affiliateUrl || ukPartner.publicUrl;
      // Also check if key exists in UK marketplaces
      const ukMarket = UK_MARKETPLACES.find(m => m.id === key || m.webUrlKey === key);
      if (ukMarket) return ukMarket.affiliateUrl || ukMarket.publicUrl || 'https://www.autotrader.co.uk';
    } else if (region === 'ca') {
      const caPartner = CA_PARTNER_URLS[key];
      if (caPartner) return caPartner.affiliateUrl || caPartner.publicUrl;
      // Also check if key exists in CA marketplaces
      const caMarket = CA_MARKETPLACES.find(m => m.id === key || m.webUrlKey === key);
      if (caMarket) return caMarket.affiliateUrl || caMarket.publicUrl || 'https://www.autotrader.ca';
    } else {
      const usPartner = PARTNER_URLS[key];
      if (usPartner) return usPartner.affiliateUrl || usPartner.publicUrl;
      const usMarket = MARKETPLACES.find(m => m.id === key || m.webUrlKey === key);
      if (usMarket) return usMarket.affiliateUrl || usMarket.publicUrl || 'https://www.edmunds.com';
    }

    // Cross-region fallback search
    if (UK_PARTNER_URLS[key]) return UK_PARTNER_URLS[key].affiliateUrl || UK_PARTNER_URLS[key].publicUrl;
    if (CA_PARTNER_URLS[key]) return CA_PARTNER_URLS[key].affiliateUrl || CA_PARTNER_URLS[key].publicUrl;
    if (PARTNER_URLS[key]) return PARTNER_URLS[key].affiliateUrl || PARTNER_URLS[key].publicUrl;

    return 'https://www.google.com';
  }
}
