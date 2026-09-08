import React, { useState } from 'react';
import { Settings, MapPin, DollarSign, Bell, ShieldCheck, Check, Trash2, Globe, Smartphone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { US_STATES } from '../data/automotiveData';
import { UK_REGIONS, UK_POSTCODES } from '../data/ukAutomotiveData';
import { CA_PROVINCES, CA_POSTCODES, CanadianProvince } from '../data/caAutomotiveData';
import { RegionSwitcher } from '../components/RegionSwitcher';
import { PlayStoreBadge } from '../components/PlayStoreBadge';

export const SettingsScreen: React.FC = () => {
  const { clearSavedItems, clearRecentSearches, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';

  const defaultLocationKey = `carqix_default_loc_${region}`;
  const defaultPostalKey = `carqix_default_postal_${region}`;

  const [defaultLoc, setDefaultLoc] = useState(() => 
    localStorage.getItem(defaultLocationKey) || (isUk ? 'Greater London' : isCa ? 'ON' : 'CA')
  );
  const [defaultPostal, setDefaultPostal] = useState(() => 
    localStorage.getItem(defaultPostalKey) || (isUk ? 'SW1A 1AA' : isCa ? 'M5V 2T6' : '90210')
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(defaultLocationKey, defaultLoc);
    localStorage.setItem(defaultPostalKey, defaultPostal);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleClearAllData = () => {
    if (confirm('Are you sure you want to clear all bookmarks and search history?')) {
      clearSavedItems();
      clearRecentSearches();
      alert('All local app data has been cleared.');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">App Settings</h1>
        <p className="text-xs text-slate-500">Configure your default search location, tax jurisdiction, and local data</p>
      </div>

      {/* Region Switcher card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-600" />
          <h2 className="font-bold text-base text-[#0A192F]">Active Regional App Portal</h2>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Select your primary motoring country. This customizes marketplaces, tax formulas, postal formats, and currency across all tools:
        </p>
        <RegionSwitcher variant="banner" />
      </div>

      <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h2 className="font-bold text-base text-[#0A192F]">
          {regionConfig.shortName} Search & Financial Defaults
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              {isUk ? 'Default Region / County' : isCa ? 'Default Province / Territory' : 'Default State'}
            </label>
            <select
              value={defaultLoc}
              onChange={(e) => setDefaultLoc(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900"
            >
              {isUk ? (
                UK_REGIONS.map((r: { code: string; name: string }) => (
                  <option key={r.code} value={r.name}>{r.name}</option>
                ))
              ) : isCa ? (
                CA_PROVINCES.map((p: CanadianProvince) => (
                  <option key={p.code} value={p.code}>{p.name} ({p.code}) - {p.rate}% {p.taxType}</option>
                ))
              ) : (
                US_STATES.map((s: { code: string; name: string; tax: number }) => (
                  <option key={s.code} value={s.code}>{s.name} ({s.code}) - {s.tax}% Tax</option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Default {regionConfig.postalCodeLabel}
            </label>
            <input
              type="text"
              maxLength={10}
              value={defaultPostal}
              onChange={(e) => setDefaultPostal(e.target.value)}
              placeholder={regionConfig.postalCodePlaceholder}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Preferences Saved!</span>
              </>
            ) : (
              <span>Save Preferences</span>
            )}
          </button>
        </div>
      </form>

      {/* Android Play Store App Card */}
      <PlayStoreBadge variant="featured" />

      {/* Privacy & Storage Management */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h2 className="font-bold text-base text-[#0A192F]">Local Storage & Data</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          CarQix stores all your saved calculations, bookmarks, and recent search queries locally in your browser's secure client storage. No personal vehicle searches are sold or uploaded to third parties.
        </p>

        <button
          type="button"
          onClick={handleClearAllData}
          className="py-2.5 px-4 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold flex items-center gap-2 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear All Bookmarks & History</span>
        </button>
      </div>
    </div>
  );
};
