import { HashLink as Link } from "react-router-hash-link";

const MobileMenu = ({ closeMethod }) => {
  return (
    <div id="mobile-menu">
      <ul>
        <li>
          <Link to="/" onClick={closeMethod}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#contactform" onClick={closeMethod}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMethod}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/aboutme" onClick={closeMethod}>
            About Me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
