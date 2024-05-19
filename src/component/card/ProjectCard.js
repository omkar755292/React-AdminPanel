import React from 'react'

const ProjectCard = (props) => {
  
  console.log(props.project.projectImagePath);
  return (
    <div className='m-3'>
      <div class="card" style={{ width: "280px", height: "300px" }}>
        <img src={props.project.projectImagePath} class="card-img-top" alt="..." style={{ width: "280px" }} />
        <div class="card-body">
          <h5 class="card-title">{props.project.title}</h5>
          <p class="card-text">{props.project.description}</p>
          {/* <a href="/" class="btn btn-primary">View Project</a> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard