import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllFines = createAsyncThunk("fines/getAllFines", async () => {
  const res = await fetch("http://127.0.0.1:5000/api/v1/fines/").then(
    (response) => response.json()
  );

  return res;
});

const finesSlice = createSlice({
  name: "fines",
  initialState: {
    allFines: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFines.fulfilled, (state, action) => {
      state.allFines = action.payload;
    });
  },
});

const finesReducer = finesSlice.reducer;

export const finesAction = finesSlice.actions;
export default finesReducer;
