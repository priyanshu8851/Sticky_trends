import React from 'react'
import "./herosec.css"
import heroimg from "../../assets/heroimg.jpg";
const Herosec = () => {
  return (
    <>
      <div className="herosec main">
        <div className="container">
          <div className="hero-txt">
            <p className='big-txt'>We</p>
            <p className='small-txt'>Make Stikers</p>
            <p className='med-txt'>That You Love</p>
          </div>
          <div className="hero-img">
            <img src={heroimg} alt="stickers" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosec
