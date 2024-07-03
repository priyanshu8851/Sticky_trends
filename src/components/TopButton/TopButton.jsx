import React from 'react'
import { IoIosArrowDropup } from "react-icons/io";
import "./topButton.css"
const TopButton = () => {
  return (
    <>
      <div className="topBtn">
      <a href="#header">
        <button>
        <IoIosArrowDropup />
        </button>
      </a>
      </div>
    </>
  )
}

export default TopButton
