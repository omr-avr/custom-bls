import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, Sparkles, Globe } from 'lucide-react';

const MainContainer = styled.div`
  flex: 1;
  background-color: #F5F9FD;
  overflow-y: auto;
  padding: 24px;
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
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  margin-bottom: 24px;
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
  
  ${props => props.primary ? `
    background: linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%);
    color: #ffffff;
    border: none;
    
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

const TabsContainer = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const Tab = styled.button`
  padding: 12px 16px;
  border: none;
  background: none;
  color: ${props => props.active ? '#3B82F6' : '#6B7280'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#3B82F6' : 'transparent'};
  transition: all 0.2s;
  
  &:hover {
    color: #3B82F6;
  }
`;

const SearchContainer = styled.div`
  padding: 0 24px 20px 24px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 36px;
  top: 50%;
  transform: translateY(-50%);
  color: #9CA3AF;
  width: 16px;
  height: 16px;
`;

const Table = styled.div`
  overflow-x: auto;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 1fr auto;
  padding: 12px 24px;
  background-color: #f9fafb;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 1fr auto;
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;
  
  &:hover {
    background-color: #f9fafb;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const DomainIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DomainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DomainName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SegmentName = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const DateModified = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const Pagination = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #6b7280;
`;

const PaginationButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const PaginationButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #6b7280;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f9fafb;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ComparisonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ComparisonRow = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ComparisonTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 8px;
`;

const ComparisonDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #6b7280;
`;

const ComparisonBadge = styled.span`
  background-color: #f3f4f6;
  color: #374151;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
`;

const WebsiteSegments = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('my-segments');
  const [comparisonTab, setComparisonTab] = useState('my-comparisons');

  const segmentTabs = [
    { id: 'my-segments', label: 'My Segments (2)' },
    { id: 'shared-segments', label: 'Shared Segments (26460)' },
    { id: 'predefined-segments', label: 'Predefined Segments (623)' }
  ];

  const comparisonTabs = [
    { id: 'my-comparisons', label: 'My Comparisons' },
    { id: 'accessible-comparisons', label: 'Accessible In Market Analysis' }
  ];

  const segments = [
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

  const comparisons = [
    {
      id: 1,
      title: 'appl',
      details: 'apple.com vs Apple TV'
    },
    {
      id: 2,
      title: 'Omer Test',
      details: 'idp.wework... vs WeWork M...'
    }
  ];

  return (
    <MainContainer>
      <Header>
        <Title>Website Segments</Title>
      </Header>

      {/* Website Segments Card */}
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
          {segmentTabs.map(tab => (
            <Tab 
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>

        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </SearchContainer>

        <Table>
          <TableHeader>
            <span></span>
            <span>#</span>
            <span>Domain & Segment Name</span>
            <span>Date Modified</span>
          </TableHeader>
          
          {segments.map((segment) => (
            <TableRow key={segment.id}>
              <Checkbox type="checkbox" />
              <span>{segment.id}</span>
              <DomainInfo>
                <DomainName>
                  <Globe size={16} />
                  {segment.domain}
                </DomainName>
                <SegmentName>{segment.segment}</SegmentName>
              </DomainInfo>
              <DateModified>{segment.dateModified}</DateModified>
            </TableRow>
          ))}
        </Table>

        <Pagination>
          <span>1 out of 1</span>
          <PaginationButtons>
            <PaginationButton disabled>‹</PaginationButton>
            <PaginationButton disabled>›</PaginationButton>
          </PaginationButtons>
        </Pagination>
      </Card>

      {/* Segments Comparisons Card */}
      <Card>
        <CardHeader>
          <CardTitle>Segments Comparisons</CardTitle>
          <Button primary>New comparison</Button>
        </CardHeader>

        <TabsContainer>
          {comparisonTabs.map(tab => (
            <Tab 
              key={tab.id}
              active={comparisonTab === tab.id}
              onClick={() => setComparisonTab(tab.id)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>

        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </SearchContainer>

        {comparisons.map((comparison) => (
          <ComparisonRow key={comparison.id}>
            <ComparisonTitle>{comparison.title}</ComparisonTitle>
            <ComparisonDetails>
              <ComparisonBadge>W</ComparisonBadge>
              {comparison.details}
              <ComparisonBadge>VS</ComparisonBadge>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>+5</span>
            </ComparisonDetails>
          </ComparisonRow>
        ))}

        <Pagination>
          <span>1 out of 1</span>
          <PaginationButtons>
            <PaginationButton disabled>‹</PaginationButton>
            <PaginationButton disabled>›</PaginationButton>
          </PaginationButtons>
        </Pagination>
      </Card>
    </MainContainer>
  );
};

export default WebsiteSegments;
