import axios from "axios";
import { BaseURL } from "./BaseURL";
import { getToken } from "./GetToken";

const getListNewParking = async () => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/adminParking/listNeedVerified`;
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

const acceptParking = async (parkingId, data) => {
      try {
            const token = await getToken();
            const url = `${BaseURL}/adminParking/verify/${parkingId}`;
            const headers = {
                  headers: {
                        "x-access-token": token,
                  },
            };
            const res = await axios.post(url,data, headers);
            return res;
      } catch (error) {
            console.log("Err when accept parking:", error.message);
      }
};

const NewOwnerApi = {
      getListNewParking,
      acceptParking,
};

export default NewOwnerApi;
