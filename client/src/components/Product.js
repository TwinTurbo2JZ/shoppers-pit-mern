import React from "react";

const Product = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} />
      <p>{product.name}</p>
      <p>
        {product.rating} from {product.numReviews}
      </p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
