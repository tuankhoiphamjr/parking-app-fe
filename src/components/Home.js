import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import routes from "./Routes";
import { LogInApi } from "../api";
import { useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

const Home = () => {
      const [sideBarOpen, setSideBarOpen] = useState(false);
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

      const openSideBar = () => {
            setSideBarOpen(true);
      };

      const closeSideBar = () => {
            setSideBarOpen(false);
      };

      const showContentMenu = (routes) => {
            var result = null;

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
                  <BrowserRouter>
                        <Switch>{showContentMenu(routes)}</Switch>
                  </BrowserRouter>

                  <SideBar
                        sideBarOpen={sideBarOpen}
                        closeSideBar={closeSideBar}
                        adminName={adminName}
                  />
            </div>
      );
};

export default Home;
