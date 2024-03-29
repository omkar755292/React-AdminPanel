import React, { useState } from 'react'
import api from '../../../api/api';

const AddBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState('');
  const [blogImg, setBlogImg] = useState("")
  const addBlog =async(e)=>{
    e.preventDefault();
    const newBlog = {title, content, author, blogImg}
    const response = await api.post('api/blog', newBlog);
    console.log(response);
    setTitle('');
    setAuthor('');
    setBlogImg('');
    setContent('');
  }
  return (
    <div className='container'>
      {props.blogForm ? 
      <form onSubmit={addBlog}>
        <div class="mb-3">
          <label class="form-label">Heading</label>
          <input type="text" 
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          class="form-control" />
        </div>
        <div class="mb-3">
          <label  class="form-label">Content</label>
          <textarea class="form-control"
          value={content}
          onChange={(e) => { setContent(e.target.value) }}
           rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Author Name</label>
          <input type="name" 
          class="form-control"
          value={author}
          onChange={(e) => { setAuthor(e.target.value) }}
           />
        </div>
        <div class="input-group mb-3">
          <input type="file" 
          value={blogImg}
          onChange={(e) => { setBlogImg(e.target.value) }}
          class="form-control"  />
          <label class="input-group-text" >Upload Image</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> : ""}
    </div>
  )
}

export default AddBlog