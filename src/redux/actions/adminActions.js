import {
      NUMBER_USER,
      ALL_USER_DATA,
      ALL_PARKING_NEED_VERIFIED,
} from "../actionTypes";

const numberUser = (count) => {
      return {
            type: NUMBER_USER,
            payload: count,
      };
};

const getAllUserInfo = (data) => {
      return {
            type: ALL_USER_DATA,
            payload: data,
      };
};
const getAllParkingNeedVerified = (parkings) => {
      return {
            type: ALL_PARKING_NEED_VERIFIED,
            payload: parkings,
      };
};

let adminActions = {
      numberUser,
      getAllUserInfo,
      getAllParkingNeedVerified,
};

export default adminActions;
