import React, { useState } from "react";
import ProjectCard from "../ProjectCard";

function Portfolio() {
  const [projectList] = useState([
    {
      id: 1,
      title: "Coding Quiz",
      image: `${process.env.PUBLIC_URL}/portfolio/code-quiz.png`,
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"
    },
    {
      id: 2,
      title: "Coding Quiz",
      image: `${process.env.PUBLIC_URL}/portfolio/daily-planner.png`,
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"

    },
    {
      id: 3,
      title: "Coding Quiz",
      image: `${process.env.PUBLIC_URL}/portfolio/budget-tracker.png`,
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"
    },
      {
      id: 4,
      title: "Coding Quiz",
      image: `${process.env.PUBLIC_URL}/portfolio/note-taker.png`,
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"
    },
    {
      id: 5,
      title: "Coding Quiz",
      image: `${process.env.PUBLIC_URL}/portfolio/trivia-game.png`,
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"

    },
    {
      id: 6,
      title: "Coding Quiz",
      image: `${process.env.PUBLIC_URL}/portfolio/weather-dash.png`,
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "sample description",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"http://www.google.com"
    }
  ]);
  return (
    <div>
      <h1>Hello Portfolio</h1>
   <hr className="bg-secondary"/> 
      {/* Loop through the list of projects  */}
      <div>
        <div className="flex-row projectContainer">
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
    </div>
  );
}

export default Portfolio;

//
