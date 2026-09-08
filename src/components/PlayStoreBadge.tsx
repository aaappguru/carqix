import React from 'react';
import { ExternalLink, Star, Smartphone, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { REGIONS_CONFIG } from '../data/regionsConfig';
import { RegionId } from '../types';

export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 512 512" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path 
      fill="#4285F4" 
      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.9z" 
    />
    <path 
      fill="#34A853" 
      d="M47 0C34 7.2 24.8 20.6 24.8 36.4v439.2c0 15.8 9.2 29.2 22.2 36.4l246.3-246.3L47 0z" 
    />
    <path 
      fill="#FBBC05" 
      d="M471.2 232.2l-86.8-49.9-66.2 66.2 66.2 66.2 86.8-49.9c14.6-8.4 23.8-20.9 23.8-32.6s-9.2-24.2-23.8-32.6z" 
    />
    <path 
      fill="#EA4335" 
      d="M385.4 337.8L104.6 499l220.7-221.3 60.1 60.1z" 
    />
  </svg>
);

interface PlayStoreBadgeProps {
  regionId?: RegionId;
  variant?: 'compact' | 'featured' | 'footer' | 'all-grid';
  className?: string;
}

export const PlayStoreBadge: React.FC<PlayStoreBadgeProps> = ({
  regionId,
  variant = 'compact',
  className = ''
}) => {
  const { region, regionConfig, openExternalLink } = useApp();
  const targetRegionId = regionId || region;
  const config = REGIONS_CONFIG[targetRegionId] || regionConfig;

  const handleOpenPlayStore = (url: string, name: string) => {
    openExternalLink(
      url,
      `${name} on Google Play`,
      `Official Android Application on Google Play Store`
    );
  };

  if (variant === 'all-grid') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Official CarQix Google Play Apps
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(Object.keys(REGIONS_CONFIG) as RegionId[]).map((regId) => {
            const r = REGIONS_CONFIG[regId];
            const isCurrent = r.id === region;

            return (
              <a
                key={r.id}
                href={r.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenPlayStore(r.playStoreUrl, r.shortName);
                }}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isCurrent
                    ? 'bg-slate-900/90 border-amber-400/60 shadow-md ring-1 ring-amber-400/30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{r.flag}</span>
                    <div>
                      <h4 className="font-bold text-xs text-white group-hover:text-amber-300 transition-colors">
                        {r.shortName}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {r.name} Edition
                      </p>
                    </div>
                  </div>
                  {isCurrent && (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                      Active
                    </span>
                  )}
                </div>

                {/* Google Play Styled Button */}
                <div className="h-11 px-3 bg-black hover:bg-slate-950 border border-slate-700 rounded-xl flex items-center gap-2.5 transition-all group-hover:border-slate-500">
                  <GooglePlayIcon className="w-5 h-5 shrink-0" />
                  <div className="text-left leading-none">
                    <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">
                      GET IT ON
                    </span>
                    <span className="text-xs font-bold text-white tracking-tight">
                      Google Play
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`bg-gradient-to-br from-slate-900 via-[#0A192F] to-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-800 shadow-md text-white ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-md">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
              <ShieldCheck className="w-3 h-3" />
              <span>Official Google Play Verified App</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <span>Download {config.shortName} for Android</span>
              <span>{config.flag}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Get instant push notifications on price drops, save offline vehicle inspection checklists, and run unlimited loan valuations on the go.
            </p>
          </div>

          <a
            href={config.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleOpenPlayStore(config.playStoreUrl, config.shortName);
            }}
            className="h-13 px-5 bg-black hover:bg-slate-950 border border-slate-700 hover:border-amber-400 rounded-2xl flex items-center gap-3 transition-all shadow-lg active:scale-95 shrink-0"
          >
            <GooglePlayIcon className="w-7 h-7 shrink-0" />
            <div className="text-left">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                GET IT ON
              </span>
              <span className="text-sm font-black text-white tracking-tight">
                Google Play
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }

  // Default compact button badge
  return (
    <a
      href={config.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        handleOpenPlayStore(config.playStoreUrl, config.shortName);
      }}
      className={`inline-flex items-center gap-3 h-12 px-4 bg-black hover:bg-slate-950 text-white rounded-xl border border-slate-700 hover:border-slate-500 transition-all shadow-md group ${className}`}
      title={`Download ${config.shortName} on Google Play`}
    >
      <GooglePlayIcon className="w-6 h-6 shrink-0" />
      <div className="text-left leading-tight">
        <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">
          GET IT ON
        </span>
        <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
          Google Play
        </span>
      </div>
    </a>
  );
};
