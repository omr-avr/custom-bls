import React from 'react';
import styled from 'styled-components';
import { Settings } from 'lucide-react';
import { useFeatureFlags } from '../contexts/FeatureFlagContext';

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: all 0.2s ease;
  z-index: 999;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
    color: #374151;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FeatureFlagButton = () => {
  const { openFeatureFlagModal } = useFeatureFlags();

  return (
    <FloatingButton onClick={openFeatureFlagModal} title="Feature Flags">
      <Settings size={18} />
    </FloatingButton>
  );
};

export default FeatureFlagButton;
