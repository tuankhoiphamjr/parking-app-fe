import { reactLocalStorage } from "reactjs-localstorage";

export const getToken = async () => {
      try {
            const jsonValue = await reactLocalStorage.getObject("admin");
            return JSON.parse(jsonValue).accessToken;
      } catch (error) {
            console.log("Err when get token from local storage");
      }
};
