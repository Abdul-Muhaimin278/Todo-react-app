import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const rootReducers = combineReducers({
	todo: TodoReducer,
});

export default rootReducers;
