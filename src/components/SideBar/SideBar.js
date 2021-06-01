import "./SideBar.css";
import logo from "../../assets/avatar/avatar.jfif";

const SideBar = ({ sideBarOpen, closeSideBar, adminName }) => {
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
                        <div className="sidebar__link active_menu_link">
                              <i className="fa fa-home"></i>
                              <a href="/home">Dashboard</a>
                        </div>
                        <h2>User</h2>
                        <div className="sidebar__link">
                              <i className="fa fa-user-secret"></i>
                              <a>Manage Acount</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-exclamation-circle"></i>
                              <a href="/notify">Notification</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-envelope-square"></i>
                              <a>Message</a>
                        </div>
                        <h2>Parking owner</h2>
                        <div className="sidebar__link">
                              <i className="fas fa-users-medical"></i>
                              <a href="/newOwner">New Owner</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-video"></i>
                              <a>Parking Monitor</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-envelope-square"></i>
                              <a>Message</a>
                        </div>
                        <div className="sidebar__logout">
                              <i className="far fa-power-off"></i>
                              <a>Log out</a>
                        </div>
                  </div>
            </div>
      );
};

export default SideBar;
