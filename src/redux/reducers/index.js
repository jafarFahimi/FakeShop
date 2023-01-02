// in here we combine all reducers into one reducer;
import { produceReducer, selectedProduceReducer } from "./produceReducer";
import { combineReducers } from "redux"; // notice combineReducer is false.
export const reducers = combineReducers({
  allProducts: produceReducer,
  product: selectedProduceReducer,
});
