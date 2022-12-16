import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllLoanHome = createAsyncThunk(
  "loanHome/getAllLoanHome",
  async () => {
    const res = await fetch(
      "http://127.0.0.1:5000//api/v1/bills/loan/home"
    ).then((response) => response.json());

    console.log(res);

    return res;
  }
);

export const getAllLoanLibrary = createAsyncThunk(
  "loanLibrary/getAllLoanLibrary",
  async () => {
    const res = await fetch(
      "http://127.0.0.1:5000//api/v1/bills/loan/library"
    ).then((response) => response.json());

    return res;
  }
);

export const getAllReturnBills = createAsyncThunk(
  "returnBills/getAllReturnBills",
  async () => {
    const res = await fetch("http://127.0.0.1:5000/api/v1/bills/return").then(
      (response) => response.json()
    );

    return res;
  }
);

const loanBillsSlice = createSlice({
  name: "loanbill",
  initialState: {
    allLoanHome: [],
    allLoanLibrary: [],
    allReturnBills: [],
  },
  reducers: {
    // addLoanBill: (state, action) => {
    //   if (action.payload.type === "borrowHome") {
    //     state.allLoanHome = [action.payload, ...state.allLoanHome];
    //   } else {
    //     state.allLoanLibrary = [action.payload, ...state.allLoanLibrary];
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLoanHome.fulfilled, (state, action) => {
        state.allLoanHome = action.payload;
      })
      .addCase(getAllLoanLibrary.fulfilled, (state, action) => {
        state.allLoanLibrary = action.payload;
      })
      .addCase(getAllReturnBills.fulfilled, (state, action) => {
        state.allReturnBills = action.payload;
      });
  },
});

const loanBillsReducer = loanBillsSlice.reducer;

export const loanBillsAction = loanBillsSlice.actions;
export default loanBillsReducer;
