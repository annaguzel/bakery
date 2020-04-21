import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Category from "./Components/Category";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import ProductDetail from "./Components/ProductDetail";

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <Navbar />
        <Switch>
          <Route path="/categories/:categoryID" component={Category} />
          <Route path="/products/" component={ProductList} />

          <Route path="/detail/:itemID" component={ProductDetail} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
