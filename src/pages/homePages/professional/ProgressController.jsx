import React from "react";

function ProgressController() {
  return (
    <div>
      <div className="mainContent-container">
        <h1 className="primaryTitle-white">We Are Professional And Expert</h1>
        <p className="py-1">
          As a professional and expert, we have acquired a high level of
          knowledge, skills, and experience in a particular field or industry.
          We have dedicated significant time and effort to develop our expertise
          through education, training, and hands-on experience.
        </p>
        <p className=" mt-3 mb-0 row">
          <span className="col">Air Cabinet</span>{" "}
          <span
            className="col primaryTextOrangeColor display-5"
            style={{ fontSize: "20px" }}
          >
            of 85 %
          </span>
        </p>
        <div className="progress " style={{ height: "10px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "85%", height: "10px" }}
          ></div>
        </div>
        <p className=" mt-3 mb-0 row">
          <span className="col">Travel and tourism</span>{" "}
          <span
            className="col primaryTextOrangeColor display-5"
            style={{ fontSize: "20px" }}
          >
            of 75 %
          </span>
        </p>
        <div className="progress " style={{ height: "10px" }}>
          <div
            className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className=" mt-3 mb-0 row">
          <span className="col">Airline & AirPort</span>{" "}
          <span
            className="col primaryTextOrangeColor display-5"
            style={{ fontSize: "20px" }}
          >
            of 75 %
          </span>
        </p>
        <div className="progress " style={{ height: "10px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "65%", height: "10px" }}
          ></div>
        </div>

        <p className=" mt-3 mb-0 row">
          <span className="col">AirCargo Managment</span>{" "}
          <span
            className="col primaryTextOrangeColor justify-content-end display-5"
            style={{ fontSize: "20px" }}
          >
            of 95 %
          </span>
        </p>

        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "95%", height: "10px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressController;
