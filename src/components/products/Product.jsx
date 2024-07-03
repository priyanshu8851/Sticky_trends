import React from 'react'
import "./product.css"
import ProjectCard from './ProjectCard'
import projects from "../../utils/cardData";

const Product = () => {
  return (
    <>
      <div className="product-area main">
        <div className="container">
        <div className="heading">
            <span>Our Products</span>
        </div>
        <div className="product-cards">
        {projects.map((project, index) => {
              return <ProjectCard key={index} img={project.img} amount={project.amt} head={projects.name}/>;
            })}
        </div>

        </div>
      </div>
    </>
  )
}

export default Product
