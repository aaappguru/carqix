import { SearchFilterState } from '../types';
import { AFFILIATE_URLS } from '../data/automotiveData';

export class SearchUrlBuilder {
  static buildPartnerSearchUrl(partnerKey: string, filter: SearchFilterState): string {
    const base = AFFILIATE_URLS[partnerKey] || 'https://www.auctiondirectusa.com/used-cars-for-sale';
    const params = new URLSearchParams();

    if (filter.make && filter.make !== 'All Makes') {
      params.append('make', filter.make.toLowerCase());
    }
    if (filter.model) {
      params.append('model', filter.model.toLowerCase());
    }
    if (filter.minPrice) {
      params.append('price_min', filter.minPrice);
    }
    if (filter.maxPrice) {
      params.append('price_max', filter.maxPrice);
    }
    if (filter.minYear) {
      params.append('year_min', filter.minYear);
    }
    if (filter.maxYear) {
      params.append('year_max', filter.maxYear);
    }
    if (filter.zipCode) {
      params.append('zip', filter.zipCode);
    }
    if (filter.radiusMiles) {
      params.append('radius', filter.radiusMiles);
    }

    const queryString = params.toString();
    if (!queryString) return base;
    return base.includes('?') ? `${base}&${queryString}` : `${base}?${queryString}`;
  }

  static getVinHistoryUrl(vin: string, providerKey: string = 'epicvin'): string {
    const cleanVin = vin.trim().toUpperCase();
    if (providerKey === 'nhtsa_vin') {
      return cleanVin ? `https://vpic.nhtsa.dot.gov/decoder/?vin=${cleanVin}` : 'https://vpic.nhtsa.dot.gov/decoder/';
    }
    if (providerKey === 'autocheck') {
      return cleanVin ? `https://www.autocheck.com/vehiclehistory/search-by-vin?vin=${cleanVin}` : 'https://www.autocheck.com';
    }
    if (providerKey === 'vinaudit') {
      return cleanVin ? `https://www.vinaudit.com/report?vin=${cleanVin}` : 'https://www.vinaudit.com';
    }
    return cleanVin
      ? `https://epicvin.com/check-vin-number-and-get-vehicle-history-report/report?vin=${cleanVin}&a_aid=y8d55zei795yc`
      : 'https://epicvin.com/?a_aid=y8d55zei795yc';
  }
}
