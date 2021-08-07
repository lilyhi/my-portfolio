import React, { useState } from "react";
import ProjectCard from "../ProjectCard";

function Portfolio() {
  const [projectList] = useState([
    {
      id: 1,
      title: "Coding Quiz",
      image: `${process.env.PUBLIC_URL}/portfolio/code-quiz.png`,
      githubLink: "http://github.com/lilyhi/code-quiz",
      description: "A timed quiz on JavaScript fundamentals",
      keywords: ["HTML", "CSS", "JavaScript"],
      deployed:"https://lilyhi.github.io/code-quiz/"
    },
    {
      id: 2,
      title: "Daily Planner",
      image: `${process.env.PUBLIC_URL}/portfolio/daily-planner.png`,
      githubLink: " https://github.com/lilyhi/daily-planner",
      description: "A minimalist planner for scheduling your work day events",
      keywords: ["HTML", "CSS", "JavaScript", "jQuery", "Moment.js"],
      deployed:"https://lilyhi.github.io/daily-planner/"

    },
    {
      id: 3,
      title: "Budget Buddy",
      image: `${process.env.PUBLIC_URL}/portfolio/budget-tracker.png`,
      githubLink: "https://github.com/lilyhi/budget-tracker",
      description: "A budget tracker buddy to keep you on track of your finances",
      keywords: ["Node", "Express", "Javascript", "MongoDB", "Mongoose"],
      deployed:"https://budget-buddyforever.herokuapp.com/"
    },
      {
      id: 4,
      title: "Note Taker",
      image: `${process.env.PUBLIC_URL}/portfolio/note-taker.png`,
      githubLink: "https://github.com/lilyhi/note-taker",
      description: "A note taker application to help you stay organized",
      keywords: ["Node", "Express", "Javascript"],
      deployed:"https://note-taker-lover.herokuapp.com/notes"
    },
    {
      id: 5,
      title: "Group Collaboration - Trivia with a Twist",
      image: `${process.env.PUBLIC_URL}/portfolio/trivia-game.png`,
      githubLink: "https://github.com/Shilohjones194/TriviaWithATwist",
      description: "Online trivia drinking game",
      keywords: ["HTML", "CSS", "Javascript"],
      deployed:"https://shilohjones194.github.io/TriviaWithATwist/"

    },
    {
      id: 6,
      title: "Weather Dashboard",
      image: `${process.env.PUBLIC_URL}/portfolio/weather-dash.png`,
      githubLink: "https://github.com/lilyhi/weather-dashboard",
      description: "A weather dashboard that allows you to search the 5-Day forecast for any city",
      keywords: ["HTML", "CSS", "Javascript", "Moment.js"],
      deployed:"https://lilyhi.github.io/weather-dashboard/"
    }
  ]);
  return (
    <div>
      <h1 className= "main-title">Portfolio</h1>
    <hr className="break-line"/> 
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
