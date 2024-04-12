import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const Header = () => {
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();
  let firstName;
  if (user) {
    firstName = user.displayName.split(' ')[0];
  }
  else {
    firstName = 'guest';
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='container'>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid justify-content-center">
          <Link class="navbar-brand" to="/home">
            <Logo />&nbsp;{firstName}.adminPanel
          </Link>

          <div class="btn-group position-absolute end-0">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle"></i> {firstName}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" type="button">Name: {user.displayName}</button></li>
              <li><button class="dropdown-item" type="button">Email: {user.email}</button></li>
              <li><button class="dropdown-item" type="button">Phone: {user.phone}</button></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><button onClick={handleLogout} class="dropdown-item" type="button">Logout</button></li>
            </ul>
          </div>


        </div>
      </nav>
      <Navbar />
    </div>
  )
}

export default Header