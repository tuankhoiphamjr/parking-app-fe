import {
      NUMBER_USER,
      ALL_USER_DATA,
      ALL_PARKING_NEED_VERIFIED,
} from "../actionTypes";

export const adminReducers = (state = {}, { type, payload }) => {
      switch (type) {
            case NUMBER_USER:
                  return { ...state, ...payload };
            case ALL_USER_DATA:
                  return { ...state, ...payload };
            case ALL_PARKING_NEED_VERIFIED:
                  return { ...state, ...payload };
            default:
                  return state;
      }
};
