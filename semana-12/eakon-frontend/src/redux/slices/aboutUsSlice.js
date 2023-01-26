import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: {},
    aboutUsData: {}
}

export const aboutSlice = createSlice({
    name: "aboutUs",
    initialState,
    extraReducers: {}
});

export default aboutSlice.reducer;