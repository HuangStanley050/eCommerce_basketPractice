import React from "react";


class Baskets extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillReceiveProps(nextProps){
        alert(nextProps.test);
    }
    
    
    render(){
        
        return (
            <div>
                <h1>Basket</h1>
                <ul>
                    <li>Pizza1: </li>
                    <li>Pizza2: </li>
                    <li>Pizza3: </li>
                </ul>
       
            </div>
        );
    }
}

export default Baskets;