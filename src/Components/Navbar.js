import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import CategoryLink from "./CategoryLink"
import { Navbar, Nav} from 'react-bootstrap';
import AuthButton from './AuthButton';


  class NavBar extends Component {

    

  render() {

    const categoryLinks = this.props.categories.map(category => (
        <CategoryLink key={category.title} category={category} />
      ));
    return (

      <header>
      <Navbar style={{backgroundColor:"black",color:"white"}} expand="lg" variant="dark">
        <Navbar.Brand ><Link to = {"/"} className="navbar-brand">Wake&Bake</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {categoryLinks}

            </Nav>
        </Navbar.Collapse>
        <AuthButton />
      </Navbar>
    </header>
    )
  }
}


const mapStateToProps = state => {
    return {
      categories: state.bakery.categories
    };
  };
  
  export default connect(mapStateToProps)(NavBar);



