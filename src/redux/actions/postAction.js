import * as types from "../../types/Actiontypes";
export const requestAddPost = (post) => {
  return {
    type: types.POST_REQUEST,
    post: post,
  };
};
export const requestListPost = (listPostID) => {
  return { type: types.LIST_POST_REQUEST, listPostID };
};
