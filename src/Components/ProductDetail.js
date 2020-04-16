import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchDetails} from "../store/actions"

class ProductDetail extends Component {
 
    componentDidMount() {
       const productID=this.props.match.params.productID;
       this.props.fetchDetails(productID);
   
    }
   
     
         render() {
           
            return (
                <div className="col-lg-4 col-md-6 col-12">
                    <div style={{backgroundColor:"black",color:"white"}} className="card  w-50 border-0 mt-5 mx-3">
                    <div className="image">
                    
                      <img
                        className="card-img-top img-fluid"
                        src={this.props.details.image}
                        alt="bread"
                      />
               
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <h6>{this.props.details.name}</h6>
                        <h6>{this.props.details.description}</h6>
                        <h6>{this.props.details.price}</h6>
                      </h5>
                      
                    </div>
                </div>
                </div>
              );
            };
         }
   
   
   
       
   
       
   const mapStateToProps = state => {
     return {
       details: state.bakery.details
     };
   };
   const mapDispatchToProps = dispatch => {
       return {
         fetchDetails: (productID) =>
           dispatch(fetchDetails(productID))
       };
     };
   
   export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
