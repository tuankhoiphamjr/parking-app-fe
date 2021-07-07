import axios from "axios";
import { BaseURL } from "./BaseURL";
import { getToken } from "./GetToken";

const login = async (data) => {
      try {
            const url = `${BaseURL}/auth/signin`;
            const res = await axios.post(url, data, {});
            return res;
      } catch (error) {
            console.log("Err when sign in:", error.message);
      }
};

const fetchAdminInfo = async () => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/user/getUserInfoByIdForUser`;
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.get(url, headers);

            return res;
      } catch (error) {
            console.log("Err when get user info:", error.message);
      }
};

const LoginApi = {
      login,
      fetchAdminInfo,
};

export default LoginApi;
