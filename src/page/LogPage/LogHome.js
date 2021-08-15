import React from "react";
import { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LogHome = ({ checkLoginFail, cookies, setCookie }) => {
      useEffect(() => {
            checkLoginFail();
      }, []);
      return (
            <div className="wrapper fadeInDown">
                  <div id="formContent">
                        <h2 className="active"> Admin </h2>
                        {/* <h2 className="inactive underlineHover">Sign Up </h2> */}
                        <LoginForm cookies={cookies} setCookie={setCookie} />
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
