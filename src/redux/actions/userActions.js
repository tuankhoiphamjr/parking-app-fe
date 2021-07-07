import { SIGNIN_SUCCESS, SIGN_OUT } from "../actionTypes";
const signInUpSuccess = (user) => {
      return {
            type: SIGNIN_SUCCESS,
            user,
      };
};

const signOut = () => {
      return {
            type: SIGN_OUT,
      };
};
let userAction = {
      signInUpSuccess,
      signOut,
};
export default userAction;
