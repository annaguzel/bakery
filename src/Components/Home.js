import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import CategoryCard from "./CategoryCard";

class Home extends Component {




  render() {
    const categoryCards = this.props.categories.map(category => (
      <CategoryCard key={category.title} category={category} />
    ));

    return (
      <div className="text-center mt-5">
        <h3>Categories</h3>
        <div className="row mx-4 mt-5">{categoryCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.bakery.categories
  };
};
export default connect(mapStateToProps)(Home);