import { createSlice } from "@reduxjs/toolkit";
import { fetchReadProducts } from "../thunks/productsThunk";

const initialState = {
  loading: false,
  error: {},
  products: [],
  productsPage: 1,
  productsPageSize: 9
};

export const aboutUsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.products = action.payload.data;
    });
    builder.addCase(fetchReadProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = [];
    });
  }
});

export default aboutUsSlice.reducer;