import { SearchFilterState, RegionId } from '../types';
import { AFFILIATE_URLS } from '../data/automotiveData';
import { UK_PARTNER_URLS } from '../data/ukAutomotiveData';
import { CA_PARTNER_URLS } from '../data/caAutomotiveData';

export class SearchUrlBuilder {
  static buildPartnerSearchUrl(partnerKey: string, filter: SearchFilterState, region: RegionId = 'us'): string {
    if (region === 'uk') {
      return this.buildUkSearchUrl(partnerKey, filter);
    }
    if (region === 'ca') {
      return this.buildCaSearchUrl(partnerKey, filter);
    }

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

  static buildUkSearchUrl(partnerKey: string, filter: SearchFilterState): string {
    const cleanMake = filter.make && filter.make !== 'All Makes' ? filter.make.trim() : '';
    const cleanModel = filter.model ? filter.model.trim() : '';
    const encodedMake = encodeURIComponent(cleanMake);
    const encodedModel = encodeURIComponent(cleanModel);
    const rawQuery = [cleanMake, cleanModel].filter(Boolean).join(' ');
    const encodedQuery = encodeURIComponent(rawQuery);

    switch (partnerKey.toLowerCase()) {
      case 'autotrader': {
        const parts: string[] = [];
        if (cleanMake) parts.push(`make=${encodedMake}`);
        if (cleanModel) parts.push(`model=${encodedModel}`);
        if (filter.maxPrice) parts.push(`price-to=${filter.maxPrice}`);
        if (filter.minYear) parts.push(`year-from=${filter.minYear}`);
        if (filter.fuelType && filter.fuelType !== 'Any') parts.push(`fuel-type=${encodeURIComponent(filter.fuelType)}`);
        const postcode = filter.zipCode || 'SW1A1AA';
        parts.push(`postcode=${encodeURIComponent(postcode)}`);
        parts.push('sort=relevance');
        return `https://www.autotrader.co.uk/car-search?${parts.join('&')}`;
      }
      case 'gumtree': {
        return rawQuery
          ? `https://www.gumtree.com/search?search_category=cars&q=${encodedQuery}`
          : 'https://www.gumtree.com/cars';
      }
      case 'carwow': {
        if (cleanMake) {
          const makeSlug = cleanMake.toLowerCase().replace(/\s+/g, '-');
          if (cleanModel) {
            const modelSlug = cleanModel.toLowerCase().replace(/\s+/g, '-');
            return `https://www.carwow.co.uk/used-cars/${makeSlug}/${modelSlug}`;
          }
          return `https://www.carwow.co.uk/used-cars/${makeSlug}`;
        }
        return rawQuery
          ? `https://www.carwow.co.uk/used-cars?q=${encodedQuery}`
          : 'https://www.carwow.co.uk/used-cars';
      }
      case 'arnoldclark': {
        return rawQuery
          ? `https://www.arnoldclark.com/used-cars/search?q=${encodedQuery}`
          : 'https://www.arnoldclark.com/used-cars';
      }
      case 'motors': {
        return rawQuery
          ? `https://www.motors.co.uk/used-cars/?q=${encodedQuery}`
          : 'https://www.motors.co.uk/used-cars/';
      }
      default: {
        const partner = UK_PARTNER_URLS[partnerKey];
        const base = partner ? partner.affiliateUrl || partner.publicUrl : 'https://www.autotrader.co.uk/car-search';
        return rawQuery ? `${base}?q=${encodedQuery}` : base;
      }
    }
  }

  static buildCaSearchUrl(partnerKey: string, filter: SearchFilterState): string {
    const cleanMake = filter.make && filter.make !== 'All Makes' ? filter.make.trim() : '';
    const cleanModel = filter.model ? filter.model.trim() : '';
    const encodedMake = encodeURIComponent(cleanMake);
    const encodedModel = encodeURIComponent(cleanModel);
    const rawQuery = [cleanMake, cleanModel].filter(Boolean).join(' ');
    const encodedQuery = encodeURIComponent(rawQuery);

    switch (partnerKey.toLowerCase()) {
      case 'autotrader_ca': {
        const parts: string[] = [];
        if (cleanMake) parts.push(`make=${encodedMake}`);
        if (cleanModel) parts.push(`mdl=${encodedModel}`);
        if (filter.maxPrice) parts.push(`prx=${filter.maxPrice}`);
        if (filter.minYear) parts.push(`yrmn=${filter.minYear}`);
        if (filter.zipCode) parts.push(`loc=${encodeURIComponent(filter.zipCode)}`);
        return parts.length > 0 
          ? `https://www.autotrader.ca/cars/?${parts.join('&')}`
          : 'https://www.autotrader.ca/';
      }
      case 'kijiji_autos':
      case 'kijijiautos': {
        return rawQuery
          ? `https://www.kijiji.ca/b-cars-trucks/canada/c174l0?keywords=${encodedQuery}`
          : 'https://www.kijiji.ca/b-cars-trucks/canada/c174l0';
      }
      case 'clutch_ca': {
        return rawQuery
          ? `https://www.clutch.ca/cars?query=${encodedQuery}`
          : 'https://www.clutch.ca/cars';
      }
      case 'autocatch': {
        return rawQuery
          ? `https://www.autocatch.com/used-cars/${encodedQuery}`
          : 'https://www.autocatch.com/';
      }
      case 'carpages_ca': {
        return rawQuery
          ? `https://www.carpages.ca/used-cars/search/?search=${encodedQuery}`
          : 'https://www.carpages.ca/used-cars/';
      }
      case 'auto123': {
        return rawQuery
          ? `https://www.auto123.com/en/used-cars/search/?keywords=${encodedQuery}`
          : 'https://www.auto123.com/en/used-cars/';
      }
      default: {
        const partner = CA_PARTNER_URLS[partnerKey];
        const base = partner ? partner.affiliateUrl || partner.publicUrl : 'https://www.autotrader.ca/';
        return rawQuery ? `${base}?q=${encodedQuery}` : base;
      }
    }
  }

  static getVinHistoryUrl(vinOrPlate: string, providerKey: string = 'epicvin', region: RegionId = 'us'): string {
    const clean = vinOrPlate.trim().toUpperCase();

    if (region === 'uk') {
      if (providerKey === 'gov_mot') {
        return 'https://www.gov.uk/check-mot-history';
      }
      if (providerKey === 'hpicheck') {
        return clean ? `https://www.hpicheck.com/?vrm=${clean}&aff=usedcarsuk` : 'https://www.hpicheck.com';
      }
      if (providerKey === 'carvertical') {
        return clean ? `https://www.carvertical.com/uk/landing/v3?vin=${clean}&aff=usedcarsuk` : 'https://www.carvertical.com/uk';
      }
      return 'https://www.gov.uk/check-mot-history';
    }

    if (region === 'ca') {
      if (providerKey === 'carfax_canada' || providerKey === 'carfax_ca') {
        return clean ? `https://www.carfax.ca/vehicle-history-reports?vin=${clean}` : 'https://www.carfax.ca/vehicle-history-reports';
      }
      if (providerKey === 'cbb_vin_lookup') {
        return clean ? `https://www.canadianblackbook.com/?vin=${clean}` : 'https://www.canadianblackbook.com/';
      }
      return 'https://www.carfax.ca/vehicle-history-reports';
    }

    if (providerKey === 'nhtsa_vin') {
      return clean ? `https://vpic.nhtsa.dot.gov/decoder/?vin=${clean}` : 'https://vpic.nhtsa.dot.gov/decoder/';
    }
    if (providerKey === 'autocheck') {
      return clean ? `https://www.autocheck.com/vehiclehistory/search-by-vin?vin=${clean}` : 'https://www.autocheck.com';
    }
    if (providerKey === 'vinaudit') {
      return clean ? `https://www.vinaudit.com/report?vin=${clean}` : 'https://www.vinaudit.com';
    }
    return clean
      ? `https://epicvin.com/check-vin-number-and-get-vehicle-history-report/report?vin=${clean}&a_aid=y8d55zei795yc`
      : 'https://epicvin.com/?a_aid=y8d55zei795yc';
  }
}
