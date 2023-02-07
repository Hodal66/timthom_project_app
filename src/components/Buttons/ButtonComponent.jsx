import React from "react";

function ButtonComponent({ text, icon, className }) {
  return (
    <div>
      <div className={`btn ${className}`}>
        {text} <span>{icon}</span>
      </div>
    </div>
  );
}

export default ButtonComponent;
