import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { admobService } from './admobService';

export async function openNativeOrWebLink(url: string): Promise<void> {
  if (!url) return;

  try {
    if (Capacitor.isNativePlatform()) {
      // Optionally trigger interstitial ad before opening the external marketplace
      await admobService.showInterstitial(false);

      await Browser.open({
        url,
        toolbarColor: '#0A192F',
        presentationStyle: 'popover'
      });
      return;
    }
  } catch (err) {
    console.warn('Native browser open failed, falling back to window.open:', err);
  }

  // Web fallback: open in new tab
  window.open(url, '_blank', 'noopener,noreferrer');
}
