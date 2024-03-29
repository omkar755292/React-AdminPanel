import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" to="/home/dashbord">Dashbord</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/home/users">Users</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/home/blogs">Blogs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/home/projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/home/messages">Messages</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar