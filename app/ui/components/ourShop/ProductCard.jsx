"use client";
import clsx from "clsx";
import React from "react";
import { FaStar, FaRegCheckCircle, FaRegHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

export default function ProductCard({ product, showFavorite = true }) {
  const router = useRouter();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={clsx(
        "bg-white rounded-xl shadow-lg overflow-hidden relative",
        inView ? "animate-fadeInUp opacity-100" : "opacity-0",
        "max-w-2xl"
      )}
    >
      {/* تصویر محصول */}
      <div className=" w-full h-64 md:h-auto overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* محتوا */}
      <div className=" p-6 flex flex-col justify-between ">
        {/* قیمت و امتیاز */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[var(--primary-color)] text-2xl font-semibold">
            ${Number(product.price).toFixed(2)}
          </span>
          <span className="font-hanken text-black/80 text-lg flex items-center">
            <FaStar className="text-yellow-400 mr-1" /> {product.rating} (
            {product.reviews})
          </span>
        </div>

        {/* عنوان محصول */}
        <h3 className="text-2xl font-bold text-black/90 mb-4">
          {product.title}
        </h3>

        {/* ویژگی‌های محصول */}
        <ul className="mb-4">
          {product.features?.map((feature, index) => (
            <li
              key={index}
              className="font-hanken font-medium flex items-center text-black/60"
            >
              <FaRegCheckCircle className="text-[var(--primary-color)]  mr-2" />{" "}
              {feature}
            </li>
          ))}
        </ul>

        {/* دکمه افزودن به سبد خرید */}
        <button
          onClick={() => router.push(`/product/details?id=${product.id}`)}
          aria-label={`Add ${product.title} to cart`}
          className="font-hanken cursor-pointer font-bold text-black/70 text-xl py-3 border border-gray-400 rounded-md flex items-center justify-center hover:border-[var(--primary-color)] transition"
        >
          <BsCartPlus className="mr-2" />
          Add to Cart
        </button>
      </div>
      {showFavorite && (
        <div
          className={clsx(
            "absolute flex items-center justify-center top-4 right-4 p-2 text-white rounded-full ",
            "w-14 h-14 cursor-pointer bg-white/30 hover:bg-[var(--primary-color)] transition duration-500"
          )}
        >
          <FaRegHeart />
        </div>
      )}
    </div>
  );
}
