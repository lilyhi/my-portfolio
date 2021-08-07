import React from 'react';
import coverImage from "../../assets/cover/cover-image.png";

// function About() {
//   return (
//     <div className='container'>
//       <div className='row'>
//         <div >
//           <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
//         </div>
//         <div >
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

function About() {

  return (
    <section className="my-5" >
      <div className="aboutIntro">
        <h1 style={{ width: "60%", marginRight: "15px"}} id="about">Hi I'm Lily! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <img src={`${process.env.PUBLIC_URL}/images/lilyhi.png`} className="my-2" 
        style={{ width: "40%" }} alt="cover" />
      </div> 
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
      </p>
      </div>
    </section>
  )
}


export default About;