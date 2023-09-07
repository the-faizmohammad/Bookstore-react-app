import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>
        Author:
        {book.author}
      </p>
      <p>
        Category:
        {book.category}
      </p>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
    </div>
  );
};

// Define PropTypes for the 'book' prop
Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
