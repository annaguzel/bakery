import { SET_CATEGORIES,SET_PRODUCTS} from "../actions/actionTypes";

const initialState = {
  categories: [],
  products: [],
};

const bakeryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload
        };
    default:
      return state;
  }
};

export default bakeryReducer;