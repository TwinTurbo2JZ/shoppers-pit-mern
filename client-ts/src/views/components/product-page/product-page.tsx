import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/app";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../../store/features/product-slice";

import { Product } from "models/product.model";
import { Data } from "models/data.model";
import { Status } from "models/status.model";

type Props = {};

const ProductPage: FC<Props> = ({}) => {
  const [Qty, setQty] = useState(1);

  //params
  const params = useParams();
  let modID = JSON.stringify(params.id).slice(1, -1);

  const dispatch = useDispatch();

  //   type ProductData = {
  //     status: string;
  //     data: Data;
  //   };

  const product = useSelector((state: RootState) => state.product.product);

  const { data }: Data = product;
  const { status }: Status = product;

  useEffect(() => {
    dispatch(getProduct(modID));
  }, []);

  //navigation, previously know as usehistory
  let navigate = useNavigate();
  const addToCart = () => {
    navigate(`/cart/${params.id}?qty=${Qty}`);
  };

  console.log(status, "1");
  if (status === "loading" || status === "idle") {
    return <div>...loading</div>;
  }

  if (status === "failed") {
    return <div>Something went wrong</div>;
  }

  if (status === "successful") {
    return (
      <div>
        <img src={data.image} alt="an image" />
        <p>{data.name}</p>
        <p>{data.brand}</p>
        <p>{data.description}</p>
        <p>
          {data.rating} from {data.numReviews}
        </p>
        <p>{data.price}</p>
        <p>{Qty}</p>
        {data.countInStock > 0 ? <p>In Stock</p> : <p>Out of stock</p>}
        <form>
          <label>Quantity:</label>
          <select value={Qty} onChange={(e) => setQty(e.target.value)}>
            {[...Array(data.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
          <button disabled={data.countInStock === 0} onClick={addToCart}>
            Add To Cart
          </button>
        </form>
      </div>
    );
  }
};

export default ProductPage;
