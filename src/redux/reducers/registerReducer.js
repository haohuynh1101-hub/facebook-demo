import * as types from "../../types/logintypes";
import initialState from "./../initialState/initialState";
export default function register(state = initialState.register, action) {
  switch (action.type) {
    case types.REGISTER_SUCCESS: {
      return { state, status: "success" };
    }
    case types.REGISTER_ERROR: {
      return { state, status: "error" };
    }

    default:
      return state;
  }
}
