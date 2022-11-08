import React, { Fragment, Component } from 'react';
import { Button, Row, Col, Input, Label } from 'reactstrap' 

class PhoneForm extends Component {
  state = {
      name : '홍길동',
      phone : '123 123 123'
  }
  
  handleChange = (e) => {

        this.setState({
            [ e.target.name ] : e.target.value
        })
  }
  handleClick = () => {
      // App.js 데이터를 넘겨줘야되요...
      // React 단방향으로만 이루어진다 ( 부모 -> 자식    자식 -X-> 부모  )
      this.props.handleCreate(this.state)
  } 
  render() {
    return (
      <Fragment>
          <Row>
              <Label sm={2}>
                이름
              </Label>
              <Col sm={10}>
                    <Input name="name"
                            value = {this.state.name} 
                            onChange = {this.handleChange} />
              </Col>
          </Row>
          <Row>
              <Label sm={2}>
                전화번호
              </Label>
              <Col sm={10}>
                    <Input name="phone" 
                           value={this.state.phone}
                           onChange={this.handleChange}/>
              </Col>
          </Row>
          <Row>
              <Col sm={10}></Col>
              <Col sm={2}>
            <Button color="primary" 
                    onClick={this.handleClick}>등록</Button>
               </Col>
          </Row>
          <Row>
            
          </Row>
      </Fragment>
    );
  }
}

export default PhoneForm;
