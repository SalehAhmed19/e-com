import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid grid-cols-6 gap-5 my-20">
      {categories.slice(0, 6).map((category) => (
        <div className="shadow-lg flex flex-col items-center p-5">
          <h5 className="font-bold">{category.name}</h5>
          <p className="text-[#848484]">{category.items} Items</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
