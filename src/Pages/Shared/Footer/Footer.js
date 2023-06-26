import React from "react";
import { Link } from "react-router-dom";
import bgFooter from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <footer className="footer mt-7 p-10">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </footer>
      <p className="text-center font-medium mb-9">
        Copyright 2022 All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
