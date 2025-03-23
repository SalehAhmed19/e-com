import React from "react";

function Items({ item }) {
  return (
    <div className="border border-[#e4e1e1] my-3 rounded-sm flex items-center p-3">
      <img className="w-[70px]" src={item.img} alt="" />
      <div>
        <h5 className="font-bold">{item.name.slice(0, 20)}...</h5>
        <p className="text-sm text-[#878787]">{item.category}</p>
        <p className="font-bold">${item.price}.00</p>
      </div>
    </div>
  );
}

export default Items;
