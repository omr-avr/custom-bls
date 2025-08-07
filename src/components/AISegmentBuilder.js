import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ArrowLeft, Search, Globe, ChevronDown, Sparkles, TrendingUp, Users, Link, Info, Calendar, Brain, Plus } from 'lucide-react';

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
  height: 36px;
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

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
  height: 44px;

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
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
`;

const StickyBanner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(240, 249, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 20px;

  &:hover {
    background: rgba(240, 249, 255, 1);
  }
`;

const BannerText = styled.div`
  font-size: 14px;
  color: #374151;
  font-weight: 500;
`;

const AddSegmentButton = styled.button`
  background-color: transparent;
  color: #3E74FE;
  border: none;
  padding: 8px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  ${StickyBanner}:hover & {
    background-color: #3E74FE;
    color: #ffffff;
  }
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
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6b7280;
  flex-wrap: wrap;
  gap: 8px;

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

  const businessLinesMap = {
    'www.nike.com': [
      'Footwear',
      'Men\'s Clothing',
      'Women\'s Clothing',
      'Children\'s Clothing',
      'Underwear',
      'Bags & Packs'
    ],
    'www.lenovo.com': [
      'Laptop Computers',
      'Tablets',
      'Video Games, Consoles & Accessories',
      'Computer Components & Peripherals',
      'Mobile Phones'
    ],
    'www.nintendo.com': [
      'Video Games',
      'Gaming Consoles',
      'Gaming Accessories',
      'Collectibles',
      'Merchandise'
    ],
    'www.nissan.com': [
      'Sedans',
      'SUVs',
      'Trucks',
      'Electric Vehicles',
      'Commercial Vehicles'
    ],
    'www.nvidia.com': [
      'Graphics Cards',
      'Gaming Laptops',
      'Data Center Products',
      'Professional GPUs',
      'Gaming Accessories'
    ],
    'www.netflix.com': [
      'Streaming Services',
      'Movies',
      'TV Shows',
      'Documentaries',
      'Kids Content'
    ],
    'www.nordstrom.com': [
      'Women\'s Fashion',
      'Men\'s Fashion',
      'Shoes & Accessories',
      'Beauty & Fragrance',
      'Home & Gifts'
    ]
  };

  const getBusinessLinesForWebsite = (website) => {
    return businessLinesMap[website] || [
      'E-commerce',
      'Technology',
      'Healthcare',
      'Finance',
      'Education',
      'Travel',
      'Food & Beverage',
      'Retail',
      'Manufacturing',
      'Real Estate'
    ];
  };

  const businessLines = getBusinessLinesForWebsite(websiteInput);

  const websiteSuggestions = [
    'www.nike.com',
    'www.nintendo.com',
    'www.nissan.com',
    'www.nvidia.com',
    'www.netflix.com',
    'www.nordstrom.com',
    'www.nike.com',
    'www.nintendo.com'
  ];

  const handleWebsiteChange = (value) => {
    setWebsiteInput(value);
    // Reset selected business lines when website changes
    setSelectedBusinessLines([]);
    if (value.length > 0) {
      const filtered = websiteSuggestions.filter(site => 
        site.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setWebsiteInput(suggestion);
    setShowSuggestions(false);
    setFocusedSuggestionIndex(-1);
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
    if (selectedBusinessLines.includes(line)) {
      setSelectedBusinessLines(selectedBusinessLines.filter(item => item !== line));
    } else {
      setSelectedBusinessLines([...selectedBusinessLines, line]);
    }
  };

  const generateMetrics = () => {
    setIsLoading(true);
    setLoadingProgress(0);
    
    // Save current form state
    setOriginalFormState({
      website: websiteInput,
      businessLines: selectedBusinessLines,
      granular: granularBusinessLines
    });
    
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
      // Generate random metrics for demonstration
      setSegmentShare(Math.floor(Math.random() * 100) + 1);
      setMonthlyVisits(Math.floor(Math.random() * 1000000) + 10000);
      setMatchingUrls(Math.floor(Math.random() * 5000) + 100);
      
      // Generate top 10 URLs with random share percentages
      const urlTemplates = [
        'www.example.com/product/shoes',
        'www.example.com/product/clothing',
        'www.example.com/category/accessories',
        'www.example.com/brand/nike',
        'www.example.com/sale/clearance',
        'www.example.com/new-arrivals',
        'www.example.com/featured-items',
        'www.example.com/trending',
        'www.example.com/bestsellers',
        'www.example.com/limited-edition'
      ];
      
      const generatedUrls = urlTemplates.map((url, index) => ({
        url: url,
        share: Math.floor(Math.random() * 25) + 1 // 1-25% share
      }));
      
      // Sort by share percentage (biggest to smallest)
      generatedUrls.sort((a, b) => b.share - a.share);
      
      setTopUrls(generatedUrls);
      setHasGenerated(true);
      setIsLoading(false);
      setLoadingProgress(0);
      clearInterval(progressTimer);
    }, loadingTime);
  };

  const removeBusinessLine = (line) => {
    setSelectedBusinessLines(selectedBusinessLines.filter(item => item !== line));
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
                    <SectionTitle>Build</SectionTitle>
                  </SectionHeader>
                  <SectionContent>
                    <FieldContainer>
                      <SearchContainer>
                        <SearchLabel>Website</SearchLabel>
                        <SearchField ref={websiteRef}>
                          <SearchInput 
                            placeholder="Enter website domain..." 
                            value={websiteInput}
                            onChange={(e) => handleWebsiteChange(e.target.value)}
                            onFocus={() => websiteInput.length > 0 && setShowSuggestions(true)}
                            onKeyDown={handleWebsiteKeyDown}
                          />
                          {showSuggestions && suggestions.length > 0 && (
                            <SuggestionsContainer>
                              {suggestions.map((suggestion, index) => (
                                <SuggestionItem
                                  key={index}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  focused={focusedSuggestionIndex === index}
                                >
                                  {suggestion}
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
                        <SearchLabel>Granular Business Lines</SearchLabel>
                        <SearchField>
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
                        <ExplainerText>
                          Try using broad product categories or granular business lines • Avoid using: branded terms, funnel steps, mixing concepts
                        </ExplainerText>
                      </SearchContainer>
                    </FieldContainer>

                    <FieldContainer>
                      <CTAButton 
                        disabled={!websiteInput || selectedBusinessLines.length === 0 || !granularBusinessLines || (hasGenerated && !hasFormChanged())}
                        onClick={generateMetrics}
                      >
                        <Sparkles size={14} />
                        Generate Segment
                      </CTAButton>
                    </FieldContainer>
                  </SectionContent>
                </LeftSection>

                <RightSection style={{ position: 'relative' }}>
                  {isLoading && (
                    <AILoader>
                                              <LoaderContent>
                          <AIIcon>
                            <img 
                              src="/resources/images/ai-loader.gif" 
                              alt="AI Loading" 
                              style={{ width: '80px', height: '80px' }}
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
                    
                    {hasGenerated && (
                      <StickyBanner onClick={() => {
                        // Handle banner click - add segment to custom industry
                        console.log('Add segment to custom industry clicked');
                      }}>
                        <BannerText>
                          Add this segment to a custom industry
                        </BannerText>
                        <AddSegmentButton onClick={(e) => {
                          e.stopPropagation();
                          // Handle button click - add segment to custom industry
                          console.log('Add segment to custom industry clicked');
                        }}>
                          <Plus size={16} />
                        </AddSegmentButton>
                      </StickyBanner>
                    )}
                  </SectionContent>
                  <SectionFooter>
                    <HugButton
                      disabled={!hasGenerated}
                    >
                      Save Segment
                    </HugButton>
                  </SectionFooter>
                </RightSection>
              </ContentSplit>
            </CardContent>
          </Card>
        </Section>
      </Content>
    </MainContainer>
  );
};

export default AISegmentBuilder; 