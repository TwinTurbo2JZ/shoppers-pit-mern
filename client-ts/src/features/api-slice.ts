import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../models/product.model";
import { Produced } from "immer/dist/internal";

interface prodcutsState {
  products: {};
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await fetch("http://localhost:5000").then((response) =>
      response.json()
    );
  }
);

type State = {
  products: Product[];
  status?: "loading" | "successful" | "failed";
};

const initialState: State = {
  products: [],
  status: undefined,
};

const prodcutsSlice = createSlice({
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
        state.status = "successful";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default prodcutsSlice.reducer;
