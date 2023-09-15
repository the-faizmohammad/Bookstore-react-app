import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '' });

  const handleAddBook = async () => {
    try {
      const newItemId = uuidv4();
      const newBookWithId = { item_id: newItemId, ...newBook };

      dispatch(addBook(newBookWithId));
      setNewBook({ title: '', author: '', category: '' });
    } catch (error) {
      //
    }
  };

  return (
    <section className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          className="input title-input"
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          className="input title-input"
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button type="submit" className="primary-button-big" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </section>
  );
};

export default BookForm;
