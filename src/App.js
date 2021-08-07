import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// function App() {
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//       {!contactSelected ? (
//         <>
//           {/* <Portfolio currentCategory={currentCategory}></Portfolio> I think this should not be here */}
//           <About></About>
//         </>
//       ) : (
//           <ContactForm></ContactForm>
//         )}
//       </main>
//     </div>
//   );
// }
function App() {
  //Static Data List 
  const pages = [
    {name: "About Me"},
    {name: "Contact"},
    {name: "Portfolio"}, 
    {name: "Resume"}

  ]
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const renderSwitch = (page) => {
    switch(page.name) {
      case "About Me":
          return <About />;
      case "Contact":
        return <ContactForm  />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  }
  return (
    <div>
      <Nav 
      pages={pages} 
      currentPage={currentPage}
      setCurrentPage = {setCurrentPage} 
      />
      <main>
        {/* Rendering a component based on the current page value  */}
        {renderSwitch(currentPage)}
     
      </main>
      <Footer/>
    </div>
  );
}

export default App;
