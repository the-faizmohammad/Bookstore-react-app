import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const initialState = {
};

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  preloadedState: initialState,
});

export default store;
