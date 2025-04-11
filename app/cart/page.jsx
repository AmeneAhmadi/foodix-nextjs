"use client";
import PageBanner from "../ui/components/common/PageBanner";
import CartItem from "../ui/components/cart/CartItem";
import clsx from "clsx";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useCartContext } from "../ui/contexts/cart/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cartState, finalPrice, totalPrice } = useCartContext();

  const [cartItemsRef, cartItemsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [couponRef, couponInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [totalsRef, totalsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section>
      <PageBanner
        title="Cart"
        subtitles={[
          { page: "home", link: "/" },
          { page: "cart", link: "/cart" },
        ]}
      />
      <div
        className={clsx(
          "flex flex-col xl:flex-row items-start justify-between ",
          "px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full",
          "pt-32 pb-24 gap-6"
        )}
      >
        {cartState.cartItems.length > 0 ? (
          <>
            <div className="flex flex-col items-center justify-between w-full xl:w-8/12 gap-10">
              <div
                ref={cartItemsRef}
                className={clsx(
                  "w-full ",
                  cartItemsInView ? "animate-fadeInUp opacity-100" : "opacity-0"
                )}
              >
                {cartState.cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    isLast={index === cartState.cartItems.length - 1}
                  />
                ))}
              </div>
              <div
                ref={couponRef}
                className={clsx(
                  "flex items-start sm:items-center justify-between ",
                  "w-full gap-6 flex-col sm:flex-row",
                  couponInView ? "animate-fadeInUp opacity-100" : "opacity-0"
                )}
              >
                <div className="border border-black/50 rounded-lg p-2 font-hanken w-full lg:w-3/4 flex flex-col sm:flex-row items-center justify-between">
                  <input
                    type="text"
                    placeholder="coupon code"
                    className="outline-0 placeholder:text-black/50 lg:text-xl capitalize lg:px-4 py-3 lg:py-1 w-full lg:w-auto"
                  />
                  <button
                    className={clsx(
                      "font-hanken bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] transition-colors",
                      "text-white rounded-lg lg:text-xl w-full sm:w-auto text-nowrap ",
                      "py-2 sm:py-3 sm:px-4 lg:px-11 font-bold transition-colors cursor-pointer"
                    )}
                  >
                    Apply Coupon
                  </button>
                </div>
                <button
                  className={clsx(
                    "font-hanken bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] transition-colors",
                    "text-white rounded-lg lg:text-xl py-2 sm:py-4 sm:px-4 lg:px-11 font-bold transition-colors ",
                    "w-full sm:w-auto lg:w-1/4 cursor-pointer text-nowrap"
                  )}
                >
                  Update Cart
                </button>
              </div>
            </div>
            <div
              ref={totalsRef}
              className={clsx(
                "flex flex-col items-start justify-between rounded-xl ",
                "bg-[var(--gray-color)] mt-2 py-9 px-8 w-full xl:w-4/12",
                totalsInView ? "animate-fadeInUp opacity-100" : "opacity-0"
              )}
            >
              <h4 className="capitalize text-2xl font-bold mb-4">
                cart totals
              </h4>
              <div className="flex flex-col items-start justify-between gap-4 w-full font-hanken">
                <div className="flex items-center justify-between w-full border-b border-[#dee2e6] py-2 px-3 capitalize">
                  <p>cart subtotal</p>
                  <p>{totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between w-full border-b border-[#dee2e6] py-2 px-3 capitalize">
                  <p>shipping fee</p>
                  <p>{cartState.shippingFee}</p>
                </div>
                <div className="flex items-center justify-between w-full font-bold py-2 px-3 capitalize">
                  <p>order total</p>
                  <p>{finalPrice.toFixed(2)}</p>
                </div>
                <Link
                  href="/checkout"
                  className={clsx(
                    "font-hanken bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] transition-colors",
                    "text-white text-center rounded-lg lg:text-xl py-2 lg:py-4 sm:px-11 font-bold transition-colors w-full sm:w-auto cursor-pointer"
                  )}
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl font-bold text-center text-[var(--primary-color)]">
              Your cart is empty
            </h3>
            <Image
              src="/assets/images/empty-cart.jpg"
              width={500}
              height={500}
              alt="empty-cart"
              className="rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
