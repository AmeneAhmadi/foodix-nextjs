import React from "react";
import { useProductContext } from "../../contexts/product/ProductContext";


const categories = ["Beef", "Grilled", "Sizzling", "Steak Bliss"]; 

const ButtonSort = () => {
  const { dispatch, state } = useProductContext();

  return (
    <div className="flex flex-col gap-4 mb-4 text-center justify-center items-center">
      <div className="flex gap-6"> 
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
            }}
            className={`cursor-pointer px-14 font-bold text-lg py-3 rounded-xl transition-all ${
              state.selectedCategory === category
                ? "bg-[var(--primary-color)] text-white"
                : "bg-[#bf1109]/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSort;
