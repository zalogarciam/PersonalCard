import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadHeroProducts = createAsyncThunk(
  "home/fetchReadHeroProducts",
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: `/productos`,
      };
      const { data } = await axiosInstance(options);
      console.log(data.data);
      return data.data ?? [];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
