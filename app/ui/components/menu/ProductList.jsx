"use client";

import React, { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useProductContext } from "../../contexts/product/ProductContext";
import ProductCard from "./ProductCard";

export default function ProductList({}) {
  const { state } = useProductContext();
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(state.filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = state.filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <section className="py-6 bg-[#f7f0e6] mb-9">
      <div className="container mx-auto">
        {/* عنوان */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showFavorite={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
