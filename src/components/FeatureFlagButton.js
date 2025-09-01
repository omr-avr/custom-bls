import React from 'react';
import styled from 'styled-components';
import { Settings } from 'lucide-react';
import { useFeatureFlags } from '../contexts/FeatureFlagContext';

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
  border: none;
  box-shadow: 0 4px 16px rgba(62, 116, 254, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(62, 116, 254, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const FeatureFlagButton = () => {
  const { openFeatureFlagModal } = useFeatureFlags();

  return (
    <FloatingButton onClick={openFeatureFlagModal} title="Feature Flags">
      <Settings size={20} />
    </FloatingButton>
  );
};

export default FeatureFlagButton;
