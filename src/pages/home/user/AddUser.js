import React, { useState } from 'react'
import api from '../../../api/api';

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('');

  const createUser = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password, confirmPassword }
    const response = await api.post('/api/user', newUser);
    console.log(response);
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
  }
  return (
    <div className='container'>
      {props.userForm ?
        <form onSubmit={createUser}>
          <div class="mb-3">
            <label class="form-label">User Name</label>
            <input type="name"
              class="form-control"
              value={name}
              onChange={(e) => { setName(e.target.value) }} />
          </div>

          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Confirm Password</label>
            <input type="password"
              value={confirmPassword}
              onChange={(e) => { setConfirmPassword(e.target.value) }}
              class="form-control" />
          </div>

          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" />
            <label class="form-check-label" >Remember Me</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> : ""}
    </div>
  )
}

export default AddUser