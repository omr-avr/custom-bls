import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus, Search, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Globe, Sparkles, Settings } from 'lucide-react';

const MainContainer = styled.div`
  flex: 1;
  background-color: #F5F9FD;
  overflow-y: auto;
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

const Content = styled.div`
  padding: 20px 32px;
  max-width: 1360px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 28px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 0 16px;
`;

const SearchAndTabsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const TabsAndButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const SearchTabsAndButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const CardHeader = styled.div`
  padding: 20px 16px 16px 16px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  background-color: #f0f9ff;
  border-bottom: 1px solid #e5e7eb;
  min-height: 80px;
`;

const BannerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BannerIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #3E74FE;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const BannerTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
`;

const BannerSubtitle = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const BannerRight = styled.div`
  display: flex;
  gap: 8px;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #3E74FE;
  border: 1px solid #3E74FE;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f0f9ff;
    border-color: #3E74FE;
    color: #3E74FE;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 1px solid #f3f4f6;
`;

const Tab = styled.div`
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 700;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  ${props => props.active && `
    color: #3E74FE;
    border-bottom-color: #3E74FE;
  `}
`;

const SegmentedButton = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  height: 36px;
`;

const SegmentedButtonItem = styled.button`
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  background-color: transparent;
  color: #6b7280;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;

  ${props => props.active && `
    background-color: #f0f9ff;
    color: #3E74FE;
    font-weight: 700;
  `}

  ${props => !props.active && `
    color: #6b7280;
    font-weight: 400;
  `}

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: #e5e7eb;
  }

  &:hover {
    color: ${props => props.active ? '#3E74FE' : '#374151'};
  }
`;

const NewButton = styled.button`
  background-color: transparent;
  color: #3E74FE;
  border: none;
  padding: 8px 12px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s;
  height: 36px;

  &:hover {
    background-color: #f9fafb;
    color: #374151;
  }
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

const ComparisonList = styled.div`
  padding: 16px;
`;

const ComparisonItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

const ComparisonName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
`;

const ComparisonDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DomainItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;
`;

