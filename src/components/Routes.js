import React from "react";
import AdminWrapper from "./AdminWrapper/AdminWrapper";
import Notification from "./Notification/Notification";
import NewOwner from "./NewOwner/NewOwner";
import CustomTable from "./CustomTable";
import UserInfo from "./UserInfo";

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
      {
            path: "/users",
            exact: true,
            main: () => <CustomTable />,
      },
      {
            path: "/users/:id",
            exact: true,
            main: (props) => <UserInfo  props={props}/>,
      },

];
export default Routes;
