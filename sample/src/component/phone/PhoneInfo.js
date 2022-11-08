import React, { Fragment, Component } from 'react';
import {Button, Input } from 'reactstrap'
class PhoneInfo extends Component {
  
  state = {
    id:0,
    name:'',
    phone:'',
    editingMode : false
  }
  handleDelete = () => {
       this.props.doDelete(this.props.info.id)
  }

  toggleEdit = () => {
      // as-is false (읽기모드) to-be (쓰기모드)
      if( this.state.editingMode === false ){
          
          this.setState({
                id : this.props.info.id,
                name: this.props.info.name,
                phone : this.props.info.phone

                /*...this.props.info  전개연산자 */
          })
      }
      else {
          this.props.doUpdate(this.state)
      }

      this.setState({
        editingMode : !this.state.editingMode
      })

      //  ! : not 연산자  ..... !true => false   !false => true
  }
  handleChange = (e) => {

    console.log(e.target.name)
    this.setState({
       [e.target.name] : e.target.value 
    })
  }
  render() {
    return (
      <Fragment>
        <tr>

          {
          this.state.editingMode === false ?
              <Fragment>
                  <td >{this.props.info.name} </td>
                  <td>{this.props.info.phone} </td>
              </Fragment>
           :
              <Fragment>
                  <td ><Input value={this.state.name} 
                              name="name"
                              onChange={this.handleChange}/> </td>
                  <td><Input value={this.state.phone}
                              name="phone"
                              onChange={this.handleChange}/> </td>
              </Fragment>
          }

          <td> <Button onClick={this.toggleEdit}>수정</Button> </td>
          <td> <Button onClick={this.handleDelete}>삭제</Button> </td>

        </tr>
        
      </Fragment>
    );
  }
}

export default PhoneInfo;
