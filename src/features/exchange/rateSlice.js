import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rates: [],
  error: "",
  loading: false,
};

export const fetchRate = createAsyncThunk("rates/fetchRate", () => {
  return axios
    .get("https://api.coingecko.com/api/v3/exchange_rates")
    .then((response) => response.data);
});

const rateSlice = createSlice({
  name: "rates",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRate.fulfilled, (state, action) => {
      state.loading = false;
      state.rates = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRate.rejected, (state, action) => {
      state.loading = false;
      state.rates = [];
      state.error = action.error.message;
    });
  },
});

export default rateSlice.reducer;
