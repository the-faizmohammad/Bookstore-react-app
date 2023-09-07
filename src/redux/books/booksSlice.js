// src/redux/books/booksSlice.js
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

export const addBook = createAsyncThunk('books/addBook', async (bookData) => {
  const response = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sZfsUrZIdaGOBVYN2H6F/books',
    bookData
  );
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (item_id) => {
  await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sZfsUrZIdaGOBVYN2H6F/books/${item_id}`
  );
  return item_id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
      })
      .addCase(removeBook.fulfilled, (state, action) => {
      });
  },
});

export default booksSlice.reducer;
