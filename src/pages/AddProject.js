import React, { useState } from 'react'
import api from '../api/api';

const AddProject = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [ProjectLink, setProjectLink] = useState("")
  const [projectImage, setprojectImage] = useState('');

  const postProject = async (e) => {
    e.preventDefault();
    const newProject = { title, description, ProjectLink, projectImage }
    const response = await api.post('/api/project', newProject);
    console.log(response);
    setTitle('');
    setDescription('');
    setProjectLink('');
    setprojectImage('');
  }

  return (
    <div className='cotainer'>
      {props.projectForm ?
        <form onSubmit={postProject}>
          <div class="mb-3">
            <label class="form-label">Title Of Project</label>
            <input type="text"
              class="form-control"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
              aria-describedby="emailHelp" />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Description of Project</label>
            <input type="text"
              class="form-control"
              value={description}
              onChange={(e) => { setDescription(e.target.value) }} />
          </div>

          <div class="mb-3">
            <label
              class="form-label"
              value={ProjectLink}
              onChange={(e) => { setProjectLink(e.target.value) }} >Link of Project</label>
            <input type="url" class="form-control" />
          </div>

          <div class="input-group mb-3">
            <input type="file"
              class="form-control"
              value={projectImage}
              onChange={(e) => { setprojectImage(e.target.value) }} />
            <label class="input-group-text" >Upload Image</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> : ""}
    </div>
  )
}

export default AddProject