import React from 'react';
import Book from './Book';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;

