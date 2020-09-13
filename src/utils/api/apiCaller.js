import axiosService from "../../common/axiosService";
const API_ENDPOINT = "http://192.168.1.9:3001";
const API_ENDPOINT_USER = "http://192.168.1.9:3002";
const API_ENDPOINT_LISTUSER = "http://192.168.1.9:3003";

const url = "post";
const user = "user";
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
