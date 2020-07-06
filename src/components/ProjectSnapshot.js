import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Projects = ({
  title,
  githuburl,
  imageurl,
  project,
  routename,
}) => {
  return (
    <Link
      to={{
        pathname: `/projects/${routename}`,
        info: { project },
      }}
    >
      <div class="col s12 m12 l6 xl4">
        <div class="portfolio-effect">
          <div class="portfolio-item portfolio-effect__item portfolio-item--eff1">
            <img
              class="responsive-img"
              src={`${imageurl}`}
              alt="Portfolio Item"
            />

            <div class="portfolio-item__info">
              <h3 class="portfolio-item__header">{title}</h3>

              <div class="portfolio-item__links">
                <div class="portfolio-item__link-block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
