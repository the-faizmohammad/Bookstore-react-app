// Book.js
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice'; // Assuming you have this action
import ProgressBar from './ProgressBar';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">
        Author:
        {book.author}
      </p>
      <p className="book-category">
        Category:
        {book.category}
      </p>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
      <div className="second-part">
        <ProgressBar />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
