import React from 'react'
import UserCard from '../../../component/card/UserCard'

const UserList = () => {
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

export default UserList