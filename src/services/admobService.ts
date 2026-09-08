import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  AdOptions,
  RewardAdOptions
} from '@capacitor-community/admob';

// GOOGLE TEST AD UNIT IDs (Safe for development and testing)
// Replace these with your real AdMob Ad Unit IDs before publishing to Google Play Store
export const ADMOB_CONFIG = {
  // Official Google Test IDs for Android
  BANNER_ID: 'ca-app-pub-3940256099942544/6300978111',
  INTERSTITIAL_ID: 'ca-app-pub-3940256099942544/1033173712',
  REWARDED_ID: 'ca-app-pub-3940256099942544/5224354917',
  
  // Controls whether ads are enabled in the app
  IS_TESTING: true, // Set to false when using your real AdMob IDs
  ADS_ENABLED: true,
};

class AdMobService {
  private isInitialized = false;
  private isBannerVisible = false;
  private lastInterstitialTime = 0;
  private interstitialCooldownMs = 45000; // 45 seconds cooldown between interstitials to respect user experience

  /**
   * Initializes AdMob SDK on Android
   */
  async initialize(): Promise<void> {
    if (!Capacitor.isNativePlatform() || this.isInitialized) {
      return;
    }

    try {
      await AdMob.initialize({
        initializeForTesting: ADMOB_CONFIG.IS_TESTING,
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully');

      // Pre-load the first interstitial ad in the background
      this.prepareInterstitial();
    } catch (error) {
      console.warn('AdMob initialization error:', error);
    }
  }

  /**
   * Shows a Banner Ad at the bottom of the screen
   */
  async showBanner(position: BannerAdPosition = BannerAdPosition.BOTTOM_CENTER): Promise<void> {
    if (!Capacitor.isNativePlatform() || !ADMOB_CONFIG.ADS_ENABLED) {
      return;
    }

    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      if (this.isBannerVisible) {
        return;
      }

      const options: BannerAdOptions = {
        adId: ADMOB_CONFIG.BANNER_ID,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position,
        margin: 0,
        isTesting: ADMOB_CONFIG.IS_TESTING,
      };

      await AdMob.showBanner(options);
      this.isBannerVisible = true;
    } catch (error) {
      console.warn('Error showing AdMob banner:', error);
    }
  }

  /**
   * Hides the Banner Ad
   */
  async hideBanner(): Promise<void> {
    if (!Capacitor.isNativePlatform() || !this.isBannerVisible) {
      return;
    }

    try {
      await AdMob.hideBanner();
      this.isBannerVisible = false;
    } catch (error) {
      console.warn('Error hiding AdMob banner:', error);
    }
  }

  /**
   * Pre-loads an Interstitial Ad in the background
   */
  async prepareInterstitial(): Promise<void> {
    if (!Capacitor.isNativePlatform() || !ADMOB_CONFIG.ADS_ENABLED) {
      return;
    }

    try {
      const options: AdOptions = {
        adId: ADMOB_CONFIG.INTERSTITIAL_ID,
        isTesting: ADMOB_CONFIG.IS_TESTING,
      };
      await AdMob.prepareInterstitial(options);
    } catch (error) {
      console.warn('Error preparing interstitial ad:', error);
    }
  }

  /**
   * Shows an Interstitial Ad (with cooldown protection)
   */
  async showInterstitial(force = false): Promise<boolean> {
    if (!Capacitor.isNativePlatform() || !ADMOB_CONFIG.ADS_ENABLED) {
      return false;
    }

    const now = Date.now();
    if (!force && now - this.lastInterstitialTime < this.interstitialCooldownMs) {
      return false; // Cooldown not passed yet
    }

    try {
      await AdMob.showInterstitial();
      this.lastInterstitialTime = now;
      // Preload next interstitial
      setTimeout(() => this.prepareInterstitial(), 2000);
      return true;
    } catch (error) {
      console.warn('Error displaying interstitial ad, attempting to prepare again:', error);
      this.prepareInterstitial();
      return false;
    }
  }

  /**
   * Prepares and displays a Rewarded Video Ad
   */
  async showRewardVideo(onRewardEarned?: (reward: { amount: number; type: string }) => void): Promise<boolean> {
    if (!Capacitor.isNativePlatform() || !ADMOB_CONFIG.ADS_ENABLED) {
      return false;
    }

    try {
      const options: RewardAdOptions = {
        adId: ADMOB_CONFIG.REWARDED_ID,
        isTesting: ADMOB_CONFIG.IS_TESTING,
      };

      await AdMob.prepareRewardVideoAd(options);
      const rewardItem = await AdMob.showRewardVideoAd();

      if (onRewardEarned && rewardItem) {
        onRewardEarned({ amount: rewardItem.amount, type: rewardItem.type });
      }
      return true;
    } catch (error) {
      console.warn('Error with reward video ad:', error);
      return false;
    }
  }
}

export const admobService = new AdMobService();
