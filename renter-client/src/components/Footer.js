import React from "react";
import "./footer.css";
import help from "../images/customer-support.png";
import logo from "../images/renterLogo.png";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";

function Footer() {
  return (
    <footer>
      <div className="footer-details">
        <div className="footer-head">
          <div className="logo-sec">
          <img src={logo} alt="" />
          <div className="logo-wr">
          <h1>Renter</h1>
          <p>Peoples Trust</p>
          </div>
          </div>
          
          <p>
            <i class="fa fa-envelope"></i>
            amartya@test.com
          </p>
        </div>
        <div className="footer-text">
          <div className="knowmore">
            <p>Know More</p>
            <div className="ul-list">
              <ul>
                <li>About Us</li>
                <li>PNR Status</li>
                <li>Seat Availability</li>
                <li>Running Status</li>
              </ul>
              <ul>
                <li>Fare Calculator</li>
                <li>Time Table</li>
                <li>Station Details</li>
                <li>Blogs</li>
              </ul>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
          <div className="d-app">
            <p>Experience our app</p>
            <div className="av-apps">
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
            <h3>Connect With Us</h3>
            <div className="social-icons">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-youtube"></i>
            <i class="fa fa-linkedin"></i>
            </div>
            <p>© Copy right 2014-2022, Stark Enterprises Private Limited </p>
        </div>
      </div>
      <div className="help-btn">
        <img src={help} alt="" />
        <p>Help</p>
      </div>
    </footer>
  );
}

export default Footer;
