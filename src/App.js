import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderBox from './common/headerBox'
import { HashRouter, Route } from 'react-router-dom';
import Main from './pages/main'
import System from './pages/system'

function App() {
  return (
    <HashRouter>
      <Layout>
        <HeaderBox></HeaderBox>
        {/* <Route path="/" component={Mian} /> */}
        <Route path="/main" component={Main} />
        <Route path="/system" component={System} />
      </Layout>
      </HashRouter>
  );
}

export default App;
