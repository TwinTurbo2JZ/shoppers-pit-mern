import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "../features/api-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
