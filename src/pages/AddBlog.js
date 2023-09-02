import React from 'react'

const AddBlog = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Enter Name</label>
        <input type="text" placeholder='enter user name' />
        <label htmlFor="email">enter email</label>
        <input type="text" placeholder='enter user email' />
        <input type="text" placeholder='enter user phone' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddBlog