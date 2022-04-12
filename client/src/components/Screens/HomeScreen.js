import React, { useEffect, useState } from 'react';
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const getData = async ()=> {
    try {
          const response =  await fetch("http://localhost:5000");
          const data = await response.json();
          setProducts(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getData();
  }, [])

  console.log(products);


  return (
    
    <div>
      {products.map(product =>
        <p>{product.name}</p>
       
      )}
      
    </div>
  )
}

export default HomeScreen