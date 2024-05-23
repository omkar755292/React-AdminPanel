import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashbord from './home/dashbord/Dashbord'
import UserList from './home/user/UserList'
import BlogList from './home/blog/BlogList'
import ProjectList from './home/project/ProjectList'
import Messages from './home/message/Messages'
import Header from '../component/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Dashbord />} />
        <Route exact path='/home' element={<Dashbord />} />
        <Route exact path='/users' element={<UserList />} />
        <Route exact path='/blogs' element={<BlogList />} />
        <Route exact path='/projects' element={<ProjectList />} />
        <Route exact path='/messages' element={<Messages />} />
      </Routes>
    </div>
  )
}

export default Home