import React from 'react'
import "./header.css"
import { RiArrowRightSLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <header id='header'>
        <span>STICKY_TRENDS</span>
        <a href='#contact'>
          Contact <RiArrowRightSLine />
        </a>
      </header>
    </>
  )
}

export default Header
