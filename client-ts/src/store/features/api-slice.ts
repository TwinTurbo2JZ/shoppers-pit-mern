import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// models
import { Product } from "models/product.model";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await fetch("http://localhost:5000").then((response) =>
      response.json()
    );
  }
);

export type ProductState = {
  products: Product[];
  status: "loading" | "success" | "failed" | "idle";
};

const initialState: ProductState = {
  products: [],
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.status = "success";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
