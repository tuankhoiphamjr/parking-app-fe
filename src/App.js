import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import LogHome from "./page/LogPage/LogHome";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import StartPage from "./page/StartPage/StartPage";
import { useState, useEffect } from "react";

import { reactLocalStorage } from "reactjs-localstorage";

import { useCookies } from "react-cookie";

function App() {
      const [adminName, setAdminName] = useState("");
      const [cookies, setCookie, removeCookie] = useCookies(["admin"]);

      const checkLoginSuccess = async () => {
            if (!cookies.admin || cookies.admin === undefined) {
                  window.location.href = "/login";
            }
      };
      const checkLoginFail = async () => {
            if (cookies.admin !== undefined) {
            console.log(cookies);
                  window.location.href = "/home";
            }
      };

      const setAdminInfo = async () => {
            try {
                  setAdminName(`${cookies.admin.result.lastName}`);
            } catch (error) {
                  console.log("Err when get token from local storage");
                  return false;
            }
      };

      useEffect(() => {
            setAdminInfo();
      }, []);
      return (
            <Provider store={store}>
                  <Router>
                        <div className="container">
                              <Header />
                              <div className="content">
                                    <Route
                                          path="/"
                                          exact
                                          render={(props) => (
                                                <>
                                                      <StartPage
                                                            cookies={cookies}
                                                            setCookie={
                                                                  setCookie
                                                            }
                                                      />
                                                </>
                                          )}
                                    />
                                    <Route
                                          path="/login"
                                          render={(props) => (
                                                <>
                                                      <LogHome
                                                            checkLoginFail={
                                                                  checkLoginFail
                                                            }
                                                            cookies={cookies}
                                                            setCookie={
                                                                  setCookie
                                                            }
                                                      />
                                                </>
                                          )}
                                    />
                                    <Route
                                          path="/home"
                                          render={(props) => (
                                                <>
                                                      <Home
                                                            adminName={
                                                                  adminName
                                                            }
                                                            checkLoginSuccess={
                                                                  checkLoginSuccess
                                                            }
                                                            removeCookie={
                                                                  removeCookie
                                                            }
                                                      />
                                                </>
                                          )}
                                    />
                                    <Route
                                          path="/notify"
                                          render={(props) => (
                                                <>
                                                      <Home
                                                            adminName={
                                                                  adminName
                                                            }
                                                            checkLoginSuccess={
                                                                  checkLoginSuccess
                                                            }
                                                            removeCookie={
                                                                  removeCookie
                                                            }
                                                      />
                                                </>
                                          )}
                                    />
                                    <Route
                                          path="/newOwner"
                                          render={(props) => (
                                                <>
                                                      <Home
                                                            adminName={
                                                                  adminName
                                                            }
                                                            checkLoginSuccess={
                                                                  checkLoginSuccess
                                                            }
                                                            removeCookie={
                                                                  removeCookie
                                                            }
                                                      />
                                                </>
                                          )}
                                    />
                                    <Route
                                          path="/users"
                                          render={(props) => (
                                                <>
                                                      <Home
                                                            props={props}
                                                            adminName={
                                                                  adminName
                                                            }
                                                            checkLoginSuccess={
                                                                  checkLoginSuccess
                                                            }
                                                            removeCookie={
                                                                  removeCookie
                                                            }
                                                      />
                                                </>
                                          )}
                                          exact={true}
                                    />
                              </div>
                              <Footer />
                        </div>
                  </Router>
            </Provider>
      );
}

export default App;
