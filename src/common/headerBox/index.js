import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import{ Link } from 'react-router-dom'


const { Header, } = Layout


class HeaderBox extends Component{
    render(){
        return <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/main">主页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/system">系统设置</Link>
          </Menu.Item>
        </Menu>
      </Header>
    }
}

export default HeaderBox