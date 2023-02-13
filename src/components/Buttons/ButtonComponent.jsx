import React from "react";
import "./buttonComponent.css";
function ButtonComponent({ text, icon, textSccController, className, id }) {
  return (
    <div>
      <div className={`btn buttonComponent ${className}`}>
        <span className={textSccController}> {text} </span>
        <span id={id}>{icon}</span>
      </div>
    </div>
  );
}

export default ButtonComponent;
