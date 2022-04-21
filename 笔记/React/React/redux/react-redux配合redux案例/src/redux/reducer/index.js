import { combineReducers } from "redux";
import count from "./count";
import title from "./title";

export default combineReducers({
  number: count,
  theTitle: title,
});
