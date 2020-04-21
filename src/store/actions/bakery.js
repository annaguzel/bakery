import { SET_CATEGORIES, SET_PRODUCTS, GET_PRODUCTS } from "./actionTypes";

import instance from "./instance";

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await instance.get("/categories/");
    const categories = res.data;
    dispatch({
      type: SET_CATEGORIES,
      payload: categories,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchProducts = (categoryID) => async (dispatch) => {
  try {
    const res = await instance.get(`/categories/${categoryID}/`);
    const products = res.data;
    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const res = await instance.get(`products/`);
    const items = res.data;
    dispatch({
      type: GET_PRODUCTS,
      payload: items,
    });
  } catch (error) {
    console.error(error);
  }
};
