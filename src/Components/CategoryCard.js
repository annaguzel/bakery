import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link
        to={`/categories/${category.id}`}
        style={{ backgroundColor: "black", color: "white" }}
        className="card w-50 border-0 mb-3 mx-3"
      >
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={category.image}
            alt="bread"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{category.title}</span>
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
