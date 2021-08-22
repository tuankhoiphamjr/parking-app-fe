import { NUMBER_USER } from "../actionTypes";

export const adminReducers = (state = {}, {type,payload}) => {
      switch (type) {
            case NUMBER_USER:
                  return { ...state, ...payload };
            default:
                  return state;
      }
};
