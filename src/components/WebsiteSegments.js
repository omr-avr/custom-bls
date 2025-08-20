import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const MainContainer = styled.div`
  flex: 1;
  background-color: #F5F9FD;
  overflow-y: auto;
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: between;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;

  ${props => props.primary ? `
    background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
    color: #ffffff;
    
    &:hover {
      opacity: 0.9;
    }
  ` : `
    background: #ffffff;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover {
      background-color: #f9fafb;
    }
  `}
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background-color: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #3E74FE;
    box-shadow: 0 0 0 2px rgba(62, 116, 254, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #f3f4f6;
  padding: 0 24px;
`;

const Tab = styled.button`
  padding: 12px 0;
  margin-right: 32px;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? '#3E74FE' : '#6b7280'};
  border-bottom: 2px solid ${props => props.active ? '#3E74FE' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: #3E74FE;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 12px 24px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #f3f4f6;
  background-color: #f9fafb;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #f3f4f6;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

const TableCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  color: #374151;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #3E74FE;
`;

const DomainIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #e5e7eb;
  display: inline-block;
  margin-right: 8px;
`;

const DomainName = styled.div`
  font-weight: 500;
  color: #1f2937;
`;

const SegmentName = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
`;

const DateText = styled.div`
  color: #6b7280;
`;

const Pagination = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f3f4f6;
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
  padding: 6px 8px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  color: #374151;
  
  &:hover {
    background-color: #f9fafb;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ComparisonRow = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ComparisonName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
`;

const ComparisonSites = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
`;

const SiteTag = styled.span`
  background-color: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;

const WebsiteSegments = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('my-segments');
  const [searchQuery, setSearchQuery] = useState('');
  const [comparisonSearch, setComparisonSearch] = useState('');

  const segmentsData = [
    {
      id: 1,
      domain: 'terminalx.com',
      segment: 'OMER TEST',
      dateModified: 'July 01, 2025'
    },
    {
      id: 2,
      domain: 'nike.com',
      segment: 'test nike',
      dateModified: 'December 10, 2024'
    }
  ];

  const comparisonsData = [
    {
      id: 1,
      name: 'appl',
      sites: [
        { name: 'apple.com', tag: 'A' },
        { name: 'Apple TV', tag: 'N' }
      ]
    },
    {
      id: 2,
      name: 'Omer Test',
      sites: [
        { name: 'idp.wework...', tag: 'W' },
        { name: 'WeWork M...', tag: '1' }
      ]
    }
  ];

  const tabs = [
    { id: 'my-segments', label: 'My Segments (2)' },
    { id: 'shared-segments', label: 'Shared Segments (26460)' },
    { id: 'predefined-segments', label: 'Predefined Segments (623)' }
  ];

  const comparisonTabs = [
    { id: 'my-comparisons', label: 'My Comparisons' },
    { id: 'accessible-comparisons', label: 'Accessible In Market Analysis' }
  ];

  return (
    <MainContainer>
      <Header>
        <Title>Website Segments</Title>
      </Header>

      {/* Website Segments Section */}
      <Card>
        <CardHeader>
          <CardTitle>Website Segments</CardTitle>
          <ButtonGroup>
            <Button>Manual Builder</Button>
            <Button primary>
              <Sparkles size={14} />
              AI Segment Builder
            </Button>
          </ButtonGroup>
        </CardHeader>

        <TabsContainer>
          {tabs.map(tab => (
            <Tab 
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Tab>
          ))}
          <div style={{ marginLeft: 'auto', padding: '8px 0' }}>
            <SearchContainer>
              <SearchIcon>
                <Search size={16} />
              </SearchIcon>
              <SearchInput 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>
          </div>
        </TabsContainer>

        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader style={{ width: '40px' }}></TableHeader>
                <TableHeader>#</TableHeader>
                <TableHeader>DOMAIN & SEGMENT NAME</TableHeader>
                <TableHeader style={{ textAlign: 'right' }}>DATE MODIFIED</TableHeader>
              </tr>
            </thead>
            <tbody>
              {segmentsData.map((segment, index) => (
                <TableRow key={segment.id}>
                  <TableCell>
                    <Checkbox type="checkbox" />
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <DomainIcon />
                      <div>
                        <DomainName>{segment.domain}</DomainName>
                        <SegmentName>{segment.segment}</SegmentName>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell style={{ textAlign: 'right' }}>
                    <DateText>{segment.dateModified}</DateText>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>

        <Pagination>
          <PaginationInfo>1 out of 1</PaginationInfo>
          <PaginationControls>
            <PaginationButton disabled>
              <ChevronLeft size={14} />
            </PaginationButton>
            <PaginationButton disabled>
              <ChevronRight size={14} />
            </PaginationButton>
          </PaginationControls>
        </Pagination>
      </Card>

      {/* Segments Comparisons Section */}
      <Card>
        <CardHeader>
          <CardTitle>Segments Comparisons</CardTitle>
          <Button>New comparison</Button>
        </CardHeader>

        <TabsContainer>
          {comparisonTabs.map(tab => (
            <Tab 
              key={tab.id}
              active={tab.id === 'my-comparisons'}
              onClick={() => {}}
            >
              {tab.label}
            </Tab>
          ))}
          <div style={{ marginLeft: 'auto', padding: '8px 0' }}>
            <SearchContainer>
              <SearchIcon>
                <Search size={16} />
              </SearchIcon>
              <SearchInput 
                placeholder="Search..."
                value={comparisonSearch}
                onChange={(e) => setComparisonSearch(e.target.value)}
              />
            </SearchContainer>
          </div>
        </TabsContainer>

        <div>
          {comparisonsData.map((comparison) => (
            <ComparisonRow key={comparison.id}>
              <ComparisonName>{comparison.name}</ComparisonName>
              <ComparisonSites>
                {comparison.sites.map((site, index) => (
                  <React.Fragment key={index}>
                    <SiteTag>{site.tag}</SiteTag>
                    <span>{site.name}</span>
                    {index < comparison.sites.length - 1 && (
                      <span style={{ margin: '0 8px', color: '#d1d5db' }}>vs</span>
                    )}
                  </React.Fragment>
                ))}
              </ComparisonSites>
            </ComparisonRow>
          ))}
        </div>

        <Pagination>
          <PaginationInfo>1 out of 1</PaginationInfo>
          <PaginationControls>
            <PaginationButton disabled>
              <ChevronLeft size={14} />
            </PaginationButton>
            <PaginationButton disabled>
              <ChevronRight size={14} />
            </PaginationButton>
          </PaginationControls>
        </Pagination>
      </Card>
    </MainContainer>
  );
};

export default WebsiteSegments;
