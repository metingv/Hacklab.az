import { combineReducers } from "redux";
import RootReducer1 from "./RootReducer1";
import RootReducer2 from "./RootReducer2";
import RootReducer3 from "./RootReducer3";
import RootReducer4 from "./RootReducer4";

const RootReducer = combineReducers({
  RootReducer1: RootReducer1,
  RootReducer2: RootReducer2,
  RootReducer3: RootReducer3,
  RootReducer4: RootReducer4
});

export default RootReducer;

// umumi root burdadi
