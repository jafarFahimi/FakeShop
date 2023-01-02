import { ActionTypes } from "../constants/action_types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
    // payload means max burden, useful burden
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
