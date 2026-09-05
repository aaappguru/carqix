import React from 'react';
import { ExternalLink, X, Shield, Lock, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ExternalLinkModal: React.FC = () => {
  const { externalLinkTarget, closeExternalLink } = useApp();

  if (!externalLinkTarget) return null;

  const handleOpenInNewTab = () => {
    window.open(externalLinkTarget.url, '_blank', 'noopener,noreferrer');
    closeExternalLink();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeExternalLink}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Shield Icon header */}
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
          <Shield className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-[#0A192F] mb-1">
          {externalLinkTarget.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          {externalLinkTarget.subtitle || 'You are leaving CarQix US to open a verified automotive partner service.'}
        </p>

        {/* Destination preview */}
        <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 mb-5 text-xs flex items-center gap-2.5">
          <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-slate-700 font-mono break-all line-clamp-1">
            {externalLinkTarget.url}
          </span>
        </div>

        {/* Trust Badges */}
        <div className="space-y-1.5 mb-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Encrypted SSL 256-Bit official connection</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Direct access to official US partner inventory</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={closeExternalLink}
            className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 active:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleOpenInNewTab}
            className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 active:scale-95 transition-all"
          >
            <span>Continue</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
