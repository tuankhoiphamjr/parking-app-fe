import { Link, useRouteMatch } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/avatar/images.png";
import { reactLocalStorage } from "reactjs-localstorage";
import {  useSelector } from "react-redux";
import React from "react";

const SideBar = ({ sideBarOpen, closeSideBar, removeCookie }) => {
      let match = useRouteMatch();
      let link = document.querySelectorAll(".sidebar__link");
      const user = useSelector((state) => state.user);
      const { result } = user;

      const handleLogOut = async () => {
            await removeCookie("admin");
            await reactLocalStorage.clear();
            window.location.href = "/login";
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
                              <img src={logo} alt="logo" />
                              <h1>{result.lastName}</h1>
                        </div>
                        <i
                              className="fa fa-times"
                              id="sidebarIcon"
                              onClick={() => closeSideBar()}
                        ></i>
                  </div>
                  <div className="sidebar__menu">
                        <div className={`sidebar__link`}>
                              <Link
                                    to={`${match.url}/admin`}
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
                                    to={`${match.url}/users`}
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fa fa-user-secret"></i>
                                    Quản lý tài khoản
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to={`${match.url}/notify`}
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-exclamation-circle"></i>
                                    Thông báo
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to={`${match.url}/notify`}
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
                                    to={`${match.url}/newOwner`}
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-users-medical"></i>
                                    Bãi xe mới
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to={`${match.url}/newOwner`}
                                    style={{ width: "100%", height: "100%" }}
                                    onClick={handleOnClick}
                              >
                                    <i className="fas fa-video"></i>
                                    Quản lý bãi xe
                              </Link>
                        </div>
                        <div className={`sidebar__link`}>
                              <Link
                                    to={`${match.url}/newOwner`}
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
