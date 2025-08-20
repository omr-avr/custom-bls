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
  const [currentPage, setCurrentPage] = useState('main');

  const handleAISegmentBuilderClick = () => {
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
        return <AISegmentBuilder onBack={handleBackToMain} />;
      case 'website-analysis':
        return <WebsiteAnalysis onBack={handleBackToMain} />;
      case 'website-segments':
        return <AISegmentBuilder onBack={handleBackToMain} />;
      default:
        return <MainContent onAISegmentBuilderClick={handleAISegmentBuilderClick} />;
    }
  };

  return (
    <AppContainer>
      <Sidebar 
        currentPage={currentPage}
        onWebsiteAnalysisClick={handleWebsiteAnalysisClick} 
        onWebsiteSegmentsClick={handleWebsiteSegmentsClick}
      />
      {renderPage()}
    </AppContainer>
  );
}

export default App; 