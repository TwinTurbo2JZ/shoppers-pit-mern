import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "@slices/api-slice";
import productSlice from "../../store/features/product-slice";
import cartSlice from "../../store/features/cart-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    //cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch; //to know type for ts

export type RootState = ReturnType<typeof store.getState>;

export default store;
