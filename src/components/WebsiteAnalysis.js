import React, { useState } from 'react';
import styled from 'styled-components';
import { Info, BarChart3, FolderOpen, Eye, Globe, Sparkles } from 'lucide-react';

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
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const WebsiteItems = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
  padding: 12px 0;
`;

const WebsiteItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WebsiteFavicon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${props => props.color || '#f3f4f6'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: white;
  position: relative;
  overflow: hidden;
`;

const WebsiteUrl = styled.span`
  font-size: 14px;
  color: #374151;
  font-weight: 500;
`;

const ColorDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const Content = styled.div`
  padding: 0px 32px;
  max-width: 1360px;
  margin: 0 auto;
`;



const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 32px;
  max-width: 1360px;
  margin: 0 auto;
`;

const Tab = styled.button`
  padding: 12px 20px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? '#3E74FE' : '#6b7280'};
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#3E74FE' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    color: #3E74FE;
  }
`;



const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Widget = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const WidgetTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WidgetActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ToggleButton = styled.button`
  padding: 4px 8px;
  background: ${props => props.active ? '#3E74FE' : '#f3f4f6'};
  color: ${props => props.active ? '#ffffff' : '#6b7280'};
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? '#2563eb' : '#e5e7eb'};
  }
`;

const InfoIcon = styled.div`
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #6b7280;
  }
`;

const BusinessLineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

const BusinessLineInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BusinessLineName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
`;

const BusinessLineStats = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #6b7280;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex: 1;
  margin: 0 16px;
`;

const ProgressSegment = styled.div`
  height: 100%;
  transition: width 0.3s ease;
`;

const VisitsValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  text-align: right;
  min-width: 60px;
`;

const GrowthIndicator = styled.span`
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  font-size: 12px;
  font-weight: 500;
`;

const SegmentWidget = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const SegmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SegmentForm = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #374151;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
  color: #374151;
  cursor: pointer;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #3E74FE;
    box-shadow: 0 0 0 2px rgba(62, 116, 254, 0.1);
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
  color: #374151;
  min-width: 200px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3E74FE;
    box-shadow: 0 0 0 2px rgba(62, 116, 254, 0.1);
  }
`;

const GenerateButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }
`;

