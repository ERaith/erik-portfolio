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
          imageurl= {project.imageurl}
          project = {project}
          routename = {project.routename}
        />
      )
    })
  }
  return  (
    <div className = "projects-container grey darken-2" id="projects">
      <div className = "project-header">
        <h2>PROJECTS</h2>
      </div>
      {renderProjects()}
    </div>
  )

};

export default Projects;
