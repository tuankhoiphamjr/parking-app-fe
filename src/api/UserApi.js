import axios from "axios";
import { BaseURL } from "./BaseURL";
import { getToken } from "./GetToken";

const getAllUserInfo = async () => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/user`;
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.get(url, headers);
            return res.data;
      } catch (error) {
            console.log("Err when get number of user:", error.message);
      }
};

const getUserInfoById = async (userId) => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/user/getUserInfoById/${userId}`;
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.get(url, headers);
            return res.data;
      } catch (error) {
            console.log("Err when get number of user:", error.message);
      }
};

const updateNewPassword = async (userId, newPassword) => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/user/password/update`;
            const data = {
                  userId: userId,
                  newPassword: newPassword,
            };
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.post(url, data, headers);
            return res.data;
      } catch (error) {
            console.log("Err when get number of user:", error.message);
      }
};

const UserApi = {
      getUserInfoById,
      updateNewPassword,
      getAllUserInfo,
};

export default UserApi;
