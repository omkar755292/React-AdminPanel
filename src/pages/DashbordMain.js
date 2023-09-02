import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddUser from './AddUser'
import AddBlog from './AddBlog'
import AddProject from './AddProject'

const DashbordMain = () => {
  return (
    <div>
        <Routes>
        <Route exact path='/dashbord/adduser' element={<AddUser/>}/>
        <Route exact path='/dashbord/addblog' element={<AddBlog/>}/>
        <Route exact path='/dashbord/addproject' element={<AddProject/>}/>
      </Routes>
    </div>
  )
}

export default DashbordMain