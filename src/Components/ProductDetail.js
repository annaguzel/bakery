import React from "react";
import { connect } from "react-redux";

const ProductDetail = ({ items, match }) => {
  // eslint-disable-next-line no-lone-blocks
  {
    const item = items.find((item) => item.id === +match.params.itemID);

    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div
          style={{ backgroundColor: "black", color: "white" }}
          className="card  w-50 border-0 mt-5 mx-3"
        >
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={item.image}
              alt="bread"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <h6>{item.name}</h6>
              <h6>{item.description}</h6>
              <h6>{item.price}</h6>
            </h5>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.bakery.items,
  };
};
export default connect(mapStateToProps)(ProductDetail);
