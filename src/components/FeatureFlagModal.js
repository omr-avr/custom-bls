import React from 'react';
import styled from 'styled-components';
import { X, Flag } from 'lucide-react';
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
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
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
  gap: 0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
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

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const ToggleTrack = styled.button`
  width: 48px;
  height: 26px;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${props => props.enabled ? '#3E74FE' : '#9ca3af'};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(62, 116, 254, 0.2);
  }
`;

const ToggleKnob = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 3px;
  left: ${props => props.enabled ? '25px' : '3px'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ToggleLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${props => props.enabled ? '#3E74FE' : '#9ca3af'};
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  },
  {
    id: 'businessLinesDropdownSearch',
    title: 'Parent Business Lines search',
    description: 'Enable search functionality inside the Parent Business Lines dropdown'
  },
  {
    id: 'businessLinesSingleSelect',
    title: 'Single select mode',
    description: 'Toggle between single and multi-select for Parent Business Lines (off = multi-select, on = single-select)'
  },
  {
    id: 'businessLinesVisitsShare',
    title: 'Visits share display',
    description: 'Show visits share percentage for each business line in the dropdown'
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
              <Flag size={20} />
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
                <ToggleContainer>
                  <ToggleTrack 
                    enabled={featureFlags[feature.id]}
                    onClick={() => toggleFeatureFlag(feature.id)}
                    title={`${featureFlags[feature.id] ? 'Disable' : 'Enable'} ${feature.title}`}
                  >
                    <ToggleKnob enabled={featureFlags[feature.id]} />
                  </ToggleTrack>
                  <ToggleLabel enabled={featureFlags[feature.id]}>
                    {featureFlags[feature.id] ? 'On' : 'Off'}
                  </ToggleLabel>
                </ToggleContainer>
              </FeatureItem>
            ))}
          </FeatureList>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FeatureFlagModal;
