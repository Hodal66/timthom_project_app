import React from "react";
import { Md17Mp, MdArrowForward } from "react-icons/md";
import ButtonComponent from "../../Buttons/ButtonComponent";
import "./newsLetter.css";
function NewsLetter() {
  return (
    <div>
      <h5>New Letter</h5>
      <p>
        Subscribe Our News Letter and get More Udate and get more notification
      </p>
      <div className="emailContainer">
        <form action="">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 mr-2"
            required
          />
          <ButtonComponent
            icon={<MdArrowForward />}
            className="primaryBackGroundOrangeColor border-0 px-4"
            style={{ marginLeft: "0.5rem" }}
          />
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
