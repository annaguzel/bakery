import { ADD, DELETE, CHECKOUT, FETCH_ORDERS } from "./actionTypes";
import instance from "./instance";

export const addItemToCart = (item) => ({
  type: ADD,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: DELETE,
  payload: item,
});

export const checkout = (items) => {
  return async (dispatch) => {
    try {
      let response = await instance.post("order/create", items);
      dispatch({
        type: CHECKOUT,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchOrders = () => {
  return async (dispatch) => {
    const res = await instance.get("orders/");
    const orders = res.data;
    dispatch({ type: FETCH_ORDERS, payload: orders });
  };
};
