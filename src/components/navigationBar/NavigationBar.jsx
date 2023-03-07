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
              <span>(+250)788519634</span>
            </li>
            <li className="col-4">
              <span>
                <AiOutlineMail />
              </span>
              <span>info@timtomaviation.com</span>
            </li>
            <li className="col-4 px-md-4">
              <div className="row">
                <span className="">
                  <GoLocation />
                </span>
                <span className="" id="navLocation">
                  <span>kabeza</span> <span>road</span>, <span>KK</span>{" "}
                  <span>18</span> AV
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-lg-2">
        <ul id="social__media">
          <li>
            <a href="mailTo:info@timtomaviation.com" aria-label="Email">
              <MdOutlineEmail className="primaryTextWhiteColor" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Facebook">
              <FiFacebook className="primaryTextWhiteColor" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter">
              <FiTwitter className="primaryTextWhiteColor" />
            </a>
          </li>
          <li>
            <a href="http://wa.me/+250788519634" aria-label="Instagram">
              <BsWhatsapp className="primaryTextWhiteColor" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
