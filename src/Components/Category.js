import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions";
import ProductCard from "./ProductCard";
// Components

class Category extends Component {
  componentDidMount() {
    const categoryID = this.props.match.params.categoryID;
    this.props.fetchProducts(categoryID);
  }

  componentDidUpdate(prevProps) {
    const categoryID = this.props.match.params.categoryID;
    if (categoryID !== prevProps.match.params.categoryID) {
      this.props.fetchProducts(categoryID);
    }
  }

  render() {
    const productCards = this.props.products.map((product) => (
      <ProductCard key={product.name + product.id} product={product} />
    ));
    return (
      <div>
        <div className="row mx-4">{productCards}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.bakery.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (categoryID) => dispatch(fetchProducts(categoryID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
