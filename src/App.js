import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AISegmentBuilder from './components/AISegmentBuilder';

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

  const handleBackToMain = () => {
    setCurrentPage('main');
  };

  return (
    <AppContainer>
      <Sidebar />
      {currentPage === 'main' ? (
        <MainContent onAISegmentBuilderClick={handleAISegmentBuilderClick} />
      ) : (
        <AISegmentBuilder onBack={handleBackToMain} />
      )}
    </AppContainer>
  );
}

export default App; 