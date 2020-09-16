import * as types from "../../types/uiTypes";
const initialState = {
  showLoading: false,
  showChatBox: false,
  showChatBoxHeader: false,
  showNotifyBox: false,
  showRegister: false,
  showStatusBox: false,
  user: {},
};
const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return { ...state, showLoading: true };
    }
    case types.HIDE_LOADING: {
      return { ...state, showLoading: false };
    }
    case types.SHOW_CHATBOX: {
      const data = action.payload;
      return { ...state, showChatBox: true, user: data };
    }
    case types.HIDE_CHATBOX: {
      return { ...state, showChatBox: false, user: {} };
    }
    case types.SHOW_CHATBOX_HEADER: {
      return { ...state, showChatBoxHeader: true };
    }
    case types.HIDE_CHATBOX_HEADER: {
      return { ...state, showChatBoxHeader: false };
    }
    case types.SHOW_NOTIFY_HEADER: {
      return { ...state, showNotifyBox: true };
    }
    case types.HIDE_NOTIFY_HEADER: {
      return { ...state, showNotifyBox: false };
    }
    case types.SHOW_REGISTER: {
      return { ...state, showRegister: true };
    }
    case types.HIDE_REGISTER: {
      return { ...state, showRegister: false };
    }
    case types.SHOW_STATUS_BOX: {
      return { ...state, showStatusBox: true };
    }
    case types.HIDE_STATUS_BOX: {
      return { ...state, showStatusBox: false };
    }
    default:
      return state;
  }
};
export default loading;
