import { ADD, DELETE, CHECKOUT, FETCH_ORDERS } from "../actions/actionTypes";

const initialState = {
  cart: [],
  counter: 0,
  orders: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      const itemID = action.payload;
      let counter2 = state.counter - action.payload.quantity;
      return {
        ...state,
        cart: state.cart.filter((item) => item !== itemID),
        counter: counter2,
      };
    case ADD:
      let newItem = action.payload;
      let foundItem = state.cart.find((item) => item.name === newItem.name);
      let counter1 = state.counter + 1;
      if (foundItem) {
        foundItem.quantity++;
        return {
          ...state,
          cart: [...state.cart],
          counter: counter1,
        };
      }
      return {
        ...state,
        cart: [newItem].concat(state.cart),
        counter: counter1,
      };

    case CHECKOUT:
      return {
        ...state,
        cart: [],
        counter: 0,
      };

    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
