import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "models/product.model";
import { Data } from "models/data.model";
import { Status } from "models/status.model";

const initialState = {
  loading: true,
  items: [],
  subtotal: 0,
  total: 0,
  discount: 0,
  totalItems: 0,
  totalTax: 0,
  coupon: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      let id = action.payload._id;
      let items = state.items;

      state.subtotal += action.payload.mrp;
      state.total += action.payload.selling_price;
      state.discount += action.payload.mrp - action.payload.selling_price;
      state.totalItems++;
      state.totalTax += action.payload.tax;

      let existingItem = items.find((item) => item._id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart(state, action) {
      let id = action.payload;

      let items = state.items;

      let existingItem = items.find((item) => item._id === id);

      if (existingItem) {
        state.subtotal -= existingItem.mrp;
        state.total -= existingItem.selling_price;
        state.discount -= existingItem.mrp - existingItem.selling_price;
        state.totalItems--;
        state.totalTax -= existingItem.tax;

        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter((item) => item._id !== id);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    setCart(state, action) {
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.subtotal = action.payload.subtotal;
      state.discount = action.payload.discount;
      state.totalItems = action.payload.totalItems;
      state.coupon = action.payload.coupon;
      state.image = action.payload.image;
      state.totalTax = action.payload.totalTax;

      localStorage.setItem("cart", JSON.stringify(state));
      state.loading = false;
    },

    clearCart(state) {
      state.items = [];
      state.subtotal = 0;
      state.total = 0;
      state.discount = 0;
      state.totalItems = 0;
      state.coupon = {};
      state.totalTax = 0;

      localStorage.setItem("cart", JSON.stringify(state));
      state.loading = false;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
