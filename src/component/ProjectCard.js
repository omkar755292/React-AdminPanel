import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='m-3'>
      <div class="card" style={{ width: "350px", height: "auto" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.project.title}</h5>
          <p class="card-text">{props.project.description}</p>
          <a href="/" class="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard