import * as types from "../../types/logintypes";
export const login = (email, password) => {
  return { type: types.LOGIN_REQUEST, email: email, password: password };
};
export const register = (name, email, password) => {
  return {
    type: types.REGISTER_REQUEST,
    name: name,
    email: email,
    password: password,
  };
};
