import axios from "axios";
import { BaseURL } from "./BaseURL";

const login = async (data) => {
      try {
            const url = `${BaseURL}/auth/signin`;
            const res = await axios.post(url, data, {});
            return res;
      } catch (error) {
            console.log("Err when sign in:", error.message);
      }
};

const fectchAdminInfo = async () => {
      try {
            const url = `${BaseURL}/user/getUserInfoByIdForUser`;
            const res = await axios.post(url, {}, {});
            console.log(res);
            return res;
      } catch (error) {
            console.log("Err when get user info:", error.message);
      }
};

export default {
      login,
      fectchAdminInfo,
};
