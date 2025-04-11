"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import PageBanner from "@/app/ui/components/common/PageBanner";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi";
import { productRelatedItemsData, variationOptionsData } from "@/app/data/data";
import ProductDetails from "@/app/ui/components/productDetails/ProductDetails";
import RelatedItem from "@/app/ui/components/productDetails/RelatedItem";
import { useCartContext } from "@/app/ui/contexts/cart/CartContext";
import { useProductContext } from "@/app/ui/contexts/product/ProductContext";
import { useSearchParams } from "next/navigation";
import MessageBox from "@/app/ui/components/common/MessageBox";

export default function MenuDetails() {
  const { cartState, addProductToCard, addProductToCardWithQuantity } =
    useCartContext(); // Import the context to use addProductToCard function
  const { state } = useProductContext();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [isِDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [showContent, setShowContent] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || 1;
  const { variationOptions } = variationOptionsData;
  const [productImageRef, productImageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [productMenuInfoRef, productMenuInfoInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  useEffect(() => {
    if (id) {
      const foundProduct = state.products.find(
        (item) => item.id === Number(id)
      );
      const productInCart = cartState.cartItems.find(
        (item) => item.id === Number(id)
      );
      setProduct(foundProduct);
      setCount(productInCart?.quantity || 1); // Set the initial count based on the product's quantity in cart
    }
  }, [id, state.products]);

  if (!product) return <div>Loading...</div>; // Loading state

  const { relatedItems } = productRelatedItemsData;
  const decrementQuantity = (product) => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      addProductToCard(product, -1);
    }
  };

  const incrementQuantity = (product) => {
    setCount((prev) => prev + 1);
    addProductToCard(product, 1);
  };

  return (
    <section className="relative">
      <PageBanner
        title="menu details"
        subtitles={[
          { page: "home", link: "/" },
          { page: "menu details", link: "/product/details" },
        ]}
      />

      <section className="w-ful">
        <div
          className={clsx(
            "pt-20 sm:pt-28 md:pt-40 pb-8 sm:pb-12 md:pb-16 ",
            "px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* ستون عکس */}
            <div
              ref={productImageRef}
              className={clsx(
                "col-span-1 px-4 sm:px-8 lg:px-0",
                productImageInView
                  ? "animate-fadeInLeft opacity-100"
                  : "opacity-0"
              )}
            >
              <Image
                src={product?.image}
                alt="Food Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* ستون محتوا */}
            <div
              ref={productMenuInfoRef}
              className={clsx(
                "flex flex-col justify-center mt-6 lg:mt-0 px-4 sm:px-8 lg:px-0",
                productMenuInfoInView
                  ? "animate-fadeInRight opacity-100"
                  : "opacity-0"
              )}
            >
              <div className="w-full">
                <div className="bg-white py-4 sm:py-5 lg:py-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-3 sm:mb-4 xl:text-4xl uppercase">
                    {product?.title}
                  </h2>
                  <p className="font-hanken text-[var(--text-color)] leading-relaxed text-base sm:text-xl lg:text-xl font-medium mb-4 sm:mb-6 lg:mb-7 xl:text-2xl">
                    Plant-based dining is no longer a niche it's a movement.
                    Chefs are pushing the boundaries of creativity.
                  </p>

                  {/* قیمت */}
                  <div className="flex items-center gap-2 xl:pt-4 sm:gap-3 mb-4 sm:mb-5 lg:mb-6 pt-2 sm:pt-3 lg:pt-1">
                    <h4 className="text-xl sm:text-2xl lg:text-3xl text-[var(--primary-color)] font-medium">
                      ${product?.price}
                    </h4>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 line-through font-medium">
                      ${(Number(product?.price) + 10).toFixed(2)}
                    </h4>
                  </div>

                  {/* باکس شمارنده و لیست کشویی */}
                  <div
                    className={clsx(
                      "font-hanken flex flex-col sm:flex-row items-start sm:items-center ",
                      "gap-10 sm:gap-6 lg:gap-8 pt-3 sm:pt-4 lg:pt-1 xl:pt-5"
                    )}
                  >
                    {/* باکس شمارنده */}
                    <div
                      className={clsx(
                        "flex items-center justify-between sm:gap-3 w-24 sm:w-44 font-medium",
                        "p-4 sm:py-4 sm:px-5 border border-[var(--primary-color)] rounded-lg font-hanken"
                      )}
                    >
                      <button
                        onClick={() => {
                          decrementQuantity(product);
                        }}
                        className="cursor-pointer"
                      >
                        <FaMinus size={14} />
                      </button>
                      <span className="text-base sm:text-lg">{count}</span>
                      <button
                        onClick={() => {
                          incrementQuantity(product);
                        }}
                        className="cursor-pointer"
                      >
                        <FaPlus size={14} />
                      </button>
                    </div>

                    <div className="relative w-44 font-hanken">
                      {/* دکمه‌ی اصلی برای باز کردن dropdown */}
                      <button
                        onClick={() => setIsDropdownOpen(!isِDropdownOpen)}
                        className={clsx(
                          "w-full p-4 sm:px-5 sm:py-5 border border-gray-400 rounded-lg bg-black text-white ",
                          "font-semibold flex justify-between items-center"
                        )}
                      >
                        {selectedSize
                          ? variationOptions.find(
                              (opt) => opt.value === selectedSize
                            )?.label
                          : "Variation Size"}
                        <HiChevronDown size={24} />
                      </button>
                      {/* لیست گزینه‌ها */}
                      {isِDropdownOpen && (
                        <ul className="absolute w-full mt-1 bg-white border border-gray-400 rounded-lg shadow-lg z-10">
                          {variationOptions.map((option) => (
                            <li
                              key={option.value}
                              onClick={() => {
                                setSelectedSize(option.value);
                                setIsDropdownOpen(false);
                              }}
                              className="p-3 text-black hover:bg-gray-200 cursor-pointer"
                            >
                              {option.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* دکمه Add to Cart */}
                  <div className="font-hanken mt-6 sm:mt-8 lg:mt-10">
                    <button
                      onClick={() => {
                        addProductToCardWithQuantity(product, count);
                        setShowMessage(true);
                        setTimeout(() => {
                          setShowMessage(false);
                        }, 3000);
                      }}
                      className={clsx(
                        "sm:w-auto inline-block px-5 sm:px-7 xl:px-11 py-3 sm:py-4 rounded-lg sm:rounded-xl",
                        "bg-[var(--primary-color)] capitalize text-lg sm:text-xl xl:text-xl",
                        "font-semibold text-white transition duration-300 ",
                        "hover:bg-[var(--secondary-color)] text-center cursor-pointer"
                      )}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductDetails product={product} />

      <section className="w-ful mx-auto">
        <div className="py-12 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 pb-20 mx-auto">
          <h2 className="text-3xl font-bold">Related items</h2>
          <div className="w-full mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-9">
              {relatedItems.map((item, index) => (
                <RelatedItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {showMessage && (
        <MessageBox
          text="Product added to cart successfully"
          type="success"
          onClose={() => setShowMessage(false)}
        />
      )}
    </section>
  );
}
