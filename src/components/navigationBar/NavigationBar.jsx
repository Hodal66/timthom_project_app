/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./navigation.css";
function NavigationBar() {
  return (
    <nav
      id="topNavBar"
      className=" container_fluid row secondaryBackGroundBlueColor justify-content-center pt-2 px-4 h-25"
    >
      <div className="col-md-8 col-md-10">
        <div>
          <ul className="row d-none d-dm-block d-md-flex">
            <li className="col-4">
              <span>
                <MdCall />
              </span>
              <span>(+250)0788519634</span>
            </li>
            <li className="col-4">
              <span>
                <AiOutlineMail />
              </span>
              <span>timtomaviation@gmail.com</span>
            </li>
            <li className="col-4 px-md-4">
              <span>
                <GoLocation />
              </span>
              <span>kabeza_road,_KK_18_AV</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-lg-2">
        <ul id="social__media">
          <li>
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="primaryTextWhiteColor" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter">
              <FaTwitter className="primaryTextWhiteColor" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="primaryTextWhiteColor" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="primaryTextWhiteColor" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
