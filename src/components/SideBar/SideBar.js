import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/avatar/avatar.jfif";

const SideBar = ({ sideBarOpen, closeSideBar, adminName }) => {
      const [homeActive, setHomeActive] = useState(true);
      const [manageAccountActive, setManageAccountActive] = useState(false);
      const [notifyActive, setNotifyActive] = useState(false);
      const [userMessageActive, setUserMessageActive] = useState(false);
      const [newOwnerActive, setNewOwnerActive] = useState(false);
      const [parkingMonitorActive, setParkingMonitorActive] = useState(false);
      const [ownerMessageActive, setOwnerMessageActive] = useState(false);

      const setActiveHome = async () => {
            setHomeActive(true);
            setManageAccountActive(false);
            setNotifyActive(false);
            setUserMessageActive(false);
            setNewOwnerActive(false);
            setParkingMonitorActive(false);
            setOwnerMessageActive(false);
      };

      const setActiveManageAccount = async () => {
            setHomeActive(false);
            setManageAccountActive(true);
            setNotifyActive(false);
            setUserMessageActive(false);
            setNewOwnerActive(false);
            setParkingMonitorActive(false);
            setOwnerMessageActive(false);
      };

      const setActiveNotify = async () => {
            setHomeActive(false);
            setManageAccountActive(false);
            setNotifyActive(true);
            setUserMessageActive(false);
            setNewOwnerActive(false);
            setParkingMonitorActive(false);
            setOwnerMessageActive(false);
      };

      const setActiveUserMessage = async () => {
            setHomeActive(false);
            setManageAccountActive(false);
            setNotifyActive(false);
            setUserMessageActive(true);
            setNewOwnerActive(false);
            setParkingMonitorActive(false);
            setOwnerMessageActive(false);
      };

      const setActiveNewOwner = async () => {
            setHomeActive(false);
            setManageAccountActive(false);
            setNotifyActive(false);
            setUserMessageActive(false);
            setNewOwnerActive(true);
            setParkingMonitorActive(false);
            setOwnerMessageActive(false);
      };

      const setActiveParkingMonitor = async () => {
            setHomeActive(false);
            setManageAccountActive(false);
            setNotifyActive(false);
            setUserMessageActive(false);
            setNewOwnerActive(false);
            setParkingMonitorActive(true);
            setOwnerMessageActive(false);
      };

      const setActiveOwnerMessage = async () => {
            setHomeActive(false);
            setManageAccountActive(false);
            setNotifyActive(false);
            setUserMessageActive(false);
            setNewOwnerActive(false);
            setParkingMonitorActive(false);
            setOwnerMessageActive(true);
      };

      return (
            <div
                  className={sideBarOpen ? "sidebar-responsive" : ""}
                  id="sidebar"
            >
                  <div className="sidebar__title">
                        <div className="sidebar__img">
                              <img src={logo} alt="logo" />
                              <h1>{adminName}</h1>
                        </div>
                        <i
                              className="fa fa-times"
                              id="sidebarIcon"
                              onClick={() => closeSideBar()}
                        ></i>
                  </div>
                  <div className="sidebar__menu">
                        <div
                              className={`sidebar__link ${
                                    homeActive ? "active_menu_link" : ""
                              }`}
                        >
                              <Link
                                    to="/home"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={setActiveHome}
                              >
                                    <i className="fa fa-home"></i>
                                    Dashboard
                              </Link>
                        </div>
                        <h2>User</h2>
                        <div
                              className={`sidebar__link ${
                                    manageAccountActive
                                          ? "active_menu_link"
                                          : ""
                              }`}
                        >
                              <Link
                                    to="/home"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={setActiveManageAccount}
                              >
                                    <i className="fa fa-user-secret"></i>
                                    Manage Acount
                              </Link>
                        </div>
                        <div
                              className={`sidebar__link ${
                                    notifyActive ? "active_menu_link" : ""
                              }`}
                        >
                              <Link
                                    to="/notify"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={setActiveNotify}
                              >
                                    <i className="fas fa-exclamation-circle"></i>
                                    Notification
                              </Link>
                        </div>
                        <div
                              className={`sidebar__link ${
                                    userMessageActive ? "active_menu_link" : ""
                              }`}
                        >
                              <Link
                                    to="/notify"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={setActiveUserMessage}
                              >
                                    <i className="fas fa-envelope-square"></i>
                                    Message
                              </Link>
                        </div>
                        <h2>Owner</h2>
                        <div
                              className={`sidebar__link ${
                                    newOwnerActive ? "active_menu_link" : ""
                              }`}
                        >
                              <Link
                                    to="/newOwner"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={setActiveNewOwner}
                              >
                                    <i className="fas fa-users-medical"></i>
                                    New Owner
                              </Link>
                        </div>
                        <div
                              className={`sidebar__link ${
                                    parkingMonitorActive
                                          ? "active_menu_link"
                                          : ""
                              }`}
                        >
                              <Link
                                    to="/newOwner"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={setActiveParkingMonitor}
                              >
                                    <i className="fas fa-video"></i>
                                    Parking Monitor
                              </Link>
                        </div>
                        <div
                              className={`sidebar__link ${
                                    ownerMessageActive ? "active_menu_link" : ""
                              }`}
                        >
                              <Link
                                    to="/newOwner"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={setActiveOwnerMessage}
                              >
                                    <i className="fas fa-envelope-square"></i>
                                    Message
                              </Link>
                        </div>
                        <div className="sidebar__logout">
                              <Link style={{ width: "100%", height: "100%" }}>
                                    <i className="far fa-power-off"></i>
                                    Log out
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default SideBar;
