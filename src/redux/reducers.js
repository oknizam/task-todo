import { combineReducers } from "redux";
import taskSlice from "./slice";
const rootReducer = combineReducers({
  tasks: taskSlice,
});

export default rootReducer;
