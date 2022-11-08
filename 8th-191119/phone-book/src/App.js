import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './page/home/Home';
import Phone from './page/phone/Phone';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {

  render() {
    return (
      <BrowserRouter >

        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              //defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1"> <NavLink to={'/'}>Home</NavLink></Menu.Item>
              <Menu.Item key="2"> <NavLink to={'/Phone'}>Phone</NavLink></Menu.Item>

            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 800,
              }}
            >
              <Route exact path="/" component={Home} />
              <Route exact path="/Phone" component={Phone} />
            </Content>

          </Layout>
        </Layout>


      </BrowserRouter>
    );
  }
}

export default App;
