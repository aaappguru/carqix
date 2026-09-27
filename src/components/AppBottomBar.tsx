import React from 'react';
import { Home, Car, Calculator, BookOpen, Menu } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AppBottomBar: React.FC = () => {
  const { currentRoute, navigate } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, route: 'home' },
    { id: 'buy_cars', label: 'Buy Cars', icon: Car, route: 'buy_cars' },
    { id: 'smart_tools', label: 'Calculators', icon: Calculator, route: 'smart_tools' },
    { id: 'reviews_guides', label: 'Guides', icon: BookOpen, route: 'reviews_guides' },
    { id: 'more', label: 'More', icon: Menu, route: 'more' },
  ];

  const getIsActive = (itemId: string, itemRoute: string) => {
    if (itemId === 'home') return currentRoute === 'home';
    if (itemId === 'buy_cars') return currentRoute === 'buy_cars' || currentRoute === 'value_car' || currentRoute === 'sell_car';
    if (itemId === 'smart_tools') return currentRoute === 'smart_tools' || currentRoute === 'calculator_detail';
    if (itemId === 'reviews_guides') return currentRoute === 'reviews_guides' || currentRoute === 'article_detail' || currentRoute === 'buying_advice';
    if (itemId === 'more') return currentRoute === 'more' || currentRoute === 'settings' || currentRoute === 'about' || currentRoute === 'how_to_use' || currentRoute === 'privacy_policy' || currentRoute === 'terms';
    return currentRoute === itemRoute;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg">
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6 grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = getIsActive(item.id, item.route);

          return (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => navigate(item.route)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors relative ${
                isActive ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-b-full"></span>
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.75px]'}`} />
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
