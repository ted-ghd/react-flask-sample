import React, { Fragment, Component } from 'react';
import PhoneList from './Components/PhoneList'
import { Input } from 'antd'

class App extends Component {

  render() {
    return (
      <Fragment >
        <PhoneList />
      </Fragment>
    );
  }
}

export default App;
