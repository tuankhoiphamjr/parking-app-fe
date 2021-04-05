import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import AdminWrapper from "./AdminWrapper/AdminWrapper";

const Home = () => {
      const [sideBarOpen, setSideBarOpen] = useState(false);

      const openSideBar = () => {
            setSideBarOpen(true);
      };

      const closeSideBar = () => {
            setSideBarOpen(false);
      };

      return (
            <div className="admin-wrapper">
                  <NavBar sideBarOpen={sideBarOpen} openSideBar={openSideBar} />
                  <AdminWrapper />
                  <SideBar
                        sideBarOpen={sideBarOpen}
                        closeSideBar={closeSideBar}
                  />
            </div>
      );
};

export default Home;
