import React, { Component } from 'react';
import {Button} from './Components/Button';
import './App.css';

class App extends Component {
  state={
    clickCount: 0,
  }
  
  handleCount = (count) => {
    this.setState(prevState=>{
      if(count===-1&&prevState.clickCount===0)return;
      return {clickCount: count===0?0:prevState.clickCount+count}
    });
  }

  render() {
    return (
      <div className="App">
        <span className="App-intro">
          {this.state.clickCount}
        </span>
        <Button  handleCount={this.handleCount}/>
      </div>
    );
  }
}

export default App;
