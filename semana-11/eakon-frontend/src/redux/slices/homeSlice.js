import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});


export default homeSlice.reducer;
