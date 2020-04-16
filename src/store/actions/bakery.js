import {SET_CATEGORIES,SET_PRODUCTS,GET_DETAILS} from "./actionTypes";
  
  import instance from "./instance";
  
  export const fetchCategories = () => async dispatch => {
    try {
      const res = await instance.get("");
      const categories = res.data;
      dispatch({
        type: SET_CATEGORIES,
        payload: categories
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  export const fetchProducts = (categoryID) => async dispatch => {
    try {
      const res = await instance.get(
        `/products/${categoryID}/`
      );
      const products = res.data;
      dispatch({
        type: SET_PRODUCTS,
        payload: products
      });
    } catch (error) {
      console.error(error);
    }
  };

  export const fetchDetails = (productID) => async dispatch => {
    try {
      const res = await instance.get(
        `/product/detail/${productID}/`
      );
      const details = res.data;
      dispatch({
        type: GET_DETAILS,
        payload: details
      });
    } catch (error) {
      console.error(error);
    }
  };
  