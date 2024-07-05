import React from "react";
import "./product.css";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Product = () => {
  const cardData = [
    {
      name: "46 MotoRacer",
      img: "/images/46.jpg",
      amt: "Rs. 20/-",
    },

    {
      name: "AmongUs",
      img: "/images/AmongUs.jpg",
      amt: "Rs. 20/-",
    },
    {
      name: "AngrySkull",
      img: "/images/AngrySkull.jpg",
      amt: "Rs. 20/-",
    },
    {
      name: "Anxiety",
      img: "/images/Anxiety.WEBP",
      amt: "Rs. 20/-",
    },
    {
      name: "Batman",
      img: "/images/batman.JPG",
      amt: "Rs. 20/-",
    },
  ];
  return (
    <>
      <div className="product-area main">
        <div className="container">
          <div className="heading">
            <span>Stickers</span>
          </div>
          <div className="product-cards">
            {cardData.map((project, index) => {
              console.log(project);
              return (
                <ProjectCard
                key={index}
                img={project.img}
                amount={project.amt}
                head={project.name}
                />
              );
            })}
          </div>
          <Link to={"/stickers  "} onClick={()=>window.scrollTo(0 ,0)}> Show More</Link>
        </div>
      </div>
    </>
  );
};

export default Product;
