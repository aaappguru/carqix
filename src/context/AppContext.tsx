import React, { createContext, useContext, useState, useEffect } from 'react';
import { SavedItem, RecentSearch } from '../types';

interface AppContextType {
  currentRoute: string;
  routeParams: Record<string, string>;
  navigationStack: string[];
  navigate: (route: string) => void;
  goBack: () => void;
  savedItems: SavedItem[];
  saveItem: (item: Omit<SavedItem, 'id' | 'timestamp'>) => void;
  removeSavedItem: (id: string) => void;
  clearSavedItems: () => void;
  isItemSaved: (title: string) => boolean;
  recentSearches: RecentSearch[];
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
  externalLinkTarget: { url: string; title: string; subtitle?: string } | null;
  openExternalLink: (url: string, title?: string, subtitle?: string) => void;
  closeExternalLink: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParams, setRouteParams] = useState<Record<string, string>>({});
  const [navigationStack, setNavigationStack] = useState<string[]>(['home']);

  // Saved Items (Persistence via LocalStorage)
  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const stored = localStorage.getItem('carqix_saved_items');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Recent Searches (Persistence via LocalStorage)
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>(() => {
    try {
      const stored = localStorage.getItem('carqix_recent_searches');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [externalLinkTarget, setExternalLinkTarget] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('carqix_saved_items', JSON.stringify(savedItems));
    } catch (e) {
      console.error('Failed to persist saved items:', e);
    }
  }, [savedItems]);

  useEffect(() => {
    try {
      localStorage.setItem('carqix_recent_searches', JSON.stringify(recentSearches));
    } catch (e) {
      console.error('Failed to persist recent searches:', e);
    }
  }, [recentSearches]);

  const navigate = (route: string) => {
    if (route === 'go_back') {
      goBack();
      return;
    }

    // Parse route parameters e.g., 'calculator_detail/loan' or 'article_detail/guide_1'
    let baseRoute = route;
    const params: Record<string, string> = {};

    if (route.startsWith('calculator_detail/')) {
      baseRoute = 'calculator_detail';
      params.id = route.replace('calculator_detail/', '');
    } else if (route.startsWith('article_detail/')) {
      baseRoute = 'article_detail';
      params.id = route.replace('article_detail/', '');
    }

    setRouteParams(params);
    setCurrentRoute(baseRoute);
    setNavigationStack((prev) => [...prev, route]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setNavigationStack((prev) => {
      if (prev.length <= 1) {
        setCurrentRoute('home');
        setRouteParams({});
        return ['home'];
      }
      const newStack = [...prev];
      newStack.pop(); // Remove current
      const previousRoute = newStack[newStack.length - 1];

      let baseRoute = previousRoute;
      const params: Record<string, string> = {};

      if (previousRoute.startsWith('calculator_detail/')) {
        baseRoute = 'calculator_detail';
        params.id = previousRoute.replace('calculator_detail/', '');
      } else if (previousRoute.startsWith('article_detail/')) {
        baseRoute = 'article_detail';
        params.id = previousRoute.replace('article_detail/', '');
      }

      setRouteParams(params);
      setCurrentRoute(baseRoute);
      return newStack;
    });
  };

  const saveItem = (item: Omit<SavedItem, 'id' | 'timestamp'>) => {
    const newItem: SavedItem = {
      ...item,
      id: 'saved_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      timestamp: Date.now()
    };
    setSavedItems((prev) => [newItem, ...prev.filter((i) => i.title !== item.title)]);
  };

  const removeSavedItem = (id: string) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearSavedItems = () => {
    setSavedItems([]);
  };

  const isItemSaved = (title: string): boolean => {
    return savedItems.some((item) => item.title.toLowerCase() === title.toLowerCase());
  };

  const addRecentSearch = (query: string) => {
    if (!query.trim()) return;
    const clean = query.trim();
    const newEntry: RecentSearch = {
      id: 'search_' + Date.now(),
      query: clean,
      timestamp: Date.now()
    };
    setRecentSearches((prev) => [newEntry, ...prev.filter((s) => s.query.toLowerCase() !== clean.toLowerCase())].slice(0, 10));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const openExternalLink = (url: string, title?: string, subtitle?: string) => {
    if (!url) return;
    setExternalLinkTarget({
      url,
      title: title || 'Official Partner Portal',
      subtitle: subtitle || 'Securely opening US partner site'
    });
  };

  const closeExternalLink = () => {
    setExternalLinkTarget(null);
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        routeParams,
        navigationStack,
        navigate,
        goBack,
        savedItems,
        saveItem,
        removeSavedItem,
        clearSavedItems,
        isItemSaved,
        recentSearches,
        addRecentSearch,
        clearRecentSearches,
        externalLinkTarget,
        openExternalLink,
        closeExternalLink
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
