import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
      <h1 className="logo">Bookstore CMS</h1>
    <ul className="navigation-links">
      <li className="nav-link">
        <Link to="/">BOOKS</Link>
      </li>
      <li className="nav-link">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="user-icon">
      Icon
    </div>
  </nav>
);

export default Navigation;
