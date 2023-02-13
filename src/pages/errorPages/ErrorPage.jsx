import React from "react";
import ErrorPageImage from "../../assets/images/errrorPageDesign.png";
function ErrorPage() {
  return (
    <div className="" style={{ marginTop: "14rem" }}>
      <div className="imageErrorContainer">
        <img
          src={ErrorPageImage}
          alt="ErrorPageImage"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>
    </div>
  );
}

export default ErrorPage;
