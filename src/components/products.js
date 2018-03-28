import React from "react";
import "./products.css";



let pizza1="https://images.unsplash.com/photo-1440637475816-2e8bf1d4b6f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19ebc9a65dfacb09b8eead5e89c83994&auto=format&fit=crop&w=500&q=60";
let pizza2="https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b41faf4660b95645f8be4faba2ca1a7d&auto=format&fit=crop&w=500&q=60";
let pizza3="https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f23e22ac67f9dd47c1471491abfdda84&auto=format&fit=crop&w=500&q=60";
let pizza1_counter=0;
let pizza2_counter=0;
let pizza3_counter=0;
let condition;

//condition ? value_if_true : value_if_false

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pizza1:0,
            pizza2:0,
            pizza3:0
        }
        this.add_pizza=this.add_pizza.bind(this);
        this.minus_pizza=this.minus_pizza.bind(this);
        this.handleOrder=this.handleOrder.bind(this);
    }
    
    add_pizza(event){
        //alert("you added a "+event.target.value);
        
        if(event.target.value==="pizza1"){
            pizza1_counter++;
            this.setState({pizza1:pizza1_counter});
        }
        if(event.target.value==="pizza2"){
            pizza2_counter++;
            this.setState({pizza2:pizza2_counter});
        }
        if(event.target.value==="pizza3"){
            pizza3_counter++;
            this.setState({pizza3:pizza3_counter});
        }
        /*console.log("pizza1---"+pizza1_counter);
        console.log("pizza2---"+pizza2_counter);
        console.log("pizza3---"+pizza3_counter);*/
        
    }
    minus_pizza(event){
        //alert("you minus a "+event.target.value);
        if(event.target.value==="pizza1"){
            pizza1_counter--;
            this.setState({pizza1:pizza1_counter});
        }
        if(event.target.value==="pizza2"){
            pizza2_counter--;
            this.setState({pizza2:pizza2_counter});
        }
        if(event.target.value==="pizza3"){
            pizza3_counter--;
            this.setState({pizza3:pizza3_counter});
        }
    }
    
    handleOrder(){
        
        this.props.order(this.state.pizza1,this.state.pizza2,this.state.pizza3);
        this.setState({pizza1:0,pizza2:0,pizza3:0});
        pizza1_counter=0;
        pizza2_counter=0;
        pizza3_counter=0;
    }
    render(){
        
        return (
            <div className="ProductWrapper">
                <div className="card">
                    <img alt="pizza1"src={pizza1} style={{width:'100%'}}/>
                    <div style={{padding:10}}>
                        <h3 style={{textAlign:"center"}}>Pizza1</h3>
                        <span>$15</span>
                        <button value="pizza1"onClick={this.add_pizza}style={{marginLeft:5}}>+</button>
                        <button disabled={this.state.pizza1===0 ? condition=true: condition=false} value="pizza1"onClick={this.minus_pizza}style={{marginLeft:5}}>-</button>
                        <span>number of pizzas:{pizza1_counter}</span>
                    </div>
                </div>
                <div className="card">
                    <img alt="pizza2"src={pizza2} style={{width:'100%'}}/>
                    <div style={{padding:10}}>
                        <h3 style={{textAlign:"center"}}>Pizza2</h3>
                        <span>$12</span>
                        
                        <button value="pizza2"onClick={this.add_pizza}style={{marginLeft:5}}>+</button>
                       
                        <button disabled={this.state.pizza2===0 ? condition=true: condition=false} value="pizza2"onClick={this.minus_pizza}style={{marginLeft:5}}>-</button>
                        <span>number of pizzas:{pizza2_counter}</span>
                        
                    </div>
                </div>
                <div className="card">
                    <img alt="pizza3"src={pizza3} style={{width:'100%'}}/>
                    <div style={{padding:10}}>
                        <h3 style={{textAlign:"center"}}>Pizza3</h3>
                        <span>$9</span>
                        <button value="pizza3"onClick={this.add_pizza}style={{marginLeft:5}}>+</button>
                        <button disabled={this.state.pizza3===0 ? condition=true: condition=false} value="pizza3"onClick={this.minus_pizza}style={{marginLeft:5}}>-</button>
                        <span>number of pizzas:{pizza3_counter}</span>
                    </div>
                </div>
                <button onClick={this.handleOrder}style={{height:30, marginTop:30}}>Order</button>
            </div>
            );
    }
}

export default Products;