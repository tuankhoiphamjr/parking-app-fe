import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import LogHome from "./components/LogHome";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StartPage from "./components/StartPage";
import { useState, useEffect } from "react";

import { reactLocalStorage } from "reactjs-localstorage";

function App() {
      const [adminName, setAdminName] = useState("");

      const setAdminInfo = async () => {
            try {
                  const jsonValue = await reactLocalStorage.getObject("admin");
                  setAdminName(`${JSON.parse(jsonValue).result.lastName}`);
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
                                                      <StartPage />
                                                </>
                                          )}
                                    />
                                    <Route
                                          path="/login"
                                          render={(props) => (
                                                <>
                                                      <LogHome />
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
                                                      />
                                                </>
                                          )}
                                    />
                              </div>
                              <Footer />
                        </div>
                  </Router>
            </Provider>
      );
}

export default App;
