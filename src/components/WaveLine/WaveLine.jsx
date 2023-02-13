import React from "react";
import "./waveLine.css";
function WaveLine({ className }) {
  return (
    <div className={`waveLineContainer ${className}`}>
      <div className="waveLine"></div>
    </div>
  );
}

export default WaveLine;
