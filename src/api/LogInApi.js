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

export default {
      login,
};
