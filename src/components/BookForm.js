import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if onSubmit is a function before calling it
    if (typeof onSubmit === 'function') {
      onSubmit({ title, author });
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

// Define PropTypes for the onSubmit prop
BookForm.propTypes = {
  onSubmit: PropTypes.func,
};

// Add defaultProps for onSubmit
BookForm.defaultProps = {
  onSubmit: null, // You can set a default value if needed
};

export default BookForm;
