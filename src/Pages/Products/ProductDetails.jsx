import React from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const params = useParams();

  return (
    <div>
      <p>Product {params.productId}</p>
    </div>
  );
}

export default ProductDetails;
