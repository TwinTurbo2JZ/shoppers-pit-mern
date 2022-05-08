import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import ProductCard from "@components/product-card";

import { getProducts } from "store/features/api-slice.js";
import { useAppDispatch } from "store/app/hooks";
import { RootState } from "store/app";
//import { useHomeScreen } from "./use-home-screen";

import { Product } from "models/product.model";

export type HomeScreenProps = {};

export const HomeScreen: FC<HomeScreenProps> = () => {
  const dispatch = useAppDispatch();
  const products1 = useSelector((state: RootState) => state.products.products);
  const status1 = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //const { products, status } = useHomeScreen();
  //console.log({ products, status });
  //console.log(products.data);

  type ProductData = {
    status: string;
    data: Product[];
  };

  const { status, data }: ProductData = products1;

  console.log(status, "1");

  if (status1 === "loading" || status === "idle") {
    return <div>...loading</div>;
  }

  if (status1 === "failed") {
    return <div>Something went wrong</div>;
  }

  if (status1 === "success") {
    return (
      <div>
        {data.map((d) => (
          <ProductCard key={d._id} product={d} />
        ))}
        <h1>Working</h1>
      </div>
    );
  }

  return <div className="container mt-1">oops</div>;
};

export default HomeScreen;