const WebsiteAnalysis = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('business-lines');
  const [viewMode, setViewMode] = useState('percentage'); // 'percentage' or 'numbers'

  const websites = [
    { url: 'macys.com', color: '#40C4FF', favicon: 'M' },
    { url: 'jcpenney.com', color: '#FFD700', favicon: 'J' },
    { url: 'bloomingdales.com', color: '#20B2AA', favicon: 'B' },
    { url: 'zappos.com', color: '#4C6EF5', favicon: 'Z' },
    { url: 'saksfifthavenue.com', color: '#FF8A33', favicon: 'S' }
  ];

  const businessLinesData = [
    { 
      name: "Women's Clothing", 
      visits: '15.7M', 
      percentage: 37.6, 
      growth: 37.6, 
      isPositive: true,
      segments: [
        { percentage: 30, color: '#4C6EF5' },
        { percentage: 20, color: '#FF8A33' },
        { percentage: 10, color: '#20B2AA' },
        { percentage: 25, color: '#FFD700' },
        { percentage: 15, color: '#40C4FF' }
      ]
    },
    { 
      name: "Men's Clothing", 
      visits: '11.3M', 
      percentage: 23.2, 
      growth: -3.2, 
      isPositive: false,
      segments: [
        { percentage: 23, color: '#4C6EF5' },
        { percentage: 18, color: '#FF8A33' },
        { percentage: 15, color: '#20B2AA' },
        { percentage: 39, color: '#FFD700' },
        { percentage: 5, color: '#40C4FF' }
      ]
    },
    { 
      name: "Footwear", 
      visits: '8.5M', 
      percentage: 18.5, 
      growth: 37.6, 
      isPositive: true,
      segments: [
        { percentage: 78, color: '#FFD700' },
        { percentage: 22, color: '#40C4FF' }
      ]
    },
    { 
      name: "Children's Clothing", 
      visits: '8.5M', 
      percentage: 15.2, 
      growth: -3.2, 
      isPositive: false,
      segments: [
        { percentage: 78, color: '#4C6EF5' }
      ]
    },
  ];

  const tabs = [
    { id: 'business-lines', label: 'Business Lines', icon: BarChart3 },
    { id: 'folders', label: 'Folders', icon: FolderOpen },
    { id: 'popular-pages', label: 'Popular Pages', icon: Eye },
    { id: 'subdomains', label: 'Subdomains', icon: Globe },
  ];

  return (
    <MainContainer>
      <Header>
        <Title>Website Analysis > Website Content</Title>
        <WebsiteItems>
          {websites.map((website, index) => (
            <WebsiteItem key={index}>
              <WebsiteFavicon color={website.color}>
                {website.favicon}
              </WebsiteFavicon>
              <WebsiteUrl>{website.url}</WebsiteUrl>
              <ColorDot color={website.color} />
            </WebsiteItem>
          ))}
        </WebsiteItems>
      </Header>

      <TabsContainer>
        {tabs.map(tab => {
          const IconComponent = tab.icon;
          return (
            <Tab 
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <IconComponent size={16} style={{ marginRight: '8px' }} />
              {tab.label}
            </Tab>
          );
        })}
      </TabsContainer>

      <Content>
        {activeTab === 'business-lines' && (
          <WidgetsContainer>
            {/* Total visits by business line widget */}
            <Widget>
              <WidgetHeader>
                <WidgetTitle>
                  Total visits by business line
                  <InfoIcon>
                    <Info size={14} />
                  </InfoIcon>
                </WidgetTitle>
              </WidgetHeader>
              
              {businessLinesData.map((item, index) => (
                <BusinessLineItem key={index}>
                  <BusinessLineInfo>
                    <BusinessLineName>{item.name}</BusinessLineName>
                    <BusinessLineStats>
                      <span>{item.visits}</span>
                      <GrowthIndicator positive={item.isPositive}>
                        {item.isPositive ? '↑' : '↓'} {Math.abs(item.growth)}% MoM
                      </GrowthIndicator>
                    </BusinessLineStats>
                  </BusinessLineInfo>
                  <ProgressBar>
                    {item.segments.map((segment, segIndex) => (
                      <ProgressSegment 
                        key={segIndex}
                        style={{ 
                          width: `${segment.percentage}%`,
                          backgroundColor: segment.color
                        }} 
                      />
                    ))}
                  </ProgressBar>
                  <VisitsValue>
                    {viewMode === 'percentage' ? `${item.percentage}%` : item.visits}
                  </VisitsValue>
                </BusinessLineItem>
              ))}
            </Widget>

            {/* Visits over time widget */}
            <Widget>
              <WidgetHeader>
                <WidgetTitle>
                  Visits over time by business line for 
                  <Select style={{ marginLeft: '8px', padding: '4px 8px', fontSize: '14px' }}>
                    <option>Women's Clothing</option>
                    <option>Men's Clothing</option>
                    <option>Footwear</option>
                    <option>Children's Clothing</option>
                  </Select>
                  <InfoIcon style={{ marginLeft: '8px' }}>
                    <Info size={14} />
                  </InfoIcon>
                </WidgetTitle>

              </WidgetHeader>
              
              <div style={{ height: '200px', position: 'relative', marginTop: '16px', width: '100%', padding: '20px 40px 30px 50px' }}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#40C4FF" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#40C4FF" stopOpacity="0.1"/>
                      </linearGradient>
                      <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.1"/>
                      </linearGradient>
                      <linearGradient id="areaGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#20B2AA" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#20B2AA" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    
                    {/* Area 1 - Bottom layer (macys.com) */}
                    <path 
                      d="M0,95 L8,88 L16,85 L24,82 L32,78 L40,75 L48,72 L56,70 L64,68 L72,65 L80,63 L88,60 L96,58 L100,57 L100,100 L0,100 Z" 
                      fill="url(#areaGradient1)"
                    />
                    
                    {/* Area 2 - Middle layer (jcpenney.com) */}
                    <path 
                      d="M0,85 L8,80 L16,75 L24,72 L32,68 L40,65 L48,62 L56,58 L64,55 L72,52 L80,48 L88,45 L96,42 L100,40 L100,100 L0,100 Z" 
                      fill="url(#areaGradient2)"
                    />
                    
                    {/* Area 3 - Top layer (bloomingdales.com) */}
                    <path 
                      d="M0,70 L8,65 L16,58 L24,52 L32,48 L40,45 L48,42 L56,38 L64,35 L72,32 L80,28 L88,25 L96,22 L100,20 L100,100 L0,100 Z" 
                      fill="url(#areaGradient3)"
                    />
                    
                    {/* Chart lines */}
                    <path 
                      d="M0,57 L8,55 L16,52 L24,50 L32,48 L40,45 L48,43 L56,40 L64,38 L72,35 L80,33 L88,30 L96,28 L100,27" 
                      stroke="#40C4FF" 
                      strokeWidth="0.5" 
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path 
                      d="M0,40 L8,38 L16,35 L24,32 L32,30 L40,28 L48,25 L56,23 L64,20 L72,18 L80,15 L88,13 L96,10 L100,8" 
                      stroke="#FFD700" 
                      strokeWidth="0.5" 
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path 
                      d="M0,20 L8,18 L16,15 L24,12 L32,10 L40,8 L48,6 L56,5 L64,4 L72,3 L80,2 L88,1 L96,0.5 L100,0" 
                      stroke="#20B2AA" 
                      strokeWidth="0.5" 
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  
                  {/* Chart Axes and Labels */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '-20px', 
                    left: '0', 
                    right: '0', 
                    height: '20px', 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '11px',
                    color: '#9CA3AF'
                  }}>
                    <span>Apr 2024</span>
                    <span>Jul 2024</span>
                    <span>Oct 2024</span>
                    <span>Jan 2025</span>
                    <span>Mar 2025</span>
                  </div>
                  
                  {/* Y-axis labels */}
                  <div style={{
                    position: 'absolute',
                    left: '-45px',
                    top: '0',
                    bottom: '0',
                    width: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    fontSize: '11px',
                    color: '#9CA3AF',
                    paddingRight: '5px'
                  }}>
                    <span>350,000</span>
                    <span>300,000</span>
                    <span>250,000</span>
                    <span>200,000</span>
                    <span>0</span>
                  </div>
                  
                  {/* Legend */}
                  <div style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    fontSize: '11px',
                    color: '#6B7280',
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '8px',
                    borderRadius: '4px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#20B2AA', borderRadius: '50%' }}></div>
                      <span>bloomingdales.com</span>
                      <span style={{ color: '#9CA3AF' }}>63.5M</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#FFD700', borderRadius: '50%' }}></div>
                      <span>jcpenney.com</span>
                      <span style={{ color: '#9CA3AF' }}>90.2M</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#40C4FF', borderRadius: '50%' }}></div>
                      <span>macys.com</span>
                      <span style={{ color: '#9CA3AF' }}>103.2M</span>
                    </div>
                  </div>
                </div>
              </div>
            </Widget>

            {/* Create custom segment widget */}
            <SegmentWidget>
              <SegmentHeader>
                <WidgetTitle>
                  Create a custom segment
                  <span style={{ 
                    marginLeft: '8px', 
                    fontSize: '11px', 
                    fontWeight: '600', 
                    color: '#3E74FE',
                    backgroundColor: '#F0F8FF',
                    padding: '3px 6px',
                    borderRadius: '12px',
                    border: '1px solid #E1EDFF'
                  }}>
                    AI-POWERED
                  </span>
                </WidgetTitle>
              </SegmentHeader>
              
              <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '14px' }}>
                Simply describe what you're looking for and let AI build your segment automatically
              </p>
              
              <SegmentForm>
                <FormGroup>
                  <Select>
                    <option>macys.com</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Select>
                    <option>Women's Clothing</option>
                    <option>Men's Clothing</option>
                    <option>Footwear</option>
                    <option>Children's Clothing</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Input placeholder="Enter granular business lines" />
                </FormGroup>
                                  <GenerateButton>
                    <Sparkles size={14} />
                    Generate Segment
                  </GenerateButton>
              </SegmentForm>
            </SegmentWidget>
          </WidgetsContainer>
        )}

        {activeTab !== 'business-lines' && (
          <div style={{ 
            height: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#6b7280',
            fontSize: '16px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            margin: '20px 0'
          }}>
            {tabs.find(tab => tab.id === activeTab)?.label} content coming soon...
          </div>
        )}
      </Content>
    </MainContainer>
  );
};

export default WebsiteAnalysis;
