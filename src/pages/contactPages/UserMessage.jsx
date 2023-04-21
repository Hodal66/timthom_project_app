import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import ButtonComponent from "../../components/Buttons/ButtonComponent";
import "./form.css";
import { useState } from "react";
function UserMessage() {
  const [userCheck, setUserCheck] = useState(false);
  const handleCheckUser = () => {
    setUserCheck(!userCheck);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zpqkig8",
        "template_p7nkzus",
        form.current,
        "lE9rwgTZevcoCzX68"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("MESSAGE SENT SUCCESSFULLY");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="form__main-container" ref={form} onSubmit={sendEmail}>
      <div className="form__content-container">
        <div className="input__form-container">
          <label htmlFor="inputEmailAdress" className="inputLabel">
            <span> Enter Your Name</span>{" "}
            <span className="text-danger">(*)</span>
          </label>
          <input
            type="text"
            name="user_name"
            id="Name"
            placeholder="Your Name"
            className=""
          />
        </div>
        <div className="input__form-container">
          <label htmlFor="inputEmailAdress" className="inputLabel">
            <span>Your Email</span> <span className="text-danger">(*)</span>
          </label>
          <input
            type="email"
            name="user_email"
            id="Name"
            placeholder="mhthodol@gmai.com"
            className=""
          />
        </div>
        <div className="input__form-container">
          <label htmlFor="inputEmailAdress" className="inputLabel">
            <span>Your Message Here</span>{" "}
            <span className="text-danger">(*)</span>
          </label>
          <textarea
            name="message"
            id="InputMessageI"
            cols="30"
            rows="10"
            placeholder="Request any thing you want we are here to answer you !!"
          ></textarea>
        </div>
        <div className="">
          <p className="py-2">
            <span className="mx-2">
              <input type="checkbox" onClick={handleCheckUser} />
            </span>
            I agree that my submitted data is being collected and stored. For
            further details on handling user data.
          </p>
        </div>
        {userCheck ? (
          <div className="input__form-container">
            <ButtonComponent
              text="SEND A MESSAGE"
              type="submit"
              textSccController="fw-bold"
              className=" btnOrange px-4 py-2 formControlBtn"
            />
          </div>
        ) : (
          <div className="form__button-container">
            <ButtonComponent
              text="SEND A MESSAGE"
              type="submit"
              textSccController="fw-bold"
              className=" btnOrange px-4 py-2 disabledbtn formControlBtn"
              style={{ opacity: "02" }}
            />
          </div>
        )}
      </div>
    </form>
  );
}

export default UserMessage;
