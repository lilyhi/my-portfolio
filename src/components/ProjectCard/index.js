import React from "react";

function ProjectCard(props) {
  return (
    <div className="projectCard">
        <img
          src={props.imageLink}
          alt={props.title}
          className="img-thumbnail mx-1"
        />
      <div className="projectLinks">
        <a href={props.githubLink} target="_blank"rel="noreferrer">GitHub Link</a>
        <a href={props.deployed} target="_blank" rel="noreferrer">Demo Here</a>
      </div>  
    </div>
  );
}
export default ProjectCard;
