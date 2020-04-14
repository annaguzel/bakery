import React from "react";
import { NavLink } from "react-router-dom";
import {Nav} from 'react-bootstrap';

const CategoryLink = ({ category }) => (
  <Nav.Link>
    <NavLink
      className="nav-link"
      to={`/categories/${category.id}`}
    >

  {category.title}
      
    </NavLink>
  </Nav.Link>
  // </li>
);

export default CategoryLink;