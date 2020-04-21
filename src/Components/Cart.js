import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// Components
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { checkout } from "../store/actions";

class Cart extends Component {
  Total = () => {
    const total = this.props.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    if (total) {
      return parseFloat(total).toFixed(2);
    }
    return 0;
  };

  render() {
    let items = this.props.cart;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }
    return (
      <div className="shopcart">
        {cartItems.length ? (
          <div>
            <h5 id="title">Shopping Cart</h5>
            <div className="column ml-3">{cartItems}</div>
            <br></br>
            <h3 className="ml-3" style={{ color: "white" }}>
              Total Price: {this.Total()} JD
            </h3>
            <h3 className="ml-3" style={{ color: "white" }}>
              Total Number of Items:{this.props.counter}
            </h3>
            <button
              className="ml-3 mb-5 btn btn-warning"
              onClick={() => this.props.checkout()}
            >
              CHECKOUT
            </button>
            <br />
            <button className=" ml-3 mb-5 btn btn-warning">
              <Link to="/" className="my-2">
                Add More Items
              </Link>
            </button>
          </div>
        ) : (
          <div>
            <h1 className="" style={{ color: "white" }}>
              THANK YOU
            </h1>
            <br></br>
            <Link to="/" className="list btn-link back" type="button">
              Click here to go back to products list
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    counter: state.cart.counter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  checkout: () => dispatch(checkout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
