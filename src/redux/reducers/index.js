// in here we combine all reducers into one reducer;
import productReducer from "./productReducer";
import { combineReducer } from "redux";
export const reducers = combineReducer({
  allReducers: productReducer,
});
