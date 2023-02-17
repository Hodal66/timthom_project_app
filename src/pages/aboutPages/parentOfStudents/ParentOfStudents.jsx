import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import { ourStaffSays } from "../../../database/OurStaffSays";
import "./parentOfStds.css";

function ParentOfStudents() {
  const [index, setIndex] = useState(0);
  const { namesOfStaff, Specialization, photoOfStaff, id, content } =
    ourStaffSays[index];
  const prevTestmonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(ourStaffSays.length - 1);
    }
  };

  const nextTestmonialHandler = () => {
    setIndex((next) => next + 1);
    if (index >= ourStaffSays.length - 1) {
      setIndex(0);
    }
  };
  return (
    <div
      className="parent___of__students-container   overflow-hidden text-center"
      style={{ width: "100%", paddingTop: "5rem" }}
    >
      <div className="centeredItems">
        <div className="whatParentSaysAboutStudent">
          <h1 className="text-center aboutStudentHeader py-4">
            What Our Student Said About Us!!!
          </h1>
          <div className="whatOurStaffSaysContainer">
            <div key={id}>
              <p>
                <span className="quotation">"</span>
                {content}
                <span className="quotation">"</span>
              </p>
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
              </div>
            </div>
          </div>
          <div className="buttonContainer row">
            <div
              className="rightButtonControll col-6"
              onClick={prevTestmonialHandler}
            >
              <ButtonComponent
                icon={<MdArrowBack />}
                className=" border border-1 border-primary primaryBackGroundOrangeColor primaryTextWhiteColor "
              />
            </div>
            <div
              className="leftButtonControll col-6"
              onClick={nextTestmonialHandler}
            >
              <ButtonComponent
                icon={<MdArrowForward />}
                className="primaryBackGroundOrangeColor primaryTextWhiteColor border border-1 border-primary"
              />
            </div>
          </div>
          <section>
            <div className="line py-4">
              <hr />
            </div>

            <div className="staffCollectionImages">
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
