// src/components/BookList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  // Assuming you have a books slice in your Redux state
  const books = useSelector((state) => state.books);

  return (
    <div className="book-list">
      {books.map((book) => (
        // Ensure that 'book' object has required properties
        // and provide a unique 'key' prop
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
