import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [], 
};
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action) => {
        state.books.push(action.payload);
      },
      removeBook: (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      },
    },
  });