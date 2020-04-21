import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CategoryLink from "./CategoryLink";
import { Navbar, Nav } from "react-bootstrap";
import AuthButton from "./AuthButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    const categoryLinks = this.props.categories.map((category) => (
      <CategoryLink key={category.title} category={category} />
    ));
    return (
      <header>
        <Navbar
          style={{ backgroundColor: "black", color: "white" }}
          expand="lg"
          variant="dark"
        >
          <Navbar.Brand>
            <Link
              style={{ color: "#ffc107" }}
              to={"/"}
              className="navbar-brand"
            >
              Wake&Bake
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">{categoryLinks}</Nav>
          </Navbar.Collapse>
          <AuthButton />
          <Link to="/cart" className="btn btn-link my-2 my-sm-0">
            <div style={{ color: "#ffc107" }}>{this.props.counter}</div>
            <FontAwesomeIcon style={{ color: "#ffc107" }} icon={faCartPlus} />
          </Link>
        </Navbar>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.bakery.categories,
    counter: state.cart.counter,
  };
};

export default connect(mapStateToProps)(NavBar);
