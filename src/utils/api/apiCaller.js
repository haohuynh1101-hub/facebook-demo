import axiosService from "../../common/axiosService";
const HOST = "http://192.168.1.5";
const API_ENDPOINT = `${HOST}:3001`;
const API_ENDPOINT_USER = `${HOST}:3002`;
const API_ENDPOINT_LISTUSER = `${HOST}:3003`;

const url = "post";
const user = "user";
export const getMessages = async (listUser) => {
  const { data } = await axiosService.get(
    `${API_ENDPOINT_LISTUSER}/message/getMessages?receiverId=${listUser.user1}&senderId=${listUser.user2}&length=10`
  );
  return data;
};
export const getListPost = async (listPostID) => {
  const { data } = await axiosService.post(`${API_ENDPOINT}/${url}/5`, {
    listPostId: listPostID.listPostID,
  });
  return data;
};
export const addPost = async (post) => {
  const data = await axiosService.post(`${API_ENDPOINT}/${url}`, post);
  return data;
};
export const getListUser = async () => {
  const { data } = await axiosService.get(
    `${API_ENDPOINT_LISTUSER}/getListStatusUser`
  );
  return data;
};
export const login = async ({ email, password }) => {
  const { data } = await axiosService.post(
    `${API_ENDPOINT_USER}/${user}/signin`,
    {
      email,
      password,
    }
  );
  return data;
};
export const register = async ({ name, email, password }) => {
  const { data } = await axiosService.post(
    `${API_ENDPOINT_USER}/${user}/register`,
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
    `${API_ENDPOINT_LISTUSER}/message/getConversations?id=${userId}&length=10`
  );
  return data;
};
