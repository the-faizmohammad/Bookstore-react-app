import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Book = ({ book, onDelete }) => {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button type="button" onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

// Add prop validation
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default Book;
