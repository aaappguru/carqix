import React, { useState } from 'react';
import { FileSearch, ShieldCheck, AlertTriangle, CheckCircle2, Search, ExternalLink, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { RegionDataProvider } from '../data/regionDataProvider';
import { SearchUrlBuilder } from '../utils/searchUrlBuilder';

export const VehicleHistoryScreen: React.FC = () => {
  const { openExternalLink, saveItem, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';
  const isUs = region === 'us';

  const historyProviders = RegionDataProvider.getProvidersByCategory(region, 'HISTORY');

  const [inputVal, setInputVal] = useState('');
  const [decodedInfo, setDecodedInfo] = useState<{
    country: string;
    manufacturer: string;
    yearApprox: string;
  } | null>(null);

  const handleInputChange = (val: string) => {
    const clean = val.toUpperCase().trim();
    setInputVal(clean);

    if (clean.length === 17) {
      // Basic VIN WMI decoding heuristic
      const firstChar = clean.charAt(0);
      let country = 'North America';
      if (['1', '4', '5'].includes(firstChar)) country = 'United States';
      else if (firstChar === '2') country = 'Canada';
      else if (firstChar === '3') country = 'Mexico';
      else if (['J'].includes(firstChar)) country = 'Japan';
      else if (['K'].includes(firstChar)) country = 'South Korea';
      else if (['W'].includes(firstChar)) country = 'Germany';
      else if (['S'].includes(firstChar)) country = 'United Kingdom';

      const tenthChar = clean.charAt(9);
      const yearMap: Record<string, string> = {
        'A': '2010', 'B': '2011', 'C': '2012', 'D': '2013', 'E': '2014',
        'F': '2015', 'G': '2016', 'H': '2017', 'J': '2018', 'K': '2019',
        'L': '2020', 'M': '2021', 'N': '2022', 'P': '2023', 'R': '2024',
        'S': '2025', 'T': '2026'
      };

      setDecodedInfo({
        country,
        manufacturer: clean.substring(0, 3),
        yearApprox: yearMap[tenthChar] || '2010+'
      });
    } else {
      setDecodedInfo(null);
    }
  };

  const handleCheckHistory = (providerKey: string, providerName: string) => {
    if (!inputVal) {
      alert(`Please enter a valid ${regionConfig.vinOrRegistrationLabel}`);
      return;
    }
    const url = SearchUrlBuilder.getVinHistoryUrl(inputVal, providerKey, region);
    openExternalLink(url, `${providerName} Report for ${inputVal}`, `Checking official ${regionConfig.name} records`);

    saveItem({
      itemType: 'SEARCH',
      title: `${isUk ? 'Reg/VIN Check' : 'VIN Check'}: ${inputVal}`,
      subtitle: `Checked on ${providerName}`,
      detailDataJson: JSON.stringify({ inputVal, providerKey, region, timestamp: Date.now() })
    });
  };

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title={
          isUk
            ? 'Official UK MOT History & HPI Check'
            : isCa
            ? 'Official Canadian Vehicle History & Liens'
            : 'Official US Vehicle History & Recalls'
        }
        subtitle={
          isUk
            ? 'Check free GOV.UK MOT history, past test advisories, mileage rollback detection, and verify insurance write-offs (Cat S/N) and outstanding finance.'
            : isCa
            ? 'Decode Canadian VINs, check CARFAX Canada accident history, and uncover unpaid provincial bank liens before buying.'
            : 'Decode 17-digit VINs, check NMVTIS title brands, uncover past accidents, odometer rollbacks, and free NHTSA safety recalls.'
        }
        badgeText={`Official ${regionConfig.name} Data Sources`}
      />

      {/* Lookup Input Card */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <FileSearch className="w-5 h-5 text-indigo-600" />
          <h2 className="font-bold text-sm text-[#0A192F]">
            {isUk ? 'Enter UK Registration Plate or VIN' : 'Enter 17-Digit VIN Number'}
          </h2>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder={regionConfig.vinOrRegistrationPlaceholder}
            value={inputVal}
            onChange={(e) => handleInputChange(e.target.value)}
            maxLength={isUk ? 17 : 17}
            className="w-full h-12 px-4 uppercase tracking-widest font-mono font-bold text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
          <div className="absolute right-3 top-3 text-xs font-semibold text-slate-400">
            {inputVal.length} / {isUk ? '7-17' : '17'}
          </div>
        </div>

        {decodedInfo && (
          <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-indigo-950">VIN Decoder Match:</span>
            </div>
            <div className="text-xs text-indigo-800 font-medium">
              {decodedInfo.country} • Approx Year: {decodedInfo.yearApprox}
            </div>
          </div>
        )}

        {/* Action Buttons for Providers */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-bold text-slate-700 block">
            Select {regionConfig.shortName} History Verification Database:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {historyProviders.map((p) => (
              <button
                key={p.id}
                onClick={() => handleCheckHistory(p.partnerKey, p.name)}
                className="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xs flex flex-col items-center justify-center gap-1 shadow-md shadow-indigo-600/10 transition-all text-center"
              >
                <div className="flex items-center gap-1.5">
                  <span>{p.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] text-indigo-200 font-normal line-clamp-1">
                  {p.keyRateOrFeature || p.benefits[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Provider Details Cards */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
          Trusted Verification Providers ({regionConfig.name})
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {historyProviders.map((provider) => (
            <PartnerCard
              key={provider.id}
              name={provider.name}
              category={provider.category}
              description={provider.description}
              rating={provider.rating}
              reviewsCount={provider.reviewsCount}
              benefits={provider.benefits}
              badge={provider.badge}
              ctaText={`Check on ${provider.name}`}
              onContinueClick={() => handleCheckHistory(provider.partnerKey, provider.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
