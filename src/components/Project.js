import React from "react";
import { projectList } from "../assets/projectList";

export const Project = (props) => {
  const project = projectList.projects.find((project) => {
    return props.location.pathname.includes(project.routename);
  });

  const { about, challenges, wins, stack, stackBadges } = project.description;

  const renderBadges = () => {
    const badgeHTML = stackBadges.map((badge) => {
      return (
        <span class="col-content s12 m12 l2 mb-2 white-text badge blue">{badge}</span>
      );
    });
    return badgeHTML;
  };

  const renderProject = () => {
    return (
      <div className="container grey darken-2" id="projects">
        <div class="row valign-wrapper">
          <div class="col s12 m8 l8 center-align">
            <h2 class="white-text">{project.title}</h2>
          </div>
          <div class="col s4 m4 l4 ">{renderBadges()}</div>
        </div>
        <div class="row">
        </div>
        <div class="row">
          <div class="col s12 m12 l6">
            <img class="responsive-img" src={about.url}></img>
          </div>
          <div class="col s12 m12 l6">
            <h4>About</h4>
            <p>{about.text}</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m12 l6">
          <h4>Challenges</h4>
            <p>{challenges.text}</p>
          </div>
          <div class="col s12 m12 l6">
            <img class="responsive-img" src={challenges.url}></img>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m12 l6">
            <img class="responsive-img" src={wins.url}></img>
          </div>
          <div class="col s12 m12 l6">
          <h4>Wins</h4>
            <p>{wins.text}</p>
          </div>
        </div>
      </div>
    );
  };
  return renderProject();
};

export default Project;
