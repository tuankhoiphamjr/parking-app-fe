import { SIGN_OUT, SIGNIN_SUCCESS } from "../actionTypes";

export const userReducers = (state = {}, { type, payload }) => {
      switch (type) {
            case SIGNIN_SUCCESS:
                  return { ...state, ...payload };

            case SIGN_OUT:
                  return {};
            default:
                  return state;
      }
};
