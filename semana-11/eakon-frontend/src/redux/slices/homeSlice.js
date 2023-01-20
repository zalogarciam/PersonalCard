import { createSlice } from "@reduxjs/toolkit";
import { fetchReadProducts } from "../../thunks/homeThunk";

const initialState = {
  loading: false,
  error: {},
  heroProducts: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadProducts.pending, ({loading}) => {
      loading = true;
    });
    builder.addCase(
      fetchReadProducts.fulfilled,
      ({ loading, error, heroProducts }, { payload }) => {
        state.loading = false;
        error = {};
        heroProducts = payload;
      }
    );
    builder.addCase(
      fetchReadProducts.rejected,
      ({ loading, error, heroProducts }, { payload }) => {
        state.loading = false;
        error = {};
        heroProducts = [];
      }
    );
  },
});

export default homeSlice.reducer;
