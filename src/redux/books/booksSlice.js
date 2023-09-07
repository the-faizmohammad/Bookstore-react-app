import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sZfsUrZIdaGOBVYN2H6F/books'
  );
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
