import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashbord from './Dashbord'
import Users from './Users'
import BlogList from './BlogList'
import ProjectList from './ProjectList'
import Messages from './Messages'
import Header from '../component/Header'

const Main = () => {
  return (
    <div>
      <Header userName="omkar" />
      <Routes>
        <Route exact path='/dashbord/*' element={<Dashbord />} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/blogs' element={<BlogList />} />
        <Route exact path='/projects' element={<ProjectList />} />
        <Route exact path='/messages' element={<Messages />} />
      </Routes>
    </div>
  )
}

export default Main