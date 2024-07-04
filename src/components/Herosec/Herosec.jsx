import React from 'react'
import "./herosec.css"
import heroimg from "../../assets/HeroArea.png";
import { Link } from "react-router-dom";

const Herosec = () => {
  return (
    <>
      <div className="herosec main">
        <div className="container">
          <div className="hero-txt">
            <p className='big-txt'>We Make "Stikers"</p>
            <p className='med-txt'>That You Love</p>
            <Link to={"/stickers  "}>Explore More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosec
