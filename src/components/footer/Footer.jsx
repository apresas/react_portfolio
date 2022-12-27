import React from "react";
import "./footer.css";
// import { FaFacebookF } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import Logo from "../../assets/pd_logo.png";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer_logo">
        <img src={Logo} alt="Logo" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        {/* <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a> */}
        <a
          href="https://twitter.com/bravesgoalie29"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; PresasDesigns. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
