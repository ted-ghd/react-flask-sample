import React, { Component, Fragment }  from 'react';
import Counter from './Counter'
import MyName from './MyName'

class App extends Component {
  render() {
      const myName = "김태성"
      let myTeam = "hpc기술팀"
      return (
        <Fragment>
          <MyName name={"아이고"} team={"데이고"}/>
          <Counter />

        </Fragment>
      );
  }
}

export default App;
