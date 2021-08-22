import React from "react";
import { useEffect } from "react";
import LogInApi from "../../api/LogInApi";
import { useDispatch } from "react-redux";
import userAction from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";

const StartPage = ({ cookies, setCookie }) => {
      const dispatch = useDispatch();
      const history = useHistory();
      const getData = async () => {
            try {
                  if (!cookies.admin || cookies.admin == null) {
                        history.push("/login");
                  } else {
                        const user = cookies.admin;
                        const res = await LogInApi.login({
                              phoneNumber: user.result.phoneNumber,
                              password: user.password,
                              role: "admin",
                        });
                        if (res?.status === 200) {
                              const expires = new Date();
                              expires.setDate(Date.now() + 1000 * 60 * 60 * 24);
                              setCookie(
                                    "admin",
                                    JSON.stringify({
                                          ...res.data,
                                          password: user.password,
                                    }),
                                    { path: "/", expires }
                              );
                              dispatch(userAction.signInUpSuccess(res.data));
                              history.push("/home");
                        } else {
                              history.push("/login");
                        }
                  }
            } catch (e) {
                  history.push("/login");
            }
      };
      useEffect(() => {
            getData();
      }, []);

      return <div></div>;
};

export default StartPage;
