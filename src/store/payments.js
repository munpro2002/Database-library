import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFinePayments = createAsyncThunk(
  "finePayments/getFinePayments",
  async () => {
    const res = await fetch("http://127.0.0.1:5000/api/v1/payments/fine").then(
      (response) => response.json()
    );
    return res;
  }
);

export const getBorrowPayments = createAsyncThunk(
  "borrowPayments/getBorrowPayments",
  async () => {
    const res = await fetch(
      "http://127.0.0.1:5000/api/v1/payments/borrow"
    ).then((response) => response.json());
    return res;
  }
);

const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    allFinePayments: [],
    allBorrowPayments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFinePayments.fulfilled, (state, action) => {
        state.allFinePayments = action.payload;
      })
      .addCase(getBorrowPayments.fulfilled, (state, action) => {
        state.allBorrowPayments = action.payload;
      });
  },
});

const paymentsReducer = paymentsSlice.reducer;

export const paymentsAction = paymentsSlice.actions;
export default paymentsReducer;
