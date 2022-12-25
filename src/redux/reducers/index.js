// in here we combine all reducers into one reducer;
import productReducer from "./productReducer";
import { combineReducers } from "redux"; // notice combineReducer is false.
export const reducers = combineReducers({
  allReducers: productReducer,
});
