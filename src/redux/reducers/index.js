import { userReducers as user } from "./userReducers";
import { combineReducers } from "redux";

const rootReducer = () => {
      return combineReducers({
            user,
      });
};

export default rootReducer;
