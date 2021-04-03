import "./NavBar.css";

const NavBar = ({ sideBarOpen, openSideBar }) => {
      return (
            <nav className="navbar">
                  <div className="nav_icon" onClick={() => openSideBar()}>
                        <i className="fa fa-bars"></i>
                  </div>
                  <div className="navbar__left">
                        <a href="/">User</a>
                        <a href="/">Parking owner</a>
                        <a href="/" className="active_link">
                              Admin
                        </a>
                  </div>
                  <div className="navbar__right">
                        <a href="/">
                              <i className="fa fa-search"></i>
                        </a>
                        <a href="/">
                              <i className="far fa-clock"></i>
                        </a>
                  </div>
            </nav>
      );
};

export default NavBar;
