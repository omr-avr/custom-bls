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

const MainCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const ReportHeader = styled.div`
  padding: 20px 20px 16px 20px;
  border-bottom: 1px solid #f3f4f6;
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
  gap: 0;
  border-bottom: 1px solid #e5e7eb;
`;

const MetricCard = styled.div`
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
  
  ${props => props.active && `
    border-bottom-color: #3E74FE;
    background-color: #f8fafc;
  `}
  
  &:hover {
    background-color: #f8fafc;
  }
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
  padding: 24px;
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
`;

const ChartSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

const ChartLine = styled.path`
  fill: none;
  stroke: #3E74FE;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const ChartDot = styled.circle`
  fill: #3E74FE;
  stroke: #ffffff;
  stroke-width: 2;
`;

const ChartGrid = styled.line`
  stroke: #e5e7eb;
  stroke-width: 1;
  stroke-dasharray: 2,2;
`;

const ChartLabel = styled.text`
  fill: #6b7280;
  font-size: 12px;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ChartValue = styled.text`
  fill: #374151;
  font-size: 11px;
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 500;
`;

const WebsiteSegmentReport = ({ onBack, onNavigateToWebsiteSegments, segmentData }) => {
  const [isMonthToDate, setIsMonthToDate] = useState(true);
  const [activeTab, setActiveTab] = useState('monthlyVisits');

  // Mock chart data - traffic over time (in millions)
  const chartData = [
    { month: 'Feb', value: 13.5, label: 'Feb' },
    { month: 'Mar', value: 14.2, label: 'Mar' },
    { month: 'Apr', value: 13.7, label: 'Apr' },
    { month: 'May', value: 13.9, label: 'May' },
    { month: 'Jun', value: 14.3, label: 'Jun' },
    { month: 'Jul', value: 15.2, label: 'Jul' },
    { month: 'Aug', value: 13.2, label: 'Aug' }
  ];

  // Chart dimensions
  const chartWidth = 800;
  const chartHeight = 240;
  const padding = { top: 20, right: 40, bottom: 40, left: 60 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  // Calculate scales
  const maxValue = Math.max(...chartData.map(d => d.value));
  const minValue = Math.min(...chartData.map(d => d.value));
  const valueRange = maxValue - minValue;
  const yScale = (value) => padding.top + (1 - (value - minValue) / valueRange) * innerHeight;
  const xScale = (index) => padding.left + (index / (chartData.length - 1)) * innerWidth;

  // Create path string for the line
  const createPath = () => {
    return chartData.map((d, i) => {
      const x = xScale(i);
      const y = yScale(d.value);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  // Grid lines
  const yGridLines = [13.0, 13.5, 14.0, 14.5, 15.0, 15.5];

  // Mock data based on the attached image
  const metrics = [
    {
      id: 'monthlyVisits',
      label: 'Monthly Visits',
      value: '14.08M',
      change: '15.31%',
      positive: true,
      icon: <Users size={14} />
    },
    {
      id: 'segmentShare',
      label: 'Segment Share',
      value: '4.19%',
      change: '11.37%',
      positive: true,
      icon: <TrendingUp size={14} />
    },
    {
      id: 'uniqueVisitors',
      label: 'Unique Visitors',
      value: '6.241M',
      change: '18.50%',
      positive: true,
      icon: <Eye size={14} />
    },
    {
      id: 'pageViews',
      label: 'Page Views',
      value: '34.25M',
      change: '8.68%',
      positive: true,
      icon: <MousePointer size={14} />
    },
    {
      id: 'pagesPerVisit',
      label: 'Pages Per Visit',
      value: '2.43',
      change: '5.74%',
      positive: false,
      icon: <Globe size={14} />
    },
    {
      id: 'visitDuration',
      label: 'Visit Duration',
      value: '00:02:40',
      change: '8.97%',
      positive: false,
      icon: <Clock size={14} />
    },
    {
      id: 'bounceRate',
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
        <Title>{segmentData?.name || 'Website Segment Report'}</Title>
      </Header>

      <Content>
        <MainCard>
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
            {metrics.map((metric) => (
              <MetricCard 
                key={metric.id} 
                active={activeTab === metric.id}
                onClick={() => setActiveTab(metric.id)}
              >
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
              <ChartSvg viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
                {/* Grid lines */}
                {yGridLines.map((value, i) => (
                  <ChartGrid
                    key={i}
                    x1={padding.left}
                    y1={yScale(value)}
                    x2={padding.left + innerWidth}
                    y2={yScale(value)}
                  />
                ))}
                
                {/* Y-axis labels */}
                {yGridLines.map((value, i) => (
                  <ChartValue
                    key={i}
                    x={padding.left - 10}
                    y={yScale(value) + 4}
                    textAnchor="end"
                  >
                    {value.toFixed(1)}M
                  </ChartValue>
                ))}
                
                {/* X-axis labels */}
                {chartData.map((d, i) => (
                  <ChartLabel
                    key={i}
                    x={xScale(i)}
                    y={chartHeight - padding.bottom + 20}
                    textAnchor="middle"
                  >
                    {d.label}
                  </ChartLabel>
                ))}
                
                {/* Main line */}
                <ChartLine d={createPath()} />
                
                {/* Data points */}
                {chartData.map((d, i) => (
                  <ChartDot
                    key={i}
                    cx={xScale(i)}
                    cy={yScale(d.value)}
                    r="4"
                  />
                ))}
                
                {/* Dashed line for future projection */}
                <ChartLine 
                  d={`M ${xScale(5)} ${yScale(15.2)} L ${xScale(6)} ${yScale(13.2)}`}
                  strokeDasharray="4,4"
                  opacity="0.7"
                />
              </ChartSvg>
            </ChartArea>
          </ChartContainer>
        </MainCard>
      </Content>
    </MainContainer>
  );
};

export default WebsiteSegmentReport;
