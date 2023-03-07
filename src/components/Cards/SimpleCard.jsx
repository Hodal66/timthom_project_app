import React from "react";
function SimpleCard({
  icon,
  iconCssController,
  iconContainer,
  title,
  content,
  className,
  titleCssController,
  contentCssController,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
}) {
  return (
    <div className={`card primaryTextWhiteColor ${className}`}>
      <div className={`iconCardContainer ${iconContainer}`}>
        <span className={iconCssController}>{icon}</span>
      </div>
      <h2 className={titleCssController}>{title}</h2>
      <p className={`primaryTextWhiteColor ${contentCssController}`}>
        <span className="primaryTextWhiteColor"> {content}</span>
      </p>
      <div className="primaryTextWhiteColor">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
        <p>{paragraph5}</p>
      </div>
    </div>
  );
}

export default SimpleCard;
