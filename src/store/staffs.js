import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllStaffs = createAsyncThunk(
  "staffs/getAllStaffs",
  async () => {
    const res = await fetch("http://127.0.0.1:5000/api/v1/staffs/").then(
      (response) => response.json()
    );

    return res;
  }
);

const staffsSlice = createSlice({
  name: "staffs",
  initialState: {
    allStaffs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStaffs.fulfilled, (state, action) => {
      state.allStaffs = action.payload;
    });
  },
});

const staffsReducer = staffsSlice.reducer;

export const staffsAction = staffsSlice.actions;
export default staffsReducer;
