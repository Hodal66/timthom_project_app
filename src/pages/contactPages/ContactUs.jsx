import React from "react";
import { MdEmail, MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import Footer from "../../components/footer/Footer";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import WaveLine from "../../components/WaveLine/WaveLine";
import "./contact__us.css";
import UserMessage from "./UserMessage";
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
        <section className="text-center">
          <WaveLine />
          <h1 className="primaryTitle ">Leave your Message Here</h1>
          <UserMessage />
        </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ContactUs;
