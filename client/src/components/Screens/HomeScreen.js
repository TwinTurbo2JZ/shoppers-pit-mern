import React, { useEffect, useState } from "react";
import axios from "axios";

import Product from "../Product.js";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(products);

  return (
    <div className="container mt-1">
      <div className="grid-4c">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
