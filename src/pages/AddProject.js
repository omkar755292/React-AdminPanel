import React from 'react'

const AddProject = (props) => {
  return (
    <div className='cotainer'>
      {props.projectForm ? <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title Of Project</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Description of Project</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Link of Project</label>
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

export default AddProject