import { ActionTypes } from "../constants/action_types";
const initState = [];

const produceReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, prodcuts: payload };
    default:
      return state;
  }
};
export default produceReducer;
