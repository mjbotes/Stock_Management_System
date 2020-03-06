import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import Products from "./Products";

export default combineReducers({
	Products,
	auth,
	alert
});
