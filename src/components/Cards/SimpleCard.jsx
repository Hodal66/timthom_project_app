import React from "react";
import "./cards.css";
function SimpleCard({
  icon,
  iconCssController,
  iconContainer,
  title,
  content,
  className,
  titleCssController,
  contentCssController,
}) {
  return (
    <div className={`card ${className}`}>
      <div className={`iconCardContainer ${iconContainer}`}>
        <span className={iconCssController}>{icon}</span>
      </div>
      <h2 className={titleCssController}>{title}</h2>
      <p className={contentCssController}>{content}</p>
    </div>
  );
}

export default SimpleCard;
