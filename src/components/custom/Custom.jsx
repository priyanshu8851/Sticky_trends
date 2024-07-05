import React from 'react'
import "./custom.css"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
const Custom = () => {
  return (
    <>
      <div className="custom-area main">
        <div className="container">
            <p>For Placing order Contact now </p>
            <div className="custom-icons" id='contact'>
                <a href="tel:+919560474750" ><FaPhoneAlt /></a>
                <a href="https://wa.me/qr/INJW72NEGELLN1" target="_blank"> <FaWhatsapp /></a>
                <a href="https://www.instagram.com/sticky_trends/" target="_blank"> <FaInstagram /></a>
                <a href="mailto: Rishuverma4659@gmail.com" target="_blank"> <BiLogoGmail /></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Custom
