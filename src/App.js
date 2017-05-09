import React, { Component } from 'react';
import {Header} from './Components/Header';
import './App.css';

class App extends Component {
  state={
    clickCount: 0,
  }
  incrementCount = (count) => {
    this.setState({
      clickCount:this.state.clickCount+=count,
    })
  }

  resetCount = () => {
    this.setState({
      clickCount:0
    })
  }
  render() {
    return (
      <div className="App">
        <span className="App-intro">
          {this.state.clickCount}
        </span>
        <section className="buttons">
        <button onClick={this.incrementCount.bind(this, 1)}>+</button>
        <button onClick={this.resetCount}>Reset</button>
        <button onClick={this.incrementCount.bind(this, -1)}>-</button>
        </section>
      </div>
    );
  }
}

export default App;
