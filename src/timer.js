import React, {Component} from 'react'
import Time from './time'


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        this.start = this.start.bind(this)
        this.pause = this.pause.bind(this)
        this.reset = this.pause.bind(this)
    }
    start () {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    pause () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    reset () {
        clearInterval(this.state.interval)
        this.setState(0)
    }
    render() {
        return <div>
            <Time ms={this.state.timeMs} />
            <input
                type="button"
                value="Start"
                onClick={this.start} />
            <input
                type="button"
                value="Pause"
                onClick={this.pause} />
             <input
                type="button"
                value="reset"
                onClick={this.reset} />
        </div>
    }
}

export default Timer