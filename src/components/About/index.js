import React from 'react';
// import coverImage from "../../assets/cover/cover-image.png";

function About() {

  return (
    <section className="my-5" >
      <div className="aboutIntro">
        <h1 style={{ width: "60%", marginRight: "15px"}} id="about">Hello, I’m Lily. Originally from California, I now call central 
        Phoenix home with my two pups and extensive collection of plants.
        </h1>
        <img src={`${process.env.PUBLIC_URL}/images/lilyhi.png`} className="my-2 personal-image" 
        style={{ width: "30%" }} alt="headshot of Lily" />
      </div> 
      <br/>
      <br/>
      <div className="my-2 aboutMe">
        <p>
        As a highly organized individual who enjoys problem solving, I was drawn to coding as a way to channel my interests and abilities. I thrive when I get to utilize my detective skills on a project to determine issues and uncover resolutions. I’m persistent and stay hyper focused until I can find the solution I’m looking for!
        Currently working in the tech field, I already have a foundational skill set that includes QA, technical support and UI research. 
        <br/> 
        <br/> 
        In my previous experience in social work, resilience, persistence, and organization were key aspects to maintaining the highest quality of service for our community. Equity, integrity and diversity are also values that are extremely important to me in life and work. 
        I’m excited to bring my unique perspective to coding and the tech industry. 
        </p>
      </div>
    </section>
  )
}





export default About;