import { SIGN_OUT, SIGNIN_SUCCESS } from "../actionTypes";

export const userReducers = (state = {}, action) => {
      switch (action.type) {
            case SIGNIN_SUCCESS:
                  return { ...action.user };

            case SIGN_OUT:
                  return {};
            default:
                  return {};
                  break;
      }
};
