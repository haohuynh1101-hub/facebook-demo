import * as types from "../../types/Actiontypes";
import initialState from "./../initialState/initialState";
export default function user(state = initialState.user, action) {
  let newState;
  switch (action.type) {
    case types.LIST_USER_SUCCESS: {
      // newState = { listUser: [...state.listUser, ...action.data] };
      newState = { listUser: [...action.data] };

      return newState;
    }
    case types.LIST_USER_ERROR: {
      return { ...state, status: "user-error" };
    }
    default: {
      return state;
    }
  }
}
