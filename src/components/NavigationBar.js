import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const Navigation = () => (
  <nav className="nav-bar">
    <a className="nav-brand" href="/">Bookstore CMS</a>
    <ul className="nav-links">
      <li className="nav-link active-link">
        <Link to="/" aria-current="page">BOOKS</Link>
      </li>
      <li className="nav-link">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
  </nav>

);

export default Navigation;
