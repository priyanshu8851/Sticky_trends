import React from 'react'
import "./projectcard.css"
const ProjectCard = (props) => {
  console.log(props.head)
  return (
    
    <>
      <div className="project-card">
      <img src={props.img} alt="Project view" />
        <div className="card-content">
          <h3>{props.head}</h3>
          <p>{props.amount}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
