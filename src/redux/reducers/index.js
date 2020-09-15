import { combineReducers } from "redux";
import post from "./postReducer";
import loading from "./uiReducer";
import user from "./userReducer";
import register from "./registerReducer";
import login from "./loginReducer";
import message from "./messageReducer"

const rootReducer = combineReducers({
  post,
  loading,
  user,
  register,
  login,
  message
});

export default rootReducer;
