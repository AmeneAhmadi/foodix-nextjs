"use client";
import PageBanner from "../ui/components/common/PageBanner";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import ChefCard from "../ui/components/ourChefs/ChefCard";
import { ourChefsData } from "../data/data";
export default function OurChefs() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {ourChefs}= ourChefsData;
  return (
    <div>
      <PageBanner
        title="our chefs"
        subtitles={[
          { page: "home", link: "/" },
          { page: "our chefs", link: "/our_chefs" },
        ]}
      />

      <section>
        <div
          ref={titleRef}
          className={clsx(
            "pt-20 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full",
            titleInView ? "animate-fadeInDown opacity-100" : "opacity-0"
          )}
        >
          <div>
            <div className="w-full h-full mt-6">
              <h2 className="uppercase text-6xl font-bold text-center">
                Meet our special chef
              </h2>
              <p className="font-hanken text-base lg:text-lg font-medium mt-6 text-center text-[var(--text-color)]">
                Introducing our esteemed culinary virtuoso, a maestro of flavors
                crafting exquisite <br /> dishes with passion, precision, and a
                touch of magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto">
        <div className="py-15 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourChefs.map((chef, index) => (
              <ChefCard
                key={index}
                {...chef}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
