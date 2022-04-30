import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card">
      <Link to={`${product._id}`}>
        <img src={product.image} />
        <p>{product.name}</p>
        <p>
          {product.rating} from {product.numReviews}
        </p>
        <p>{product.price}</p>
      </Link>
    </div>
  );
};

export default Product;
