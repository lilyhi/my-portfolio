import React , {useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
    // contactSelected,
    // setContactSelected
  } = props;

  console.log(pages,  "currentPage", currentPage, setCurrentPage); 


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img"></span> Lily
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setCurrentPage({name:"about"})}>
              About me
            </a>
          </li> */}
          {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>
              Contact
            </span>
          </li> */}
          {/* !contactSelected && */}
          {pages.map((page) => (
            <li
              className={`mx-1 ${
                currentPage.name === page.name &&  `navActive`
                }`}
              key={page.name}
            >
              <span
                onClick={() => {
                  console.log(page);
                  //update the current page value 
                  setCurrentPage(page);
                  // setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;