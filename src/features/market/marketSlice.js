import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  market: [],
  error: "",
  loading: false,
};

export const fetchMarket = createAsyncThunk("market/fetchMarket", () => {
  return axios
    .get("https://api.coingecko.com/api/v3/indexes")
    .then((response) => response.data);
});

const marketSlice = createSlice({
  name: "market",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMarket.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMarket.fulfilled, (state, action) => {
      state.loading = false;
      state.market = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMarket.rejected, (state, action) => {
      state.loading = false;
      state.market = [];
      state.error = action.error.message;
    });
  },
});

export default marketSlice.reducer;
