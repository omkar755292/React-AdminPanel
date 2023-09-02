import React from 'react'
import DashbordBar from '../component/DashbordBar'
import Avtar from '../component/Avtar'
import DashbordMain from './DashbordMain'
import '../asset/css/dashbord.css'

const Dashbord = () => {
  return (
    <div className='container'>
      <DashbordBar/>
      <Avtar />
      <DashbordMain />
    </div>
  )
}

export default Dashbord