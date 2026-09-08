import React from 'react';
import { useApp } from '../context/AppContext';
import { InAppWebViewModal } from './InAppWebViewModal';

export const ExternalLinkModal: React.FC = () => {
  const { currentRoute } = useApp();
  // When full in-app browser screen is active, don't show duplicate floating modal
  if (currentRoute === 'inapp_browser') return null;
  return <InAppWebViewModal />;
};

export default ExternalLinkModal;
