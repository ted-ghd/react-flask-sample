import React, { Component, Fragment }  from 'react';

class Counter extends Component {
  state = {
     number : 0
  }
  handleIncrease = () => {
     this.setState(
         {  
             number : this.state.number + 1  
         }
     )
  }
  handleDecrease = () => {

     (this.state.number > 0 ) &&
      
        this.setState({
            number : this.state.number - 1 
        })
     
     /*       
     if(this.state.number > 0){
        this.setState({
                number : this.state.number - 1 
            })
     }*/
    
  }
  render() {
      return (
        <Fragment>
            <h1>카운터</h1>
            <div>값 : {this.state.number} </div>
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>
        </Fragment>
      );
  }
}

export default Counter;
