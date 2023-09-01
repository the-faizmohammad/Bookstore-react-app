import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const BookListContainer = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={books} onDelete={deleteBook} />
      <BookForm onSubmit={addBook} />
    </div>
  );
};

export default BookListContainer;
