import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import CategoryLink from "./CategoryLink"


  class Navbar extends Component {

    

  render() {

    const categoryLinks = this.props.categories.map(category => (
        <CategoryLink key={category.title} category={category} />
      ));
    return (
      <nav className="navbar navbar-inverse bg-primary navbar-expand-sm navbar-dark px-sm-5">
        
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to = {"/"} className="navbar-brand">AYO-Bakery</Link>
          </div>
          <ul className="nav navbar-nav">
            
     
                {categoryLinks}
            
           
            
          </ul>
          <ul className="nav navbar-nav navbar-right">
          <li className="nav-item ml-5">
            <Link to={"/cart"} style={{color:"white"}}className="ml-auto"><span className="badge pull-right">Cart</span>
            </Link>
          </li>            
          </ul>
        </div>
      </nav>
    )
  }
}


const mapStateToProps = state => {
    return {
      categories: state.bakery.categories
    };
  };
  
  export default connect(mapStateToProps)(Navbar);