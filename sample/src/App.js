import React, { Component, Fragment } from 'react';
import Phone from './page/Phone'
import Home from './page/Home'
import { Route, NavLink, withRouter  } from 'react-router-dom';
import { Container, Button, Row, Col} from 'reactstrap';
import Etc from './page/Etc'
import autoever from './resource/img/autoever_w.png'
import nameimage from './resource/img/name.png'
import {Layout, Menu,Icon} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  
   
  render() {
    return (
      <Fragment>
      <Layout>
          <Header className="header">
              <NavLink to="/" ><img className="logo_image" src={autoever} alt="logo"/></NavLink>
          <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.props.location.pathname]}
              defaultSelectedKeys={["/"]}
              style={{ lineHeight: '64px' }}
          >
              <Menu.Item key="/">
                  <NavLink to="/" >Home</NavLink>
              </Menu.Item>
              <Menu.Item key="/phone">
                  <NavLink to="/phone" >전화번호부</NavLink>
              </Menu.Item>
              <Menu.Item key="/etc">
                  <NavLink to="/etc">기타</NavLink>
              </Menu.Item>
              
              <SubMenu style={{float: 'right'}} title={<span className="submenu-title-wrapper"><Icon type="setting" />6400256</span>}>
                      <Menu.Item key="setting:1" >로그아웃</Menu.Item>
                      
              </SubMenu>

          </Menu>
          </Header>
    </Layout>

        <Route exact path="/"     render={(props) => <Home {...props}  />} /> 
        <Route path="/phone"     render={(props) => <Phone {...props}  />} /> 
        <Route path="/etc"     render={(props) => <Etc {...props}  />} />
          

    {/*  <Container>
          <br/>
          <br/>

          

          <Row>
            <Col sm={2}>
            </Col>
            <Col>
          <NavLink to="/phone"><Button>전화번호부</Button></NavLink>&nbsp;
          <NavLink to="/etc"><Button>기타</Button></NavLink>&nbsp;
          </Col>
          </Row>
          <br/><br/>
          <Route exact path="/"     render={(props) => <Home {...props}  />} /> 
          <Route path="/phone"     render={(props) => <Phone {...props}  />} /> 
          <Route path="/etc"     render={(props) => <Etc {...props}  />} /> 
          
         
      </Container>*/}
      </Fragment>
    );
  }
}

export default withRouter(App);
