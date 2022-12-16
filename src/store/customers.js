import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCustomers = createAsyncThunk(
  "customers/getAllCustomers",
  async () => {
    const res = await fetch("http://127.0.0.1:5000/api/v1/customers/").then(
      (response) => response.json()
    );

    return res;
  }
);

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    allCustomers: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.allCustomers = action.payload;
    });
  },
});

const customersReducer = customersSlice.reducer;

export const customersAction = customersSlice.actions;
export default customersReducer;
