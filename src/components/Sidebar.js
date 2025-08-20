import React from 'react';
import styled from 'styled-components';
import { 
  Home, 
  Grid, 
  BarChart3, 
  Search, 
  Globe, 
  Brain, 
  Eye, 
  TrendingUp, 
  BarChart, 
  Smartphone, 
  Rocket, 
  Download, 
  Settings,
  Star,
  PieChart
} from 'lucide-react';

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #ffffff;
  border-right: 1px solid #f3f4f6;
  padding: 20px 0;
  overflow-y: auto;
  height: 100vh;
`;

const Logo = styled.div`
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #f3f4f6;
  margin-bottom: 20px;
`;

const LogoText = styled.h1`
  font-size: 13px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 3px;
`;

const SubLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #6b7280;
`;

const NavSection = styled.div`
  margin-bottom: 20px;
`;

const NavItem = styled.div`
  padding: 6px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;
  margin: 0 8px;

  &:hover {
    background-color: #f8fafc;
  }

  ${props => props.active && `
    background-color: #dbeafe;
    color: #1d4ed8;
    font-weight: 500;
  `}

  ${props => props.subItem && `
    padding-left: 40px;
    font-size: 12px;
  `}

  ${props => props.subSubItem && `
    padding-left: 60px;
    font-size: 11px;
  `}
`;

const SectionTitle = styled.div`
  padding: 0 20px 6px 20px;
  font-size: 11px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = ({ currentPage, onWebsiteAnalysisClick, onWebsiteSegmentsClick }) => {
  return (
    <SidebarContainer>
      <Logo>
        <LogoText>Web Intelligence by Similarweb</LogoText>
        <SubLogo>
          <Star size={12} />
          Similarweb AI
        </SubLogo>
      </Logo>

      <NavSection>
        <NavItem>
          <IconWrapper><Home size={16} /></IconWrapper>
          Home
        </NavItem>
        <NavItem>
          <IconWrapper><Grid size={16} /></IconWrapper>
          Dashboards
        </NavItem>
        <NavItem>
          <IconWrapper><BarChart3 size={16} /></IconWrapper>
          Competitive Trackers
        </NavItem>
      </NavSection>

      <NavSection>
        <SectionTitle>Website Research</SectionTitle>
        <NavItem active={currentPage === 'website-analysis'} onClick={onWebsiteAnalysisClick}>
          <IconWrapper><Globe size={16} /></IconWrapper>
          Website Analysis
        </NavItem>
        <NavItem>
          <IconWrapper><BarChart3 size={16} /></IconWrapper>
          Website Rankings
        </NavItem>
        <NavItem active={currentPage === 'website-segments'} onClick={onWebsiteSegmentsClick}>
          <IconWrapper><PieChart size={16} /></IconWrapper>
          Website Segments
        </NavItem>
      </NavSection>

      <NavSection>
        <SectionTitle>Search Intelligence</SectionTitle>
        <NavItem>
          <IconWrapper><Search size={16} /></IconWrapper>
          Search Tracking
        </NavItem>
        <NavItem>
          <IconWrapper><Search size={16} /></IconWrapper>
          Keyword Research
        </NavItem>
        <NavItem>
          <IconWrapper><Globe size={16} /></IconWrapper>
          Backlink Analytics
        </NavItem>
        <NavItem>
          <IconWrapper><BarChart3 size={16} /></IconWrapper>
          Site Audit
        </NavItem>
      </NavSection>

      <NavSection>
        <SectionTitle>Gen AI Intelligence</SectionTitle>
        <NavItem>
          <IconWrapper><Brain size={16} /></IconWrapper>
          AI Traffic
        </NavItem>
        <NavItem>
          <IconWrapper><Eye size={16} /></IconWrapper>
          AI Brand Visibility
        </NavItem>
      </NavSection>

      <NavSection>
        <SectionTitle>Ad Intelligence</SectionTitle>
        <NavItem>
          <IconWrapper><Search size={16} /></IconWrapper>
          Search Advertising
        </NavItem>
        <NavItem>
          <IconWrapper><Eye size={16} /></IconWrapper>
          Display Advertising
        </NavItem>
      </NavSection>

      <NavSection>
        <SectionTitle>Market Research</SectionTitle>
        <NavItem>
          <IconWrapper><BarChart3 size={16} /></IconWrapper>
          Market Analysis
        </NavItem>
        <NavItem>
          <IconWrapper><TrendingUp size={16} /></IconWrapper>
          Demand Analysis
        </NavItem>
        <NavItem>
          <IconWrapper><BarChart size={16} /></IconWrapper>
          Conversion Analysis
        </NavItem>
      </NavSection>

      <NavSection>
        <SectionTitle>App Research</SectionTitle>
        <NavItem>
          <IconWrapper><BarChart3 size={16} /></IconWrapper>
          App Category Analysis
        </NavItem>
        <NavItem>
          <IconWrapper><Smartphone size={16} /></IconWrapper>
          App Analysis
        </NavItem>
      </NavSection>

      <NavSection>
        <NavItem>
          <IconWrapper><Rocket size={16} /></IconWrapper>
          What's New?
        </NavItem>
        <NavItem>
          <IconWrapper><Download size={16} /></IconWrapper>
          Download Extension
        </NavItem>
        <NavItem>
          <IconWrapper><Settings size={16} /></IconWrapper>
          Settings & Help
        </NavItem>
      </NavSection>
    </SidebarContainer>
  );
};

export default Sidebar; 