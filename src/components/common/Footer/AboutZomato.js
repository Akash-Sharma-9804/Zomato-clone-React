import React from "react";
import "./about-zomato.css";

const AboutZomato = () => {
  return (
    <div>
      <div className="max-width">
        <div className="about ">
          <div className="footer-link">
            <span className="footer-text">About Zomato</span>
            <ul>
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-link">
            <span className="footer-text">Zomaverse</span>
            <ul>
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomato Live</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>
          <div className="footer-link">
            <span className="footer-text">For Restaurants</span>
            <ul>
              <li> Partner With Us </li>
              <li> Apps For You </li>
            </ul>
          </div>

          <div className="footer-link">
            <span className="footer-text">Learn More</span>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer-link">
            <span className="footer-text">Social links</span>
            <ul>
              <li></li>
              <li>
                <img
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  className="social-img"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  className="social-img"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-separator"></div>
        <div className="rights" >
          <span>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
            All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutZomato;
