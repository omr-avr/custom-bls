import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ArrowLeft, Search, Globe, ChevronDown, Sparkles, TrendingUp, Users, Link, Info, Calendar, Brain, Plus, Check, PieChart } from 'lucide-react';

const MainContainer = styled.div`
  flex: 1;
  background-color: #F5F9FD;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
`;

const Header = styled.div`
  padding: 28px 32px 20px 32px;
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BackButton = styled.button`
  background-color: transparent;
  color: #6b7280;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const Content = styled.div`
  padding: 0px 32px;
  max-width: 1360px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 0;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0;
  margin-bottom: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const CardContent = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentSplit = styled.div`
  display: flex;
  flex: 1;
  gap: 0;
  position: relative;
  min-height: 0;
`;

const SectionDivider = styled.div`
  position: absolute;
  left: 66.67%;
  top: 0;
  width: 1px;
  background-color: #e5e7eb;
  height: 100%;
  z-index: 1;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`;

const SectionHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

const MetadataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MetadataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
`;

const MetadataIcon = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0.7;
`;

const BuildHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SectionContent = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionFooter = styled.div`
  padding: 20px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  height: 80px;
`;

const SearchContainer = styled.div`
  margin-bottom: 0;
`;

const FieldContainer = styled.div`
  margin-bottom: 0;
`;



const DropdownContainer = styled.div`
  margin-bottom: 0;
`;

const CTAButton = styled.button`
  padding: 8px 12px;
  background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  height: 44px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: #f3f4f6;
    color: #6b7280;
    cursor: not-allowed;
  }
`;

const HugButton = styled.button`
  padding: 8px 12px;
  background-color: #3E74FE;
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #f3f4f6;
    color: #6b7280;
    cursor: not-allowed;
  }
`;



const TitleDivider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin-bottom: 20px;
  margin-left: -16px;
  margin-right: -16px;
`;

const LeftTitleDivider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin-bottom: 20px;
  margin-left: -16px;
  margin-right: -16px;
`;

const Divider = styled.div`
  position: absolute;
  left: 66.67%;
  top: 0;
  width: 1px;
  background-color: #e5e7eb;
  height: calc(100% - 80px);
  margin: 0;
  z-index: 1;
`;

const SearchLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

const SearchField = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputFavicon = styled.img`
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  z-index: 1;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
  height: 44px;
  
  ${props => props.hasFavicon && `
    padding-left: 40px;
  `}

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3E74FE;
    box-shadow: 0 0 0 2px rgba(62, 116, 254, 0.1);
  }

  ${props => props.disabled && `
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    
    &:focus {
      border-color: #d1d5db;
      box-shadow: none;
    }
  `}
`;

const ExplainerText = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 8px;
  line-height: 1.4;
`;

const AILoader = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(2px);
  margin-left: 1px;
`;

const LoaderContent = styled.div`
  text-align: center;
  max-width: 300px;
`;

const LoaderTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

const LoaderSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 24px 0;
  line-height: 1.5;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f4f6;
  border-top: 3px solid #3E74FE;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoaderProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f3f4f6;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 16px;
`;

const LoaderProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
  border-radius: 2px;
  transition: width 0.3s ease;
`;

const AIIcon = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
`;



const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DomainIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: #6b7280;
`;

const DropdownLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

const DropdownField = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownInput = styled.div`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6b7280;
  gap: 8px;
  box-sizing: border-box;

  &:hover {
    border-color: #9ca3af;
  }

  ${props => props.disabled && `
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    
    &:hover {
      border-color: #d1d5db;
    }
  `}
`;

const DropdownIcon = styled.div`
  color: #9ca3af;
  flex-shrink: 0;
`;

const Chip = styled.div`
  background-color: #f0f9ff;
  color: #3E74FE;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ChipRemove = styled.button`
  background: none;
  border: none;
  color: #3E74FE;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 12px;
  
  &:hover {
    color: #1d4ed8;
  }
`;

// Segment Preview Metrics Components
const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MetricCard = styled.div`
  padding: 0;
`;

const MetricTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MetricValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
`;

const InfoIcon = styled.div`
  position: relative;
  cursor: pointer;
  color: #9ca3af;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #6b7280;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1f2937;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  margin-top: 8px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  
  ${InfoIcon}:hover & {
    opacity: 1;
    visibility: visible;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #1f2937;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #3E74FE;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CounterIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
`;

const CounterValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
`;

const CounterLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
`;

// URL List Components
const UrlListContainer = styled.div`
  margin-top: 16px;
  position: relative;
`;

const UrlListTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UrlListGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  pointer-events: none;
  z-index: 1;
`;

const UrlListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f3f4f6;
  font-size: 12px;

  &:last-child {
    border-bottom: none;
  }
`;

const UrlText = styled.div`
  color: #374151;
  font-weight: 500;
  flex: 1;
  margin-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UrlShare = styled.div`
  color: #6b7280;
  font-weight: 600;
  flex-shrink: 0;
`;

const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-top: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SuggestionItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: #f9fafb;
  }
  
  &:last-child {
    border-bottom: none;
  }

  ${props => props.focused && `
    background-color: #f0f9ff;
    color: #3E74FE;
  `}
`;

const SuggestionFavicon = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  flex-shrink: 0;
`;

const SuggestionLabel = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  background-color: #f9fafb;
  border-bottom: 1px solid #f3f4f6;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`;

// Empty State Components
const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  height: 100%;
`;

const EmptyStateTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 12px 0;
`;

const EmptyStateSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.5;
  max-width: 320px;
`;

const SuggestionsTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
`;

const SuggestionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  max-width: 400px;
`;

const SuggestionChip = styled.button`
  background-color: #f0f9ff;
  color: #3E74FE;
  border: 1px solid #e0f2fe;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #3E74FE;
    color: #ffffff;
    border-color: #3E74FE;
  }
`;

// Build Section Suggestions Components
const BuildSuggestionsContainer = styled.div`
  margin-top: 16px;
`;

const BuildSuggestionsTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 12px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HelpText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #6b7280;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: #374151;
  }
`;

const HelpTooltip = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  transform: translateY(8px);
  background-color: #1f2937;
  color: white;
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.4;
  width: 280px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  
  ${HelpText}:hover & {
    opacity: 1;
    visibility: visible;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 20px;
    width: 12px;
    height: 12px;
    background-color: #1f2937;
    transform: rotate(45deg);
  }
`;

const TooltipSection = styled.div`
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TooltipTitle = styled.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #ffffff;
`;

const TooltipList = styled.ul`
  margin: 0;
  padding-left: 16px;
  
  li {
    margin-bottom: 2px;
    color: #d1d5db;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const BuildSuggestionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const BuildSuggestionChip = styled.button`
  background-color: #f9fafb;
  color: #374151;
  border: 1px solid #e5e7eb;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f0f9ff;
    color: #3E74FE;
    border-color: #3E74FE;
  }
