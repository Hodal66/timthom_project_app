import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import StartControl from "../../homePages/upcomingCourses/StartControl";

function Aviation({ allData }) {
  return (
    <div className=" row p-5 courseCardContainer">
      {allData &&
        allData.map((items, id) => {
          return (
            <div key={id} className="">
              <div className="card secondaryBackGroundWhiteColor">
                <img
                  src={items.courseImage}
                  alt={items.altImage}
                  className="img-fluid card-img-top"
                  style={{ width: "100%", height: "30vh" }}
                />
                <div className="priceAndAproval p-4 row ">
                  {items.lessonDetails.map((lessonDetail, index) => {
                    return (
                      <div className="col" key={index}>
                        <ButtonComponent
                          text={`$${lessonDetail.money}`}
                          className="secondaryBackGroundBlueColor secondaryTextWhiteColor btn-sm px-2"
                        />
                      </div>
                    );
                  })}

                  <div className="col">
                    <StartControl />
                  </div>
                  <div className="px-4">
                    <h4 className="text-body  py-2 text-capitalize">
                      {items.titleInShortName}
                    </h4>
                    {items.teacher.map((teacherDetail, teacherId) => {
                      return (
                        <p className="" key={teacherId}>
                          Lecture
                          <span className="secondaryTextBlueColor px-2">
                            {teacherDetail.position}
                          </span>{" "}
                          in{" "}
                          <span className="primaryTextOrangeColor px-2">
                            {teacherDetail.professionalism}
                          </span>
                        </p>
                      );
                    })}

                    <p className="">{items.Context}</p>
                  </div>
                  <Link to={`/service_details/${items.id}`}>
                    <ButtonComponent
                      text="LEARN MORE"
                      className="primaryBackGroundBlueColor primaryTextWhiteColor m-4"
                      icon={<MdArrowForward />}
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Aviation;
