import React from 'react';


class Inpt extends React.Component {
    constructor(props) {
      super(props);
      this.state = {number: '' };
    }
    myChangeHandler = (event) => {
      this.setState({number: event.target.value});
    }
    render() {
      return (
        <form>
        <h1> {this.state.number}</h1>
        <p>Enter your number:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
export default Inpt