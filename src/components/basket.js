import React from "react";


class Baskets extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pizza1:this.props.test.pizza1,
            pizza2:this.props.test.pizza2,
            pizza3:this.props.test.pizza3
        }
    }
    
    
    
    render(){
        
        
        
        return (
            <div>
                <h1>Basket</h1>
                <ul>
                    <li>Pizza1: {this.state.pizza1}</li>
                    <li>Pizza2: {this.state.pizza2}</li>
                    <li>Pizza3: {this.state.pizza3}</li>
                </ul>
       
            </div>
        );
    }
}

export default Baskets;