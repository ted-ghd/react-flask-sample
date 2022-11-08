import React, { Fragment, Component } from 'react';

class MyName extends Component {
  static defaultProps = {
      name : '홍길동'
  }
  render() {
    return (
      <Fragment>
          안녕하세요 제 이름은 {this.props.name} 입니다.
      </Fragment>
    );
  }
}

export default MyName;
