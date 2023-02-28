import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/11780708.png";
import DropDown from "./DropDown";
import "./navbar.css";
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [dropDown, setDropDown] = useState(false);
  const closeMobileMenu = () => {
    setClick(!click);
  };
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropDown(false);
    } else {
      setDropDown(false);
    }
  };
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <div
            className="logoContainer col-6 "
            onClick={() => setDropDown(false)}
          >
            <img src={Logo} alt="myLogo" id="project_logo" />
          </div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? <FaTimes /> : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" onClick={closeMobileMenu} className="nav-links">
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            onClick={() => setDropDown(!dropDown)}
          >
            <Link
              to="/services"
              onClick={closeMobileMenu}
              className="nav-links"
            >
              Services
            </Link>
            {dropDown && <DropDown />}
          </li>
          <li className="nav-item">
            <Link
              to="/about_us"
              onClick={closeMobileMenu}
              className="nav-links"
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact_us"
              onClick={closeMobileMenu}
              className="nav-links"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
