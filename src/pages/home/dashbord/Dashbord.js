import React, { useState } from 'react'
import DashbordBar from '../../../component/DashbordBar'
import Avtar from '../../../component/Avtar'
import DashbordMain from './DashbordMain'

const Dashbord = () => {
  const [infoPage, setInfo] = useState(true);
  const [userForm, setUserForm] = useState(false);
  const [blogForm, setBlogForm] = useState(false);
  const [projectForm, setProjectForm] = useState(false);

  const viewInfo = ()=>{
    setInfo(true);
    setUserForm(false);
    setBlogForm(false);
    setProjectForm(false);
  }
  const addUser = ()=>{
    setInfo(false);
    setUserForm(true);
    setBlogForm(false);
    setProjectForm(false)
  }
  const addBlog = ()=>{
    setInfo(false);
    setUserForm(false);
    setBlogForm(true);
    setProjectForm(false);
  }
  const addProject = ()=>{
    setInfo(false);
    setUserForm(false);
    setBlogForm(false);
    setProjectForm(true);
  }
  return (
    <div className='container'>
      <DashbordBar className='align-self-end' viewInfo={viewInfo} addUser={addUser} addBlog={addBlog} addProject={addProject}/>
      <div className='d-flex align-items-start border p-5'>
        <Avtar />
        <DashbordMain  infoPage={infoPage} userForm={userForm} blogForm={blogForm} projectForm={projectForm}/>
      </div>
    </div >
  )
}

export default Dashbord