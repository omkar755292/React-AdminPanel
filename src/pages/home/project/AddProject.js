import React, { useState } from 'react'
import api from '../../../api/api';

const AddProject = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [projectUrl, setProjectUrl] = useState("")
  const [file, setFile] = useState("");
  const [projectImagePath, setFilePath] = useState("");

  const upload = async (e) => {

    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await api.post('/api/upload/', formData);
      console.log(response.data);
      console.log(response.data.filePath);
      setFilePath(response.data.filePath);

    } catch (error) {
      console.error('Error while posting project:', error);
    }
  }

  const inputFileChange = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    upload();
  }


  const postProject = async (e) => {

    e.preventDefault();
    
    const data = { title, description, projectUrl, projectImagePath}

    try {

      const response = await api.post('/api/project', data);
      console.log(response);
      setTitle('');
      setDescription('');
      setProjectUrl('');
      setFile('');
      setFilePath('');

    } catch (error) {
      console.error('Error while posting project:', error);
    }

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
            <label class="form-label" >Link of Project</label>
            <input type="url" class="form-control"
              value={projectUrl}
              onChange={(e) => { setProjectUrl(e.target.value) }} />
          </div>

          <div class="input-group mb-3">
            <input type="file"
              class="form-control"
              onChange={inputFileChange} />
            <label class="input-group-text" >Upload Image</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> : ""}
    </div>
  )
}

export default AddProject

