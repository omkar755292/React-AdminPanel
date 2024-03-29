import React from 'react'
import AddUser from '../user/AddUser'
import AddBlog from '../blog/AddBlog'
import AddProject from '../project/AddProject'
import DashbordInfo from './DashbordInfo'

const DashbordMain = (props) => {
  
  return (
    <div className='container p-5' >
    <DashbordInfo infoPage= {props.infoPage}/>
    <AddUser userForm= {props.userForm}/>
    <AddBlog blogForm= {props.blogForm}/>
    <AddProject projectForm= {props.projectForm}/>
    </div>
  )
}

export default DashbordMain