import { useEffect } from "react";
import LoginForm from "./LoginForm";

const LogHome = ({ checkLoginFail }) => {
      useEffect(() => {
            checkLoginFail();
      }, []);
      return (
            <div className="wrapper fadeInDown">
                  <div id="formContent">
                        <h2 className="active"> Admin </h2>
                        {/* <h2 className="inactive underlineHover">Sign Up </h2> */}
                        <LoginForm />
                        {/* <div id="formFooter">
                              <a className="underlineHover" href="/">
                                    Forgot Password?
                              </a>
                        </div> */}
                  </div>
            </div>
      );
};

export default LogHome;
