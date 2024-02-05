import React from "react";

import AdBar from "../../assets/images/ad-bar.png";

import "./MainContent.css";
import Navigation from "./Navigation";
import Info from "./Info";
import Articles from "./Articles";

const MainContent = () => {
  return (
    <div className="content-container">
      <div className="leftside-content-container">
        <Navigation />
        <Info />
        <Articles />
      </div>
      <aside className="rightside-content-container">
        <img src={AdBar} alt="" width="300" height="600" />

        {/* <div className="ads">
          {" "}
          <span>ADS</span> <span>300x600</span>
        </div> */}
      </aside>
    </div>
  );
};

export default MainContent;
