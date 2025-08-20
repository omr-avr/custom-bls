import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, Globe, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const MainContainer = styled.div`
  flex: 1;
  background-color: #F5F9FD;
  overflow-y: auto;
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

const ContentCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #f3f4f6;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  background-color: ${props => props.active ? '#3b82f6' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#374151'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#2563eb' : '#f9fafb'};
  }
`;

const AIButton = styled(Button)`
  background: ${props => props.active ? 'linear-gradient(90deg, #3E74FE 0%, #2AD3AB 100%)' : '#ffffff'};
  border: ${props => props.active ? 'none' : '1px solid #d1d5db'};
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(90deg, #2563eb 0%, #059669 100%)' : '#f9fafb'};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 0;
`;

const Tab = styled.button`
  padding: 12px 0;
  margin-right: 32px;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? '#3b82f6' : '#6b7280'};
  border-bottom: ${props => props.active ? '2px solid #3b82f6' : '2px solid transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #3b82f6;
  }
`;

const SearchContainer = styled.div`
  padding: 24px;
  border-bottom: 1px solid #f3f4f6;
`;

const SearchWrapper = styled.div`
  position: relative;
  max-width: 320px;
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
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
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

const Table = styled.div`
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 200px;
  padding: 12px 24px;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 200px;
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;

  &:hover {
    background-color: #f9fafb;
  }
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #3b82f6;
`;

const DomainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DomainName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
`;

const SegmentName = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const DateModified = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const SectionCard = styled(ContentCard)`
  margin-top: 24px;
`;

const SectionHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #f3f4f6;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

const SectionTabs = styled.div`
  display: flex;
  gap: 24px;
`;

const SectionTab = styled.button`
  padding: 8px 0;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? '#3b82f6' : '#6b7280'};
  border-bottom: ${props => props.active ? '2px solid #3b82f6' : '2px solid transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #3b82f6;
  }
`;

const ComparisonContainer = styled.div`
  padding: 24px;
`;

const ComparisonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

const ComparisonLeft = styled.div`
  font-size: 14px;
  color: #1f2937;
`;

const ComparisonRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #6b7280;
`;

const DomainChip = styled.div`
  padding: 4px 8px;
  background-color: #f3f4f6;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
`;

const VSText = styled.span`
  font-weight: 600;
  color: #9ca3af;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid #f3f4f6;
  background-color: #f9fafb;
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
  background-color: #ffffff;
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

const WebsiteSegments = ({ onBack }) => {
  const [activeMainTab, setActiveMainTab] = useState('my-segments');
  const [activeComparisonTab, setActiveComparisonTab] = useState('my-comparisons');
  const [searchTerm, setSearchTerm] = useState('');
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
      name: 'appl',
      domains: ['apple.com', 'Apple TV']
    },
    {
      name: 'Omer Test',
      domains: ['idp.wework...', 'WeWork M...']
    }
  ];

  const mainTabs = [
    { id: 'my-segments', label: 'My Segments (2)' },
    { id: 'shared-segments', label: 'Shared Segments (26460)' },
    { id: 'predefined-segments', label: 'Predefined Segments (623)' }
  ];

  const comparisonTabs = [
    { id: 'my-comparisons', label: 'My Comparisons' },
    { id: 'accessible', label: 'Accessible In Market Analysis' }
  ];

  return (
    <MainContainer>
      <Header>
        <Title>Website Segments</Title>
      </Header>

      {/* Main Segments Section */}
      <ContentCard>
        <CardHeader>
          <CardTitle>Website Segments</CardTitle>
          <ButtonContainer>
            <Button>Manual Builder</Button>
            <AIButton active>✨ AI Segment Builder</AIButton>
          </ButtonContainer>
          <TabsContainer>
            {mainTabs.map(tab => (
              <Tab
                key={tab.id}
                active={activeMainTab === tab.id}
                onClick={() => setActiveMainTab(tab.id)}
              >
                {tab.label}
              </Tab>
            ))}
          </TabsContainer>
        </CardHeader>

        <SearchContainer>
          <SearchWrapper>
            <SearchIcon>
              <Search size={16} />
            </SearchIcon>
            <SearchInput
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchWrapper>
        </SearchContainer>

        <Table>
          <TableHeader>
            <div>#</div>
            <div>Domain & Segment Name</div>
            <div>Date Modified</div>
          </TableHeader>
          {segmentsData.map(segment => (
            <TableRow key={segment.id}>
              <Checkbox type="checkbox" />
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

        <PaginationContainer>
          <PaginationInfo>1 out of 1</PaginationInfo>
          <PaginationControls>
            <PaginationButton disabled>
              <ChevronLeft size={16} />
            </PaginationButton>
            <PaginationButton disabled>
              <ChevronRight size={16} />
            </PaginationButton>
          </PaginationControls>
        </PaginationContainer>
      </ContentCard>

      {/* Segments Comparisons Section */}
      <SectionCard>
        <SectionHeader>
          <SectionTitle>Segments Comparisons</SectionTitle>
          <SectionTabs>
            {comparisonTabs.map(tab => (
              <SectionTab
                key={tab.id}
                active={activeComparisonTab === tab.id}
                onClick={() => setActiveComparisonTab(tab.id)}
              >
                {tab.label}
              </SectionTab>
            ))}
          </SectionTabs>
        </SectionHeader>

        <SearchContainer>
          <SearchWrapper>
            <SearchIcon>
              <Search size={16} />
            </SearchIcon>
            <SearchInput
              placeholder="Search..."
              value={comparisonSearch}
              onChange={(e) => setComparisonSearch(e.target.value)}
            />
          </SearchWrapper>
        </SearchContainer>

        <ComparisonContainer>
          {comparisonsData.map((comparison, index) => (
            <ComparisonRow key={index}>
              <ComparisonLeft>{comparison.name}</ComparisonLeft>
              <ComparisonRight>
                {comparison.domains.map((domain, domainIndex) => (
                  <React.Fragment key={domainIndex}>
                    <DomainChip>{domain}</DomainChip>
                    {domainIndex < comparison.domains.length - 1 && <VSText>VS</VSText>}
                  </React.Fragment>
                ))}
              </ComparisonRight>
            </ComparisonRow>
          ))}
        </ComparisonContainer>

        <PaginationContainer>
          <PaginationInfo>1 out of 1</PaginationInfo>
          <PaginationControls>
            <PaginationButton disabled>
              <ChevronLeft size={16} />
            </PaginationButton>
            <PaginationButton disabled>
              <ChevronRight size={16} />
            </PaginationButton>
          </PaginationControls>
        </PaginationContainer>
      </SectionCard>
    </MainContainer>
  );
};

export default WebsiteSegments;
