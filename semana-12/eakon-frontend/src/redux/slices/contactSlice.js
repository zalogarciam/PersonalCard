import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: {},
  contactData: {}
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState
});

export default contactSlice.reducer;