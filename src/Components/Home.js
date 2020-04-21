import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// Components
import CategoryCard from "./CategoryCard";

import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    const categoryCards = this.props.categories.map((category) => (
      <CategoryCard key={category.title} category={category} />
    ));

    return (
      <div className="text-center">
        <Jumbotron style={{ color: "white" }}>
          <br />
          <br />
          <h1>Welcome to Wake&Bake</h1>
          <br />
          <br />
          <br />
        </Jumbotron>
        <h3 style={{ color: "white" }}>Categories:</h3>
        <div className="row ml-5 mt-5">{categoryCards}</div>
        <button className=" mx-auto btn btn-warning">
          <Link style={{ color: "black" }} to="/products/" className="my-2">
            All Products
          </Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.bakery.categories,
  };
};
export default connect(mapStateToProps)(Home);
