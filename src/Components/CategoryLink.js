import React from "react";
import { NavLink } from "react-router-dom";

const CategoryLink = ({ category }) => (
  <li
    className="nav-item"
    title={category.title}
  >
    <NavLink
      className="nav-link"
      to={`/categories/${category.id}`}
    >

      <span className="nav-link-text"> {category.title}</span>
      
    </NavLink>
  </li>
);

export default CategoryLink;