import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice'; // Assuming you have this action
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books || []);
  useEffect(() => {
    // Fetch the list of books when the component mounts
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-list">
      {Array.from(books).map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
