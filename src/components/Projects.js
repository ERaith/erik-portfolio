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
      <div className = "project-header">
        <h2>PROJECTS</h2>
      </div>
      {renderProjects()}
    </div>
  )

};

export default Projects;
