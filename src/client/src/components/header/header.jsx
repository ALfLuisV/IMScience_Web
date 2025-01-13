"use client"

import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import './style/header.css'

export default function HeaderHP() {

  const { Header: AntdHeader } = Layout;
  const router = useRouter()


  const routes = {
    '1': '/',
    '2': '/members',
    '3': '/events',
    '4': '/projects',
    '5': '/codes',
    '6': '/venues',
    '7': '/publications',
    '8': '/opportunities',
    '9': '/tech-talks',
    '10': '/aboutus',
    '11': '/research',
  };

  const handleMenuClick = (e) => {
    const route = routes[e.key];
    if (route) router.push(route)
  };

  const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Team' },
    { key: '3', label: 'Events' },
    { key: '4', label: 'Projects' },
    { key: '5', label: 'Codes' },
    { key: '6', label: 'Venues' },
    { key: '7', label: 'Publications' },
    { key: '8', label: 'Opportunities' },
    { key: '9', label: 'Tech Talks' },
    { key: '10', label: 'About Us' },
    { key: '11', label: 'Research' },
  ];

  const pathname = usePathname();
  
  const selectedKey = Object.keys(routes).find(
    (key) => routes[key] === pathname
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#156D86',
        },
      }}
    >
      <Layout>
        <AntdHeader className="custom-header">
          <div className="logo">
            <img src='/imscience_logo.jpeg' alt="Imscience Logo" style={{ width: '150px' }} />
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={items}
            className="custom-menu"
            onClick={handleMenuClick}
          />
        </AntdHeader>
      </Layout>
    </ConfigProvider>
  );
};

