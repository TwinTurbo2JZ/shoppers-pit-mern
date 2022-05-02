import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Product from "../Product";
import { getProducts } from "../../features/api-slice.js";
import { useAppDispatch } from "../../app/hooks";

const HomeScreen = () => {

const Products = useAppDispatch((state)=> state.products.) 
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return (
    // <div className="container mt-1">
    //   <h1>GG</h1>
    //   <div className="grid-4c">
    //     {products.map((product) => (
    //       <Product key={product.id} product={product} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default HomeScreen;
