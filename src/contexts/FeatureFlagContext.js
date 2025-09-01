import React, { createContext, useContext, useState, useEffect } from 'react';

const FeatureFlagContext = createContext();

export const useFeatureFlags = () => {
  const context = useContext(FeatureFlagContext);
  if (!context) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagProvider');
  }
  return context;
};

export const FeatureFlagProvider = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState({
    granularBusinessLinesSuggestions: true,
    topUrlsPreview: true,
  });

  const [isFeatureFlagModalOpen, setIsFeatureFlagModalOpen] = useState(false);

  // Load feature flags from localStorage on component mount
  useEffect(() => {
    const savedFlags = localStorage.getItem('featureFlags');
    if (savedFlags) {
      try {
        setFeatureFlags(JSON.parse(savedFlags));
      } catch (error) {
        console.error('Error loading feature flags from localStorage:', error);
      }
    }
  }, []);

  // Save feature flags to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('featureFlags', JSON.stringify(featureFlags));
  }, [featureFlags]);

  const toggleFeatureFlag = (flagName) => {
    setFeatureFlags(prev => ({
      ...prev,
      [flagName]: !prev[flagName]
    }));
  };

  const isFeatureEnabled = (flagName) => {
    return featureFlags[flagName] ?? false;
  };

  const openFeatureFlagModal = () => {
    setIsFeatureFlagModalOpen(true);
  };

  const closeFeatureFlagModal = () => {
    setIsFeatureFlagModalOpen(false);
  };

  const value = {
    featureFlags,
    toggleFeatureFlag,
    isFeatureEnabled,
    isFeatureFlagModalOpen,
    openFeatureFlagModal,
    closeFeatureFlagModal,
  };

  return (
    <FeatureFlagContext.Provider value={value}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
