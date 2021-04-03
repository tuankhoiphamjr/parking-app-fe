import PropTypes from "prop-types";
import Logo from "./Logo";

const Header = ({ title }) => {
      return (
            <header className="header" title={title}>
                  <Logo />
                  <h1>{title}</h1>
            </header>
      );
};
Header.defaultProps = {
      title: "parking app name",
};

Header.propTypes = {
      title: PropTypes.string.isRequired,
};
export default Header;
