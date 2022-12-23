import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  coinItems: [],
  error: "",
  loading: false,
};

export const fetchData = createAsyncThunk("coin/fetchData", () => {
  return axios
    .get("https://api.coingecko.com/api/v3/coins/list")
    .then((response) => response.data);
});

const coinSlice = createSlice({
  name: "coins",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.coinItems = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.coinItems = [];
      state.error = action.error.message;
    });
  },
});

export default coinSlice.reducer;
