import React, {Component} from "react"

export default class ClassState extends Component{
        constructor(props){
            super(props)
            this.state={
                counter:0,
                
            }
        }

        componentDidMount(){
               console.log("Mount!")
        }
        componentDidUpdate(){
            console.log("Increament!")
        }
        Increament=()=>{ 
            this.setState({
                counter:this.state.counter+1
            })
        }
        render(){
            return (
                <>
                <div>{this.state.counter}</div>
                <button onClick={this.Increament}>Increment</button>
                </>
                )
            }
        
}