import React, { useContext } from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeContext } from './App';

function Layout() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <svg aria-hidden="true" className="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd" />
              </svg>
            </div>
            <nav className="main-nav">
              <ul className="nav-links">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Trending
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link">
                    Menu
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="theme-toggle">
              <button
                className={`theme-btn ${theme === 'dark' ? 'dark-mode' : ''}`}
                onClick={toggleTheme}
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
