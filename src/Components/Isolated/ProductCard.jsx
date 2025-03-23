import React from "react";

function ProductCard({ product }) {
  return (
    <div key={product.id} className="border border-[#e4e1e1] rounded-sm">
      <img className="w-full" src={product.img} alt="" />
      <div className="border-t border-[#e4e1e1] p-5">
        <p className="text-[#878787] text-sm">{product.category}</p>
        <h5 className="font-semibold py-2">{product.name}</h5>
        <div className="flex justify-between">
          <p className="pb-2">Ratings: 4.5</p>
          <p className="text-sm text-[#c0c0c0] font-semibold">5 Pcs</p>
        </div>
        <p className="font-bold">${product.price}.00</p>
      </div>
    </div>
  );
}

export default ProductCard;
