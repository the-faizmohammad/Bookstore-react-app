// Book.js
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import ProgressBar from './ProgressBar';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div>
      <ul className="books">
        <li>
          <div className="book">
            <div className="book-content">
              <div className="book-info">
                <h4 className="book-category">
                  Category:
                  {' '}
                  {book.category}
                </h4>
                <h2 className="book-title">{book.title}</h2>
                <h6 className="book-author">
                  Author:
                  {' '}
                  {book.author}
                </h6>
                <div className="action-buttons">
                  <button type="button" className="button-outline">
                    Comments
                  </button>
                  <div className="vertical-divider" />
                  <button
                    className="button-outline"
                    type="button"
                    onClick={handleRemoveBook}
                  >
                    Remove
                  </button>
                  <div className="vertical-divider" />
                  <button type="button" className="button-outline">
                    Edit
                  </button>
                </div>
              </div>
              <ProgressBar />
            </div>
          </div>
        </li>
      </ul>
      <div className="horizontal-divider" />
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
