import React from "react";
import "./buttonComponent.css";
function ButtonComponent({
  text,
  type,
  icon,
  textSccController,
  className,
  id,
}) {
  return (
    <div>
      <button type={type} className={`buttonComponent  ${className}`}>
        <span className={textSccController}> {text} </span>
        <span id={id}>{icon}</span>
      </button>
    </div>
  );
}

export default ButtonComponent;
