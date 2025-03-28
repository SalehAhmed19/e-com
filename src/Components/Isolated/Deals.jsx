import React from "react";
import product_1 from "../../assets/img/products/6_1.jpg";
import product_2 from "../../assets/img/products/3_1.jpg";
import product_3 from "../../assets/img/products/9_1.jpg";
import product_4 from "../../assets/img/products/2_1.jpg";
import product_5 from "../../assets/img/products/1_1.jpg";
import Timer from "./Timer";
import ProductCard from "./ProductCard";
import { Fade } from "react-awesome-reveal";

function Deals() {
  const products = [
    {
      id: 1,
      category: "Dried Fruits",
      name: "Mixed Nuts Berries Pack",
      price: 45,
      img: product_1,
    },
    {
      id: 2,
      category: "Cookies",
      name: "Multi Grain Combo Cookies",
      price: 25,
      img: product_2,
    },
    {
      id: 3,
      category: "Foods",
      name: "Fresh Mango Juice Pack",
      price: 46,
      img: product_3,
    },
    {
      id: 4,
      category: "Dried Fruits",
      name: "Dates Value Fresh Pouch",
      price: 78,
      img: product_4,
    },
    {
      id: 5,
      category: "Foods",
      name: "Stick Fiber Masala Magic",
      price: 45,
      img: product_5,
    },
  ];

  return (
    <div>
      <Fade direction="up">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-3xl">
              Day of the <span className="text-[#5CAF90]">Deals</span>
            </h2>
            <p className="text-[#878787] my-3">
              Don't wait. The time will never be just right.
            </p>
          </div>
          <Timer />
        </div>
      </Fade>

      <Fade direction="up">
        <div className="grid grid-cols-5 gap-6 my-20">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Deals;
