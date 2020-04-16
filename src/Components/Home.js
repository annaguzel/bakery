import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import CategoryCard from "./CategoryCard";
import { Jumbotron } from "react-bootstrap";

/**
 * convert to function
 */
class Home extends Component {
  render() {
    const categoryCards = this.props.categories.map((category) => (
      <CategoryCard key={category.title} category={category} />
    ));

    return (
      <div className="text-center">
        <Jumbotron style={{ color: "white" }}>
          {/* There are better ways to center things in css */}
          <br />
          <br />
          <h1>Welcome to Wake&Bake</h1>
          <br />
          <br />
          <br />
        </Jumbotron>
        <h3 style={{ color: "white" }}>Categories</h3>
        <div className="row ml-5 mt-5">{categoryCards}</div>
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
