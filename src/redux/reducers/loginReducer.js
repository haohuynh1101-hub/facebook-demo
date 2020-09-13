import * as types from "../../types/logintypes";
import initialState from "./../initialState/initialState";
export default function login(state = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const token = action.data.token;
      return {
        // ...state,
        status: "success",
        userInfor: action.data,
        token: token,
        loggedIn: true,
      };
    }
    case types.LOGIN_ERROR: {
      const error = action.error;
      return {
        // ...state,
        error,
        status: "Email or password is valid",
        loggedIn: false,
      };
    }

    default:
      return state;
  }
}
