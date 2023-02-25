import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navigation.css";
import { links } from "../../data.js";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../../assets/images/11780708.png";
function BodyNavBar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <div className="primaryBackGroundWhiteColor" id="body__nav">
      <nav className=" row container justify-content-between">
        <div
          className="logoContainer col-6 "
          onClick={() => setIsNavShowing(false)}
        >
          <img src={Logo} alt="myLogo" id="project_logo" />
        </div>
        <div className="contentContainer col-4 pt-4 container_fluid">
          <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="list-menu">
              <span>Services</span>
              <ul className="list-submenu">
                <li>
                  <Link to="/training">Training</Link>
                </li>
                <li>
                  <Link to="/air-ticheting" className="list-span-sub-menu">
                    <span>Air</span> <span>Ticheting</span>
                  </Link>
                </li>
                <li>
                  <Link to="/consultancy">Consultancy</Link>
                </li>
                <li>
                  <Link to="/visa-application" className="list-span-sub-menu">
                    <span>Visa</span> <span>Application</span>
                  </Link>
                </li>
                <li>
                  <Link to="/hotel-reservation" className="list-span-sub-menu">
                    <span>Hotel</span> <span>Reservation</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about_us">About</Link>
            </li>
            <li>
              <Link to="/contact_us">Contact</Link>
            </li>
          </ul>
          <button
            className="nav_toggle_btn"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            {isNavShowing ? <MdOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default BodyNavBar;
