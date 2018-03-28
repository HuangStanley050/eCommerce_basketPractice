import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import About from "./components/about.js";
import Products from "./components/products.js";
import Baskets from "./components/basket.js";

//<Route path="/basket" final={final_order}  render={() => (<Baskets   />)} {...this.props} />

//<Route exact path={"/"} component={() => <Start socket={socket} addUser={addUser}/>}/>

//const Index = props => (
//  <h1>{props.something}</h1>
//)

//<Route path="/" render={() => <Index something={'here'} />} /> ---->right way to pass props

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
        this.getFinalOrder=this.getFinalOrder.bind(this);
    }
    getFinalOrder(pizza1,pizza2,pizza3){
        //alert("pizza1-->"+pizza1);
         //alert("pizza2-->"+pizza2);
          //alert("pizza3-->"+pizza3);
        this.setState({pizza1:pizza1});
        this.setState({pizza2:pizza2});
        this.setState({pizza3:pizza3});
    }
    render(){
        var final_order;
        if(this.state.length!==0){
            final_order=this.state;
        }
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
                        <Route path="/basket"   render={()=><Baskets test={final_order} />}/>
                    </div>
               </div>
            </HashRouter>);
    }
}

export default App;