"use client";
import React, { useState } from "react";
import ProductCard from "../menu/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CustomDropdown from "./CustomDropdown";
import { useProductContext } from "../../contexts/product/ProductContext";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function ProductOurShop() {
  const { ref: topRef, inView: topInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: pagingRef, inView: pagingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { state } = useProductContext();
  const products = state.filteredProducts;

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-[#f7f0e6] py-12 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full">
      <div
        ref={topRef}
        className={clsx(
          "flex justify-between items-center mb-4 mx-auto relative z-[10]"
        )}
      >
        <h3
          className={clsx(
            "text-black/70 font-hanken",
            topInView ? "animate-fadeInLeft opacity-100" : "opacity-0"
          )}
        >
          Showing {startIndex + 1} -{" "}
          {Math.min(startIndex + itemsPerPage, products.length)} of{" "}
          {products.length} Result
        </h3>
        <div
          className={clsx(
            topInView ? "animate-fadeInRight opacity-100" : "opacity-0"
          )}
        >
          <CustomDropdown />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto relative z-[1]">
        {selectedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div
        ref={pagingRef}
        className={clsx(
          "flex justify-center mt-10 space-x-2 relative z-[10]",
          pagingInView ? "animate-fadeInUp opacity-100" : "opacity-0"
        )}
      >
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-900 hover:bg-gray-200"
          }`}
        >
          <FaArrowLeft />
        </button>

        {/* شماره صفحات */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === i + 1
                ? "bg-red-600 text-white"
                : "text-gray-900 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* دکمه بعدی */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-900 hover:bg-gray-200"
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
