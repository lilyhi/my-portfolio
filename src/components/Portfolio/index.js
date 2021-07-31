import React, { useState } from "react";
import ProjectCard from "../ProjectCard";

function Portfolio() {
  const [projectList] = useState([
    {
      id: 1,
      title: "Coding Quiz",
      image: "./assets/portfolio/image1.png",
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"
    },
    {
      id: 2,
      title: "Coding Quiz",
      image: "./assets/portfolio/image1.png",
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"

    },
    {
      id: 3,
      title: "Coding Quiz",
      image: "./assets/portfolio/image1.png",
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"
    },
  ]);
  return (
    <>
      <h1>Hello Portfolio</h1>
   <hr className="bg-secondary"/> 
      {/* Loop through the list of projects  */}
      <div>
        <div className="flex-row">
          {projectList.map((project, i) => (
            // console.log("project", project, i )
            <ProjectCard
              key={i}
              imageLink={project.image}
              title={project.title}
              id={project.id}
              deployed={project.deployed}
              githubLink ={project.githubLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;

//
