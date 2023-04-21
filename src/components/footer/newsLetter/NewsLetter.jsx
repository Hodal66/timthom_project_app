import React from "react";
import { MdArrowForward } from "react-icons/md";
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

      <a
        href="https://mwewe.afriregister.com:2096/"
        nonce="true"
        target="_blank"
        rel="noopener noreferrer"
        className="btnOrange my-4"
      >
        Web-mail
      </a>
    </div>
  );
}

export default NewsLetter;
