import { ActionTypes } from "../constants/action_types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRDOUCTS,
    payload: products,
    // payload means max burden, useful burden
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
