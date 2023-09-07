import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    dispatch(addBook(newBook));
    // Clear the form after adding the book
    setNewBook({ title: '', author: '', category: '' });
  };

  return (
    <div className="book-form">
      <h2>Add a New Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newBook.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={newBook.author}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newBook.category}
        onChange={handleInputChange}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookForm;
