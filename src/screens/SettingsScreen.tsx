import React, { useState } from 'react';
import { Settings, MapPin, DollarSign, Bell, ShieldCheck, Check, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { US_STATES } from '../data/automotiveData';

export const SettingsScreen: React.FC = () => {
  const { clearSavedItems, clearRecentSearches } = useApp();

  const [defaultZip, setDefaultZip] = useState(() => localStorage.getItem('carqix_default_zip') || '90210');
  const [defaultState, setDefaultState] = useState(() => localStorage.getItem('carqix_default_state') || 'CA');
  const [openLinksInNewTab, setOpenLinksInNewTab] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('carqix_default_zip', defaultZip);
    localStorage.setItem('carqix_default_state', defaultState);
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
        <p className="text-xs text-slate-500">Configure your default search location, tax state, and local data</p>
      </div>

      <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h2 className="font-bold text-base text-[#0A192F]">Regional & Search Defaults</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Default US State</label>
            <select
              value={defaultState}
              onChange={(e) => setDefaultState(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-900"
            >
              {US_STATES.map((s) => (
                <option key={s.code} value={s.code}>{s.name} ({s.code})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Default 5-Digit ZIP Code</label>
            <input
              type="text"
              maxLength={5}
              value={defaultZip}
              onChange={(e) => setDefaultZip(e.target.value)}
              placeholder="e.g. 90210"
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

      {/* Privacy & Storage Management */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h2 className="font-bold text-base text-[#0A192F]">Local Storage & Data</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          CarQix US stores all your saved calculations, bookmarks, and recent search queries locally in your browser's secure client storage. No personal vehicle searches are sold or uploaded to third parties.
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
