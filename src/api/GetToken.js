import { reactLocalStorage } from "reactjs-localstorage";

export const getToken = async () => {
      try {
            const jsonValue = await reactLocalStorage.getObject("state");
            const { user } = jsonValue;
            return user.accessToken;
      } catch (error) {
            console.log("Err when get token from local storage");
      }
};
