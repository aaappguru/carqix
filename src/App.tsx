import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AppTopBar } from './components/AppTopBar';
import { AppBottomBar } from './components/AppBottomBar';
import { AppFooter } from './components/AppFooter';
import { ExternalLinkModal } from './components/ExternalLinkModal';
import { admobService } from './services/admobService';

import { SEOHead } from './components/SEOHead';

// Screens
import { HomeScreen } from './screens/HomeScreen';
import { BuyCarsScreen } from './screens/BuyCarsScreen';
import { SellCarScreen } from './screens/SellCarScreen';
import { ValueCarScreen } from './screens/ValueCarScreen';
import { VehicleHistoryScreen } from './screens/VehicleHistoryScreen';
import { CarFinanceScreen } from './screens/CarFinanceScreen';
import { CarInsuranceScreen } from './screens/CarInsuranceScreen';
import { BreakdownCoverScreen } from './screens/BreakdownCoverScreen';
import { PartsAccessoriesScreen } from './screens/PartsAccessoriesScreen';
import { ReviewsGuidesScreen } from './screens/ReviewsGuidesScreen';
import { ArticleDetailScreen } from './screens/ArticleDetailScreen';
import { BuyingAdviceScreen } from './screens/BuyingAdviceScreen';
import { SmartToolsScreen } from './screens/SmartToolsScreen';
import { CalculatorDetailScreen } from './screens/CalculatorDetailScreen';
import { GlobalSearchScreen } from './screens/GlobalSearchScreen';
import { SavedScreen } from './screens/SavedScreen';
import { MoreScreen } from './screens/MoreScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { AboutScreen } from './screens/AboutScreen';
import { HowToUseScreen } from './screens/HowToUseScreen';
import { PrivacyPolicyScreen } from './screens/PrivacyPolicyScreen';
import { TermsScreen } from './screens/TermsScreen';

const MainContent: React.FC = () => {
  const { currentRoute } = useApp();

  useEffect(() => {
    // Initialize AdMob and prepare interstitial/banner ads on startup
    admobService.initialize();
  }, []);

  const renderScreen = () => {
    switch (currentRoute) {
      case 'home':
        return <HomeScreen />;
      case 'buy_cars':
        return <BuyCarsScreen />;
      case 'sell_car':
        return <SellCarScreen />;
      case 'value_car':
        return <ValueCarScreen />;
      case 'vehicle_history':
        return <VehicleHistoryScreen />;
      case 'car_finance':
        return <CarFinanceScreen />;
      case 'car_insurance':
        return <CarInsuranceScreen />;
      case 'breakdown_cover':
        return <BreakdownCoverScreen />;
      case 'parts_accessories':
        return <PartsAccessoriesScreen />;
      case 'reviews_guides':
        return <ReviewsGuidesScreen />;
      case 'article_detail':
        return <ArticleDetailScreen />;
      case 'buying_advice':
        return <BuyingAdviceScreen />;
      case 'smart_tools':
        return <SmartToolsScreen />;
      case 'calculator_detail':
        return <CalculatorDetailScreen />;
      case 'search':
        return <GlobalSearchScreen />;
      case 'saved':
        return <SavedScreen />;
      case 'more':
        return <MoreScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'about':
        return <AboutScreen />;
      case 'how_to_use':
        return <HowToUseScreen />;
      case 'privacy_policy':
        return <PrivacyPolicyScreen />;
      case 'terms':
        return <TermsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      {/* Headless Dynamic SEO Manager */}
      <SEOHead />

      {/* Top Header Navigation */}
      <AppTopBar />

      {/* Main Screen Container with standard centered layout */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10">
        {renderScreen()}
      </main>

      {/* Comprehensive Application Footer */}
      <AppFooter />

      {/* Persistent Bottom Bar for mobile navigation */}
      <AppBottomBar />

      {/* External Verified Link Modal */}
      <ExternalLinkModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
