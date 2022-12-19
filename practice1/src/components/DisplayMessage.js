import React,{Component} from "react";

class DisplayMessage extends React.Component{
    constructor(props){
        super(props);
        console.log("In constructor function of display");
        this.state={
            displayFlag:false
        }
    }

    changeflag=()=>{
        this.setState({displayFlag:!this.state.displayFlag})
    }

    render(){
        console.log("in render function of DisplayMessage");
        return (<div>
            {this.state.displayFlag?(<div>
                    <p>This is para</p>
                    <button type="button" name="btn" id="btn" onClick={this.changeflag}>hide</button>
            </div>):
            (<div>
               <button type="button" name="btn" id="btn" onClick={this.changeflag}>show</button>
            </div>)}
       </div>)
    }
}

export default DisplayMessage;