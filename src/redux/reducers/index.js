import { combineReducers } from "redux";
import authReducer from "./authReducer";
import TextSlice from "../slices/TextSlice";

//import all reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  TextSlice: TextSlice,
});
