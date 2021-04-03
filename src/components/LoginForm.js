import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      // const API_URL = "http://localhost:8080";

      const login = () => {
            if (username === "") {
                  alert("Username must not be empty!");
            } else {
                  axios.post("http://192.168.19.105:8080/api/auth/signin", {
                        phoneNumber: username,
                        password: password,
                  })
                        .then(function (response) {
                              console.log(response);
                        })
                        .catch(function (error) {
                              alert("Wrong Username or Password");
                        });
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
                  <Link to="/home">
                        <input
                              type="submit"
                              className="fadeIn third"
                              value="Log In"
                              onClick={(e) => {
                                    e.preventDefault();
                                    login();
                              }}
                        />
                  </Link>
            </form>
      );
};

export default LoginForm;
