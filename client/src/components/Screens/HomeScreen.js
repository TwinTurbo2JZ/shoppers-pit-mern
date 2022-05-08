import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Product from "../Product.js";
import { getProducts } from "../../features/api-slice.js";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const products1 = useSelector((state) => state.products.products);
  const { status, data } = products1;
  console.log(data, "1");

  // const getData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000");
  //     const data = await response.json();
  //     setProducts(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="container mt-1">
      <h1>GG</h1>
      <div className="grid-4c">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
