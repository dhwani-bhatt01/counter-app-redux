import { Counter } from "./counter";
import { isLogged } from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: Counter,
  isLogged: isLogged,
});

export default allReducers;
