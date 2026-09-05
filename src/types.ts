export interface PartnerConfig {
  partnerId: string;
  name: string;
  publicUrl: string;
  affiliateUrl: string;
  isEnabled: boolean;
  priority: number;
}

export interface MarketplaceInfo {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewsCount: string;
  benefits: string[];
  badge?: string;
  webUrlKey: string;
  isPopular?: boolean;
  priority?: number;
  publicUrl?: string;
  affiliateUrl?: string;
}

export interface ProviderInfo {
  id: string;
  name: string;
  category: 'VALUATION' | 'SELL' | 'FINANCE' | 'INSURANCE' | 'HISTORY' | 'BREAKDOWN' | 'PARTS';
  description: string;
  rating: number;
  reviewsCount: string;
  keyRateOrFeature?: string;
  benefits: string[];
  badge?: string;
  partnerKey: string;
  priority?: number;
  publicUrl?: string;
  affiliateUrl?: string;
}

export interface GuideArticle {
  id: string;
  title: string;
  summary: string;
  fullContent: string;
  category: string;
  readTimeMinutes: number;
  isFeatured?: boolean;
  datePublished?: string;
  tag: string;
}

export interface SavedItem {
  id: string;
  itemType: 'CALCULATION' | 'SEARCH' | 'ARTICLE' | 'PARTNER';
  title: string;
  subtitle: string;
  detailDataJson: string;
  timestamp: number;
  imageUrl?: string;
}

export interface RecentSearch {
  id: string;
  query: string;
  timestamp: number;
}

export interface CalculatorTypeInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  iconName: string;
}

export interface SearchFilterState {
  make: string;
  model: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
  zipCode: string;
  radiusMiles: string;
  bodyType: string;
  transmission: string;
  fuelType: string;
}
