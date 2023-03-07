import React from "react";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import StartControl from "../../homePages/upcomingCourses/StartControl";
import "./formReview.css";
function FormForReview({ titleOfLesson }) {
  return (
    <div>
      <section>
        <p className="reviewSmallTittle">Leave a Review</p>
        <p className="ReviewTitle">Be the first to review “{titleOfLesson}”</p>
        <div className="yourLating">
          <p>Your Rating</p>
          <StartControl />
        </div>
        <form action="">
          <div className="formContentContainer ">
            <div className="reviewRow">
              <label htmlFor="yourMessageReview">Your Review</label>
              <textarea col="10" row="10" id="yourMessageReview" />
            </div>
            <div className="reviewRow">
              <label htmlFor="YourNames">Your Name *</label>
              <input type="text" required />
            </div>
            <div className="reviewRow">
              <label htmlFor="YourEmail">Your Email *</label>
              <input type="email" required />
            </div>
            <ButtonComponent
              text="SUBMIT"
              className="btnOrange  px-5 mt-2 py-3 submitButton"
            />
          </div>
        </form>
      </section>
    </div>
  );
}

export default FormForReview;
