import axiosService from "../../common/axiosService";
import { POST_HOST, MESSAGE_HOST, USER_HOST } from 'config'

const url = "post";
const user = "user";
export const getMessages = async (listUser) => {
  const { data } = await axiosService.get(
    `${MESSAGE_HOST}/message/getMessages?receiverId=${listUser.user1}&senderId=${listUser.user2}&length=10`
  );
  return data;
};
export const getListPost = async (listPostID) => {
  const { data } = await axiosService.post(`${POST_HOST}/${url}/5`, {
    listPostId: listPostID.listPostID,
  });
  return data;
};
export const addPost = async (post) => {
  const data = await axiosService.post(`${POST_HOST}/${url}`, post);
  return data;
};
export const getListUser = async () => {
  const { data } = await axiosService.get(
    `${MESSAGE_HOST}/getListStatusUser`
  );
  return data;
};
export const login = async ({ email, password }) => {
  console.log(`${USER_HOST}/${user}/signin`)
  const { data } = await axiosService.post(
    `${USER_HOST}/${user}/signin`,
    {
      email,
      password,
    }
  );
  return data;
};
export const register = async ({ name, email, password }) => {
  const { data } = await axiosService.post(
    `${USER_HOST}/${user}/register`,
    {
      name,
      email,
      password,
    }
  );
  return data;
};
export const getListUserChatted = async ({ userId }) => {
  const { data } = await axiosService.get(
    `${MESSAGE_HOST}/message/getConversations?id=${userId}&length=10`
  );
  return data;
};
