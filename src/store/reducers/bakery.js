import {
  SET_CATEGORIES,
  SET_PRODUCTS,
  GET_PRODUCTS,
} from "../actions/actionTypes";

const initialState = {
  categories: [],
  products: [],
  items: [],
};

const bakeryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default bakeryReducer;
