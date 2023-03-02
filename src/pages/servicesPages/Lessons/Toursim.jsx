import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import { TourismCourses } from "../../../database/courses";
import StartControl from "../../homePages/upcomingCourses/StartControl";
function Tourism() {
  return (
    <div>
      <div className=" row p-5 courseCardContainer">
        {TourismCourses &&
          TourismCourses.map(
            (
              {
                courseImage,
                altImage,
                money,
                content,
                likes,
                title,
                teacher,
                lesson,
              },
              index
            ) => {
              return (
                <div key={index} className="">
                  <div className="card secondaryBackGroundWhiteColor ">
                    <img
                      src={courseImage}
                      alt={altImage}
                      className="img-fluid card-img-top"
                      style={{ width: "100%" }}
                    />
                    <div className="priceAndAproval p-4 row ">
                      <div className="col">
                        <ButtonComponent
                          text={`$${money}`}
                          className="secondaryBackGroundBlueColor secondaryTextWhiteColor btn-sm"
                          icon={<MdArrowForward />}
                        />
                      </div>
                      <div className="col">
                        <StartControl />
                      </div>
                      <div className="px-4">
                        <h4 className="text-body  py-2 text-capitalize">
                          {title}
                        </h4>

                        {teacher.map(({ position, professionalism }, index) => {
                          return (
                            <p className="" key={{ index }}>
                              Lecture
                              <span className="secondaryTextBlueColor px-2">
                                {position}
                              </span>{" "}
                              in{" "}
                              <span className="primaryTextOrangeColor px-2">
                                {professionalism}
                              </span>
                            </p>
                          );
                        })}

                        <p className="">{content}</p>
                      </div>
                      <Link to={`/service_details/${index}`}>
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
            }
          )}
      </div>
    </div>
  );
}

export default Tourism;
