import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coins/coinSlice";
import marketReducer from "../features/market/marketSlice";
import searchTrendingReducer from "../features/search/searchTrendingSlice";
import rateReducer from "../features/exchange/rateSlice";

export const store = configureStore({
  reducer: {
    coins: coinReducer,
    market: marketReducer,
    trendings: searchTrendingReducer,
    rates: rateReducer,
  },
});
