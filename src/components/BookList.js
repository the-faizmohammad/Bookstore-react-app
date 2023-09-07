import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const handleRemoveBook = (item_id) => {
    dispatch(removeBook(item_id));
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.item_id} book={book} onRemove={handleRemoveBook} />
      ))}
    </div>
  );
};

export default BookList;
