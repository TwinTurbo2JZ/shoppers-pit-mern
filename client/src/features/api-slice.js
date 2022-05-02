import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/").then(
      (response) => response.json()
    );
  }
);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())

//   fetch("http://localhost:5000").then((res) => res.json());

const initialState = {
  status: null,
  prodcuts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    [getProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, actions) => {
      state.status = "successful";
      state.prodcuts = actions.payload;
    },
    [getProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
