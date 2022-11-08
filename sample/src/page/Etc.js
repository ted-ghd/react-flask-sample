import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Container, Button , Row, Col } from 'reactstrap';
import Maker from '../component/etc/Maker'
import {
  Layout, Menu, Icon
} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;  

class Etc extends Component {
  
  render() {

    return (

      <Layout>
            <Sider width={200} style={{ background: '#fff' }}>  
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1"><NavLink to={`${this.props.match.url}/people`}>
                    <Icon type="smile" theme="twoTone" />만든사람</NavLink></Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                                <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 800,}}>
                                        <Route exact path={this.props.match.url}     
                                            render={(props) => <Maker {...props} /> } />

                                            <Route exact path={`${this.props.match.url}/people`}    
                                            render={(props) => <Maker {...props} /> } />
                                </Content>
            </Layout>
      </Layout>
    );
  }
}

export default Etc;
