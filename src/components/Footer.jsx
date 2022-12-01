import React, { useState } from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { grey } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

export default function Footer() {
  const [newsletterMail, setNewsletterMail] = useState("");

  function validateEmail(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  }
  function sendSubscription(e) {
    e.preventDefault();
    validateEmail(newsletterMail)
      ? console.log("mail added : " + newsletterMail)
      : console.log("Invalid mail address");
  }

  return (
    <footer>
      <section className="section-info">
        <div className="footer-column">
          <h3 className="subtitles-footer">INFORMATION</h3>
          <p className="text-footer">Address</p>
          <p className="text-footer">City</p>
          <p className="text-footer">Phone number</p>
          <h3 className="subtitles-footer">CONTACT US</h3>
          <p className="text-footer">FAQS</p>
          <p className="text-footer">Message Us</p>
        </div>
        <div className="footer-column">
          <h3 className="subtitles-footer">SITE MAP</h3>
          <Link to="/">
            <p className="text-footer"> Home </p>
          </Link>
          <Link to="./shop">
            <p className="text-footer"> Shop </p>
          </Link>
          <Link to="./about">
            <p className="text-footer"> About </p>
          </Link>
          <Link to="./contact">
            <p className="text-footer"> Contact </p>
          </Link>
        </div>
        <div className="footer-column">
          <div>
            <h3 className="subtitles-footer">SOCIAL MEDIA</h3>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ color: grey[100] }} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ color: grey[100] }} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PinterestIcon sx={{ color: grey[100] }} />
            </a>
          </div>
          <h3 className="subtitles-footer">SIGN UP</h3>
          <p className="text-footer">
            Subscribe today for the latest news and save 10% in your shopping
            cart.
          </p>
          <form className="form-footer">
            <input
              type="mail"
              className="input-footer"
              value={newsletterMail}
              onChange={(e) => {
                setNewsletterMail(e.target.value);
              }}
              placeholder="E-mail Address..."
              required
            />
            <button
              className="send-btn-footer"
              onClick={(e) => {
                sendSubscription(e);
              }}
            >
              SEND
              <SendIcon fontSize="small" />
            </button>
          </form>
        </div>
      </section>
      <hr />
      <div className="section-copyright">
        <h4 className="copyrights-text">
          {" "}
          Web Design by <span className="dev">diegomartinruiz</span>
        </h4>
        <h4 className="copyrights-text">
          {" "}
          Copyright © 2022 by Let It Be. All rights reserved
        </h4>
      </div>
    </footer>
  );
}
