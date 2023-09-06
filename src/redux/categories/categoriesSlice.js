import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatusUnderConstruction: (state) => {
      state.categories = 'Under construction';
    },
  },
});

export const { setStatusUnderConstruction } = categoriesSlice.actions;
export default categoriesSlice.reducer;