const DomainLogo = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  max-width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 16px 8px 40px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
  background-color: #ffffff;
  height: 36px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3E74FE;
    box-shadow: 0 0 0 2px rgba(62, 116, 254, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const Table = styled.div`
  background-color: #ffffff;
  border: none;
  border-top: 1px solid #e5e7eb;
  border-radius: 0;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 60px 1fr 150px;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  padding: 12px 16px;
`;

const TableHeaderCell = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover {
    color: #3E74FE;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 40px 60px 1fr 150px;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9fafb;
  }
`;

const TableCell = styled.div`
  font-size: 14px;
  color: #374151;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const DomainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DomainName = styled.div`
  font-weight: 500;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SegmentName = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #e5e7eb;
`;

const PaginationInfo = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
`;

const PaginationButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3E74FE;
    color: #3E74FE;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const NewTag = styled.span`
  background-color: #FF7A1A;
  color: white;
  font-size: 9px;
  font-weight: 600;
  padding: 1px 4px;
  border-radius: 3px;
  margin-left: 6px;
`;

const MainContent = ({ onAISegmentBuilderClick }) => {
  const [activeTab, setActiveTab] = useState('myComparisons');
  const [activeSegmentsTab, setActiveSegmentsTab] = useState('mySegments');

  return (
    <MainContainer>
      <Header>
        <Title>Website Segments</Title>
      </Header>

      <Content>
        {/* Website Segments Section - Now First */}
        <Section>
          <Card>
            <CardHeader>
              <CardTitle>Website Segments</CardTitle>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <SecondaryButton>
                  Manual Builder
                </SecondaryButton>
                <PrimaryButton onClick={onAISegmentBuilderClick}>
                  <Sparkles size={14} />
                  AI Segment Builder
                </PrimaryButton>
              </div>
            </CardHeader>
            <SearchAndTabsRow>
              <SegmentedButton>
                <SegmentedButtonItem 
                  active={activeSegmentsTab === 'mySegments'} 
                  onClick={() => setActiveSegmentsTab('mySegments')}
                >
                  My Segments (2)
                </SegmentedButtonItem>
                <SegmentedButtonItem 
                  active={activeSegmentsTab === 'shared'} 
                  onClick={() => setActiveSegmentsTab('shared')}
                >
                  Shared Segments (26460)
                </SegmentedButtonItem>
                <SegmentedButtonItem 
                  active={activeSegmentsTab === 'predefined'} 
                  onClick={() => setActiveSegmentsTab('predefined')}
                >
                  Predefined Segments (623)
                </SegmentedButtonItem>
              </SegmentedButton>
              
              <SearchBar>
                <SearchIcon>
                  <Search size={16} />
                </SearchIcon>
                <SearchInput placeholder="Search..." />
              </SearchBar>
            </SearchAndTabsRow>

            <Table>
              <TableHeader>
                <TableHeaderCell>
                  <Checkbox type="checkbox" />
                </TableHeaderCell>
                <TableHeaderCell>#</TableHeaderCell>
                <TableHeaderCell>
                  Domain & segment name
                  <ChevronDown size={12} />
                </TableHeaderCell>
                <TableHeaderCell>
                  Date Modified
                  <ChevronDown size={12} />
                </TableHeaderCell>
              </TableHeader>
              <TableRow>
                <TableCell>
                  <Checkbox type="checkbox" />
                </TableCell>
                <TableCell>1</TableCell>
                <TableCell>
                  <DomainInfo>
                    <DomainName>
                      <Globe size={14} />
                      terminalx.com
                    </DomainName>
                    <SegmentName>OMER TEST</SegmentName>
                  </DomainInfo>
                </TableCell>
                <TableCell>July 01, 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox type="checkbox" />
                </TableCell>
                <TableCell>2</TableCell>
                <TableCell>
                  <DomainInfo>
                    <DomainName>
                      <Globe size={14} />
                      nike.com
                    </DomainName>
                    <SegmentName>test nike</SegmentName>
                  </DomainInfo>
                </TableCell>
                <TableCell>December 10, 2024</TableCell>
              </TableRow>
            </Table>

            <Pagination>
              <div></div>
              <PaginationControls>
                <PaginationButton disabled><ChevronsLeft size={16} /></PaginationButton>
                <PaginationButton disabled><ChevronLeft size={16} /></PaginationButton>
                <PaginationInfo>1 out of 1</PaginationInfo>
                <PaginationButton disabled><ChevronRight size={16} /></PaginationButton>
                <PaginationButton disabled><ChevronsRight size={16} /></PaginationButton>
              </PaginationControls>
            </Pagination>
          </Card>
        </Section>

        {/* My Comparisons Section - Now Second */}
        <Section>
          <Card>
            <CardHeader>
              <CardTitle>Segments Comparisons</CardTitle>
              <SecondaryButton>
                New comparison
              </SecondaryButton>
            </CardHeader>
            <SearchTabsAndButtonRow>
              <SegmentedButton>
                <SegmentedButtonItem 
                  active={activeTab === 'myComparisons'} 
                  onClick={() => setActiveTab('myComparisons')}
                >
                  My Comparisons
                </SegmentedButtonItem>
                <SegmentedButtonItem 
                  active={activeTab === 'accessible'} 
                  onClick={() => setActiveTab('accessible')}
                >
                  Accessible In Market Analysis
                </SegmentedButtonItem>
              </SegmentedButton>
              
              <SearchBar>
                <SearchIcon>
                  <Search size={16} />
                </SearchIcon>
                <SearchInput placeholder="Search..." />
              </SearchBar>
            </SearchTabsAndButtonRow>

            <ComparisonList>
              <ComparisonItem>
                <ComparisonName>appl</ComparisonName>
                <ComparisonDetails>
                  <DomainItem>
                    <DomainLogo>A</DomainLogo>
                    apple.com
                  </DomainItem>
                  <span>vs</span>
                  <DomainItem>
                    <DomainLogo style={{ backgroundColor: '#6b7280', color: 'white' }}>N</DomainLogo>
                    Apple TV
                  </DomainItem>
                </ComparisonDetails>
              </ComparisonItem>
              <ComparisonItem>
                <ComparisonName>Omer Test</ComparisonName>
                <ComparisonDetails>
                  <DomainItem>
                    <DomainLogo>W</DomainLogo>
                    idp.wework...
                  </DomainItem>
                  <span>vs</span>
                  <DomainItem>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <DomainLogo style={{ backgroundColor: '#6b7280', color: 'white' }}>1</DomainLogo>
                      <DomainLogo>2</DomainLogo>
                      <DomainLogo>3</DomainLogo>
                      <DomainLogo>4</DomainLogo>
                      <span style={{ fontSize: '12px', color: '#6b7280' }}>+5</span>
                    </div>
                  </DomainItem>
                  <span>WeWork M...</span>
                </ComparisonDetails>
              </ComparisonItem>
            </ComparisonList>

            <Pagination>
              <div></div>
              <PaginationControls>
                <PaginationButton disabled><ChevronsLeft size={16} /></PaginationButton>
                <PaginationButton disabled><ChevronLeft size={16} /></PaginationButton>
                <PaginationInfo>1 out of 1</PaginationInfo>
                <PaginationButton disabled><ChevronRight size={16} /></PaginationButton>
                <PaginationButton disabled><ChevronsRight size={16} /></PaginationButton>
              </PaginationControls>
            </Pagination>
          </Card>
        </Section>
      </Content>
    </MainContainer>
  );
};

export default MainContent; 