import React, {useState}from "react";


export const Projects = ({title,githuburl,imageurl}) => {
  return (
    <div class="content-block__effect">
      <div class="portfolio-effect">
        <div class="portfolio-item portfolio-effect__item portfolio-item--eff1">
          <img
            class="portfolio-item__image"
            src={`${imageurl}`}
            alt="Portfolio Item"
          />

          <div class="portfolio-item__info">
            <h3 class="portfolio-item__header">{title}</h3>

            <div class="portfolio-item__links">
              <div class="portfolio-item__link-block">
                <a class="portfolio-item__link" href={`${githuburl}`} title="Link Title">
                  <i class="material-icons">Details</i>
                </a>
              </div>
              <div class="portfolio-item__link-block">
                <a class="portfolio-item__link" href={`${githuburl}`} title="Link Title">
                  <i class="material-icons">Repo</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
