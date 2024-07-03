import React from 'react'
import "./tagline.css"

import Typewriter from 'typewriter-effect';
const Tagline = () => {
  return (
    <>
      <div className="tagline-area main">
        <div className="tagline-cont">
            <span>
            <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    "Colour Your World with Our Stickers",
                    "Peel, Stick, Smile: Stickers for Every Style!",
                    "From Our Heart to Your Art: Stickers that Stick!",
                    "Crafted with Care, Stuck with Love",
                  ],
                }}
              />
            </span>
        </div>
      </div>
    </>
  )
}

export default Tagline