`;

const GeneratingSuggestionsText = styled.span`
  background: linear-gradient(90deg, #3E74FE, #2AD3AB, #3E74FE);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 2s ease-in-out infinite;
  font-weight: 600;
  
  @keyframes gradientShift {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

// Modal Styled Components
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
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  width: 90%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const ModalForm = styled.div`
  margin-bottom: 32px;
`;

const ModalLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  color: #111827;
  box-sizing: border-box;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
  padding: 8px 12px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(ModalButton)`
  background-color: #3E74FE;
  color: #ffffff;
  
  &:hover:not(:disabled) {
    background-color: #1d4ed8;
  }
`;

const SecondaryButton = styled(ModalButton)`
  background-color: transparent;
  color: #3E74FE;
  border: 1px solid #3E74FE;
  
  &:hover:not(:disabled) {
    background-color: #f0f9ff;
  }
`;

const AISegmentBuilder = ({ onBack }) => {
  const [selectedBusinessLines, setSelectedBusinessLines] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [websiteInput, setWebsiteInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef(null);
  const websiteRef = useRef(null);
  const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);
  const [focusedBusinessLineIndex, setFocusedBusinessLineIndex] = useState(-1);
  const [granularBusinessLines, setGranularBusinessLines] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);
  
  // Segment Preview metrics state
  const [segmentShare, setSegmentShare] = useState(0);
  const [monthlyVisits, setMonthlyVisits] = useState(0);
  const [matchingUrls, setMatchingUrls] = useState(0);
  const [topUrls, setTopUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [originalFormState, setOriginalFormState] = useState({
    website: '',
    businessLines: [],
    granular: ''
  });
  const [businessLineSearch, setBusinessLineSearch] = useState('');
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [showSuggestionLoader, setShowSuggestionLoader] = useState(false);
  const [showBuildSuggestions, setShowBuildSuggestions] = useState(false);
  const [selectedWebsiteFavicon, setSelectedWebsiteFavicon] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [segmentName, setSegmentName] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);


  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedRecentSearches = localStorage.getItem('aiSegmentBuilder_recentSearches');
    if (savedRecentSearches) {
      setRecentSearches(JSON.parse(savedRecentSearches));
    }
  }, []);

  // CSV Data Mapping - Parent Business Lines from BLS column
  const businessLinesData = [
    { bls: 'Mobile Phones', suggestions: ['Smartphones', 'Feature Phones', 'Refurbished Phones', 'Prepaid Phones', 'Unlocked Phones'] },
    { bls: 'Kitchen & Dining', suggestions: ['Cookware', 'Dinnerware', 'Small Appliances', 'Bakeware', 'Cutlery'] },
    { bls: 'Lights & Lighting', suggestions: ['Indoor Lighting', 'Outdoor Lighting', 'Light Bulbs', 'Commercial Lighting', 'Smart Lighting'] },
    { bls: 'Swimwear', suggestions: ['Bikinis', 'One-Piece Swimsuits', 'Board Shorts', 'Rash Guards', 'Swim Trunks'] },
    { bls: 'Sunglasses', suggestions: ['Aviator sunglasses', 'Wayfarer sunglasses', 'cat-eye sunglasses', 'polarized sunglasses', 'sport sunglasses'] },
    { bls: 'Contact Lenses & Accessories', suggestions: ['Daily disposable contact lenses', 'Monthly disposable contact lenses', 'Colored contact lenses', 'Contact lens solution', 'Contact lens cases'] },
    { bls: 'General Clothing', suggestions: ['Dresses', 'Pants', 'Shirts', 'Jackets', 'Skirts'] },
    { bls: 'Consumer Electronic Accessories', suggestions: ['Headphones', 'Phone Cases', 'Smartwatch Bands', 'Charging Cables', 'Portable Speakers'] },
    { bls: 'Home Appliances', suggestions: ['Refrigerators', 'Washing Machines', 'Vacuum Cleaners', 'Coffee Makers', 'Toasters'] },
    { bls: 'Vitamins & Supplements', suggestions: ['Multivitamins', 'Protein Powders', 'Fish Oil', 'Probiotics', 'Herbal Supplements'] },
    { bls: 'Oral Care', suggestions: ['Toothbrushes', 'Toothpaste', 'Mouthwash', 'Dental Floss', 'Whitening Products'] },
    { bls: 'Home Furniture', suggestions: ['Sofas and sectionals', 'Beds and mattresses', 'Dining tables and chairs', 'Coffee and end tables', 'Bookshelves and storage'] },
    { bls: 'Photo Printing', suggestions: ['Photo books', 'Canvas prints', 'Metal prints', 'Greeting cards', 'Calendar printing'] },
    { bls: 'Televisions', suggestions: ['Smart TVs', '4K TVs', 'OLED TVs', 'LED TVs', 'Portable TVs'] },
    { bls: 'Make-Up & Cosmetics', suggestions: ['Foundation', 'Lipstick', 'Eyeshadow', 'Mascara', 'Skincare'] },
    { bls: 'Video Games, Consoles & Accessories', suggestions: ['Video Games', 'Gaming Consoles', 'Gaming Accessories', 'PC Gaming', 'Virtual Reality'] },
    { bls: 'Perfumes & Fragrances', suggestions: ['Eau de Parfum', 'Eau de Toilette', 'Cologne', 'Gift Sets', 'Travel Size Fragrances'] },
    { bls: 'Bags & Packs', suggestions: ['Backpacks', 'Handbags', 'Luggage', 'Wallets', 'Duffel Bags'] },
    { bls: 'Drugs & Medications', suggestions: ['Pain Relief', 'Allergy Medication', 'Vitamins & Supplements', 'Cold & Flu Remedies', 'Digestive Health'] },
    { bls: 'Baby Products', suggestions: ['Baby formula', 'diapers', 'baby clothing', 'strollers', 'car seats'] },
    { bls: 'Skin Care', suggestions: ['Facial cleansers', 'Moisturizers', 'Serums', 'Sunscreens', 'Eye creams'] },
    { bls: 'Beverages', suggestions: ['Coffee', 'Tea', 'Juices', 'Soft Drinks', 'Bottled Water'] },
    { bls: 'Hardware Tools & Accessories', suggestions: ['Power Tools', 'Hand Tools', 'Fasteners', 'Safety Equipment', 'Garden Tools'] },
    { bls: 'Vehicle Parts & Accessories', suggestions: ['Tires', 'Brake Systems', 'Car Batteries', 'Engine Components', 'Car Lighting'] },
    { bls: 'Men\'s Clothing', suggestions: ['Shirts', 'Pants', 'Outerwear', 'Underwear', 'Accessories'] },
    { bls: 'Nutrition & Dieting', suggestions: ['Weight Management', 'Supplements', 'Meal Delivery Services', 'Healthy Snacks', 'Dietary Plans'] },
    { bls: 'Office & School supplies', suggestions: ['Writing instruments', 'Notebooks & paper', 'Desk organizers', 'Art supplies', 'Educational toys'] },
    { bls: 'Tablet PCs', suggestions: ['Android tablets', 'Windows tablets', 'kids\' tablets', 'drawing tablets', 'rugged tablets'] },
    { bls: 'Children\'s Clothing', suggestions: ['Infant Bodysuits', 'Toddler Dresses', 'Kids\' Jeans', 'Children\'s Outerwear', 'Baby Sleepwear'] },
    { bls: 'Bathroom', suggestions: ['Toilets', 'Showers', 'Sinks', 'Bathroom vanities', 'Bathroom accessories'] },
    { bls: 'Yard, Garden & Patio', suggestions: ['Outdoor Furniture', 'Grills & Outdoor Cooking', 'Gardening Tools', 'Lawn Care Equipment', 'Patio Heaters & Fire Pits'] },
    { bls: 'Parties & Party Supplies', suggestions: ['Party decorations', 'party favors', 'balloons', 'disposable tableware', 'costumes'] },
    { bls: 'Footwear', suggestions: ['Athletic shoes', 'Boots', 'Sandals', 'Dress shoes', 'Slippers'] },
    { bls: 'Women\'s Clothing', suggestions: ['Dresses', 'Tops', 'Pants', 'Skirts', 'Outerwear'] },
    { bls: 'Home Decor & Interior Decorating', suggestions: ['Furniture', 'Lighting', 'Wall Art', 'Rugs', 'Decorative Accents'] },
    { bls: 'Household Supplies', suggestions: ['Cleaning Supplies', 'Laundry Supplies', 'Kitchen Supplies', 'Paper Products', 'Pest Control'] },
    { bls: 'Pet Food & Supplies', suggestions: ['Dog Food', 'Cat Food', 'Pet Toys', 'Pet Beds', 'Pet Grooming Supplies'] },
    { bls: 'Laptop Computers', suggestions: ['Gaming Laptops', 'Business Laptops', 'Ultrabooks', '2-in-1 Laptops', 'Chromebooks'] },
    { bls: 'Food', suggestions: ['Packaged Snacks', 'Fresh Produce', 'Frozen Meals', 'Dairy Products', 'Beverages'] },
    { bls: 'Luggage & Travel Accessories', suggestions: ['Suitcases', 'Backpacks', 'Travel Bags', 'Wallets & Passport Holders', 'Travel Pillows'] },
    { bls: 'Camping & Outdoor Recreation', suggestions: ['Tents', 'Sleeping Bags', 'Camping Cookware', 'Hiking Backpacks', 'Outdoor Apparel'] },
    { bls: 'Toys & Games', suggestions: ['Action Figures', 'Board Games', 'Building Blocks', 'Dolls', 'Puzzles'] },
    { bls: 'Sleepwear', suggestions: ['Pajamas', 'nightgowns', 'robes', 'loungewear', 'sleep shirts'] },
    { bls: 'Bedding & Linens', suggestions: ['Sheets', 'Comforters', 'Pillows', 'Blankets', 'Duvet Covers'] },
    { bls: 'Watches & Watch Accessories', suggestions: ['Smartwatches', 'Mechanical Watches', 'Watch Straps', 'Watch Repair Tools', 'Pocket Watches'] },
    { bls: 'Underwear', suggestions: ['Bras', 'Panties', 'Socks', 'Shapewear', 'Thermal Underwear'] },
    { bls: 'Headphones', suggestions: ['In-ear headphones', 'Over-ear headphones', 'On-ear headphones', 'Wireless headphones', 'Noise-canceling headphones'] },
    { bls: 'Vehicles', suggestions: ['Cars', 'Motorcycles', 'Trucks', 'Boats', 'RVs'] },
    { bls: 'Glasses', suggestions: ['Reading glasses', 'Sunglasses', 'Blue light blocking glasses', 'Prescription glasses', 'Safety glasses'] },
    { bls: 'Computer Electronics', suggestions: ['Laptops', 'Desktop Computers', 'Computer Monitors', 'Printers', 'Computer Accessories'] },
    { bls: 'Apparel Accessories', suggestions: ['Belts', 'Gloves', 'Scarves', 'Hats', 'Sunglasses'] },
    { bls: 'Home Storage & Organization', suggestions: ['Closet Organizers', 'Food Storage Containers', 'Drawer Dividers', 'Shelving Units', 'Laundry Baskets'] },
    { bls: 'Nail Care', suggestions: ['Nail polish', 'Manicure tools', 'Pedicure tools', 'Nail treatments', 'Artificial nails'] },
    { bls: 'Personal care', suggestions: ['Skincare', 'Haircare', 'Oral Care', 'Deodorants', 'Shaving Products'] },
    { bls: 'Sexual Wellness', suggestions: ['Adult Toys', 'Lingerie', 'Lubricants', 'Condoms', 'Fertility Products'] },
    { bls: 'Hair Care', suggestions: ['Shampoo', 'Conditioner', 'Hair Styling Products', 'Hair Treatments', 'Hair Color'] },
    { bls: 'Uniforms', suggestions: ['Medical uniforms', 'school uniforms', 'sports uniforms', 'work uniforms', 'protective uniforms'] },
    { bls: 'Mattresses', suggestions: ['Innerspring Mattresses', 'Memory Foam Mattresses', 'Hybrid Mattresses', 'Adjustable Beds', 'Mattress Protectors'] },
    { bls: 'Fitness Equipment & Accessories', suggestions: ['Treadmills', 'Dumbbells', 'Yoga Mats', 'Smartwatches', 'Resistance Bands'] },
    { bls: 'Jewelry', suggestions: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Charms'] },
    { bls: 'Speakers', suggestions: ['Bluetooth speakers', 'Smart speakers', 'Soundbars', 'Car speakers', 'Computer speakers'] },
    { bls: 'Digital Cameras', suggestions: ['DSLR Cameras', 'Mirrorless Cameras', 'Point-and-Shoot Cameras', 'Action Cameras', 'Camcorders'] }
  ];

  const businessLinesMap = {
    'www.nike.com': ['Footwear', 'Men\'s Clothing', 'Women\'s Clothing', 'Children\'s Clothing', 'Bags & Packs'],
    'www.amazon.com': ['Computer Electronics', 'Home Appliances', 'Household Supplies', 'Toys & Games', 'Pet Food & Supplies'],
    'www.apple.com': ['Mobile Phones', 'Laptop Computers', 'Tablet PCs', 'Headphones', 'Watches & Watch Accessories'],
    'www.walmart.com': ['General Clothing', 'Food', 'Home Appliances', 'Toys & Games', 'Pet Food & Supplies'],
    'www.target.com': ['Home Furniture', 'Make-Up & Cosmetics', 'Baby Products', 'Household Supplies', 'Toys & Games'],
    'www.bestbuy.com': ['Televisions', 'Laptop Computers', 'Video Games, Consoles & Accessories', 'Headphones', 'Computer Electronics'],
    'www.homedepot.com': ['Hardware Tools & Accessories', 'Home Appliances', 'Lights & Lighting', 'Bathroom', 'Yard, Garden & Patio'],
    'www.lowes.com': ['Hardware Tools & Accessories', 'Home Appliances', 'Lights & Lighting', 'Bathroom', 'Yard, Garden & Patio'],
    'www.wayfair.com': ['Home Furniture', 'Home Decor & Interior Decorating', 'Bedding & Linens', 'Lights & Lighting'],
    'www.macys.com': ['Women\'s Clothing', 'Men\'s Clothing', 'Make-Up & Cosmetics', 'Perfumes & Fragrances', 'Jewelry'],
    'www.nordstrom.com': ['Women\'s Clothing', 'Men\'s Clothing', 'Footwear', 'Bags & Packs', 'Make-Up & Cosmetics'],
    'www.ulta.com': ['Make-Up & Cosmetics', 'Skin Care', 'Hair Care', 'Perfumes & Fragrances', 'Nail Care'],
    'www.sephora.com': ['Make-Up & Cosmetics', 'Skin Care', 'Hair Care', 'Perfumes & Fragrances'],
    'www.cvs.com': ['Drugs & Medications', 'Vitamins & Supplements', 'Oral Care', 'Personal care', 'Skin Care'],
    'www.walgreens.com': ['Drugs & Medications', 'Vitamins & Supplements', 'Oral Care', 'Personal care', 'Skin Care'],
    'www.petco.com': ['Pet Food & Supplies'],
    'www.petsmart.com': ['Pet Food & Supplies'],
    'www.rei.com': ['Camping & Outdoor Recreation', 'Footwear', 'Men\'s Clothing', 'Women\'s Clothing'],
    'www.gamestop.com': ['Video Games, Consoles & Accessories'],
    'www.staples.com': ['Office & School supplies', 'Computer Electronics', 'Laptop Computers']
  };

  const getBusinessLinesForWebsite = (website) => {
    return businessLinesMap[website] || [
      'General Clothing',
      'Computer Electronics',
      'Home Appliances',
      'Food',
      'Personal care',
      'Office & School supplies',
      'Household Supplies',
      'Toys & Games',
      'Home Furniture',
      'Beverages'
    ];
  };

  const businessLines = getBusinessLinesForWebsite(websiteInput);

  // Get favicon URL for any website
  const getFaviconUrl = (url) => {
    // Check if it's in our predefined list first
    const predefinedSite = websiteSuggestions.find(site => site.url.toLowerCase() === url.toLowerCase());
    if (predefinedSite) {
      return predefinedSite.favicon;
    }
    
    // Generate favicon URL for any website
    const cleanUrl = url.replace(/^www\./, '').replace(/\/$/, '');
    return `https://www.google.com/s2/favicons?domain=${cleanUrl}&sz=16`;
  };

  // Save recent search to localStorage
  const saveRecentSearch = (website) => {
    if (!website || website.length < 3) return; // Don't save very short searches
    
    const newRecentSearches = [website, ...recentSearches.filter(search => search !== website)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('aiSegmentBuilder_recentSearches', JSON.stringify(newRecentSearches));
  };

  const websiteSuggestions = [
    { url: 'www.nike.com', favicon: 'https://www.google.com/s2/favicons?domain=nike.com&sz=16' },
    { url: 'www.amazon.com', favicon: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=16' },
    { url: 'www.apple.com', favicon: 'https://www.google.com/s2/favicons?domain=apple.com&sz=16' },
    { url: 'www.walmart.com', favicon: 'https://www.google.com/s2/favicons?domain=walmart.com&sz=16' },
    { url: 'www.target.com', favicon: 'https://www.google.com/s2/favicons?domain=target.com&sz=16' },
    { url: 'www.bestbuy.com', favicon: 'https://www.google.com/s2/favicons?domain=bestbuy.com&sz=16' },
    { url: 'www.homedepot.com', favicon: 'https://www.google.com/s2/favicons?domain=homedepot.com&sz=16' },
    { url: 'www.lowes.com', favicon: 'https://www.google.com/s2/favicons?domain=lowes.com&sz=16' },
    { url: 'www.wayfair.com', favicon: 'https://www.google.com/s2/favicons?domain=wayfair.com&sz=16' },
    { url: 'www.macys.com', favicon: 'https://www.google.com/s2/favicons?domain=macys.com&sz=16' },
    { url: 'www.nordstrom.com', favicon: 'https://www.google.com/s2/favicons?domain=nordstrom.com&sz=16' },
    { url: 'www.ulta.com', favicon: 'https://www.google.com/s2/favicons?domain=ulta.com&sz=16' },
    { url: 'www.sephora.com', favicon: 'https://www.google.com/s2/favicons?domain=sephora.com&sz=16' },
    { url: 'www.cvs.com', favicon: 'https://www.google.com/s2/favicons?domain=cvs.com&sz=16' },
    { url: 'www.walgreens.com', favicon: 'https://www.google.com/s2/favicons?domain=walgreens.com&sz=16' },
    { url: 'www.petco.com', favicon: 'https://www.google.com/s2/favicons?domain=petco.com&sz=16' },
    { url: 'www.petsmart.com', favicon: 'https://www.google.com/s2/favicons?domain=petsmart.com&sz=16' },
    { url: 'www.rei.com', favicon: 'https://www.google.com/s2/favicons?domain=rei.com&sz=16' },
    { url: 'www.gamestop.com', favicon: 'https://www.google.com/s2/favicons?domain=gamestop.com&sz=16' },
    { url: 'www.staples.com', favicon: 'https://www.google.com/s2/favicons?domain=staples.com&sz=16' }
  ];

  const handleWebsiteChange = (value) => {
    setWebsiteInput(value);
    // Reset selected business lines when website changes
    setSelectedBusinessLines([]);
    // Reset suggestions when website changes
    setShowBuildSuggestions(false);
    setShowSuggestionLoader(false);
    
    // Check if the entered value exactly matches one of our predefined websites
    const exactMatch = websiteSuggestions.find(site => 
      site.url.toLowerCase() === value.toLowerCase()
    );
    setSelectedWebsiteFavicon(exactMatch ? exactMatch.favicon : '');
    
    if (value.length > 0) {
      // Filter predefined website suggestions
      const filtered = websiteSuggestions.filter(site => 
        site.url.toLowerCase().includes(value.toLowerCase())
      );
      
      // Filter recent searches that match the input
      const filteredRecentSearches = recentSearches
        .filter(search => search.toLowerCase().includes(value.toLowerCase()))
        .map(search => ({ url: search, favicon: getFaviconUrl(search), isRecent: true }));
      
      // Combine suggestions: predefined websites first, then recent searches
      const combinedSuggestions = [...filtered, ...filteredRecentSearches.filter(recent => 
        !filtered.some(suggestion => suggestion.url.toLowerCase() === recent.url.toLowerCase())
      )];
      
      setSuggestions(combinedSuggestions);
      setShowSuggestions(true);
    } else {
      // Show recent searches when input is empty
      const recentSuggestions = recentSearches.map(search => ({ url: search, favicon: getFaviconUrl(search), isRecent: true }));
      setSuggestions(recentSuggestions);
      setShowSuggestions(recentSuggestions.length > 0);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setWebsiteInput(suggestion.url);
    setSelectedWebsiteFavicon(suggestion.favicon);
    setShowSuggestions(false);
    setFocusedSuggestionIndex(-1);
    // Save to recent searches
    saveRecentSearch(suggestion.url);
  };

  const handleWebsiteKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedSuggestionIndex >= 0) {
          handleSuggestionClick(suggestions[focusedSuggestionIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setFocusedSuggestionIndex(-1);
        break;
    }
  };

  const handleBusinessLineKeyDown = (e) => {
    if (!isDropdownOpen || filteredBusinessLines.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedBusinessLineIndex(prev => 
          prev < filteredBusinessLines.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedBusinessLineIndex(prev => 
          prev > 0 ? prev - 1 : filteredBusinessLines.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedBusinessLineIndex >= 0) {
          handleBusinessLineToggle(filteredBusinessLines[focusedBusinessLineIndex]);
        }
        break;
      case 'Escape':
        setIsDropdownOpen(false);
        setFocusedBusinessLineIndex(-1);
        setBusinessLineSearch('');
        break;
    }
  };

  const handleBusinessLineToggle = (line) => {
    let newSelectedLines;
    if (selectedBusinessLines.includes(line)) {
      newSelectedLines = selectedBusinessLines.filter(item => item !== line);
    } else {
      newSelectedLines = [...selectedBusinessLines, line];
    }
    setSelectedBusinessLines(newSelectedLines);
    
    // Trigger suggestions loader if we have website + business lines
    if (websiteInput && newSelectedLines.length > 0) {
      setShowSuggestionLoader(true);
      setShowBuildSuggestions(false);
      
      // Show suggestions after 5 seconds
      setTimeout(() => {
        setShowSuggestionLoader(false);
        setShowBuildSuggestions(true);
      }, 5000);
    } else {
      setShowBuildSuggestions(false);
      setShowSuggestionLoader(false);
    }
  };

  // Validation function to check if granular business lines match context using CSV data
  const validateGranularBusinessLines = () => {
    const granularLower = granularBusinessLines.toLowerCase();
    const websiteLower = websiteInput.toLowerCase();
    
    // Define category keywords based on CSV data
    const clothingKeywords = ['socks', 'clothing', 'fashion', 'shirt', 'pants', 'dress', 'jacket', 'hat', 'underwear', 'sweater', 'pink socks'];
    const techKeywords = ['software', 'laptops', 'phones', 'tech', 'computer', 'tablet', 'app', 'digital', 'gaming', 'console'];
    const automotiveKeywords = ['cars', 'automotive', 'vehicle', 'truck', 'motorcycle', 'engine', 'tires', 'brake'];
    const medicalKeywords = ['medicine', 'healthcare', 'medical', 'hospital', 'pharmacy', 'doctor', 'vitamins', 'supplements'];
    const foodKeywords = ['food', 'restaurant', 'cooking', 'recipe', 'kitchen', 'dining', 'beverages', 'snacks'];
    const homeKeywords = ['furniture', 'appliances', 'lighting', 'bathroom', 'garden', 'patio', 'cleaning'];
    const beautyKeywords = ['makeup', 'cosmetics', 'skincare', 'haircare', 'perfume', 'fragrance', 'nail'];
    const entertainmentKeywords = ['movies', 'films', 'tv', 'television', 'shows', 'series', 'streaming', 'entertainment', 'action', 'comedy', 'drama', 'horror', 'documentary'];
    
    // Get all valid suggestions for selected business lines from CSV data
    const validSuggestions = selectedBusinessLines.flatMap(line => {
      const businessLine = businessLinesData.find(item => item.bls === line);
      return businessLine ? businessLine.suggestions.map(s => s.toLowerCase()) : [];
    });
    
    // Check if granular input matches any valid suggestions (stricter matching)
    const hasValidMatch = validSuggestions.length > 0 && validSuggestions.some(suggestion => {
      // More strict matching - either exact match or suggestion contains the input
      return suggestion.includes(granularLower) || granularLower.includes(suggestion);
    });
    
    // Check for obvious mismatches based on website and business lines
    const commonMismatches = [
      // Nike + footwear/clothing but user inputs entertainment content
      (websiteLower.includes('nike') && 
       (selectedBusinessLines.includes('Footwear') || selectedBusinessLines.includes('Men\'s Clothing') || selectedBusinessLines.includes('Women\'s Clothing')) && 
       entertainmentKeywords.some(keyword => granularLower.includes(keyword))),
      
      // Beauty websites + beauty business lines but user inputs non-beauty items
      ((websiteLower.includes('ulta') || websiteLower.includes('sephora')) && 
       (selectedBusinessLines.includes('Make-Up & Cosmetics') || selectedBusinessLines.includes('Skin Care') || selectedBusinessLines.includes('Hair Care')) && 
       (techKeywords.some(keyword => granularLower.includes(keyword)) ||
        automotiveKeywords.some(keyword => granularLower.includes(keyword)) ||
        clothingKeywords.some(keyword => granularLower.includes(keyword)) ||
        entertainmentKeywords.some(keyword => granularLower.includes(keyword)))),
      
      // Home improvement websites + home business lines but user inputs unrelated items
      ((websiteLower.includes('homedepot') || websiteLower.includes('lowes')) && 
       (selectedBusinessLines.includes('Hardware Tools & Accessories') || selectedBusinessLines.includes('Home Appliances')) && 
       (beautyKeywords.some(keyword => granularLower.includes(keyword)) ||
        clothingKeywords.some(keyword => granularLower.includes(keyword)) ||
        entertainmentKeywords.some(keyword => granularLower.includes(keyword))))
    ];
    
    // Return false if there's an obvious mismatch OR if no valid match found
    return !commonMismatches.some(condition => condition) && hasValidMatch;
  };

  const generateMetrics = () => {
    setIsLoading(true);
    setLoadingProgress(0);
    setShowEmptyState(false);
    
    // Clear previous results
    setTopUrls([]);
    setSegmentShare(0);
    setMonthlyVisits(0);
    setMatchingUrls(0);
    
    // Save current form state
    setOriginalFormState({
      website: websiteInput,
      businessLines: selectedBusinessLines,
      granular: granularBusinessLines
    });
    
    // Check validation
    const isValid = validateGranularBusinessLines();
    
    // Random loading time between 15-30 seconds
    const loadingTime = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000;
    const progressInterval = 100; // Update progress every 100ms
    const progressIncrement = (progressInterval / loadingTime) * 100;
    
    const progressTimer = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + progressIncrement;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, progressInterval);
    
    setTimeout(() => {
      if (isValid) {
      // Generate random metrics for demonstration
      setSegmentShare(Math.floor(Math.random() * 100) + 1);
      setMonthlyVisits(Math.floor(Math.random() * 1000000) + 10000);
      setMatchingUrls(Math.floor(Math.random() * 5000) + 100);
      
        // Generate contextual URLs based on input combination
        const generateContextualUrls = () => {
          const website = websiteInput.toLowerCase().replace('www.', '').replace('.com', '');
          const primaryCategory = selectedBusinessLines[0]?.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '-') || 'products';
          const granularSlug = granularBusinessLines.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '-');
          
          // Get related suggestions for additional URL variations
          const relatedSuggestions = selectedBusinessLines.flatMap(line => {
            const businessLine = businessLinesData.find(item => item.bls === line);
            return businessLine ? businessLine.suggestions : [];
          }).slice(0, 4);
          
          // Website-specific URL patterns
          const getWebsiteSpecificPatterns = () => {
            if (website.includes('amazon')) {
              return [
                `${websiteInput}/s?k=${granularBusinessLines.replace(/\s+/g, '+')}`,
                `${websiteInput}/b?node=${Math.floor(Math.random() * 9000000) + 1000000}`,
                `${websiteInput}/gp/bestsellers/${primaryCategory}`,
                `${websiteInput}/deal/${granularSlug}`,
                `${websiteInput}/prime/${granularSlug}`
              ];
            } else if (website.includes('nike')) {
              return [
                `${websiteInput}/${granularSlug}`,
                `${websiteInput}/w/${granularSlug}`,
                `${websiteInput}/m/${granularSlug}`,
                `${websiteInput}/jordan/${granularSlug}`,
                `${websiteInput}/clearance/${granularSlug}`
              ];
            } else if (website.includes('target')) {
              return [
                `${websiteInput}/s/${granularBusinessLines.replace(/\s+/g, '+')}`,
                `${websiteInput}/c/${primaryCategory}`,
                `${websiteInput}/p/${granularSlug}`,
                `${websiteInput}/b/${granularSlug}`,
                `${websiteInput}/clearance/${primaryCategory}`
              ];
            } else if (website.includes('walmart')) {
              return [
                `${websiteInput}/search/?query=${granularBusinessLines.replace(/\s+/g, '+')}`,
                `${websiteInput}/browse/${primaryCategory}`,
                `${websiteInput}/cp/${granularSlug}`,
                `${websiteInput}/rollback/${primaryCategory}`,
                `${websiteInput}/grocery/${granularSlug}`
              ];
            } else if (website.includes('bestbuy')) {
              return [
                `${websiteInput}/site/searchpage.jsp?st=${granularBusinessLines.replace(/\s+/g, '+')}`,
                `${websiteInput}/site/category.jsp?cat=${granularSlug}`,
                `${websiteInput}/site/brands/${granularSlug}`,
                `${websiteInput}/site/deals/${primaryCategory}`,
                `${websiteInput}/site/open-box/${granularSlug}`
              ];
            } else if (website.includes('apple')) {
              return [
                `${websiteInput}/${granularSlug}`,
                `${websiteInput}/shop/${granularSlug}`,
                `${websiteInput}/buy/${granularSlug}`,
                `${websiteInput}/compare/${primaryCategory}`,
                `${websiteInput}/refurbished/${granularSlug}`
              ];
            } else if (website.includes('homedepot')) {
              return [
                `${websiteInput}/b/${granularSlug}`,
                `${websiteInput}/c/${primaryCategory}`,
                `${websiteInput}/p/${granularSlug}`,
                `${websiteInput}/specials/${granularSlug}`,
                `${websiteInput}/ideas/${primaryCategory}`
              ];
            } else if (website.includes('lowes')) {
              return [
                `${websiteInput}/c/${granularSlug}`,
                `${websiteInput}/pd/${granularSlug}`,
                `${websiteInput}/pl/${primaryCategory}`,
                `${websiteInput}/savings/${granularSlug}`,
                `${websiteInput}/ideas/${primaryCategory}`
              ];
            } else if (website.includes('wayfair')) {
              return [
                `${websiteInput}/keyword.php?keyword=${granularBusinessLines.replace(/\s+/g, '+')}`,
                `${websiteInput}/category/c${Math.floor(Math.random() * 900000) + 100000}.html`,
                `${websiteInput}/${primaryCategory}/${granularSlug}`,
                `${websiteInput}/daily-sales/${granularSlug}`,
                `${websiteInput}/brands/${granularSlug}`
              ];
            } else if (website.includes('macys')) {
              return [
                `${websiteInput}/shop/${granularSlug}`,
                `${websiteInput}/shop/product/${granularSlug}`,
                `${websiteInput}/shop/sale/${primaryCategory}`,
                `${websiteInput}/shop/clearance/${granularSlug}`,
                `${websiteInput}/shop/brands/${granularSlug}`
              ];
            } else if (website.includes('nordstrom')) {
              return [
                `${websiteInput}/browse/${granularSlug}`,
                `${websiteInput}/category/${primaryCategory}`,
                `${websiteInput}/sale/${granularSlug}`,
                `${websiteInput}/brands/${granularSlug}`,
                `${websiteInput}/clearance/${primaryCategory}`
              ];
            } else if (website.includes('ulta') || website.includes('sephora')) {
              return [
                `${websiteInput}/${granularSlug}`,
                `${websiteInput}/category/${primaryCategory}`,
                `${websiteInput}/brand/${granularSlug}`,
                `${websiteInput}/sale/${granularSlug}`,
                `${websiteInput}/new/${primaryCategory}`
              ];
            } else if (website.includes('cvs') || website.includes('walgreens')) {
              return [
                `${websiteInput}/shop/${granularSlug}`,
                `${websiteInput}/pharmacy/${granularSlug}`,
                `${websiteInput}/health/${primaryCategory}`,
                `${websiteInput}/beauty/${granularSlug}`,
                `${websiteInput}/deals/${primaryCategory}`
              ];
            } else if (website.includes('petco') || website.includes('petsmart')) {
              return [
                `${websiteInput}/shop/en/${granularSlug}`,
                `${websiteInput}/category/${primaryCategory}`,
                `${websiteInput}/brand/${granularSlug}`,
                `${websiteInput}/deals/${granularSlug}`,
                `${websiteInput}/services/${primaryCategory}`
              ];
            } else if (website.includes('rei')) {
              return [
                `${websiteInput}/c/${granularSlug}`,
                `${websiteInput}/category/${primaryCategory}`,
                `${websiteInput}/brand/${granularSlug}`,
                `${websiteInput}/deals/${granularSlug}`,
                `${websiteInput}/used/${primaryCategory}`
              ];
            } else if (website.includes('gamestop')) {
              return [
                `${websiteInput}/${granularSlug}`,
                `${websiteInput}/category/${primaryCategory}`,
                `${websiteInput}/brand/${granularSlug}`,
                `${websiteInput}/trade/${granularSlug}`,
                `${websiteInput}/collectibles/${primaryCategory}`
              ];
            } else if (website.includes('staples')) {
              return [
                `${websiteInput}/${granularSlug}`,
                `${websiteInput}/category/${primaryCategory}`,
                `${websiteInput}/brand/${granularSlug}`,
                `${websiteInput}/deals/${granularSlug}`,
                `${websiteInput}/services/${primaryCategory}`
              ];
            }
            return [];
          };
          
          const websiteSpecific = getWebsiteSpecificPatterns();
          
          const genericPatterns = [
            // Primary category and granular combination
            `${websiteInput}/${primaryCategory}/${granularSlug}`,
            `${websiteInput}/shop/${granularSlug}`,
            `${websiteInput}/category/${granularSlug}`,
            `${websiteInput}/products/${granularSlug}`,
            
            // Category-focused URLs
            `${websiteInput}/${primaryCategory}`,
            `${websiteInput}/shop/${primaryCategory}`,
            `${websiteInput}/collection/${granularSlug}`,
            
            // Related product URLs using suggestions
            ...relatedSuggestions.slice(0, 2).map(suggestion => 
              `${websiteInput}/product/${suggestion.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '-')}`
            ),
            
            // Common e-commerce patterns with context
            `${websiteInput}/sale/${granularSlug}`,
            `${websiteInput}/deals/${primaryCategory}`,
            `${websiteInput}/trending/${granularSlug}`
          ];
          
          // Combine website-specific and generic patterns, prioritizing website-specific
          const combinedPatterns = [...websiteSpecific, ...genericPatterns];
          return combinedPatterns.slice(0, 10);
        };
        
        const contextualUrls = generateContextualUrls();
        const generatedUrls = contextualUrls.map((url, index) => ({
        url: url,
        share: Math.floor(Math.random() * 25) + 1 // 1-25% share
      }));
      
      // Sort by share percentage (biggest to smallest)
      generatedUrls.sort((a, b) => b.share - a.share);
      
      setTopUrls(generatedUrls);
        setShowEmptyState(false);
      } else {
        // Show empty state for invalid combinations
        setSegmentShare(0);
        setMonthlyVisits(0);
        setMatchingUrls(0);
        setTopUrls([]);
        setShowEmptyState(true);
      }
      
      setHasGenerated(true);
      setIsLoading(false);
      setLoadingProgress(0);
      clearInterval(progressTimer);
    }, loadingTime);
  };

  const removeBusinessLine = (line) => {
    setSelectedBusinessLines(selectedBusinessLines.filter(item => item !== line));
  };

  // Get relevant suggestions based on selected business lines from CSV data
  const getSuggestions = () => {
    const allSuggestions = selectedBusinessLines.flatMap(line => {
      const businessLine = businessLinesData.find(item => item.bls === line);
      return businessLine ? businessLine.suggestions : [];
    });
    return [...new Set(allSuggestions)]; // Remove duplicates
  };

  // Generate segment name from website + business lines + granular input
  const generateSegmentName = () => {
    const website = websiteInput.replace('www.', '').replace('.com', '');
    const websiteName = website.charAt(0).toUpperCase() + website.slice(1);
    const primaryBusinessLine = selectedBusinessLines[0] || 'General';
    const granular = granularBusinessLines || 'Products';
    
    return `${websiteName} ${granular}`;
  };

  const handleEmptyStateSuggestionClick = (suggestion) => {
    setGranularBusinessLines(suggestion);
  };

  const handleBuildSuggestionClick = (suggestion) => {
    setGranularBusinessLines(suggestion);
  };



  // Handle Save Segment button click
  const handleSaveSegment = () => {
    const generatedName = generateSegmentName();
    setSegmentName(generatedName);
    setShowSaveModal(true);
  };

  // Handle modal actions
  const handleAnalyzeSegment = () => {
    console.log('Analyzing segment:', segmentName);
    setShowSaveModal(false);
    // TODO: Navigate to segment analysis
  };

  const handleAddToCustomIndustry = () => {
    console.log('Adding segment to custom industry:', segmentName);
    setShowSaveModal(false);
    // TODO: Open custom industry modal
  };

  const handleCloseModal = () => {
    setShowSaveModal(false);
  };

  // Check if form has changed since last generation
  const hasFormChanged = () => {
    if (!hasGenerated) return false;
    
    return (
      websiteInput !== originalFormState.website ||
      JSON.stringify(selectedBusinessLines) !== JSON.stringify(originalFormState.businessLines) ||
      granularBusinessLines !== originalFormState.granular
    );
  };

  // Filter business lines based on search
  const filteredBusinessLines = businessLines.filter(line =>
    line.toLowerCase().includes(businessLineSearch.toLowerCase())
  );

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setFocusedBusinessLineIndex(-1);
      }
      if (websiteRef.current && !websiteRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setFocusedSuggestionIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MainContainer>
      <Header>
        <BackButton onClick={onBack}>
          <ArrowLeft size={20} />
        </BackButton>
        <Title>AI Segment Builder</Title>
      </Header>

      <Content>
        <Section>
          <Card>
                        <CardContent>
              <ContentSplit>
                <SectionDivider />
                <LeftSection>
                  <SectionHeader>
                    <BuildHeaderContainer>
                      <SectionTitle>Build</SectionTitle>
                      <MetadataContainer>
                        <MetadataItem>
                          <MetadataIcon src="/Calander.png" alt="Time" />
                          Last 12 months
                        </MetadataItem>
                        <MetadataItem>
                          <MetadataIcon src="/Worldwide.png" alt="Country" />
                          Worldwide
                        </MetadataItem>
                        <MetadataItem>
                          <MetadataIcon src="/All Traffic.png" alt="Traffic source" />
                          All Traffic
                        </MetadataItem>
                      </MetadataContainer>
                    </BuildHeaderContainer>
                  </SectionHeader>
                  <SectionContent>
                    <FieldContainer>
                      <SearchContainer>
                        <SearchLabel>Website</SearchLabel>
                        <SearchField ref={websiteRef}>
                          {selectedWebsiteFavicon && (
                            <InputFavicon 
                              src={selectedWebsiteFavicon} 
                              alt="Website favicon"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          )}
                          <SearchInput 
                            placeholder="Enter website domain..." 
                            value={websiteInput}
                            hasFavicon={!!selectedWebsiteFavicon}
                            onChange={(e) => handleWebsiteChange(e.target.value)}
                                                         onFocus={() => {
                               if (websiteInput.length > 0) {
                                 setShowSuggestions(true);
                               } else if (recentSearches.length > 0) {
                                 const recentSuggestions = recentSearches.map(search => ({ url: search, favicon: getFaviconUrl(search), isRecent: true }));
                                 setSuggestions(recentSuggestions);
                                 setShowSuggestions(true);
                               }
                             }}
                            onKeyDown={handleWebsiteKeyDown}
                          />
                          {showSuggestions && suggestions.length > 0 && (
                            <SuggestionsContainer>
                              {/* Show Recent searches label if there are recent items */}
                              {suggestions.some(s => s.isRecent) && websiteInput.length === 0 && (
                                <SuggestionLabel>Recent searches</SuggestionLabel>
                              )}
                              {suggestions.map((suggestion, index) => (
                                <SuggestionItem
                                  key={index}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  focused={focusedSuggestionIndex === index}
                                >
                                  <SuggestionFavicon 
                                    src={suggestion.favicon} 
                                    alt={`${suggestion.url} favicon`}
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                    }}
                                  />
                                  {suggestion.url}
                                </SuggestionItem>
                              ))}
                            </SuggestionsContainer>
                          )}
                        </SearchField>
                      </SearchContainer>
                    </FieldContainer>

                    <FieldContainer>
                      <DropdownContainer>
                        <DropdownLabel>Parent Business Lines</DropdownLabel>
                        <DropdownField ref={dropdownRef}>
                          <DropdownInput 
                            onClick={() => {
                              if (websiteInput.length > 0) {
                                setIsDropdownOpen(!isDropdownOpen);
                                if (!isDropdownOpen) {
                                  setBusinessLineSearch('');
                                }
                              }
                            }}
                            onKeyDown={handleBusinessLineKeyDown}
                            disabled={websiteInput.length === 0}
                            tabIndex={websiteInput.length > 0 ? 0 : -1}
                          >
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flex: 1 }}>
                              {selectedBusinessLines.length === 0 ? (
                                <span style={{ color: websiteInput.length === 0 ? '#9ca3af' : '#6b7280' }}>
                                  {websiteInput.length === 0 ? 'Enter website first...' : 'Select business lines...'}
                                </span>
                              ) : (
                                selectedBusinessLines.map((line) => (
                                  <Chip key={line}>
                                    {line}
                                    <ChipRemove onClick={(e) => {
                                      e.stopPropagation();
                                      removeBusinessLine(line);
                                    }}>
                                      ×
                                    </ChipRemove>
                                  </Chip>
                                ))
                              )}
                            </div>
                            <DropdownIcon>
                              <ChevronDown size={16} />
                            </DropdownIcon>
                          </DropdownInput>
                          
                          {isDropdownOpen && websiteInput.length > 0 && (
                            <div style={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              right: 0,
                              backgroundColor: '#ffffff',
                              border: '1px solid #d1d5db',
                              borderRadius: '6px',
                              marginTop: '4px',
                              maxHeight: '200px',
                              overflowY: 'auto',
                              zIndex: 10,
                              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                            }}>
                              {/* Search input */}
                              <div style={{
                                padding: '12px 16px',
                                borderBottom: '1px solid #f3f4f6',
                                position: 'sticky',
                                top: 0,
                                backgroundColor: '#ffffff',
                                zIndex: 1
                              }}>
                                <input
                                  type="text"
                                  placeholder="Search business lines..."
                                  value={businessLineSearch}
                                  onChange={(e) => setBusinessLineSearch(e.target.value)}
                                  style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    outline: 'none'
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Escape') {
                                      setIsDropdownOpen(false);
                                      setBusinessLineSearch('');
                                    }
                                  }}
                                />
                              </div>
                              {filteredBusinessLines.map((line, index) => (
                                <div
                                  key={line}
                                  onClick={() => handleBusinessLineToggle(line)}
                                  style={{
                                    padding: '12px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedBusinessLines.includes(line) || focusedBusinessLineIndex === index ? '#f0f9ff' : 'transparent',
                                    color: selectedBusinessLines.includes(line) || focusedBusinessLineIndex === index ? '#3E74FE' : '#374151',
                                    borderBottom: '1px solid #f3f4f6',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedBusinessLines.includes(line)}
                                    onChange={() => {}}
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      accentColor: '#3E74FE'
                                    }}
                                  />
                                  {line}
                                </div>
                              ))}
                            </div>
                          )}
                        </DropdownField>
                      </DropdownContainer>
                    </FieldContainer>

                    <FieldContainer>
                      <SearchContainer>
                        <SearchLabel>
                          <LabelContainer>
                            <div>
                              Granular Business Lines
                              {showSuggestionLoader && (
                                <>
                                  <span> • </span>
                                  <GeneratingSuggestionsText>Generating suggestions</GeneratingSuggestionsText>
                                </>
                              )}
                            </div>
                            <HelpText>
                              Need help?
                              <Info size={14} />
                              <HelpTooltip>
                                <TooltipSection>
                                  <TooltipTitle>Use for:</TooltipTitle>
                                  <TooltipList>
                                    <li>Product categories</li>
                                    <li>Granular business lines</li>
                                    <li>Clear, focused terms</li>
                                    <li>Write in the site's language</li>
                                  </TooltipList>
                                </TooltipSection>
                                <TooltipSection>
                                  <TooltipTitle>Avoid:</TooltipTitle>
                                  <TooltipList>
                                    <li>Brands</li>
                                    <li>Funnel steps</li>
                                    <li>Blog/content pages, logged-in areas, short-term campaigns</li>
                                    <li>Don't use exclusions</li>
                                  </TooltipList>
                                </TooltipSection>
                              </HelpTooltip>
                            </HelpText>
                          </LabelContainer>
                        </SearchLabel>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <SearchField style={{ flex: 1 }}>
                          <SearchInput 
                            placeholder={selectedBusinessLines.length === 0 ? "Select business lines first..." : "Enter granular business lines..."}
                            disabled={selectedBusinessLines.length === 0}
                            value={granularBusinessLines}
                            onChange={(e) => setGranularBusinessLines(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                if (!isLoading && websiteInput && selectedBusinessLines.length > 0 && granularBusinessLines) {
                                  generateMetrics();
                                }
                              }
                            }}
                          />
                        </SearchField>
                      <CTAButton 
                        disabled={!websiteInput || selectedBusinessLines.length === 0 || !granularBusinessLines || (hasGenerated && !hasFormChanged())}
                        onClick={generateMetrics}
                            style={{ marginTop: '0' }}
                      >
                        <Sparkles size={14} />
                            {hasGenerated ? 'Regenerate' : 'Generate Segment'}
                      </CTAButton>
                        </div>
                        
                        {/* Build Section Suggestions */}
                        {showBuildSuggestions && (
                          <BuildSuggestionsContainer>
                            <BuildSuggestionsGrid>
                              {getSuggestions().slice(0, 5).map((suggestion, index) => (
                                <BuildSuggestionChip
                                  key={index}
                                  onClick={() => handleBuildSuggestionClick(suggestion)}
                                >
                                  {suggestion}
                                </BuildSuggestionChip>
                              ))}
                            </BuildSuggestionsGrid>
                          </BuildSuggestionsContainer>
                        )}
                      </SearchContainer>
                    </FieldContainer>
                  </SectionContent>
                </LeftSection>

                <RightSection style={{ position: 'relative' }}>
                  {isLoading && (
                    <AILoader>
                                              <LoaderContent>
                          <AIIcon>
                            <img 
                              src="/ai-loader.gif" 
                              alt="AI Loading" 
                              style={{ width: '160px', height: '160px' }}
                            />
                          </AIIcon>
                          <LoaderTitle>AI is analyzing your segment...</LoaderTitle>
                        <LoaderSubtitle>
                          Our AI is processing your website data and business lines to create a comprehensive segment analysis.
                        </LoaderSubtitle>
                        <LoaderProgressBar>
                          <LoaderProgressFill style={{ width: `${loadingProgress}%` }} />
                        </LoaderProgressBar>
                      </LoaderContent>
                    </AILoader>
                  )}
                  <SectionHeader>
                    <SectionTitle>Segment Preview</SectionTitle>
                  </SectionHeader>
                  <SectionContent style={{ position: 'relative' }}>
                    {showEmptyState ? (
                      <EmptyStateContainer>
                        <EmptyStateTitle>No matching segments found</EmptyStateTitle>
                        <EmptyStateSubtitle>
                          The granular business lines you entered don't match the selected website and parent business lines. Please try a different input.
                        </EmptyStateSubtitle>
                      </EmptyStateContainer>
                    ) : (
                    <MetricsContainer>
                      {/* Segment Share Metric */}
                      <MetricCard>
                        <MetricTitle>
                          Segment Share
                          <InfoIcon>
                            <Info size={14} />
                            <Tooltip>Percentage of total traffic</Tooltip>
                          </InfoIcon>
                        </MetricTitle>
                        <MetricValue>{segmentShare}%</MetricValue>
                        <ProgressBarContainer>
                          <ProgressBar style={{ width: `${segmentShare}%` }} />
                        </ProgressBarContainer>
                      </MetricCard>

                      {/* Monthly Visits Counter */}
                      <MetricCard>
                        <MetricTitle>
                          Monthly Visits
                          <InfoIcon>
                            <Info size={14} />
                            <Tooltip>Total visits per month</Tooltip>
                          </InfoIcon>
                        </MetricTitle>
                        <CounterContainer>
                          <CounterIcon>
                            <Calendar size={16} />
                          </CounterIcon>
                          <div>
                            <CounterValue>{monthlyVisits.toLocaleString()}</CounterValue>
                          </div>
                        </CounterContainer>
                      </MetricCard>

                      {/* Matching URLs Counter */}
                      <MetricCard>
                        <MetricTitle>
                          Matching URLs
                          <InfoIcon>
                            <Info size={14} />
                            <Tooltip>URLs in this segment</Tooltip>
                          </InfoIcon>
                        </MetricTitle>
                        <CounterContainer>
                          <CounterIcon>
                            <Link size={16} />
                          </CounterIcon>
                          <div>
                            <CounterValue>{matchingUrls.toLocaleString()}</CounterValue>
                          </div>
                        </CounterContainer>
                      </MetricCard>

                      {/* Top URLs Preview */}
                      <MetricCard>
                        <UrlListTitle>Top URLs Preview</UrlListTitle>
                        <div style={{ position: 'relative' }}>
                          <UrlListGradient />
                          {topUrls.length > 0 ? (
                            topUrls.map((urlItem, index) => (
                              <UrlListItem key={index}>
                                <UrlText>{urlItem.url}</UrlText>
                                <UrlShare>{urlItem.share}%</UrlShare>
                              </UrlListItem>
                            ))
                          ) : (
                            // Skeleton for URLs list
                            <>
                              <UrlListItem>
                                <div style={{ 
                                  width: '70%', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                                <div style={{ 
                                  width: '30px', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                              </UrlListItem>
                              <UrlListItem>
                                <div style={{ 
                                  width: '65%', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                                <div style={{ 
                                  width: '25px', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                              </UrlListItem>
                              <UrlListItem>
                                <div style={{ 
                                  width: '60%', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                                <div style={{ 
                                  width: '20px', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                              </UrlListItem>
                              <UrlListItem>
                                <div style={{ 
                                  width: '55%', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                                <div style={{ 
                                  width: '15px', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                              </UrlListItem>
                              <UrlListItem>
                                <div style={{ 
                                  width: '50%', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                                <div style={{ 
                                  width: '12px', 
                                  height: '12px', 
                                  backgroundColor: '#f3f4f6', 
                                  borderRadius: '4px' 
                                }} />
                              </UrlListItem>
                            </>
                          )}
                        </div>
                      </MetricCard>
                    </MetricsContainer>
                    )}
                    

                  </SectionContent>
                  <SectionFooter>
                    <HugButton
                      disabled={!hasGenerated || showEmptyState}
                      onClick={handleSaveSegment}
                    >
                      Create Segment
                    </HugButton>
                  </SectionFooter>
                </RightSection>
              </ContentSplit>
            </CardContent>
          </Card>
        </Section>
      </Content>

      {/* Save Segment Modal */}
      {showSaveModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <SuccessIcon>
                <PieChart size={32} color="#3E74FE" />
              </SuccessIcon>
              <ModalTitle>Create Segment</ModalTitle>
            </ModalHeader>
            
            <ModalForm>
              <ModalLabel>Segment Name</ModalLabel>
              <ModalInput
                type="text"
                value={segmentName}
                onChange={(e) => setSegmentName(e.target.value)}
                placeholder="Enter segment name"
              />
            </ModalForm>
            
            <ModalActions>
              <SecondaryButton onClick={handleAddToCustomIndustry}>
                Save & Add to custom industry
              </SecondaryButton>
              <PrimaryButton onClick={handleAnalyzeSegment}>
                Save & Analyze
              </PrimaryButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default AISegmentBuilder; 