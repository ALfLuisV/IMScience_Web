import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/imscience logo.jpeg';

const { Header: AntdHeader } = Layout;

const HeaderHP = () => {
  const navigate = useNavigate();

  const routes = {
    '1': '/',
    '2': '/team',
    '3': '/research',
    '4': '/projects',
    '5': '/codes',
    '6': '/venues',
    '7': '/publications',
    '8': '/opportunities',
    '9': '/tech-talks',
    '10': '/aboutus',
  };

  const handleMenuClick = (e) => {
    const route = routes[e.key];
    if (route) navigate(route);
  };

  const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Team' },
    { key: '3', label: 'Research' },
    { key: '4', label: 'Projects' },
    { key: '5', label: 'Codes' },
    { key: '6', label: 'Venues' },
    { key: '7', label: 'Publications' },
    { key: '8', label: 'Opportunities' },
    { key: '9', label: 'Tech Talks' },
    { key: '10', label: 'About Us' },
  ];

  const selectedKey = Object.keys(routes).find(
    (key) => routes[key] === location.pathname
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
            <img src={logo} alt="Imscience Logo" style={{ width: '150px' }} />
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

export default HeaderHP;
