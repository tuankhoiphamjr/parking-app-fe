import "./NavBar.css";

const NavBar = ({ sideBarOpen, openSideBar }) => {
      return (
            <nav className="navbar">
                  <div className="nav_icon" onClick={() => openSideBar()}>
                        <i className="fa fa-bars"></i>
                  </div>
            </nav>
      );
};

export default NavBar;
