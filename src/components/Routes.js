import React from "react";
import Home from "./AdminWrapper/AdminWrapper";
import Notifycation from "./Notifycation/Notifycation";
import NewOwner from "./NewOwner/NewOwner";

const Routes = [
      {
            path: "/home",
            exact: false,
            main: () => <Home />,
      },
      {
            path: "/notify",
            exact: false,
            main: () => <Notifycation />,
      },
      {
            path: "/newOwner",
            exact: false,
            main: () => <NewOwner />,
      },
];
export default Routes;
