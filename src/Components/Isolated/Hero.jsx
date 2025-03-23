import React from "react";
import banner from "../../assets/img/1.jpg";

function Hero() {
  return (
    <div className="relative flex items-center">
      <div className="absolute mx-20">
        <p className="text-[#5CAF90] font-bold text-xl">Starting at $20</p>
        <h1 className="font-bold text-6xl my-20">
          Organic and healthy <br /> Vagitables
        </h1>
        <button className="bg-[#4B5966] text-white rounded-sm px-5 py-2">
          Shop Now
        </button>
      </div>
      <img className="my-20" src={banner} alt="" />
    </div>
  );
}

export default Hero;
