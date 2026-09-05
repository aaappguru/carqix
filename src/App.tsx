import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AppTopBar } from './components/AppTopBar';
import { AppBottomBar } from './components/AppBottomBar';
import { ExternalLinkModal } from './components/ExternalLinkModal';

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
      {/* Top Header Navigation */}
      <AppTopBar />

      {/* Main Screen Container with max-width for ultra-wide and mobile optimization */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-5 pb-20">
        {renderScreen()}
      </main>

      {/* Persistent Bottom Bar for mobile/desktop navigation */}
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
