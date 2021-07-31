import React from "react";

function ProjectCard(props) {
  return (
    <>
        <img
          src={props.imageLink}
          alt={props.title}
          className="img-thumbnail mx-1"
          key={props.id}
        />
      <a href={props.githubLink} target="_blank"rel="noreferrer">GitHub Link</a>
      <a href={props.deployed} target="_blank" rel="noreferrer">Demo Here</a>
    </>
  );
}
export default ProjectCard;
