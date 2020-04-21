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

export const checkout = () => ({
  type: CHECKOUT,
});

export const fetchOrders = () => {
  return async (dispatch) => {
    const res = await instance.get("orders/");
    const orders = res.data;
    dispatch({ type: FETCH_ORDERS, payload: orders });
  };
};
