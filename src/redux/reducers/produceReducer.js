import { ActionTypes } from "../constants/action_types";
const initState = [
  {
    id: 1,
    title: "Jafar",
    catagory: "Devloper",
  },
];

const produceReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRDOUCTS:
      return state;
    default:
      return state;
  }
};
export default produceReducer;
