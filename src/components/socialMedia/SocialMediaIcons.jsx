import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./socialIcon.css";
function SocialMediaIcons({
  facebook,
  twitter,
  instagram,
  youtube,
  className,
}) {
  return (
    <div className={`myIconContainer ${className}`}>
      <a href={facebook} nonce="false">
        <FaFacebookF />
      </a>
      <a href={twitter} nonce="false">
        <FaTwitter />
      </a>
      <a href={instagram} nonce="false">
        <FaInstagram />
      </a>
      <a href={youtube} nonce="false">
        <FaYoutube />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
