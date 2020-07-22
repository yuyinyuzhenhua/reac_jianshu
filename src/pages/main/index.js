import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link, Switch, Redirect } from 'react-router-dom' 
import { UserOutlined } from '@ant-design/icons';
import CustomList from './customelist'
import CustomAdd from './customadd'

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Main extends Component{
    render(){
        console.log(this.props)
        return <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="客户管理">
                        <Menu.Item key="1">
                            <Link to="/main/customlist">客户列表</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/main/customadd">新增客户</Link>
                        </Menu.Item>
                    </SubMenu>                  
                </Menu>
            </Sider>
            <Layout>
                <Content>
                    <Switch>
                        <Redirect exact from="/main"  to="/main/customlist" />
                        <Route path="/main/customlist" component={CustomList} />
                        <Route path="/main/customadd" component={CustomAdd}/>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    }
}

export default Main;