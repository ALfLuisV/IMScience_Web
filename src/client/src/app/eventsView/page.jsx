'use client'

import React from 'react';
import { Select, DatePicker, Button } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import eventsData from '../events/eventsinfo.json';

const EventsFilter = () => {
  const { RangePicker } = DatePicker;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month}/${year}`;
  };

  const generateGoogleCalendarUrl = (event) => {
    const startDate = new Date(event.data).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = startDate; 
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.nome)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.descricao)}&location=${encodeURIComponent(event.local)}`;
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '24px' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '40px' 
      }}>
        Ongoing and Upcoming Events
      </h1>

      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Audience</label>
          <Select
            defaultValue="any"
            style={{ width: '100%' }}
            options={[
              { value: 'any', label: 'Any' },
              { value: 'general', label: 'General public' },
              { value: 'cern', label: 'CERN community' },
              { value: 'scientists', label: 'Scientists' },
              { value: 'students', label: 'Students' },
              { value: 'educators', label: 'Educators' },
              { value: 'media', label: 'Media' },
              { value: 'industry', label: 'Industry partners' },
              { value: 'policy', label: 'Policymakers' }
            ]}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Date from</label>
          <RangePicker style={{ width: '100%' }} />
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Type</label>
          <Select
            defaultValue="any"
            style={{ width: '100%' }}
            options={[ { value: 'any', label: 'Any' } ]}
          />
        </div>
      </div>

      <Button 
        type="primary"
        icon={<SearchOutlined />}
        style={{ 
          width: '100%',
          marginBottom: '40px'
        }}
      >
        Apply
      </Button>

      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px' 
      }}>
       
      </div>
     
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
      }}>
        {eventsData.eventos.map((evento) => (
          <div key={evento.id} style={{
            border: '1px solid #e8e8e8',
            padding: '20px',
            borderRadius: '4px',
            position: 'relative'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ color: '#666' }}>
                {new Date(evento.data).toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()}
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatDate(evento.data)}
              </div>
              <div style={{ color: '#666' }}>{evento.sigla}</div>
            </div>
            <h3 style={{ 
              fontSize: '16px', 
              marginBottom: '10px',
              color: '#0066cc'
            }}>
              {evento.nome}
            </h3>
            <div style={{ color: '#666' }}>
              Event | {evento.local}
            </div>
            <a
              href={generateGoogleCalendarUrl(evento)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: '#0066cc',
                color: 'white',
                padding: '8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <CalendarOutlined style={{ marginRight: '5px' }} />
              Add to Calendar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsFilter;
