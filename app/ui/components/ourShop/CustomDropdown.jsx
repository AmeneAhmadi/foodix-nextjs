"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useProductContext } from "../../contexts/product/ProductContext";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort by Newness");
  const { dispatch } = useProductContext();

  const options = [
    { value: "", label: "Sort by Newness" },
    { value: "high_to_low", label: "Price High To Low" },
    { value: "low_to_high", label: "Price Low To High" },
  ];

  return (
    <div className="relative font-hanken">
      <button
        className="p-3 border border-gray-300 text-lg flex justify-center items-center text-center bg-[#f7f0e6] text-black/70 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold pr-2">{selected}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute w-44 border border-gray-300 bg-white shadow-lg mt-1 z-[9999] rounded-md justify-center text-center"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`p-3 cursor-pointer rounded-md text-gray-700 ${
                selected === option.label
                  ? " font-semibold"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelected(option.label);
                setIsOpen(false);
                dispatch({ type: "SORT_BY_PRICE", payload: option.value });
              }}
            >
              {option.label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default CustomDropdown;
