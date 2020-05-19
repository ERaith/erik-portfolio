import React from "react";
import {projectList} from "../assets/projectList";

import ProjectSnapshot from './ProjectSnapshot.js'

export const Projects = () => {
  const renderProjects = () => {
    return projectList.projects.map((project)=>{
      return (
        <ProjectSnapshot 
          title= {project.title}
          githuburl= {project.githuburl}
          about= {project.about}
          imageurl= {project.imageurl}
        />
      )
    })
  }
  return  (
    <div className = "projects-container grey darken-2">
      {renderProjects()}
    </div>
  )

};

export default Projects;
