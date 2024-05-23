import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const Register = () => {
  const { register } = useUserAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const add = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, fullName);
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className='container mt-3'>
      <form onSubmit={add}>
        <div class="mb-3">
          <label class="form-label">Enter Your Full Name</label>
          <input type="name"
            class="form-control"
            id="name"
            value={fullName}
            onChange={(e) => { setFullName(e.target.value) }} />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email"
            class="form-control"
            id="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className='container'>
          <button type="submit" class="btn btn-primary mx-1 w-50">Submit</button> &nbsp;
          <Link to="/authentication/login" className='w-50 mx-1'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register