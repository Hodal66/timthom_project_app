import React from "react";
import { MdEmail, MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import Footer from "../../components/footer/Footer";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import "./contact__us.css";
function ContactUs() {
  return (
    <div
      className="contuct__us__MainContainer "
      style={{ width: "100vw", height: "100vh" }}
    >
      <HeaderPageComponent
        title="Contact Us"
        prevLink="/"
        prevLinkText="Home"
        nextLink=""
        nextLinkText="Contuct Us"
      />
      <section className="primaryBackGroundWhiteColor contuct__Us_content-container">
        <header className="text-center">
          <h1 className="primaryTitle">Get In Touch</h1>
        </header>

        <section className="locationContainer">
          <div className="imageBackgroundContainer text-center">
            <div className="overBlueColor">
              <div className="address__container p-2">
                <div className="addres">
                  <div className="icon__adress-container">
                    <MdLocationOn />
                  </div>
                  <p>Remera – Giporoso </p>
                  <p>Kigali – Rwanda.</p>
                </div>
                <div className="addres">
                  <div className="icon__adress-container">
                    <MdOutlineLocationCity />
                  </div>
                  <p>Union plaza, 2nd floor</p>
                  <p>towards kabeza road, KK 18 AV</p>
                </div>
                <div className="addres">
                  <a href="mailTo:info@timtomaviation.com" aria-label="Email">
                    <div className="icon__adress-container">
                      <MdEmail />
                    </div>
                    <p>info@timtomaviation.com</p>
                    <p>+250788519634 </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="form__container">
          <div className="form-row">
            <div className="col-md-3"></div>
            <div className="inputContainer col-md-3">
              <label htmlFor="inputEmailAdress" className="">
                <span> Enter Your Name</span>{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Your Name"
                className="form-control py-2 px-4"
              />
            </div>
            <div className="inputContainer col-md-3">
              <label htmlFor="inputEmailAdress" className="">
                <span> Enter Your Email</span>{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Your Email"
                className="form-control py-2 px-4"
              />
            </div>

            <div className="col-md-3"></div>
          </div>
          <div className="form-row">
            <div className="col-md-3"></div>

            <div className="textAteaConatiner col-md-6">
              <label htmlFor="inputEmailAdress" className="">
                <span>Your Message Here</span>{" "}
                <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control  py-2 px-4"
                name="inputMessage"
                id="InputMessageId"
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
              ></textarea>
              <div className="IagreeThar">
                <p>
                  * I agree that my submitted data is being collected and
                  stored. For further details on handling user data, see our
                  Privacy Policy.
                </p>
              </div>
              <div className="form__button-container">
                <ButtonComponent
                  text="SEND A MESSAGE"
                  textSccController="fw-bold"
                  className="primaryBackGroundOrangeColor primaryTextWhiteColor px-4 py-2 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ContactUs;
