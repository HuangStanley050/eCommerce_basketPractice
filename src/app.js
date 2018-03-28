import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import About from "./components/about.js";
import Products from "./components/products.js";
import Baskets from "./components/basket.js";

//<Route exact path={"/"} component={() => <Start socket={socket} addUser={addUser}/>}/>
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pizza1:0,
            pizza2:0,
            pizza3:0
        }
        this.getFinalOrder=this.getFinalOrder.bind(this);
    }
    getFinalOrder(pizza1,pizza2,pizza3){
        alert("pizza1-->"+pizza1);
         alert("pizza2-->"+pizza2);
          alert("pizza3-->"+pizza3);
    }
    render(){
        return (
            <HashRouter>
                <div>
                    <h1>Shopping Cart Practice</h1>
                    <ul>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/basket">Basket</NavLink></li>
                    </ul>
                    <div className="routing_region">
                        
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/products"  component={() => <Products order={this.getFinalOrder}/>}/>
                        <Route exact path="/basket" component={Baskets}/>
                    </div>
               </div>
            </HashRouter>);
    }
}

export default App;