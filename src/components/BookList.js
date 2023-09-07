import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
