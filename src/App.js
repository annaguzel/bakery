import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Category from "./Components/Category";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import RegistrationForm from "./Components/RegistrationForm";
import ProductDetail from "./Components/ProductDetail";

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <Navbar />
        <Switch>
          <Route path="/categories/:categoryID" component={Category} />
          <Route path="/detail/:productID" component={ProductDetail} />
          <Route path="/(login|signup)" component={RegistrationForm} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
