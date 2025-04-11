"use client";

import { useState } from "react";
import TabButton from "./TabButton";
import FoodCard from "./FoodCard";
import FoodVideo from "./FoodVideo";
import Reviews from "./Reviews";
import FoodDetails from "./FoodDetails";

export default function ProductDetails({product}) {
  const [activeTab, setActiveTab] = useState(1);
   return (
    <section className="w-full">
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 pb-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* ستون چپ - تب‌ها */}
          <div className="col-span-1">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-4 border-b border-gray-200">
              {["food details", "food video", "Reviews"].map((label, index) => (
                <TabButton
                  key={index}
                  label={label}
                  isActive={activeTab === index + 1}
                  onClick={() => setActiveTab(index + 1)}
                />
              ))}
            </div>

            {/* محتوای تب‌ها */}
            <div className="mt-4 sm:mt-6 lg:mt-8">
              {activeTab === 1 && <FoodDetails product={product} />}
              {activeTab === 2 && <FoodVideo videoSrc={product.videoSrc} />}
              {activeTab === 3 && <Reviews />}
            </div>
          </div>

          {/* ستون راست - تصاویر */}
          <div className="col-span-1 space-y-4 mt-6 lg:mt-0">
            <FoodCard
              image="/assets/images/banner-bg-3.jpg"
              overlayImage="/assets/images/bn-img-1.png"
              subtitle="Premium skewers"
              title="chicken skewers"
              description="Savor the tantalizing taste of our expertly grilled chicken skewers, marinated."
            />
            <FoodCard
              image="/assets/images/banner-bg-4.jpg"
              overlayImage="/assets/images/bn-img-2.png"
              subtitle="Premium Wrap"
              title="chicken Wrap"
              description="Indulge in our savory chicken wrap, a delightful blend of tender grilled chicken."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
