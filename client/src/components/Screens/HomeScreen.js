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
    
    <div className='container'>
      <h1 className='g'>GG</h1>
      <div className='flex'>
      {products.map(product =>
          <div className='card'  key={product.id}>
          <p>{product.name}</p>
          <p>{product.brand}</p>
          <img src={product.image} />
          <p>{product.price}</p>
</div>


)}
      </div>
      
    </div>
  )
}

export default HomeScreen