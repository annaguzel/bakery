import React from "react";


const ProductCard = ({ product}) => {

  
  return (
    <div className="col-lg-4 col-md-6 col-12">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={"https://ayo-bakery.herokuapp.com"+ product.image}
            alt="bread"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <h6>{product.name}</h6>
            <h6>{product.description}</h6>
            <h6>{product.price}</h6>
          </h5>
          
        </div>
    </div>
  );
};

export default ProductCard;