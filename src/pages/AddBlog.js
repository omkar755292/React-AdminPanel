import React from 'react'

const AddBlog = (props) => {
  return (
    <div className='container'>
      {props.blogForm ? <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Heading</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Content</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Author Name</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02" />
          <label class="input-group-text" for="inputGroupFile02">Upload Image</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> : ""}
    </div>
  )
}

export default AddBlog