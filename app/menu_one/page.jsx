"use client";

import VerticalProductCard from "../ui/components/menu/VerticalProductCard";
import Image from "next/image";
import PageBanner from "../ui/components/common/PageBanner";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function MenuOne() {
  const { ref: firstTitleRef, inView: firstTitleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: firstImageRef, inView: firstImageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: secondTitleRef, inView: secondTitleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
    const { ref: secondImageRef, inView: secondImageInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
  return (
    <section className="w-full">
      <PageBanner
        title="menu restaurant"
        subtitles={[
          { page: "home", link: "/" },
          { page: "menu", link: "/menu_one" },
        ]}
      />
      {/* ✅ بخش اول با پس‌زمینه کرمی */}
      <div className="bg-[#f7f0e6] min-h-[80vh] py-12 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full">
        <div ref={firstImageRef} className={clsx("text-center mb-8", firstImageInView ? "animate-fadeInDown opacity-100" : "opacity-0")}>
          <h2 className="text-6xl font-bold text-gray-900 mt-6 uppercase">
            choose our food
          </h2>
          <p className="font-hanken text-gray-800 my-5 max-w-xl mx-auto text-xl">
            Indulge in an array of meticulously crafted sushi rolls, artfully
            blending fresh ingredients for a delightful taste experience
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 py-8 bg-[#F7F1E1] mx-auto">
          <div ref={firstImageRef} className={clsx("w-full", firstImageInView ? "animate-fadeInLeft opacity-100" : "opacity-0")}>
            <Image
              src="/assets/images/menu-image-1.jpg"
              alt="Chef"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>

          {/* ✅ کارت‌ها */}
          <div className="w-full flex flex-col gap-6">
            <VerticalProductCard
              product={{
                image: "/assets/images/menu-4.jpg",
                title: "Smoked Paprika Sirloin",
                price: 39.92,
                description:
                  "Sirloin infused, smoked paprika perfection on grill.",
              }}
            />
            <VerticalProductCard
              product={{
                image: "/assets/images/menu-5.jpg",
                title: "Red Wine Reduction Ribe",
                price: 32.82,
                description:
                  "Ribeye, luxuriously glazed, red wine reduction perfection.",
              }}
            />
            <VerticalProductCard
              product={{
                image: "/assets/images/menu-6.jpg",
                title: "Raspberry Chipotle Bone",
                price: 56.62,
                description:
                  "T-Bone tango with raspberry chipotle, bold harmony.",
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[60vh] px-6 md:px-20 py-12">
        <div ref={secondTitleRef} className={clsx("text-center mb-8", secondTitleInView ? "animate-fadeInDown opacity-100" : "opacity-0")}>
          <h2 className="text-6xl font-bold text-gray-900 mt-6">
            Delightful Culinary
          </h2>
          <h2 className="text-6xl font-bold text-gray-900">Selection</h2>
          <p className="text-gray-800 mt-6 max-w-lg mx-auto text-xl">
            Indulge in an array of meticulously crafted sushi rolls, artfully
            blending
          </p>
          <p className="text-gray-800 max-w-lg mx-auto text-xl">
            fresh ingredients for a delightful taste experience.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 py-8 mx-auto">
          <div className="w-full flex flex-col gap-6">
            <VerticalProductCard
              product={{
                image: "/assets/images/menu-7.jpg",
                title: "Smoked Paprika Sirloin",
                price: 39.92,
                description:
                  "Sirloin infused, smoked paprika perfection on grill.",
              }}
              border={true}
            />
            <VerticalProductCard
              product={{
                image: "/assets/images/menu-8.jpg",
                title: "Red Wine Reduction Ribe",
                price: 32.82,
                description:
                  "Ribeye, luxuriously glazed, red wine reduction perfection.",
              }}
              border={true}
            />
            <VerticalProductCard
              product={{
                image: "/assets/images/menu-9.jpg",
                title: "Raspberry Chipotle Bone",
                price: 56.62,
                description:
                  "T-Bone tango with raspberry chipotle, bold harmony.",
              }}
              border={true}
            />
            <VerticalProductCard
              product={{
                image: "/assets/images/menu-10.jpg",
                title: "Raspberry Chipotle Bone",
                price: 56.62,
                description:
                  "T-Bone tango with raspberry chipotle, bold harmony.",
              }}
              border={true}
            />
          </div>
          <div ref={secondImageRef} className={clsx("w-full h-full", secondImageInView ? "animate-fadeInRight opacity-100" : "opacity-0")}>
            <Image
              src="/assets/images/menu-image-2.jpg"
              alt="Chef"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
