import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderHP from './Header';
import FooterHP from './footer';
import '../styles/team.css'

const { Header, Footer, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh'}}>

      <Header style={{padding: '0px', height: '6rem'}}>
        <HeaderHP/>
      </Header>


      {/* <Content style={{ padding: '20px', marginTop: '64px' }}> */}
      <Content>
        <Outlet /> {/* Renderiza o conteúdo da página atual */}
      </Content>


      <Footer style={{padding: '0px'}}>
        <FooterHP/>
      </Footer>
    </Layout>
  );
};

export default AppLayout;