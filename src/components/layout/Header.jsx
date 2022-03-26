import React from "react";

const Header = () => {
  return (
    
      <nav>
        <a href="#">Thomas White</a>

        {/* <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
        </button> */}

        <div id="navbarSupportedContent">
          <ul>
            <li>
              <a href="index.html" target="_blank" rel="noopener noreferrer">
                About <span>(current)</span>
              </a>
            </li>
            <li>
              <a
                href="portfolio.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a href="resume.html" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/thomas-white-ucf"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/thomas-white-engineering/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>

              <div aria-labelledby="navbarDropdown">
                <a href="index.html" target="_blank" rel="noopener noreferrer">
                  About
                </a>
                <a
                  href="portfolio.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
                <a href="resume.html" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
                <a
                  href="https://github.com/thomas-white-ucf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/thomas-white-engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Header;
