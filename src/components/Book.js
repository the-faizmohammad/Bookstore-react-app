import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => (
  <div>
    {book && (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button type="button" onClick={() => onDelete(book.id)}>Delete</button>
    </div>
    )}
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

// Define defaultProps
Book.defaultProps = {
  book: null,
};

export default Book;
