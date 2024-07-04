import React from 'react'
import ProjectCard from "../components/products/ProjectCard";
import projects from "../utils/cardData.js"

const Sticker = (props) => {
  return (
    <>
    <div className="stikers main">
      <div className="container">
        <div className="heading">
          <span>
            Products
          </span>
        </div>
        <div className="products">
        {projects.map((project, index) => {
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
      </div>
    </div>
    </>
  )
}

export default Sticker
