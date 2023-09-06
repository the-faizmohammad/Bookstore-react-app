import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function AddBookButton({ title, author }) {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const itemId = 'item4';
    const newBook = {
      item_id: itemId,
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  return (
    <button onClick={handleAddBook}>Add Book</button>
  );
}
AddBookButton.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
export default AddBookButton;
