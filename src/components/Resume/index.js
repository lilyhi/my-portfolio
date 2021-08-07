import React from 'react';

//PHOTOLIST refer
function Resume() {
//   const [skillSet]= useState([
//     {
//       category: "Front-End", 
//       choices: ["HTML", "CSS", "JavaScript", "jQuery,", "Bootstrap", "React JS"]
//     },
//     {
//       category: "Back-End", 
//       choices: ["APIs", "Node", "Express", "MySQL", "Sequlize", "MongoDB", "Mongoose", REST, GraphQL ]
//     }
// ])
  return (
    <div>
      <h1 className= "main-title">Resume</h1>
      <hr className="break-line"/> 
        <a href={`${process.env.PUBLIC_URL}/resume/Liliana_Hissong_Resume.pdf`}target="_blank" rel="noreferrer">Download Resume</a>
    </div>
  )
}

export default Resume;