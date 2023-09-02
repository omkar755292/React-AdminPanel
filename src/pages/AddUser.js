import React from 'react'

const AddUser = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder='enter user name' />
        <input type="text" placeholder='enter user email' />
        <input type="text" placeholder='enter user phone' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddUser