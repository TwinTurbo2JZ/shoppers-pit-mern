import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "../features/api-slice";
//import { apiSlice } from "../features/api-slice";

export const store = configureStore({
  reducer: {
    products: apiSlice,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
});
