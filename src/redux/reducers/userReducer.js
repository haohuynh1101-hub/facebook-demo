import * as types from "../../types/Actiontypes";
import initialState from "./../initialState/initialState";
export default function user(state = initialState.user, action) {
  let newState;
  switch (action.type) {
    case types.LIST_USER_SUCCESS: {
      newState = { ...state, listUser: [...action.data] };

      return newState;
    }
    case types.LIST_USER_ERROR: {
      return { ...state, status: "user-error" };
    }

    case types.LIST_USER_CHATTED_SUCCESS: {
      // newState = { listUserChatted: [..., ...action.data] };
      newState = { ...state, listUserChatted: [...action.data] };
      return newState;
    }
    case types.LIST_USER_CHATTED_ERROR: {
      newState = { listUserChatted: [...state.listUser, ...action.error] };

      return newState;
    }
    default: {
      return state;
    }
  }
}
