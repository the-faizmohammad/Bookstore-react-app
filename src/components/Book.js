import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => (
  <div>
    {book && (
      <div>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <button type="button" onClick={() => onDelete(book.item_id)}>Delete</button>
      </div>
    )}
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired, // Update to 'item_id'
  }),
  onDelete: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: null,
};

export default Book;
