"use client";

import React, { useState } from "react";
import ButtonSort from "../ui/components/menu/ButtonSort";
import { useInView } from "react-intersection-observer";
import PageBanner from "../ui/components/common/PageBanner";
import clsx from "clsx";
import VerticalProductCard from "../ui/components/menu/VerticalProductCard";
import { useProductContext } from "../ui/contexts/product/ProductContext";

export default function MenuTwo() {
  const { state } = useProductContext();
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(state.filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = state.filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div>
      <PageBanner
        title="menu restaurant"
        subtitles={[
          { page: "home", link: "/" },
          { page: "menu restaurant", link: "/menu_two" },
        ]}
      />
      <section
        ref={titleRef}
        className={clsx(
          "bg-[#f7f0e6] py-12 px-6 md:px-20",
          titleInView ? "animate-fadeInDown opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-8">
          <h2 className="text-6xl font-bold text-gray-900 mt-6">CHOOSE MENU</h2>
          <p className="text-gray-800 my-5 max-w-lg mx-auto text-xl">
            Indulge in an array of meticulously crafted sushi rolls, artfully
            blending fresh ingredients for a delightful taste experience
          </p>
        </div>
        <div className="justify-center">
          <ButtonSort />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
            {currentProducts.map((product) => (
              <VerticalProductCard key={product.id} product={product} border />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
