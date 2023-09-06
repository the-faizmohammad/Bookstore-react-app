import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function RemoveBookButton({ itemId }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <button type="button" onClick={handleRemoveBook}>
      Remove Book
    </button>
  );
}

RemoveBookButton.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default RemoveBookButton;
