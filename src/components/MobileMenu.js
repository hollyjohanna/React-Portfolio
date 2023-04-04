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
          <Link to="/#about-section" onClick={closeMethod}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/#hm-pg-projects-container" onClick={closeMethod}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/#contact-form-section" onClick={closeMethod}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
