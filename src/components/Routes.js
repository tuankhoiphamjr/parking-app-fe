import React from "react";
import AdminWrapper from "./AdminWrapper/AdminWrapper";
import Notification from "./Notification/Notification";
import NewOwner from "./NewOwner/NewOwner";

const Routes = [
      {
            path: "/home",
            exact: false,
            main: () => <AdminWrapper />,
      },
      {
            path: "/notify",
            exact: false,
            main: () => <Notification />,
      },
      {
            path: "/newOwner",
            exact: false,
            main: () => <NewOwner />,
      },
];
export default Routes;
