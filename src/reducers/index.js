import { combineReducers } from "redux";
import { register } from "./registerReducer";
import { login } from "./loginReducer";
import { token } from "./tokenReducer";

export default combineReducers({ register, login, token });
