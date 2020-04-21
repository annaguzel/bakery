import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../store/actions";

const CartItem = (props) => (
  <div
    style={{ backgroundColor: "black", color: "white" }}
    className="card w-25 text-center"
  >
    <h3 style={{ color: "white" }}>{props.item.name}</h3>
    <img
      className="card-img-top img-fluid"
      src={props.item.image}
      alt="bread"
    />
    <h3 style={{ color: "white" }}>Price: {props.item.price} JD</h3>

    <h3 style={{ color: "white" }}>Quantity: {props.item.quantity}</h3>

    <button
      className="mb-5 btn btn-warning"
      onClick={() => props.removeItemFromCart(props.item)}
    >
      Delete
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
