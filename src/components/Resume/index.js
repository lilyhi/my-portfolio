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
        <h3>Skills:</h3>
        <div id="resume" className="container">
          <div className="card text-left">
            <div className="card-body text-left">
              <ul className="skills">
                <li>MERN Stack</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>Bulma</li>
                <li>Handlebars</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>MySQL</li>
                <li>ORM technique</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>PWAs</li>
                <li>GraphQL</li>
                <li>MVC design pattern</li>
              </ul>
            </div>
          </div>
        </div>
        <br/>
      <a href={`${process.env.PUBLIC_URL}/resume/Liliana_Hissong_Resume.pdf`}target="_blank" rel="noreferrer">Click here to download resume</a>

    </div>
  )
}

export default Resume;