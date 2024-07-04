import React from "react";

import "./topButton.css";
const TopButton = () => {
  return (
    <>
      <button className="topBtn" onClick={()=>window.scrollTo(0 ,0)}>
      <p>Top</p>
      </button>
    </>
  );
};

export default TopButton;
