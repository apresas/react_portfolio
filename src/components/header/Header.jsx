import React from "react";
import "./header.css";
import CTA from "./CTA";
import Portrait from "../../assets/me_img.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5 className='text-light'>Hello I'm</h5>
        <h1>AJ Presas</h1>
        <h5 className="text-color">UI/UX Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="portrait">
          <img src={Portrait} alt="portait" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
