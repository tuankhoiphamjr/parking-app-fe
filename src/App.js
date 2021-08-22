import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import LogHome from "./page/LogPage/LogHome";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import StartPage from "./page/StartPage/StartPage";
import { useState, useEffect } from "react";

import { useCookies } from "react-cookie";

function App() {
      const [cookies, setCookie, removeCookie] = useCookies(["admin"]);

      const checkLoginSuccess = async () => {
            if (!cookies.admin || cookies.admin === undefined) {
                  window.location.href = "/login";
            }
      };
      const checkLoginFail = async () => {
            if (cookies.admin !== undefined) {
                  window.location.href = "/";
            }
      };

      return (
            <Router>
                  <div className="container">
                        <Header />
                        <div className="content">
                              <Switch>
                                    <Route
                                          path="/"
                                          exact
                                          strict
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
                                          exact
                                          strict
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
                              </Switch>
                        </div>
                        <Footer />
                  </div>
            </Router>
      );
}

export default App;
