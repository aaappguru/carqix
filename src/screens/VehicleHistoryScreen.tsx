import React, { useState } from 'react';
import { FileSearch, ShieldCheck, AlertTriangle, CheckCircle2, Search, ExternalLink, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroBanner } from '../components/HeroBanner';
import { PartnerCard } from '../components/PartnerCard';
import { HISTORY_PROVIDERS } from '../data/automotiveData';
import { SearchUrlBuilder } from '../utils/searchUrlBuilder';

export const VehicleHistoryScreen: React.FC = () => {
  const { openExternalLink, saveItem } = useApp();

  const [vin, setVin] = useState('');
  const [vinInfo, setVinInfo] = useState<{
    country: string;
    manufacturer: string;
    yearApprox: string;
  } | null>(null);

  const handleVinChange = (val: string) => {
    const clean = val.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
    setVin(clean);

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

      setVinInfo({
        country,
        manufacturer: clean.substring(0, 3),
        yearApprox: yearMap[tenthChar] || '2010+'
      });
    } else {
      setVinInfo(null);
    }
  };

  const handleCheckHistory = (providerKey: string) => {
    if (!vin || vin.length < 11) {
      alert('Please enter a valid 17-character VIN number');
      return;
    }
    const url = SearchUrlBuilder.getVinHistoryUrl(vin, providerKey);
    openExternalLink(url, `VIN Report for ${vin}`, 'Checking official records');

    saveItem({
      itemType: 'SEARCH',
      title: `VIN Check: ${vin}`,
      subtitle: `Checked on ${providerKey.toUpperCase()}`,
      detailDataJson: JSON.stringify({ vin, providerKey, timestamp: Date.now() })
    });
  };

  return (
    <div className="space-y-6 pb-12">
      <HeroBanner
        title="Official US Vehicle History & Recalls"
        subtitle="Decode 17-digit VINs, check NMVTIS title brands, uncover past accidents, odometer rollbacks, and free NHTSA safety recalls."
        badgeText="Official US Data Sources"
      />

      {/* VIN Lookup Input Card */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <FileSearch className="w-5 h-5 text-indigo-600" />
          <h2 className="font-bold text-base text-[#0A192F]">Enter 17-Digit Vehicle Identification Number (VIN)</h2>
        </div>

        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. 1HGCR2F83HA000000"
              maxLength={17}
              value={vin}
              onChange={(e) => handleVinChange(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm font-mono font-bold tracking-widest text-slate-900 placeholder:font-normal placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
            <span className="absolute right-3.5 top-3.5 text-xs font-semibold text-slate-400">
              {vin.length}/17
            </span>
          </div>

          {vinInfo && (
            <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-100 flex items-center justify-between text-xs animate-in fade-in">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span className="font-bold text-indigo-950">Valid 17-Digit VIN Format</span>
              </div>
              <div className="text-slate-600">
                Origin: <strong className="text-slate-900">{vinInfo.country}</strong> • Approx Year: <strong className="text-slate-900">{vinInfo.yearApprox}</strong>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
            <button
              onClick={() => handleCheckHistory('nhtsa_vin')}
              disabled={vin.length !== 17}
              className="py-3 px-4 rounded-xl bg-[#0A192F] hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>NHTSA VIN Decoder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleCheckHistory('epicvin')}
              disabled={vin.length !== 17}
              className="py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>EpicVIN Report</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleCheckHistory('autocheck')}
              disabled={vin.length !== 17}
              className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>AutoCheck Score</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleCheckHistory('vinaudit')}
              disabled={vin.length !== 17}
              className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>VinAudit Check</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* VIN Location Helper */}
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
          <div className="font-bold text-slate-800 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Where to find your vehicle's VIN:</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
            <li>Lower driver's side corner of the windshield (viewable from outside)</li>
            <li>Driver's side door post / door jamb sticker</li>
            <li>Vehicle registration document, insurance card, or title certificate</li>
          </ul>
        </div>
      </div>

      {/* History Providers List */}
      <div>
        <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
          Verified US VIN & Recalls Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HISTORY_PROVIDERS.map((p) => (
            <PartnerCard
              key={p.id}
              name={p.name}
              description={p.description}
              rating={p.rating}
              reviewsCount={p.reviewsCount}
              benefits={p.benefits}
              badge={p.badge || p.keyRateOrFeature}
              ctaText={`Run Report on ${p.name}`}
              onContinueClick={() => {
                const url = vin
                  ? SearchUrlBuilder.getVinHistoryUrl(vin, p.partnerKey)
                  : (p.affiliateUrl || 'https://epicvin.com/?a_aid=y8d55zei795yc');
                openExternalLink(url, p.name, p.description);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
