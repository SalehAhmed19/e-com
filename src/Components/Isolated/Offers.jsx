import React from "react";
import img_1 from "../../assets/img/2_0.jpg";
import img_2 from "../../assets/img/3.jpg";

function Offers() {
  const offers = [
    {
      id: 1,
      img: img_1,
      title: "Tasty Snack & Fast Food",
      subtitle: "The flavour of something special.",
    },
    {
      id: 2,
      img: img_2,
      title: "Fresh Fruits & Veggies",
      subtitle: "A healthy meal for everyone.",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 my-10">
      {offers.map((offer) => (
        <div key={offer.id} className="relative flex items-center">
          <img className="w-full rounded-sm" src={offer.img} alt="" />
          <div className="absolute right-0 p-10">
            <h2 className="font-bold text-3xl">
              {offer.title.split("&")[0]} &
            </h2>
            <h2 className="font-bold text-3xl">{offer.title.split("&")[1]}</h2>
            <p className="py-3">{offer.subtitle}</p>
            <button className="bg-[#5CAF90] text-white rounded-sm px-5 py-1 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offers;
