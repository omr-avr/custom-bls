import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeft, Calendar, Globe, TrendingUp, Users, Eye, Clock, MousePointer } from 'lucide-react';

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

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #6b7280;
`;

const BreadcrumbItem = styled.span`
  color: #6b7280;
  cursor: pointer;
  
  &:hover {
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

const ReportHeader = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ReportTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
`;

const ReportMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  color: #6b7280;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

const MetricCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const MetricLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const MetricValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`;

const MetricChange = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const ChartContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ChartTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const ChartControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TimeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
`;

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
`;

const Switch = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${props => props.active ? '#3E74FE' : '#d1d5db'};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.active ? '22px' : '2px'};
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.2s;
  }
`;

const ChartArea = styled.div`
  height: 300px;
  position: relative;
  background-color: #fafbfc;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartPlaceholder = styled.div`
  color: #9ca3af;
  font-size: 14px;
  text-align: center;
`;

const WebsiteSegmentReport = ({ onBack, onNavigateToWebsiteSegments, segmentData }) => {
  const [isMonthToDate, setIsMonthToDate] = useState(true);

  // Mock data based on the attached image
  const metrics = [
    {
      label: 'Monthly Visits',
      value: '14.08M',
      change: '15.31%',
      positive: true,
      icon: <Users size={14} />
    },
    {
      label: 'Segment Share',
      value: '4.19%',
      change: '11.37%',
      positive: true,
      icon: <TrendingUp size={14} />
    },
    {
      label: 'Unique Visitors',
      value: '6.241M',
      change: '18.50%',
      positive: true,
      icon: <Eye size={14} />
    },
    {
      label: 'Page Views',
      value: '34.25M',
      change: '8.68%',
      positive: true,
      icon: <MousePointer size={14} />
    },
    {
      label: 'Pages Per Visit',
      value: '2.43',
      change: '5.74%',
      positive: false,
      icon: <Globe size={14} />
    },
    {
      label: 'Visit Duration',
      value: '00:02:40',
      change: '8.97%',
      positive: false,
      icon: <Clock size={14} />
    },
    {
      label: 'Bounce Rate',
      value: '57%',
      change: '2.70%',
      positive: true,
      icon: <TrendingUp size={14} />
    }
  ];

  return (
    <MainContainer>
      <Header>
        <Breadcrumbs>
          <BreadcrumbItem 
            onClick={onNavigateToWebsiteSegments}
          >
            Website Segments
          </BreadcrumbItem>
        </Breadcrumbs>
        <Title>Website Segment Report</Title>
      </Header>

      <Content>
        <ReportHeader>
          <ReportTitle>Traffic and engagement over time</ReportTitle>
          <ReportMeta>
            <MetaItem>
              <Calendar size={14} />
              Feb 2025 - Jul 2025
            </MetaItem>
            <MetaItem>
              <Globe size={14} />
              United States
            </MetaItem>
            <MetaItem>
              <TrendingUp size={14} />
              All traffic
            </MetaItem>
          </ReportMeta>
        </ReportHeader>

        <MetricsGrid>
          {metrics.map((metric, index) => (
            <MetricCard key={index}>
              <MetricLabel>
                {metric.icon}
                {metric.label}
              </MetricLabel>
              <MetricValue>{metric.value}</MetricValue>
              <MetricChange positive={metric.positive}>
                {metric.positive ? '↗' : '↘'} {metric.change}
              </MetricChange>
            </MetricCard>
          ))}
        </MetricsGrid>

        <ChartContainer>
          <ChartHeader>
            <ChartTitle>Traffic and engagement over time</ChartTitle>
            <ChartControls>
              <TimeSelector>
                <Calendar size={14} />
                Feb 2025 - Jul 2025
              </TimeSelector>
              <ToggleSwitch>
                <span>Month-to-date</span>
                <Switch 
                  active={isMonthToDate} 
                  onClick={() => setIsMonthToDate(!isMonthToDate)}
                />
              </ToggleSwitch>
            </ChartControls>
          </ChartHeader>
          <ChartArea>
            <ChartPlaceholder>
              📈 Interactive chart would be rendered here
              <br />
              Showing traffic trends from Feb 2025 to Jul 2025
            </ChartPlaceholder>
          </ChartArea>
        </ChartContainer>
      </Content>
    </MainContainer>
  );
};

export default WebsiteSegmentReport;
