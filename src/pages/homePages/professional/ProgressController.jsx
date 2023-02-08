import React from "react";

function ProgressController() {
  return (
    <div>
      <div className="mainContent-container">
        <h1>We Are Professional And Expert</h1>
        <p className="py-1">
          Inventore veritatis et quasi architecto beatae vitae dicta sunt explic
          abo enim ipsam voluptatem quia voluptas sit aspernatur
        </p>
        <p className=" mt-3 mb-0 row">
          <span className="col">progress</span>{" "}
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
          <span className="col">progress</span>{" "}
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
          <span className="col">progress</span>{" "}
          <span
            className="col primaryTextOrangeColor display-5"
            style={{ fontSize: "20px" }}
          >
            of 65 %
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
          <span className="col">progress</span>{" "}
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
