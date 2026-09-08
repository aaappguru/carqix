import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ArrowLeft, 
  RotateCw, 
  Copy, 
  Check, 
  ExternalLink, 
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { openNativeOrWebLink } from '../services/nativeBrowser';

export const InAppWebViewModal: React.FC = () => {
  const { externalLinkTarget, closeExternalLink } = useApp();
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getHostname = (urlStr: string) => {
    try {
      const parsed = new URL(urlStr);
      return parsed.hostname.replace('www.', '');
    } catch {
      return urlStr;
    }
  };

  useEffect(() => {
    if (externalLinkTarget) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [externalLinkTarget, iframeKey]);

  if (!externalLinkTarget) return null;

  const url = externalLinkTarget.url;
  const title = externalLinkTarget.title || 'Automotive Website';
  const hostname = getHostname(url);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy link:', e);
    }
  };

  const handleOpenExternal = async () => {
    await openNativeOrWebLink(url);
  };

  return (
    <div 
      id="inapp-webview-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      <div 
        id="inapp-webview-dialog"
        className="w-full max-w-5xl h-[92vh] max-h-[860px] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-700/60"
      >
        {/* Title Bar with standard buttons aligned with body */}
        <header className="bg-[#0A192F] text-white border-b border-slate-800 p-3 sm:p-4 flex items-center justify-between gap-2 sm:gap-4 shrink-0 shadow-md">
          {/* Left: Back & Reload */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="webview-back-btn"
              onClick={closeExternalLink}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white border border-slate-700 flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
              title="Back"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Back</span>
            </button>

            <button
              id="webview-refresh-btn"
              onClick={handleRefresh}
              className={`p-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 hover:text-white border border-slate-700 transition-all active:scale-95 ${
                isLoading ? 'animate-spin text-blue-400' : ''
              }`}
              title="Reload page"
              aria-label="Reload page"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          {/* Center: Title & Domain Omnibar */}
          <div className="flex-1 max-w-lg mx-auto min-w-0">
            <div className="flex items-center justify-between bg-slate-900/95 border border-slate-700 rounded-xl px-3 py-1.5 gap-2 shadow-inner">
              <div className="flex items-center gap-2 min-w-0">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white truncate max-w-[140px] sm:max-w-[220px]">
                  {title}
                </span>
                <span className="text-[11px] text-slate-400 truncate hidden sm:inline">
                  ({hostname})
                </span>
              </div>

              <button
                id="webview-copy-btn"
                onClick={handleCopyLink}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 relative"
                title="Copy URL"
                aria-label="Copy URL"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied && (
                  <span className="absolute -bottom-7 right-0 bg-slate-900 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg border border-slate-700 whitespace-nowrap z-30">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Right: Open in Browser & Close */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="webview-open-browser-btn"
              onClick={handleOpenExternal}
              className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold flex items-center gap-1.5 text-xs sm:text-sm transition-all shadow-md active:scale-95"
              title="Open in external browser window"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open Browser</span>
            </button>

            <button
              id="webview-close-btn"
              onClick={closeExternalLink}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white border border-slate-700 transition-all active:scale-95"
              title="Close"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Website Content */}
        <div className="flex-1 w-full bg-white overflow-hidden relative">
          <iframe
            key={iframeKey}
            ref={iframeRef}
            src={url}
            title={title}
            className="w-full h-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoading(false)}
          />

          {/* Minimal loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-xs flex items-center justify-center pointer-events-none z-10 transition-opacity">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-200 text-xs font-semibold text-slate-700">
                <RotateCw className="w-4 h-4 animate-spin text-blue-600" />
                <span>Loading {hostname}...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InAppWebViewModal;
