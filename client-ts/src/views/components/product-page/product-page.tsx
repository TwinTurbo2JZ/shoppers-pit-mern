import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/app";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../store/features/product-slice";

import { Product } from "models/product.model";

type Props = {};

const ProductPage = (props: Props) => {
  const params = useParams();
  let modID = JSON.stringify(params.id).slice(1, -1);

  const dispatch = useDispatch();

  type ProductData = {
    status: string;
    data: Product;
  };

  const { status, data }: ProductData = useSelector(
    (state: RootState) => state.product.product
  );

  //   const { data } = product;
  //   const { status } = product;

  useEffect(() => {
    dispatch(getProduct(modID));
  }, []);

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
      </div>
    );
  }
};

export default ProductPage;
