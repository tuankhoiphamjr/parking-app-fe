import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import routes from "../Routes";
import { useEffect } from "react";
// import { reactLocalStorage } from "reactjs-localstorage";

const Home = ({ adminName, checkLoginSuccess, removeCookie }) => {
      const [sideBarOpen, setSideBarOpen] = useState(false);
      // const [adminName, setAdminName] = useState("");

      // const setAdminInfo = async () => {
      //       try {
      //             const jsonValue = await reactLocalStorage.getObject("admin");
      //             setAdminName(`${JSON.parse(jsonValue).result.lastName}`);
      //       } catch (error) {
      //             console.log("Err when get token from local storage");
      //             return false;
      //       }
      // };

      useEffect(() => {
            checkLoginSuccess();
      }, []);

      const openSideBar = () => {
            setSideBarOpen(true);
      };

      const closeSideBar = () => {
            setSideBarOpen(false);
      };

      const showContentMenu = (routes) => {
            let result = null;

            if (routes.length > 0) {
                  result = routes.map((route, index) => {
                        return (
                              <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                              />
                        );
                  });
            }
            return result;
      };
      return (
            <div className="admin-wrapper">
                  <NavBar sideBarOpen={sideBarOpen} openSideBar={openSideBar} />
                  <Router>
                        <Switch>{showContentMenu(routes)}</Switch>
                  </Router>

                  <SideBar
                        sideBarOpen={sideBarOpen}
                        closeSideBar={closeSideBar}
                        adminName={adminName}
                        checkLoginSuccess={checkLoginSuccess}
                        removeCookie={removeCookie}
                  />
            </div>
      );
};

export default Home;
