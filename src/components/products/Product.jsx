import React from "react";
import "./product.css";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Product = () => {
  const cardData = [
    {
      name: "46 MotoRacer",
      img: "/images/46.jpg",
      amt: "20rs",
    },

    {
      name: "AmongUs",
      img: "/images/AmongUs.jpg",
      amt: "20rs",
    },
    {
      name: "AngrySkull",
      img: "/images/AngrySkull.jpg",
      amt: "20rs",
    },
    {
      name: "Anxiety",
      img: "/images/Anxiety.WEBP",
      amt: "20rs",
    },
    {
      name: "Batman",
      img: "/images/batman.JPG",
      amt: "20rs",
    },
  ];
  return (
    <>
      <div className="product-area main">
        <div className="container">
          <div className="heading">
            <span>Our Products</span>
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
