import React, { useEffect, useState } from "react";
import img from "../../assets/img/4.jpg";
import Items from "./Items";
import { Fade } from "react-awesome-reveal";

const Stats = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./public/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex my-20">
      <Fade direction="up">
        <div className="mr-5 relative">
          <img className="w-[350px] rounded-sm" src={img} alt="" />
          <div className="absolute top-0 px-7 py-10">
            <h2 className="font-bold text-2xl mb-5 text-[#494949]">
              Our Top Most <br />
              Products Check It <br /> Now
            </h2>
            <button className="bg-[#5CAF90] text-white rounded-sm px-5 py-1 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </Fade>
      <div className="grid grid-cols-3 gap-5 w-full">
        <div>
          <Fade direction="up">
            <h3 className="text-3xl font-bold">
              Trending <span className="text-[#5CAF90]">Items</span>
            </h3>
          </Fade>
          <Fade direction="up">
            {products.slice(0, 3).map((product) => (
              <Items key={product.id} item={product} />
            ))}
          </Fade>
        </div>

        <div>
          <Fade direction="up">
            <h3 className="text-3xl font-bold">
              Top <span className="text-[#5CAF90]">Rated</span>
            </h3>
          </Fade>
          <Fade direction="up">
            {products.slice(4, 7).map((product) => (
              <Items key={product.id} item={product} />
            ))}
          </Fade>
        </div>

        <div>
          <Fade direction="up">
            <h3 className="text-3xl font-bold">
              Top <span className="text-[#5CAF90]">Selling</span>
            </h3>
          </Fade>
          <Fade direction="up">
            {products.slice(3, 6).map((product) => (
              <Items key={product.id} item={product} />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Stats;
