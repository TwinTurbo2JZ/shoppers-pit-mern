import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "../features/api-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export type AppDispatch = typeof store.dispatch; //to know type for ts

export type RootState = ReturnType<typeof store.getState>;
