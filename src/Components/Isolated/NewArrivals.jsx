import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function NewArrivals() {
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    fetch("../public/data/products.json")
      .then((res) => res.json())
      .then((data) => setArrivals(data));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center my-20">
        <div>
          <h2 className="font-bold text-3xl">
            New <span className="text-[#5CAF90]">Arrivals</span>
          </h2>
          <p className="text-[#878787] my-3">
            Shop online for new arrivals and get free shipping.
          </p>
        </div>

        <div className="font-bold">
          <a className="mx-5" href="#">
            ALL
          </a>
          <a className="mx-5" href="#">
            SNACKS & SPICES
          </a>
          <a className="mx-5" href="#">
            FRUITS
          </a>
          <a className="mx-5" href="#">
            VEGITABLES
          </a>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 mb-10">
        {arrivals.map((arrival) => (
          <ProductCard product={arrival} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
