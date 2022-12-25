import { ActionTypes } from "../constants/action_types";
const initState = [
  {
    id: 1,
    title: "Jafar",
    catagory: "Devloper",
  },
];

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRDOUCTS:
      return state;
    default:
      return state;
  }
};
export default productReducer;
