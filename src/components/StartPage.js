import React from "react";
import { useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import LogInApi from "../api/LogInApi";
import { useDispatch } from "react-redux";
import userAction from "../redux/actions/userActions";

const StartPage = () => {
      const dispatch = useDispatch();
      const getData = async () => {
            try {
                  const jsonValue = await reactLocalStorage.getObject("admin");

                  if (!jsonValue || JSON.parse(jsonValue) == null) {
                        window.location.href = "/login";
                  } else {
                        const user = JSON.parse(jsonValue);
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
