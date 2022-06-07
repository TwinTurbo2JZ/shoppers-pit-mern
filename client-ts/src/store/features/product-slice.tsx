import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

import { Product } from "models/product.model";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (modID: string) => {
    const url = `http://localhost:5000`;

    const link = `${url}/${modID}`;

    return await fetch(link).then((response) => response.json());
  }
);

export type ProductState = {
  product: Product | {};
  status: "loading" | "success" | "failed" | "idle";
};
const initialState: ProductState = {
  product: {},
  status: "idle",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.product = payload;
        state.status = "success";
      })
      .addCase(getProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

//export const {} = productSlice.actions;

export default productSlice.reducer;
