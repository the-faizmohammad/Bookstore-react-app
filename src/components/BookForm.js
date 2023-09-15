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
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form>
        <div className="form-parts">
          <label htmlFor="book-name">
            <input
              type="text"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            />
          </label>
        </div>
        <div className="form-parts">
          <label htmlFor="book-author">
            <input
              type="text"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            />
          </label>
        </div>
        <div className="form-parts">
          <label htmlFor="book-category">
            <input
              type="text"
              placeholder="Category"
              value={newBook.category}
              onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
            />
          </label>
        </div>
        <div className="form-parts">
          <button type="button" className="add-book" onClick={handleAddBook}>
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
