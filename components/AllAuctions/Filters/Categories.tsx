import { CategoryType } from "@/types/store";
import { useState } from "react";

const categories = [
  { name: "All items", type: CategoryType.All },
  { name: "Art", type: CategoryType.Art },
  { name: "Photography", type: CategoryType.Photography },
];

const Categories = () => {
  const [categorySelected, setCategorySelected] = useState<CategoryType>(
    CategoryType.All
  );
  
  return (
    <div className="flex gap-3 font-bold text-light-gray">
      {categories.map(({ name, type }) => (
        <div
          key={type}
          className={`rounded-full px-3 py-1.5 ${
            categorySelected === type ? "bg-white text-dark-gray" : ""
          }`}
          onClick={() => setCategorySelected(type)}
        >
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
