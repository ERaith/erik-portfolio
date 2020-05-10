import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pokemonImg from '../assets/Pokemon-Finder.png'

export const Projects = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="src/assets/Pokemon-Finder.png" />
        <img src={`${pokemonImg}`} alt="Italian Trulli"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <a href="https://github.com/ERaith" />
          <img
            class="github-logo"
            src="https://www.dropbox.com/s/boxo9isy6z288v7/github-logo.svg?raw=1"
            alt="Github logo"
          />
          <span>GITHUB Project Page</span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Projects;
