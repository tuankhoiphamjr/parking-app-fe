import React from "react";
import { useState } from "react";
import { LogInApi } from "../api";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import userAction from "../redux/actions/userActions";

const LoginForm = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const dispatch = useDispatch();

      const login = async (e) => {
            e.preventDefault();
            if (username === "") {
                  alert("Username must not be empty!");
            } else {
                  const data = {
                        phoneNumber: username,
                        password: password,
                        role: "admin",
                  };
                  let response = await LogInApi.login(data);
                  if (response?.status) {
                        try {
                              await reactLocalStorage.setObject(
                                    "admin",
                                    JSON.stringify({
                                          ...response.data,
                                          password: password,
                                    })
                              );
                        } catch (error) {
                              console.log(error);
                        }
                        dispatch(userAction.signInUpSuccess(response.data));
                        window.location.href = "/home";
                  } else {
                        alert("Đăng nhập thất bại");
                  }
            }
      };
      return (
            <form>
                  <input
                        type="text"
                        id="user-name"
                        className="fadeIn first"
                        name="login"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                        type="password"
                        id="password"
                        className="fadeIn second"
                        name="login"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                        type="submit"
                        className="fadeIn third"
                        value="Log In"
                        onClick={login}
                  />
            </form>
      );
};

export default LoginForm;
