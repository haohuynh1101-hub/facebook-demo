import * as types from "../../types/Actiontypes";
export const requestListUser = () => {
  return {
    type: types.LIST_USER_REQUEST,
  };
};

export const requestListUserChatted = (userId) => {
  return {
    type: types.LIST_USER_CHATTED_REQUEST,
    userId,
  };
};
