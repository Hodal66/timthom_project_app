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
    <div className="primaryBackGroundWhiteColor " id="body__nav">
      <nav className=" row container_fluid justify-content-evenly">
        <div className="logoContainer col-6 ">
          <img src={Logo} alt="myLogo" id="project_logo" />
        </div>
        <div className="contentContainer col-4 pt-4 container_fluid">
          {/* <ul className="row mt-6 primaryTextBlueColor "> */}
          <ul className={`nav_links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
            {links.map(({ path, name }, index) => {
              return (
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              );
            })}
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
