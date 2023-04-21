/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import "./navigation.css";
function NavigationBar() {
  return (
    <nav
      id="topNavBar"
      className=" container_fluid row secondaryBackGroundBlueColor justify-content-center pt-2 px-4 h-25"
    >
      <div className="col-md-8 col-md-10">
        <div>
          <ul className="row d-none d-lg-block d-lg-flex">
            <li className="col-4">
              <span>
                <MdCall />
              </span>
              <span className="selection">(+250)788519634</span>
            </li>
            <li className="col-4">
              <span>
                <AiOutlineMail />
              </span>
              <span className="selection">info@timtomaviation.com</span>
            </li>
            <li className="col-4 px-md-4">
              <div className="row">
                <span className="">
                  <GoLocation />
                </span>
                <span className="" id="navLocation">
                  <span className="selection">kabeza</span>{" "}
                  <span className="selection">road</span>,{" "}
                  <span className="selection">KK</span>{" "}
                  <span className="selection">18</span>{" "}
                  <span className="selection"> AV</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-lg-2">
        <ul id="social__media">
          <li>
            <a
              href="mailTo:info@timtomaviation.com"
              aria-label="Email"
              title="Mail us to info@timtomaviation.com"
              rel="noopener noreferrer"
            >
              <MdOutlineEmail className="primaryTextWhiteColor icons" />
            </a>
          </li>
          <li>
            <a
              href="http://wa.me/+250788519634"
              aria-label="Instagram"
              title="Use what'sup!! to contact us!!"
              target="_blank"
              nonce="true"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="primaryTextWhiteColor icons" />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              nonce="true"
              rel="noopener noreferrer"
            >
              <FiFacebook className="primaryTextWhiteColor icons" />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="twitter"
              target="_blank"
              nonce="true"
              rel="noopener noreferrer"
            >
              <FiTwitter className="primaryTextWhiteColor icons" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
