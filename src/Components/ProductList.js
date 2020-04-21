import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../store/actions";
import ProductCard from "./ProductCard";
// Components

class ProductList extends Component {
  componentDidMount() {
    // const categoryID = this.props.match.params.categoryID;
    //
    this.props.fetchAllProducts();
  }

  // componentDidUpdate(prevProps) {
  //   const categoryID = this.props.match.params.categoryID;
  //   if (categoryID !== prevProps.match.params.categoryID) {
  //     this.props.fetchProducts(categoryID);
  //   }
  // }

  render() {
    const productCards = this.props.items.map((item) => (
      <ProductCard key={item.name + item.id} item={item} />
    ));
    return (
      <div className="text-center">
        <div className="row ml-5">{productCards}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.bakery.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
