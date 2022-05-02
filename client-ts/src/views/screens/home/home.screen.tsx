import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import ProductCard from "@components/product-card";

import { getProducts } from "store/features/api-slice.js";
import { useAppDispatch } from "store/app/hooks";
import { RootState } from "store/app";
import { useHomeScreen } from "./use-home-screen";

export type HomeScreenProps = {};

export const HomeScreen: FC<HomeScreenProps> = () => {
  // const dispatch = useAppDispatch();
  // const products = useSelector((state: RootState) => state.products.products);
  // const status = useSelector((state: RootState) => state.products.status);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  const { products, status } = useHomeScreen();
  console.log({ products, status });

  if (status === "loading" || status === "idle") {
    return <div>...loading</div>;
  }

  if (status === "failed") {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="container mt-1">
      <h1>GG</h1>
      <div className="grid-4c">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );

  return null;
};

export default HomeScreen;
