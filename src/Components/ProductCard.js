import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import "bootstrap/dist/css/bootstrap.min.css";
//Actions
import { addItemToCart } from "../store/actions";
class ProductCard extends Component {
  state = {
    item: this.props.item.id,
    quantity: 1,
  };

  handleAddItem = () => {
    const NewItem = {
      ...this.state,
    };
    this.props.addItemToCart(NewItem);
  };

  componentDidMount() {
    const item = this.props.item;
    if (item) {
      this.setState({ name: item.name, price: item.price, image: item.image });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.items !== this.props.items) {
      const item = this.props.item;
      if (item) {
        this.setState({
          name: item.name,
          price: item.price,
          image: item.image,
        });
      }
    }
  }

  render() {
    const item = this.props.item;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div
          style={{ backgroundColor: "black", color: "white" }}
          className="card  w-50 border-0 mt-5 mx-3"
        >
          <div className="image">
            <Link to={`/detail/${item.id}`}>
              <img
                className="card-img-top img-fluid"
                src={item.image}
                alt="bread"
              />
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <h6>{item.name}</h6>
              <h6>{item.price} JD</h6>
            </h5>
            <button className="btn btn-warning" onClick={this.handleAddItem}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.bakery.items,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (NewItem) => dispatch(addItemToCart(NewItem)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
