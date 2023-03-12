import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
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
            className="btnBlue border-0 "
            style={{ marginLeft: "0.5rem" }}
          />
        </form>
      </div>
      <Link to="admin-login">
        <ButtonComponent
          text="Admin Login"
          // icon,
          // textSccController
          className="btnOrange my-4"
          // id,
        />
      </Link>
    </div>
  );
}

export default NewsLetter;
