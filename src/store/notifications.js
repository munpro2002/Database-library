import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllNotifs = createAsyncThunk("fines/getAllNotifs", async () => {
  const res = await fetch("http://127.0.0.1:5000/api/v1/notis/").then(
    (response) => response.json()
  );

  return res;
});

const notifsSlice = createSlice({
  name: "notifs",
  initialState: {
    allNotifs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNotifs.fulfilled, (state, action) => {
      state.allNotifs = action.payload;
    });
  },
});

const notifsReducer = notifsSlice.reducer;

export const notifsAction = notifsSlice.actions;
export default notifsReducer;
