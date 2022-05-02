import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await fetch("http://localhost:5000").then((response) =>
      response.json()
    );
  }
);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())

//   fetch("http://localhost:5000").then((res) => res.json());

const initialState = {
  products: [],
  status: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "successful";
    },
    [getProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
