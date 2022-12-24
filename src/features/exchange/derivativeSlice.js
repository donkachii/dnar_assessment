import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  derivatives: [],
  error: "",
  loading: false,
};

export const fetchDerivative = createAsyncThunk(
  "derivatives/fetchDerivative",
  () => {
    return axios
      .get("https://api.coingecko.com/api/v3/derivatives/exchanges")
      .then((response) => response.data);
  }
);

const derivativeSlice = createSlice({
  name: "derivatives",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDerivative.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDerivative.fulfilled, (state, action) => {
      state.loading = false;
      state.derivatives = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDerivative.rejected, (state, action) => {
      state.loading = false;
      state.derivatives = [];
      state.error = action.error.message;
    });
  },
});

export default derivativeSlice.reducer;
