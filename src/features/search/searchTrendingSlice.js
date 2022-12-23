import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trending: [],
  error: "",
  loading: false,
};

export const fetchTrending = createAsyncThunk("trending/fetchTrending", () => {
  return axios
    .get("https://api.coingecko.com/api/v3/search/trending")
    .then((response) => response.data);
});

const searchTrendingSlice = createSlice({
  name: "trendings",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.loading = false;
      state.trending = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTrending.rejected, (state, action) => {
      state.loading = false;
      state.trending = [];
      state.error = action.error.message;
    });
  },
});

export default searchTrendingSlice.reducer;
