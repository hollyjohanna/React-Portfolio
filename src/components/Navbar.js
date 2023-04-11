// Import icons
import { ThreeDots, Instagram, Linkedin, Github } from "react-bootstrap-icons";
// Import dependencies
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
// Import Mobile menu
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [MenuIsOpen, openMenu] = useState(false);
  const [DropdownIsOpen, setDropdownIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    openMenu(!MenuIsOpen);
  };

  const openDropdown = () => {
    setDropdownIsOpen(!DropdownIsOpen);
  };

  const handleNavLinkClick = () => {
    if (DropdownIsOpen) {
      setDropdownIsOpen(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <span id="logo">
          <a href="/#">HR</a>
        </span>
        <div id="nav-menu">
          <ThreeDots onClick={toggleMobileMenu} />
        </div>
        <div id="right-nav">
          <ul id="desktop-ul">
            <li id="home-link" onClick={handleNavLinkClick}>
              <Link to="/#" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li onClick={handleNavLinkClick}>
              <Link to="/#about-section" onClick={handleNavLinkClick}>
                About Me
              </Link>
            </li>
            <li onClick={openDropdown}>
              <span>Projects</span>
              {DropdownIsOpen && (
                <div id="projects-dropdown">
                  <ul>
                    <li>
                      <Link to="/gigfortproject">Gig Fort</Link>
                    </li>
                    <li>
                      <Link to="/wackywekaproject">Wacky Weka</Link>
                    </li>
                    <li>
                      <Link to="/divinestaysproject">Divine Stays</Link>
                    </li>
                    <li>
                      <Link to="/wetaverseproject">Wetaverse</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={handleNavLinkClick}>
              <Link to="/#contact-form-section" onClick={handleNavLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
          <span id="vertical-line"></span>
          <div className="lower-nav">
            <a
              className="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hollyjohanna"
            >
              <Github />
            </a>
            <a
              className="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/holliday-robbins-980b77166"
            >
              <Linkedin />
            </a>
            <a
              className="instagram"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/_heyjohanna_/"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      {MenuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  );
};

export default Navbar;
