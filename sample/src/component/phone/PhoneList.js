import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';
import PhoneInfo from './PhoneInfo';

class PhoneList extends Component {
    static defaultProps = {
        data : []
    }
  
    onRemove = (id) => {
  
          this.props.onRemove(id) 
    }
    onUpdate = (param) => {
          this.props.onUpdate(param)
    }
    componentDidMount() {
        this.props.history.push('/phone/list')
    }
    render() {
      const list = this.props.data.map(
  
          info => <PhoneInfo  key={info.id}
                              info={info}
                              doDelete={this.onRemove}
                              doUpdate={this.onUpdate} />
      )
      return (
  
  
        <Container>  
        <Table>
          <tbody>
              <tr>
                  <th>이름</th>
                  <th>전화번호</th>
                  <th></th>
                  <th></th>
              </tr>
              {list}
          </tbody>
          </Table>
      </Container>
  
      );
    }
  }
  
  export default PhoneList;