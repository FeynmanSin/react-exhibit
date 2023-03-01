import React, { useEffect, useCallback, useState } from 'react';
import { Layout, Spin } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';


import { useAsync } from '../../hooks/index';
import * as request from '../../utils/request';

import MenuContainer from '../../components/Container/MenuContainer';
const { Header, Sider, Content } = Layout;


const HomePage = () => {
  const navigate = useNavigate();
  const { value, loading, } = useAsync(useCallback(() => request.get('/pc-routers/1'), []));

  return (
    <Layout style={{ display: 'flex', height: '100vh' }}>
      <Header style={{ height: 60, backgroundColor: '#498EFF' }}>
        <div style={{ display: 'flex' }}>
          <div onClick={() => navigate('/', { replace: true })}>PC端</div>
          <div onClick={() => navigate('/login', { replace: true })}>Mobile端</div>
        </div>
      </Header>
      <Layout>
        <Sider style={{ backgroundColor: '#fff', minHeight: '100%' }} >
          <MenuContainer loading={loading} onlyOpen={true} routerData={value} />
        </Sider>
        <Layout style={{ padding: 16 }}>
          <Content >
            <Outlet />
          </Content>
        </Layout >
      </Layout >
    </Layout >
  )

}

export default HomePage;