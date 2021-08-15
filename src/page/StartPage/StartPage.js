import React from "react";
import { useEffect } from "react";
import LogInApi from "../../api/LogInApi";
import { useDispatch } from "react-redux";
import userAction from "../../redux/actions/userActions";
import { reactLocalStorage } from "reactjs-localstorage";

const StartPage = ({ cookies, setCookie }) => {
      const dispatch = useDispatch();
      const getData = async () => {
            try {
                  if (!cookies.admin || cookies.admin == null) {
                        window.location.href = "/login";
                  } else {
                        const user = cookies.admin;
                        console.log(user);
                        const res = await LogInApi.login({
                              phoneNumber: user.result.phoneNumber,
                              password: user.password,
                              role: "admin",
                        });
                        if (res?.status === 200) {
                              await reactLocalStorage.setObject(
                                    "admin",
                                    JSON.stringify({
                                          ...res.data,
                                          password: user.password,
                                    })
                              );
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
                              window.location.href = "/home";
                        } else {
                              window.location.href = "/login";
                        }
                  }
            } catch (e) {
                  window.location.href = "/login";
            }
      };
      useEffect(() => {
            getData();
      }, []);

      return <div></div>;
};

export default StartPage;
