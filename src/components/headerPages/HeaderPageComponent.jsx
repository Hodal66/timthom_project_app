import React from "react";
import HeaderImageBackGround from "../../assets/images/header__bg.png";
import "./headerOfHeaders.css";
function HeaderPageComponent({ title, prevLink, nextLink }) {
  return (
    <div>
      <div className="imageContainer">
        <img
          src={HeaderImageBackGround}
          alt="headerImage"
          style={{ width: "100vw", height: "30vh" }}
          id="headerImageBackGround"
        />
      </div>
    </div>
  );
}

export default HeaderPageComponent;
