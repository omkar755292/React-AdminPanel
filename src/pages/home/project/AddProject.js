import React, { useState } from 'react'
import api from '../../../api/api';
import axios from 'axios';

const AddProject = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [projectUrl, setProjectUrl] = useState("")
  const [file, setFile] = useState("");
  const [projectImagePath, setFilePath] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(`${process.env.REACT_APP_MEDIAURL}/api/upload/image`, formData);
      console.log(response.data);
      setFilePath(response.data.fileUrl); // Set the file path in state
    } catch (error) {
      console.error('Error while uploading file:', error);
    }
  };

  const inputFileChange = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
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
            <label onClick={upload} class="input-group-text" >Upload Image</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> : ""}
    </div>
  )
}

export default AddProject

