import axios from "axios";
import { BaseURL } from "./BaseURL";
import { getToken } from "./GetToken";

const getNumOfUser = async () => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/adminParking/getNumOfUserAndOwner`;
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.get(url, headers);
            return res;
      } catch (error) {
            console.log("Err when get number of user:", error.message);
      }
};

const getNumOfParking = async () => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/adminParking/getNumOfParking`;
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.get(url, headers);
            return res;
      } catch (error) {
            console.log("Err when get number of parking:", error.message);
      }
};

const getNumOfEvaluate = async () => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/adminParking/getNumOfEvaluate`;
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.get(url, headers);
            return res;
      } catch (error) {
            console.log("Err when get number of evaluate:", error.message);
      }
};

export default {
      getNumOfUser,
      getNumOfParking,
      getNumOfEvaluate,
};
