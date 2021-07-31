import React  from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  // console.log(pages,  "currentPage", currentPage, setCurrentPage); 


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img"></span> Lily
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* looping throught the navigation list creeated in app.js  */}
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