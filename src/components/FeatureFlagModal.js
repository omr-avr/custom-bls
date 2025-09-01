import React from 'react';
import styled from 'styled-components';
import { X, Settings, ToggleLeft, ToggleRight } from 'lucide-react';
import { useFeatureFlags } from '../contexts/FeatureFlagContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 0;
  width: 90%;
  max-width: 480px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: modalSlideIn 0.3s ease-out;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ModalIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #f9fafb;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`;

const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 4px;
  padding: 4px;

  &:hover {
    background-color: rgba(62, 116, 254, 0.1);
  }
`;

const ToggleIcon = styled.div`
  color: ${props => props.enabled ? '#3E74FE' : '#9ca3af'};
  transition: color 0.2s;
`;

const features = [
  {
    id: 'granularBusinessLinesSuggestions',
    title: 'Granular Business Lines suggestions',
    description: 'Show AI-powered suggestions for granular business lines on the AI Segment Builder page'
  },
  {
    id: 'topUrlsPreview',
    title: 'Top URLs Preview',
    description: 'Display preview of top URLs in the segment preview section on the AI Segment Builder page'
  }
];

const FeatureFlagModal = () => {
  const { 
    isFeatureFlagModalOpen, 
    closeFeatureFlagModal, 
    featureFlags, 
    toggleFeatureFlag 
  } = useFeatureFlags();

  if (!isFeatureFlagModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeFeatureFlagModal();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>
            <ModalIcon>
              <Settings size={20} />
            </ModalIcon>
            Feature Flags
          </ModalTitle>
          <CloseButton onClick={closeFeatureFlagModal}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <FeatureList>
            {features.map((feature) => (
              <FeatureItem key={feature.id}>
                <FeatureInfo>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureInfo>
                <ToggleButton 
                  onClick={() => toggleFeatureFlag(feature.id)}
                  title={`${featureFlags[feature.id] ? 'Disable' : 'Enable'} ${feature.title}`}
                >
                  <ToggleIcon enabled={featureFlags[feature.id]}>
                    {featureFlags[feature.id] ? (
                      <ToggleRight size={32} />
                    ) : (
                      <ToggleLeft size={32} />
                    )}
                  </ToggleIcon>
                </ToggleButton>
              </FeatureItem>
            ))}
          </FeatureList>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FeatureFlagModal;
