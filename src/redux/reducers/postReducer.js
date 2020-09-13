import * as types from "../../types/Actiontypes";
import initialState from "./../initialState/initialState";
export default function post(state = initialState.post, action) {
  let newState;
  switch (action.type) {
    case types.LIST_POST_SUCCESS: {
      newState = { listPost: [...state.listPost, ...action.data] };
      return newState;
    }
    case types.LIST_POST_ERROR: {
      return { ...state, status: "post-error" };
    }
    case types.POST_SUCCESS: {
      // newState=[...state.listPost];
      // newState.push
      const { data } = action.data.data;
      return { ...state, listPost: [data].concat(state.listPost) };
    }
    case types.POST_ERROR: {
      return { ...state, status: "post-error" };
    }
    default: {
      return { ...state };
    }
  }
}
