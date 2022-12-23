import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coins/coinSlice";
import marketReducer from "../features/market/marketSlice";
import searchTrendingSlice from "../features/search/searchTrendingSlice";

export const store = configureStore({
  reducer: {
    coins: coinReducer,
    market: marketReducer,
    trendings: searchTrendingSlice,
  },
});
