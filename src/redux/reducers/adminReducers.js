import { NUMBER_USER } from "../actionTypes";

export const adminReducers = (state = {}, action) => {
      switch (action.type) {
            case NUMBER_USER:
                  return { ...state, ...action.payload };
            default:
                  return {};
      }
};
