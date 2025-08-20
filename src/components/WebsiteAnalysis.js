import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeft, Info, BarChart3, FolderOpen, Eye, Globe } from 'lucide-react';

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

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0;
  margin-bottom: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
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

const MetadataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
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

const WidgetsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;

const Widget = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
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
  width: 100px;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #3E74FE;
  border-radius: 3px;
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
  grid-column: 1 / -1;
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
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    opacity: 0.9;
  }
`;

const WebsiteAnalysis = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('business-lines');
  const [viewMode, setViewMode] = useState('percentage'); // 'percentage' or 'numbers'

  const businessLinesData = [
    { name: "Women's Clothing", visits: '15.7M', percentage: 37.6, growth: 37.6, isPositive: true },
    { name: "Men's Clothing", visits: '11.3M', percentage: 23.2, growth: -3.2, isPositive: false },
    { name: "Footwear", visits: '8.5M', percentage: 18.5, growth: 37.6, isPositive: true },
    { name: "Children's Clothing", visits: '8.5M', percentage: 15.2, growth: -3.2, isPositive: false },
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
        <BackButton onClick={onBack}>
          <ArrowLeft size={20} />
        </BackButton>
        <Title>Website Analysis > Website Content</Title>
      </Header>

      <Content>
        <Card>
          <CardHeader>
            <MetadataContainer>
              <MetadataItem>
                <MetadataIcon src="/Images/Calander.png" alt="Time" />
                Apr 2024 - Mar 2025
              </MetadataItem>
              <MetadataItem>
                <MetadataIcon src="/Images/Worldwide.png" alt="Country" />
                Worldwide
              </MetadataItem>
              <MetadataItem>
                <MetadataIcon src="/Images/All Traffic.png" alt="Traffic source" />
                All traffic
              </MetadataItem>
            </MetadataContainer>
            
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
          </CardHeader>

          <CardContent>
            {activeTab === 'business-lines' && (
              <>
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
                      <WidgetActions>
                        <ToggleButton 
                          active={viewMode === 'percentage'}
                          onClick={() => setViewMode('percentage')}
                        >
                          %
                        </ToggleButton>
                        <ToggleButton 
                          active={viewMode === 'numbers'}
                          onClick={() => setViewMode('numbers')}
                        >
                          #
                        </ToggleButton>
                      </WidgetActions>
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
                          <ProgressFill style={{ width: `${item.percentage}%` }} />
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
                      <WidgetActions>
                        <ToggleButton active={true}>
                          #
                        </ToggleButton>
                        <ToggleButton active={false}>
                          %
                        </ToggleButton>
                      </WidgetActions>
                    </WidgetHeader>
                    
                    <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
                      [Chart visualization would go here]
                    </div>
                  </Widget>
                </WidgetsContainer>

                {/* Create custom segment widget */}
                <SegmentWidget>
                  <SegmentHeader>
                    <WidgetTitle>
                      Create a custom segment
                      <span style={{ 
                        marginLeft: '8px', 
                        fontSize: '12px', 
                        fontWeight: '500', 
                        color: '#3E74FE',
                        backgroundColor: '#f0f9ff',
                        padding: '2px 8px',
                        borderRadius: '4px'
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
                      ✨ Generate Segment
                    </GenerateButton>
                  </SegmentForm>
                </SegmentWidget>
              </>
            )}

            {activeTab !== 'business-lines' && (
              <div style={{ 
                height: '400px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#6b7280',
                fontSize: '16px'
              }}>
                {tabs.find(tab => tab.id === activeTab)?.label} content coming soon...
              </div>
            )}
          </CardContent>
        </Card>
      </Content>
    </MainContainer>
  );
};

export default WebsiteAnalysis;
