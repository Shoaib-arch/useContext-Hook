import React from "react";

export default class State_class extends React.Component() {
            constructor(props){
                super(props);
                this.state={
                    counter:0,

                }
            }
        updateCounter=()=>{
            this.setState({counter:this.state.counter++});

        }

    render() {
        return (<div>
                <span>{this.state.counter}</span>
                <button onClick={this.updateCounter}>Click to Update!</button>
            </div>)
    }
}