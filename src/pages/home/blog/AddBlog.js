import React, { useRef, useState } from 'react'
import api from '../../../api/api';
import JoditEditor from 'jodit-react';
// import axios from 'axios';

const AddBlog = (props) => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState('');
  const [blogImg, setBlogImg] = useState("")
  const addBlog = async (e) => {
    e.preventDefault();
    const newBlog = { title, content, author, blogImg }
    const response = await api.post('api/blog', newBlog);
    console.log(response);
    setTitle('');
    setAuthor('');
    setBlogImg('');
    setContent('');
  }

  // const handleImageUpload = async (files, callback) => {
  //   const formData = new FormData();
  //   formData.append('file', files[0]);
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_MEDIAURL}/api/upload/image`, formData);
  //     if (response.data && response.data.fileUrl) {
  //       callback(response.data.fileUrl);
  //     } else {
  //       alert('Upload failed');
  //     }

  //   } catch (error) {
  //     console.error('There was an error uploading the image!', error);
  //     alert('Upload failed');
  //   }
  // }

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    uploader: {
      insertImageAsBase64URI: true,
    },

    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', 'eraser', 'ul', 'ol',
      'outdent', 'indent', 'font', 'fontsize', 'brush', 'paragraph', 'image', 'link', 'align', 'undo', 'redo'
    ]
  };
  return (
    <div className='container' >
      {
        props.blogForm ?
          <form onSubmit={addBlog}>
            <div class="mb-3">
              <label class="form-label">Heading</label>
              <input type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                class="form-control" />
            </div>
            <div class="mb-3">

              <label class="form-label">Content</label>

              {/* <textarea class="form-control"
              value={content}
              onChange={(e) => { setContent(e.target.value) }}
              rows="3"></textarea> */}
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => setContent(newContent)}
              />

            </div>
            <div class="mb-3">
              <label class="form-label">Author Name</label>
              <input type="name"
                class="form-control"
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
              />
            </div>

            {/* <div class="input-group mb-3">
            <input type="file"
              value={blogImg}
              onChange={(e) => { setBlogImg(e.target.value) }}
              class="form-control" />
            <label class="input-group-text" >Upload Image</label>
          </div> */}

            <button type="submit" class="btn btn-primary">Submit</button>
          </form> : ""
      }
    </div >
  )
}

export default AddBlog