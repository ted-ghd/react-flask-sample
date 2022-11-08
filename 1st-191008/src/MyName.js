import React, { Component, Fragment }  from 'react';

class MyName extends Component {

  static defaultProps = {
      team:"기본팀",
      name:"기본이름"
  }  
  render() {
      return (
        <Fragment>
            <div>
                Hello React { this.props.team} : { this.props.name}
            </div>
        </Fragment>
      );
  }
}

export default MyName;
