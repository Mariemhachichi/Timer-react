import React from 'react'
import {InputGroup,FormControl } from "react-bootstrap";

class Time extends React.Component{
    
    constructor(){
        super()
    this.state = {
        numb : '',
    }
}

handlechange(event){
    let val = event.target.value
    this.setState({numb:val})

}

    render(){ 
        return(
            <div>   
                <div className="flexi1">
                <h3>Enter a number</h3>
            <InputGroup  onChange={this.handlechange.bind(this)} value={this.state.numb}   required>
            <FormControl />
            </InputGroup>
            </div>
        
         <div className="flexi">
             <h4>Hours : {Math.floor (this.state.numb/3600)} </h4>
             <h4>Minutes :{Math.floor (this.state.numb/60)} </h4>
             <h4>Seconds :{this.state.numb}</h4>
         </div>
         </div>
           )
    }
}


export default Time