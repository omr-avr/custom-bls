import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AISegmentBuilder from './components/AISegmentBuilder';
import WebsiteAnalysis from './components/WebsiteAnalysis';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('website-segments');
  const [aiBuilderInitialData, setAiBuilderInitialData] = useState(null);

  const handleAISegmentBuilderClick = (initialData = null) => {
    setAiBuilderInitialData(initialData);
    setCurrentPage('ai-segment-builder');
  };

  const handleWebsiteAnalysisClick = () => {
    setCurrentPage('website-analysis');
  };

  const handleWebsiteSegmentsClick = () => {
    setCurrentPage('website-segments');
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'ai-segment-builder':
        return <AISegmentBuilder onBack={handleBackToMain} initialData={aiBuilderInitialData} onNavigateToWebsiteSegments={handleWebsiteSegmentsClick} />;
      case 'website-analysis':
        return <WebsiteAnalysis onBack={handleBackToMain} onNavigateToAIBuilder={handleAISegmentBuilderClick} />;
      case 'website-segments':
        return <MainContent onAISegmentBuilderClick={handleAISegmentBuilderClick} />;
      default:
        return <MainContent onAISegmentBuilderClick={handleAISegmentBuilderClick} />;
    }
  };

  return (
    <AppContainer>
      <Sidebar 
        onWebsiteAnalysisClick={handleWebsiteAnalysisClick} 
        onWebsiteSegmentsClick={handleWebsiteSegmentsClick}
        currentPage={currentPage} 
      />
      {renderPage()}
    </AppContainer>
  );
}

export default App; 