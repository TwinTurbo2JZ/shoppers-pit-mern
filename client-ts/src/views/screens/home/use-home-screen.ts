import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";

import { getProducts } from "@slices/api-slice";

export const useHomeScreen = () => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return { products, status };
};
