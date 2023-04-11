import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const MobileMenu = ({ closeMethod }) => {
  const [DropdownIsOpen, setDropdownIsOpen] = useState(false);

  const openDropdown = () => {
    setDropdownIsOpen(!DropdownIsOpen);
  };

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
        <li onClick={openDropdown}>
          <span>Projects</span>
          {DropdownIsOpen && (
            <div id="projects-dropdown-mobile">
              <ul>
                <li onClick={closeMethod}>
                  <Link to="/gigfortproject">Gig Fort</Link>
                </li>
                <li onClick={closeMethod}>
                  <Link to="/wackywekaproject">Wacky Weka</Link>
                </li>
                <li onClick={closeMethod}>
                  <Link to="/divinestaysproject">Divine Stays</Link>
                </li>
                <li onClick={closeMethod}>
                  <Link to="/wetaverseproject">Wetaverse</Link>
                </li>
              </ul>
            </div>
          )}
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
