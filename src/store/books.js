import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllBooks = createAsyncThunk("books/getAllBooks", async () => {
  const res = await fetch("http://127.0.0.1:5000/api/v1/books/").then(
    (response) => response.json()
  );

  return res;
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    allBooks: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.allBooks = action.payload;
    });
  },
});

const booksReducer = booksSlice.reducer;

export const booksAction = booksSlice.actions;
export default booksReducer;
