import React from 'react';
import Time from './time'
import Inpt from './input'
import Timer from './timer'
import './App.css'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {ms: 0};
    }
    render() {
      return (
        <div>
        <h1>Time input</h1>
        <Inpt />
        <Time
          ms={this.state.ms}
          onChange={ms => this.setState({ms})}
        />
        <p>Seconds: <strong>{this.state.ms}</strong></p>
        <Timer />
      </div>
      );
    }
  }

export default App;

