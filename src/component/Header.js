import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='container'>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid justify-content-center">
          <Link class="navbar-brand" to="/home">
            <Logo />&nbsp;{props.userName}.adminPanel
          </Link>
        </div>
      </nav>
      <Navbar />
    </div>
  )
}

export default Header