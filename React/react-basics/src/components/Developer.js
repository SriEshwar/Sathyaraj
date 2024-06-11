import React from "react";

class Developer extends React.Component {
    render(){
        const {info} = this.props;
        const {tools,role} = info;
        return (
            <h2>Before that i am a {tools} {role}</h2>
        )
    }
}

export default Developer;