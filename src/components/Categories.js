import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>{categories}</li>
      </ul>
    </div>
  );
};

export default Categories;
