import "./SideBar.css";
import logo from "../../assets/avatar/avatar.jfif";

const SideBar = ({ sideBarOpen, closeSideBar }) => {
      return (
            <div
                  className={sideBarOpen ? "sidebar-responsive" : ""}
                  id="sidebar"
            >
                  <div className="sidebar__title">
                        <div className="sidebar__img">
                              <img src={logo} alt="logo" />
                              <h1>Admin name</h1>
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
                              <a href="/">Manage Acount</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-exclamation-circle"></i>
                              <a href="/notify">Notification</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-envelope-square"></i>
                              <a href="/">Message</a>
                        </div>
                        <h2>Parking owner</h2>
                        <div className="sidebar__link">
                              <i className="fas fa-users-medical"></i>
                              <a href="/newOwner">New Owner</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-video"></i>
                              <a href="/">Parking Monitor</a>
                        </div>
                        <div className="sidebar__link">
                              <i className="fas fa-envelope-square"></i>
                              <a href="/">Message</a>
                        </div>
                        <div className="sidebar__logout">
                              <i className="far fa-power-off"></i>
                              <a href="/">Log out</a>
                        </div>
                  </div>
            </div>
      );
};

export default SideBar;
