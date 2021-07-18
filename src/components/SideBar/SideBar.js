import { Link } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/avatar/avatar.png";
import { reactLocalStorage } from "reactjs-localstorage";
import { useDispatch } from "react-redux";
import userAction from "../../redux/actions/userActions";
import React from "react";

const SideBar = ({
      sideBarOpen,
      closeSideBar,
      adminName,
      checkLoginSuccess,
}) => {
      let link = document.querySelectorAll(".sidebar__link");

      const dispatch = useDispatch();
      const handleLogOut = async () => {
            const logOut = Promise.all([
                  dispatch(userAction.signOut()),
                  reactLocalStorage.clear(),
                  checkLoginSuccess(),
            ]);
      };

      const handleOnClick = (e) => {
            let j = 0;
            while (j < link.length) {
                  link[j++].className = "sidebar__link";
            }
            e.target.parentElement.className = "sidebar__link active_menu_link";
      };

      return (
            <div
                  className={sideBarOpen ? "sidebar-responsive" : ""}
                  id="sidebar"
            >
                  <div className="sidebar__title">
                        <div className="sidebar__img">
                              {/* <img src={logo} alt="logo" /> */}
                              <img alt="logo" />
                              <h1>{adminName}</h1>
                        </div>
                        <i
                              className="fa fa-times"
                              id="sidebarIcon"
                              onClick={() => closeSideBar()}
                        ></i>
                  </div>
                  <div className="sidebar__menu">
                        <div className={`sidebar__link active_menu_link`}>
                              <Link
                                    to="/home"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fa fa-home"></i>
                                    Dashboard
                              </Link>
                        </div>
                        <hr></hr>
                        <h2>Người dùng</h2>
                        <div className={`sidebar__link `}>
                              <Link
                                    to="/home"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fa fa-user-secret"></i>
                                    Quản lý tài khoản
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to="/notify"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-exclamation-circle"></i>
                                    Thông báo
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to="/notify"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-envelope-square"></i>
                                    Tin nhắn
                              </Link>
                        </div>
                        <hr></hr>
                        <h2>Chủ bãi</h2>
                        <div className={`sidebar__link`}>
                              <Link
                                    to="/newOwner"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-users-medical"></i>
                                    Bãi xe mới
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to="/newOwner"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-video"></i>
                                    Quản lý bãi xe
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to="/newOwner"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-envelope-square"></i>
                                    Tin nhắn
                              </Link>
                        </div>
                        <hr></hr>
                        <div className="sidebar__logout">
                              <Link
                                    to="#"
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleLogOut}
                              >
                                    <i className="far fa-power-off"></i>
                                    Đăng xuất
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default SideBar;
