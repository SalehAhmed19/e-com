import React from "react";
import { NavLink } from "react-router";

function Products() {
  const products = [1, 2, 3, 4, 5];
  return (
    <div>
      {products.map((product) => (
        <NavLink key={product} to={`/products/${product}`} className="mx-5">
          Product {product}
        </NavLink>
      ))}
    </div>
  );
}

export default Products;
