import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid grid-cols-6 gap-10 my-20">
      {categories.slice(0, 6).map((category) => (
        <div className="bg-gradient-to-b from-[#eedec358] to-white p-5 rounded-sm">
          <div className="shadow-lg shadow-[#dedede44] flex flex-col items-center p-5 bg-white rounded-sm">
            <img className="w-10 mb-2" src={category.icon} alt="" />
            <h5 className="font-bold">{category.name}</h5>
            <p className="text-[#848484]">{category.items} Items</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
