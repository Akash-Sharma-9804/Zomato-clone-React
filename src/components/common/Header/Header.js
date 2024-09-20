import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search">
          <div className="location-wrap">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>kolkata</div>
            </div>
            <i class="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-div"></div>
          <div className="header-searchbar">
          <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              type="text"
              placeholder="Search for restaurant,cusine or dish"
              className="search-input"
            />
            
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/ca8/2f073dedc97f127fadc4265396cbdca8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile-pic" className="header-profile-image"
          />
          <span className="header-username">Akash</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-opt-icon"></i>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
