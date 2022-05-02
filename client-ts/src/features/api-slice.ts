import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface prodcutsState {
  products: {};
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("http://localhost:5000");
    const data = await response.json();
    return data;
  }
);

// const initialState = {
//   value: 0,
//   products: [],
// };

const prodcutsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// reducers: {
//   [getProducts.pending]: (state) => {
//     state.status = "loading";
//   },
//   [getProducts.fulfilled]: (state, actions) => {
//     state.status = "successful";
//     state.prodcuts = actions.payload;
//   },
//   [getProducts.rejected]: (state) => {
//     state.status = "failed";
//   },
export default prodcutsSlice.reducer;
