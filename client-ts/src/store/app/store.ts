import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "@slices/api-slice";
import productSlice from "../../store/features/product-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch; //to know type for ts

export type RootState = ReturnType<typeof store.getState>;

export default store;
