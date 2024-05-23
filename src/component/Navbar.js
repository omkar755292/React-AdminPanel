import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" to="/home">Dashbord</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/users">Users</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/messages">Messages</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar