import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadProducts = createAsyncThunk(
  "products/fetchReadProducts",
  async ({ productsPage = 1, productsPageSize = 9 }, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: `/productos?pagination[page]=${productsPage}&pagination[pageSize]=${productsPageSize}&populate=marca,imagen&sort=id%3Adesc`,
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
