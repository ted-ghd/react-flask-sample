import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Container, Button, Row, Col, Input, Label} from 'reactstrap';

import PhoneForm from '../component/phone/PhoneForm'
import PhoneList from '../component/phone/PhoneList'

import * as api from '../lib/api';
import {
  Layout, Menu, Icon
} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Home extends Component {

  render() {
    return (
      <Layout>
            <Sider width={200} style={{ background: '#fff' }}>  
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[this.props.location.pathname]}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key={'/'}><NavLink to={'/'}>
                    <Icon type="database" theme="twoTone" />Login</NavLink></Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                    <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 800,}}>
                          <Row>
                              <Col sm={2}>
                              <Label >ID</Label>
                              </Col>
                              <Col>
                              <Input/>
                              </Col>
                          </Row>
                          <Row>
                                <Col sm={2}>
                                <Label >PASSWORD</Label>
                                </Col>
                                <Col>
                                <Input/>
                                </Col>
                          </Row>
                    </Content>
            </Layout>
      </Layout>
    );
  }
}

export default Home;
