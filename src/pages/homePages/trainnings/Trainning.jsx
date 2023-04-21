// import React from "react";
// import Card from "react-bootstrap/Card";
// import "./trainning.css";
// import TrainningData from "../../../database/TrainningData";
// function Trainning() {
//   return (
//     <div className="cardTrainingContainer">
//       {TrainningData &&
//         TrainningData.map((item, id) => {
//           return (
//             <div key={id}>
//               <Card style={{ width: "38rem" }}>
//                 <Card.Img variant="top" src={item.imagSrc} />
//                 <Card.Body>
//                   <Card.Title>{item.imagTitle}</Card.Title>
//                   <Card.Text>{item.contentDesc}</Card.Text>
//                   {/* <Button variant="primary">Go somewhere</Button> */}
//                 </Card.Body>
//               </Card>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default Trainning;

import React from "react";
import "./trainning.css";
import { NavLink } from "react-router-dom";

import { FaRegHandPointRight } from "react-icons/fa";
function Trainning() {
  return (
    <div className="content-container">
      <div className="trainningContent-container">
        <div className="leftTrainningContent">
          <div className="title">
            <h1 className="primaryTitle ">Come and be Trained</h1>
            <div className="content1">
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Aviation Management/IATA/ICAO
              </div>
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Monitoring & Evaluation/ ICT
              </div>
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Hospitality
              </div>
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Tourism
              </div>
            </div>
          </div>
        </div>
        <div className="rightContentContainer">
          <div className="title">
            <h1 className="primaryTitle ">Other Services</h1>
            <div className="content2">
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Training in aviation courses
              </div>
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Air Ticket
              </div>
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Visa Assistance
              </div>
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Travel insurance
              </div>{" "}
              <div>
                <span>
                  <FaRegHandPointRight className="trainingIcon" />
                </span>{" "}
                Consultancy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btTobeCentered">
        <NavLink to="/training">
          <button className="btnOrange  my-4 ">ReadMore....</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Trainning;
