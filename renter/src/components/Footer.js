import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FaHotel } from "react-icons/fa";

function Footer() {
  return (
    <>
   <hr />
    <footer className="footer">
        
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
          <h2 className="logo"><FaHotel/>Renter</h2>
            <p>Your Ultimate Vacation Rental Partner</p>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h3>Discover</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/destinations">Destinations</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
      <h3 className="logo"><FaHotel/>Renter</h3>
        <p>
          &copy; {new Date().getFullYear()} Renter, a <b>Wilbur Labs</b> company.&nbsp;<b>Terms Privacy</b>
        </p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
