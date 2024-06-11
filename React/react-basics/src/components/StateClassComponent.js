import React from "react";

class StateClassComponent extends React.Component{

    constructor(){
        super();
        this.state = { name : "Sathyaraj",role : "Developer"}
    }

    render(){
        return <>
        <h1>I am a {this.state.name} and i am working as a {this.state.role}</h1>
        <button onClick={() => { this.setState((previousState) => {return {...previousState,role:"Tester"} }) }}>Change job</button></>
    } 
}

export default StateClassComponent;