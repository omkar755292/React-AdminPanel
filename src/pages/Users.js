import React from 'react'
import UserCard from '../component/UserCard'

const Users = () => {
  return (
    <div className='container py-5'>
      <ol class="list-group list-group-numbered">
        <UserCard />
        <UserCard />
        <UserCard />
      </ol>
    </div>
  )
}

export default Users