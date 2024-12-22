"use client"

import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style/header.css'
const { Header: AntdHeader } = Layout;

export default function HeaderHP() {

    const { Header: AntdHeader } = Layout;

 


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
          </div>
          
        </AntdHeader>
      </Layout>
    </ConfigProvider>
  );
};

