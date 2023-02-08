import React from "react";
import { Link } from "react-router-dom";
import HeaderImageBackGround from "../../assets/images/header__bg.png";
import "./headerOfHeaders.css";
function HeaderPageComponent({
  title,
  prevLink,
  prevLinkText,
  nextLinkText,
  nextLink,
}) {
  return (
    <div
      className="MainHeaderBg primaryBackGroundWhiteColor"
      style={{ marginTop: "-12rem" }}
    >
      <div className="header__container">
        <div className="header__container-bg ">
          <img
            src={HeaderImageBackGround}
            alt="headerImage"
            id="headerImageBackGround"
            style={{ width: "100vw", height: "30vh" }}
          />
        </div>

        <div className="header__content p-5">
          <p className="mx-4 mt-3 display-6 headerTitle">{title}</p>
          <p className="mx-4 mt-3">
            <h5>
              <Link to={`${prevLink}`} className="LinkText">
                {prevLinkText}{" "}
              </Link>{" "}
              &gt;
              <Link to={`${nextLink}`} className="LinkText mainPage">
                {nextLinkText}
              </Link>
            </h5>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderPageComponent;
