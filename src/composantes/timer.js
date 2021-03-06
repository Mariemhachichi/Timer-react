import React, {Component} from 'react'
import Time from './time';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
    }
    render() {
        return <Time numb={this.state.timeMs}/>
    }
}

export default Timer