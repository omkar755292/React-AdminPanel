import React, { useEffect, useState } from 'react'
import ProjectCard from '../../../component/card/ProjectCard'
import api from '../../../api/api';

const ProjectList = () => {
  
  const [projects, setProjects] = useState([]);
  const retrivedProject = async ()=>{
    const responce = await api.get("/api/project");
    console.log(responce);
    return responce.data;
  }
  useEffect(() => {
    const getAllProject = async()=>{
      const allProject = await retrivedProject();
      if (allProject) {
        setProjects(allProject);
      }
    }
    getAllProject();
  }, []);
  
  const renderProjects = projects.map((project)=>{
    return <ProjectCard project= {project} key={project.id}/>
  });
  return (
    <div className='container d-flex flex-wrap my-5'>
      {renderProjects}
    </div>
  )
}

export default ProjectList