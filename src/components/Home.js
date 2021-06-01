import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
// import AdminWrapper from "./AdminWrapper/AdminWrapper";
import routes from "./Routes";
import { LogInApi } from "../api";
import { useEffect } from "react";

const Home = () => {
      const [sideBarOpen, setSideBarOpen] = useState(false);
      const [adminName, setAdminName] = useState("");
      const [adminFullName, setAdminFullName] = useState("");

      const setAdminInfo = async () => {
            let response = await LogInApi.fectchAdminInfo();
            if (response?.status) {
            } else {
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
                  />
            </div>
      );
};

export default Home;
