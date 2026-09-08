import React from 'react';
import { 
  Settings, 
  HelpCircle, 
  Info, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  Share2, 
  ExternalLink, 
  ChevronRight, 
  Car, 
  Wrench, 
  DollarSign, 
  Heart,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RegionSwitcher } from '../components/RegionSwitcher';

export const MoreScreen: React.FC = () => {
  const { navigate, region, regionConfig } = useApp();

  const isUk = region === 'uk';
  const isCa = region === 'ca';

  const sections = [
    {
      title: 'Automotive Hub',
      items: [
        { label: 'Buying Advice & Checklist', icon: BookOpen, route: 'buying_advice' },
        { label: `${regionConfig.shortName} Parts & Accessories`, icon: Wrench, route: 'parts_accessories' },
        { label: isUk ? 'Breakdown Cover (AA & RAC)' : isCa ? 'CAA Roadside Assistance' : 'Roadside Assistance (AAA)', icon: ShieldCheck, route: 'breakdown_cover' },
        { label: isUk ? 'Sell or Value Car (£)' : isCa ? 'Sell or Value Car (CA$)' : 'Sell or Value Your Car', icon: DollarSign, route: 'sell_car' },
      ]
    },
    {
      title: 'Preferences & Help',
      items: [
        { label: `App Settings & Default ${regionConfig.postalCodeLabel}`, icon: Settings, route: 'settings' },
        { label: `How to Use ${regionConfig.shortName}`, icon: HelpCircle, route: 'how_to_use' },
        { label: `About ${regionConfig.shortName}`, icon: Info, route: 'about' },
      ]
    },
    {
      title: 'Legal & Transparency',
      items: [
        { label: 'Privacy Policy', icon: ShieldCheck, route: 'privacy_policy' },
        { label: 'Terms & Affiliate Disclosure', icon: FileText, route: 'terms' },
      ]
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-[#0A192F] tracking-tight">More Options</h1>
        <p className="text-xs text-slate-500">Settings, guides, app resources, and official documentation</p>
      </div>

      {/* Global Regional Portal Selector Card */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-blue-600" />
          <h2 className="font-bold text-xs uppercase tracking-wider text-slate-700">Switch Country Portal</h2>
        </div>
        <RegionSwitcher variant="banner" />
      </div>

      {/* Menu Groups */}
      {sections.map((group, gIdx) => (
        <div key={gIdx} className="space-y-2">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 px-1">
            {group.title}
          </h2>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
            {group.items.map((item, iIdx) => {
              const Icon = item.icon;
              return (
                <button
                  key={iIdx}
                  onClick={() => navigate(item.route)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-blue-600 transition-all" />
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Footer Branding */}
      <div className="text-center py-4 space-y-1 text-xs text-slate-400">
        <div className="font-bold text-slate-600">{regionConfig.shortName} • Version 1.0.0</div>
        <div>Your Complete {regionConfig.name} Automotive Companion Platform</div>
      </div>
    </div>
  );
};
