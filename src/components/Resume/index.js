import React from 'react';

//PHOTOLIST refer
function Resume() {
  const [skillSet]= useState([
    {
      category: "Front-End", 
      choices: ["HTML", "CSS", "Javascript","React JS"]
    },
    {
      category: "Back-End", 
      choices: ["MySQL", "MongoDB", "Sequlize",""]
    }
])
  return (
    <h1>Hello Resume</h1>
  )
}

export default Resume;