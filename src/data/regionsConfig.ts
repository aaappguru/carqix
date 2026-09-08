import { RegionId, RegionConfig } from '../types';

export const REGIONS_CONFIG: Record<RegionId, RegionConfig> = {
  us: {
    id: 'us',
    name: 'United States',
    shortName: 'CarQix US',
    flag: '🇺🇸',
    currencySymbol: '$',
    currencyCode: 'USD',
    distanceUnit: 'miles',
    vinOrRegistrationLabel: '17-Digit VIN Number',
    vinOrRegistrationPlaceholder: 'e.g. 1HGCR2F83HA123456',
    postalCodeLabel: 'ZIP Code',
    postalCodePlaceholder: 'e.g. 90210',
    tagline: 'America’s Premier Used Car Portal & Financial Suite',
    heroSubtitle: 'Compare 14+ top US marketplaces, check NMVTIS/NHTSA records, and calculate loans.'
  },
  uk: {
    id: 'uk',
    name: 'United Kingdom',
    shortName: 'CarQix UK',
    flag: '🇬🇧',
    currencySymbol: '£',
    currencyCode: 'GBP',
    distanceUnit: 'miles',
    vinOrRegistrationLabel: 'UK Vehicle Reg Plate / VIN',
    vinOrRegistrationPlaceholder: 'e.g. AB12 CDE',
    postalCodeLabel: 'UK Postcode',
    postalCodePlaceholder: 'e.g. SW1A 1AA',
    tagline: 'The UK’s Trusted Used Car Marketplace & MOT History Suite',
    heroSubtitle: 'Compare 400,000+ UK cars on AutoTrader, check free GOV.UK MOT history & calculate PCP/HP finance.'
  },
  ca: {
    id: 'ca',
    name: 'Canada',
    shortName: 'CarQix Canada',
    flag: '🇨🇦',
    currencySymbol: 'CA$',
    currencyCode: 'CAD',
    distanceUnit: 'km',
    vinOrRegistrationLabel: '17-Digit Canadian VIN',
    vinOrRegistrationPlaceholder: 'e.g. 2T1BURHE5KC123456',
    postalCodeLabel: 'Postal Code',
    postalCodePlaceholder: 'e.g. M5V 2T6',
    tagline: 'Canada’s Ultimate Automotive Marketplace & Valuation Hub',
    heroSubtitle: 'Compare AutoTrader.ca, Kijiji Autos, CARFAX Canada and calculate provincial HST/PST auto loans.'
  }
};
