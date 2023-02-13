import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import backGroundImageOfParentOfStudent from "../../../assets/images/section-img3.jpg";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import { ourStaffSays } from "../../../database/OurStaffSays";
import StartControl from "../../homePages/upcomingCourses/StartControl";
import "./parentOfStds.css";

function ParentOfStudents() {
  return (
    <div
      className="parent___of__students-container my-5  overflow-hidden"
      style={{ width: "100%" }}
    >
      <div className="leftButtonControll">
        <ButtonComponent
          icon={<MdArrowForward />}
          className="bg-transparent border border-1 border-primary"
        />
      </div>
      <div className="centeredItems">
        <div className="backgroundImageContainer">
          <img
            src={backGroundImageOfParentOfStudent}
            alt="backGroundImageOfParentOfStudent"
            style={{ width: "100%" }}
          />
        </div>
        <div className="whatParentSaysAboutStudent">
          <h1 className="text-center aboutStudentHeader">
            Our Student Parents Say About Us
          </h1>
          <div className="whatOurStaffSaysContainer">
            {ourStaffSays.map(
              ({ namesOfStaff, Specialization, photoOfStaff, id, content }) => {
                return (
                  <div key={id}>
                    <p>{content}</p>
                    <div className="staffDetails">
                      <div className="leftSideContent">
                        <div className="imageStaffContainer">
                          <img src={photoOfStaff} alt={photoOfStaff} />
                        </div>
                        <div className="contentDetail">
                          <p>{namesOfStaff}</p>
                          <p>{Specialization}</p>
                        </div>
                      </div>
                      <div className="rightSideContent row py-3">
                        <div className="col"></div>
                        <div className="col ">
                          {" "}
                          <StartControl />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="rightButtonControll">
            <ButtonComponent
              icon={<MdArrowBack />}
              className="bg-transparent border border-1 border-primary"
            />
          </div>
          <section>
            <div className="line">
              <hr />
            </div>

            <div className="staffCollectionImages  py-5">
              {ourStaffSays.map(({ photoOfStaff, id }) => {
                return (
                  <div key={id}>
                    <div className="imageCollectionContainer">
                      <img src={photoOfStaff} alt="photoOfStaff" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ParentOfStudents;
