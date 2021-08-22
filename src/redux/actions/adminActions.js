import { NUMBER_USER } from "../actionTypes";

const numberUser = (count) => {
      return {
            type: NUMBER_USER,
            payload: count,
      };
};

let adminActions = {
      numberUser,
};

export default adminActions;
