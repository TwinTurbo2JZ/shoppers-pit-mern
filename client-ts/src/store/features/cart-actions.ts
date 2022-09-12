import { cartActions } from "../features/cart-slice";

import axios from "axios";

export const fetchCart = (store_id) => {
  return async (dispatch) => {
    let cart = localStorage.getItem("cart");
    if (!cart || cart === "{}") {
      dispatch(cartActions.setLoading(false));
      return;
    }

    cart = JSON.parse(cart);
    let cart_items =
      cart.items && cart.items.hasOwnProperty("length") ? cart.items : [];
    let body = {
      store_id,
      cart_items,
    };

    let results;
    try {
      results = (await axios.post("/cart/calculate", body)).data;
    } catch (error) {
      dispatch(cartActions.setLoading(false));
      return;
    }

    if (results.statusCode !== 200) {
      dispatch(cartActions.setLoading(false));
      return;
    }

    dispatch(cartActions.setCart(results.cart));
  };
};
