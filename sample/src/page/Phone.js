import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Container, Button, Row, Col} from 'reactstrap';

import PhoneForm from '../component/phone/PhoneForm'
import PhoneList from '../component/phone/PhoneList'

import * as api from '../lib/api';

import {
    Layout, Menu, Icon
  } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;  

class Phone extends Component {

  state = {
    information : [ ]
  }

  id=0;

  
  handleCreate = (param) => {
    console.log(param)
    this.insertPhone(param)
  }
  insertPhone = async (param) => {
    try{
      const response = await api.insertPhone(param)
      console.log(response)
      alert(response.status+ " : " + response.data)
      this.props.history.push('/phone/list')
    } catch(err) {
        alert('에러가 발생했습니다. 관리자에게 문의해주세요')
        console.log(err)
    }

    this.getPhones()

  }

  handleDelete = async (id) => {
    try{
        const response = await api.deletePhone(id)
        console.log(response)
        alert(response.status+ " : " + response.data)
      } catch(err) {
          alert('에러가 발생했습니다. 관리자에게 문의해주세요')
          console.log(err)
      }
  
      this.getPhones()
  }

  handleUpdate = async (param) => {
      
    try{
        const response = await api.updatePhone(param)
        console.log(response)
        alert(response.status+ " : " + response.data)
      } catch(err) {
          alert('에러가 발생했습니다. 관리자에게 문의해주세요')
          console.log(err)
      }
  
      this.getPhones()

  }

  getPhones = async () => {

        try{      
            const response = await api.getPhones()
            console.log(response)

            this.setState({
                information : response.data
            })

        } catch(err) {
            console.log(err)
        }
    }

  componentDidMount() {
        this.getPhones()
  }
  render() {
    return (
      
        
          <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>  
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={[`${this.props.match.url}/list`]}
                                selectedKeys={[this.props.location.pathname]}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key={`${this.props.match.url}/list`}>
                                <NavLink to={`${this.props.match.url}/list`}>
                                <Icon type="database" theme="twoTone" />List</NavLink></Menu.Item>
                                <Menu.Item key={`${this.props.match.url}/insert`}><NavLink to={`${this.props.match.url}/insert`}>
                                <Icon type="edit" theme="twoTone" />Insert</NavLink></Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout 
                        //style={{ padding: '0 24px 24px' }}
                        >
                                <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 800,}}>
                                        <Route exact path={this.props.match.url}     render={(props) => <PhoneList {...props} 
                                                            data={this.state.information}
                                                            onRemove={this.handleDelete}
                                                            onUpdate={this.handleUpdate} />} />

                                        <Route exact path={`${this.props.match.url}/list`}     render={(props) => <PhoneList {...props} 
                                                            data={this.state.information}
                                                            onRemove={this.handleDelete}
                                                            onUpdate={this.handleUpdate} />} /> 

                                        <Route exact path={`${this.props.match.url}/insert`} render={(props) => <PhoneForm {...props} 
                                            handleCreate={this.handleCreate} />}  />
                                </Content>
           
                        </Layout>
        </Layout>
    );
  }
}

export default Phone;
