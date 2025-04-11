"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useCartContext } from "../../contexts/cart/CartContext";

export default function CartItem({ item, isLast }) {
  const { addProductToCard, removeProductFromCard } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(item.price);

  useEffect(() => {
    setTotalPrice(item.quantity * item.price);
  }, [item.quantity, item.price]);

  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row items-center justify-between gap-3 px-2 py-3 w-full",
        !isLast && "border-b border-black/10"
      )}
    >
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex items-center w-20 h-20 sm:w-24 sm:h-24 rounded-lg">
          <Image
            src={item.image}
            width={96}
            height={96}
            alt="cart-item"
            className="rounded-lg object-cover"
          />
        </div>
        <Link
          href="/product/detail"
          className="text-sm font-medium sm:text-base md:text-xl md:font-bold w-full sm:w-50"
        >
          {item.title}
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <p className="font-hanken font-bold text-sm sm:text-base md:text-lg">
          ${item.price}
        </p>
        <div
          className={clsx(
            "flex items-center justify-center gap-2 sm:gap-3 max-w-20 sm:max-w-24 font-medium",
            "py-2 px-3 sm:py-3 sm:px-4 border border-[var(--primary-color)] rounded-lg font-hanken"
          )}
        >
          <button
            onClick={() => {
              addProductToCard(item, -1);
            }}
            className="cursor-pointer"
          >
            <FaMinus size={14} />
          </button>
          <span className="text-base sm:text-lg">{item.quantity}</span>
          <button
            onClick={() => {
              addProductToCard(item, 1);
            }}
            className="cursor-pointer"
          >
            <FaPlus size={14} />
          </button>
        </div>
        <p className="font-hanken font-bold text-sm sm:text-base md:text-lg w-16 sm:w-20">
          ${totalPrice}
        </p>
        <button
          onClick={() => {
            removeProductFromCard(item.id);
          }}
          className={clsx(
            "flex items-center justify-center mt-2 sm:mt-0",
            "hover:text-[var(--primary-color)] cursor-pointer transition-colors duration-100"
          )}
        >
          <FaTrashAlt size={16} />
        </button>
      </div>
    </div>
  );
}
