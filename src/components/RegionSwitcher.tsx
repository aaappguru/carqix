import React, { useState } from 'react';
import { Globe, Check, ChevronDown, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { REGIONS_CONFIG } from '../data/regionsConfig';
import { RegionId } from '../types';

interface RegionSwitcherProps {
  variant?: 'header' | 'modal' | 'banner' | 'footer';
  className?: string;
}

export const RegionSwitcher: React.FC<RegionSwitcherProps> = ({ variant = 'header', className = '' }) => {
  const { region, setRegion, regionConfig } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const regionList: { id: RegionId; name: string; short: string; flag: string; currency: string; desc: string; domain: string }[] = [
    {
      id: 'us',
      name: 'United States',
      short: 'CarQix US',
      flag: '🇺🇸',
      currency: 'USD ($)',
      desc: 'Auction Direct, Edmunds, TrueCar, NHTSA, EpicVIN',
      domain: 'carqix.com'
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      short: 'CarQix UK',
      flag: '🇬🇧',
      currency: 'GBP (£)',
      desc: 'AutoTrader UK, carwow, Gumtree, GOV.UK MOT, HPI Check',
      domain: 'carqix.com/uk'
    },
    {
      id: 'ca',
      name: 'Canada',
      short: 'CarQix CA',
      flag: '🇨🇦',
      currency: 'CAD (CA$)',
      desc: 'AutoTrader.ca, Kijiji Autos, Clutch.ca, CARFAX Canada',
      domain: 'carqix.com/ca'
    }
  ];

  const handleSelectRegion = (id: RegionId) => {
    setRegion(id);
    setIsOpen(false);
  };

  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-slate-900 via-[#0A192F] to-slate-900 text-white rounded-2xl p-4 border border-blue-500/30 shadow-md ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-xl shrink-0">
              <Globe className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Global Portals</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Current: {regionConfig.flag} {regionConfig.shortName}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                Looking for another country? Browse local inventory & tools:
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {regionList.map((r) => {
              const isSelected = r.id === region;
              return (
                <button
                  key={r.id}
                  onClick={() => handleSelectRegion(r.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md border border-blue-400'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10'
                  }`}
                >
                  <span className="text-base">{r.flag}</span>
                  <span>{r.short}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Header Dropdown Pill
  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white text-xs font-bold border border-white/15 transition-all shadow-sm"
        title="Switch Country / Region"
      >
        <span className="text-base">{regionConfig.flag}</span>
        <span className="hidden sm:inline-block font-semibold">{regionConfig.id.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="px-3.5 py-2 border-b border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Select Region / Country</span>
            </div>

            <div className="p-1 space-y-1">
              {regionList.map((r) => {
                const isSelected = r.id === region;
                return (
                  <button
                    key={r.id}
                    onClick={() => handleSelectRegion(r.id)}
                    className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors ${
                      isSelected
                        ? 'bg-blue-50 border border-blue-200/80 text-blue-950'
                        : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span className="text-2xl pt-0.5">{r.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{r.short}</span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{r.desc}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-100/70 px-1.5 py-0.2 rounded">
                          {r.domain}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {r.currency}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
