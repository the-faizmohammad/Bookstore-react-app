import React from 'react';

const Book = ({ book, onDelete }) => {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

export default Book;

