import { createSlice } from "@reduxjs/toolkit";
import { fetchReadProducts } from "../thunks/productsThunk";

const initialState = {
  loading: false,
  error: {},
  products: [],
  productsMeta: {},
  productsPage: 1,
  productsPageSize: 8,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementProductsPage: (state) => {
      state.productsPage++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReadProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      if (action.payload.meta.pagination.page === 1) {
        state.products = action.payload.data;
      } else {
        state.products = [...state.products, ...action.payload.data];
      }
      state.productsMeta = action.payload.meta;
    });
    builder.addCase(fetchReadProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = [];
    });
  },
});

export const { incrementProductsPage } = productsSlice.actions;

export default productsSlice.reducer;
