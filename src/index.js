import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./components/Navb";
import Footer from "react-footer-comp"

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Main from "./pages/Main"
import { useState } from "react";
import "./index.css";
import data from "./pages/data";


function App(){
  const { products } =data;
  const [cartItems,setCartItems]=useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, 
      qty: exist.qty +1} : x
      )
      );
    }else{
      setCartItems([...cartItems,{...product, qty: 1 }]);
    }
  };
  const onRemove = ( product ) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter(x => x.id !== product.id));
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, 
        qty: exist.qty -1} : x
        )
      );
    }
  }
    return(
      <div>
    <Navb count={cartItems.length} />
    
    <div className="container">
      <Route exact={true} path="/"><Home /></Route>
      <Route exact path="/main"> <Main onAdd={onAdd} products={products}  /></Route>
      <Route exact path="/cart" ><Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} /></Route>
      
    </div>
    <div id="footer">
    <Footer
      copyrightIcon
      years={[2021]}
      height={30}
      bgColor={"#a09bab"}
      copyrightText
      copyrightIconStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      copyrightTextStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
      textStyle={{ color: "yellow", fontSize: 16, marginRight: 10 }}
      text={"All rights reserved."}
    />
    </div>
  </div>
);
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
