import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header id='header'>
        <span>STICKY_TRENDS</span>
        <div className="nav_comp">
          
        <a href='#contact'>
          Contact 
        </a>
        <Link to={"/ "}>Home</Link>
        </div>
      </header>
    </>
  )
}

export default Header
