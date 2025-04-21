"use client"
import { Card, Select, Typography, Row, Col } from 'antd';
import { Area } from '@ant-design/plots';
import { useState } from 'react';
import { ConfigProvider } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const mockMembers = [
    {
      id: 1,
      name: 'Alice',
      entryDate: '15/01/2025',
      projects: [
        { label: 'Projeto X', value: 'proj-x' },
        { label: 'Projeto Y', value: 'proj-y' }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      entryDate: '10/01/2025',
      projects: [
        { label: 'Projeto X', value: 'proj-x' }
      ]
    },
    {
      id: 3,
      name: 'Carol',
      entryDate: '25/11/2024',
      projects: [
        { label: 'Projeto Z', value: 'proj-z' },
        { label: 'Projeto Y', value: 'proj-y' }
      ]
    }
  ];

// Helper function to parse date string (DD/MM/YYYY format)
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/');
  return new Date(year, month - 1, day);
};

// Helper function to group projects by time period
const groupProjectsByPeriod = (members, period) => {
  const now = new Date();
  const timeData = [];
  const projectsMap = new Map();
  
  // Calculate start date based on selected period
  const startDate = new Date();
  switch(period) {
    case 'month':
      startDate.setMonth(now.getMonth() - 1);
      break;
    case '6months':
      startDate.setMonth(now.getMonth() - 6);
      break;
    case 'year':
      startDate.setFullYear(now.getFullYear() - 1);
      break;
  }

  if (!Array.isArray(members)) return { timeData: [], projects: [] };

  // Format data for chart
  const intervals = period === 'month' ? 4 : period === '6months' ? 6 : 12;
  const intervalSize = period === 'month' ? 7 : period === '6months' ? 30 : 30;

  for (let i = 0; i < intervals; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + (i * intervalSize));
    
    // Reset project maps for each period
    const projectsForPeriod = new Set();
    const currentProjectsMap = new Map();
    
    members.forEach(member => {
      const entryDate = parseDate(member.entryDate);
      if (entryDate <= date) {
        member.projects.forEach(project => {
          projectsForPeriod.add(project.value);
          if (!currentProjectsMap.has(project.value)) {
            currentProjectsMap.set(project.value, {
              id: project.value,
              name: project.label,
              count: 1
            });
          } else {
            currentProjectsMap.get(project.value).count++;
          }
        });
      }
    });

    // Update the main projectsMap with the current period's data
    projectsMap.clear();
    currentProjectsMap.forEach((value, key) => {
      projectsMap.set(key, value);
    });

    timeData.push({
      date: date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
      projects: projectsForPeriod.size
    });
  }

  return {
    timeData,
    projects: Array.from(projectsMap.values())
  };
};

const ProjectAnalytics = () => {
  const [timePeriod, setTimePeriod] = useState('month');
  const { timeData, projects } = groupProjectsByPeriod(mockMembers, timePeriod);

  // Config for Ant Design Area Chart
// Configuração para o gráfico sem área
const chartConfig = {
    data: timeData,
    xField: 'date',
    yField: 'projects',
    xAxis: {
      range: [0, 1],
      label: {
        formatter: (v) => v,
      },
    },
    smooth: true,
    areaStyle: undefined, // Isso garante que nenhuma área seja renderizada
    line: {
      color: '#156D86', // Cor da linha
      size: 2,          // Espessura da linha
    },
  };
  

  return (
    <Row gutter={[16, 16]} style={{ padding: '24px' }}>
      <Col span={24}>
        <Card
          title={
            <Row justify="space-between" align="middle">
              <Col>
                <Title level={4} style={{ color: '#156D86', margin: 0 }}>Projetos Publicados</Title>
              </Col>
              <Col>
                <Select
                  defaultValue="month"
                  style={{ width: 120 }}
                  onChange={setTimePeriod}
                >
                  <Option value="month">1 Month</Option>
                  <Option value="6months">6 Months</Option>
                  <Option value="year">1 Year</Option>
                </Select>
              </Col>
            </Row>
          }
        >
          <div style={{ height: 400 }}>
            <Area {...chartConfig} />
          </div>
        </Card>
      </Col>

      <Col span={24}>
        <Card
          title={
            <Title level={4} style={{ color: '#156D86', margin: 0 }}>
              Projetos ({projects.length})
            </Title>
          }
        >
          <Row gutter={[16, 16]}>
            {projects.map(project => (
              <Col xs={24} sm={12} key={project.id}>
                <Card
                  size="small"
                  style={{
                    borderLeft: '4px solid #156D86',
                    backgroundColor: '#f5f5f5'
                  }}
                >
                  <Row justify="space-between" align="middle">
                    <Col>
                      <Text strong>{project.name}</Text>
                      <br />
                      <Text type="secondary">
                        {project.count} member{project.count !== 1 ? 's' : ''}
                      </Text>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ProjectAnalytics;
