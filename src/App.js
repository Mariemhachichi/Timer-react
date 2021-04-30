import React from 'react';
import './App.css'
import Timer from './composantes/timer';
import Btn from './btn';

class App extends React.Component {

    render() {
      return (
        <div className="cover">
          <div className="flex">
          <h1>Timer</h1>
          <Timer />
          <Btn />
          </div>
           
      </div>
      );
    }
  }

export default App;

