import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/imscience logo.jpeg';

const { Header: AntdHeader } = Layout;

const HeaderHP = () => {
  const navigate = useNavigate(); 

  const handleMenuClick = (e) => {
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

  return (
    <Layout>
      <AntdHeader className="custom-header">
        <div className="logo">
          <img src={logo} alt="Imscience Logo" />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          className="custom-menu"
          onClick={handleMenuClick} 
        />
      </AntdHeader>
    </Layout>
  );
};

export default HeaderHP;
