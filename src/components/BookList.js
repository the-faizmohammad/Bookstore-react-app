import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
}
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookList;
