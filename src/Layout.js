import React, { useState, useEffect } from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { motion } from "framer-motion";

function Layout() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <div className="container-fluid">
        <div className="container main">
          <div className="row">
            <div className="col-3">
              <svg aria-hidden="true" class="swoosh-svg logoo" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="col-6">
              <nav>
                <ul className="anker">
                  <li className="barrs">
                    {" "}
                    <Link to="./Pages/Register" className="anker">
                      Register yourself
                    </Link>
                  </li>
                  <li className="barrs">
                    {" "}
                    <Link to="" className="anker">
                      Location
                    </Link>
                  </li>
                  <li className="barrs">
                    {" "}
                    <Link to="./Pages/About" className="anker">
                      About
                    </Link>
                  </li>
                  <li className="barrs">
                    {" "}
                    <Link to="./Pages/Menu" className="anker">
                      Menu
                    </Link>
                  </li>
                  <li className="barrs">
                    {" "}
                    <Link to="./Pages/Contact" className="anker">
                      Contact
                    </Link>
                  </li>
                  <div className="col-3">
                    <button
                      className={`btnn btnlogin ${theme === 'dark' ? 'dark-mode' : ''}`}
                      id="btn"
                      onClick={toggleTheme}
                    >
                      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                  </div>
                </ul>
              </nav>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
{
  /* <img src="./Image/insta.jpg" alt="" className='icon' /> */
}
