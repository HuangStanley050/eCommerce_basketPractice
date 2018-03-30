import React from "react";


var total_price=0;
var pizza_1=15;
var pizza_2=12;
var pizza_3=9;
class Baskets extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pizza1:this.props.test.pizza1,
            pizza2:this.props.test.pizza2,
            pizza3:this.props.test.pizza3
        }
        this.handlePlus=this.handlePlus.bind(this);
        this.handleMinus=this.handleMinus.bind(this);
        this.find_price=this.find_price.bind(this);
    }
    handlePlus(event){
        var p1=this.state.pizza1;
        var p2=this.state.pizza2;
        var p3=this.state.pizza3;
        if(event.target.value==="pizza1"){
            p1++;
            this.setState({pizza1:p1});
        }
        if(event.target.value==="pizza2"){
            p2++;
            this.setState({pizza2:p2});
        }
        if(event.target.value==="pizza3"){
            p3++;
            this.setState({pizza3:p3});
        }
    }
    handleMinus(event){
        var p1=this.state.pizza1;
        var p2=this.state.pizza2;
        var p3=this.state.pizza3;
        if(event.target.value==="pizza1"){
            p1--;
            this.setState({pizza1:p1});
        }
        if(event.target.value==="pizza2"){
            p2--;
            this.setState({pizza2:p2});
        }
        if(event.target.value==="pizza3"){
            p3--;
            this.setState({pizza3:p3});
        }
        
    }
    find_price(){
        var p1=this.state.pizza1;
        var p2=this.state.pizza2;
        var p3=this.state.pizza3;
        
        let pizza1=p1*pizza_1;
        let pizza2=p2*pizza_2;
        let pizza3=p3*pizza_3;
        const total=pizza1+pizza2+pizza3;
        alert(total);
    }
    
    
    
    render(){
        
        
        
        return (
            <div>
                <h1>Basket</h1>
                <ul>
                    <li>Pizza1: {this.state.pizza1}<button onClick={this.handlePlus}  style={{marginLeft:"6px"}} value="pizza1">+</button><button onClick={this.handleMinus} value="pizza1">-</button></li>
                    <li>Pizza2: {this.state.pizza2}<button onClick={this.handlePlus} style={{marginLeft:"6px"}} value="pizza2">+</button><button onClick={this.handleMinus} value="pizza2">-</button></li>
                    <li>Pizza3: {this.state.pizza3}<button onClick={this.handlePlus} style={{marginLeft:"6px"}} value="pizza3">+</button><button onClick={this.handleMinus} value="pizza3">-</button></li>
                </ul>
                <button onClick={this.find_price}>Calculate Payment</button>
       
            </div>
        );
    }
}

export default Baskets;