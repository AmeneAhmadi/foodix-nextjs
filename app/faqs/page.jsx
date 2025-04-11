"use client";

import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Link from "next/link";
import { faqLeftData, faqRightData } from "../data/data";
import PageBanner from "../ui/components/common/PageBanner";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function Faqs() {
  const [openIndexesLeft, setOpenIndexesLeft] = useState(1); // Default to the second accordion open
  const [openIndexesRight, setOpenIndexesRight] = useState(2);

  const toggleAccordionLeft = (index) => {
    setOpenIndexesLeft(openIndexesLeft === index ? null : index);
  };

  const toggleAccordionRight = (index) => {
    setOpenIndexesRight(openIndexesRight === index ? null : index);
  };

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: leftCardRef, inView: leftCardInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: RightCardRef, inView: RightCardInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { faqsLeft } = faqLeftData;

  const { faqsRight } = faqRightData;

  return (
    <div>
      <PageBanner
        title="FAQ"
        subtitles={[
          { page: "home", link: "/" },
          { page: "FAQ", link: "/faqs" },
        ]}
      />
      <div className="bg-[#f7f1e1] pb-20 pt-10">
        <section>
          <div
            ref={titleRef}
            className={clsx(
              " w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 pt-10 ",
              titleInView ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            <div>
              <div className="w-full h-full text-center">
                <p className="font-hanken uppercase font-semibold text-[var(--primary-color)]">
                  FAQS
                </p>
                <h2 className="uppercase text-6xl font-bold mt-2">
                  Frequently asked questions
                </h2>
                <p className="font-hanken text-base lg:text-lg font-medium mt-6 text-[var(--text-color)]">
                  Commonly asked questions, concise answers. Streamlined for
                  quick understanding. <br /> Simplifies user interactions,
                  enhancing
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            {faqsLeft.map((faq, index) => (
              <div
                ref={leftCardRef}
                key={index}
                className={clsx(
                  "bg-white border border-gray-300 rounded-lg p-4",
                  leftCardInView ? "animate-fadeInUp opacity-100" : "opacity-0"
                )}
              >
                {" "}
                {/* Added white background and gray border */}
                <button
                  className="w-full text-left text-xl font-semibold flex items-center justify-between focus:outline-none text-gray-800"
                  onClick={() => toggleAccordionLeft(index)}
                >
                  <h3 className="font-bold">{faq.question}</h3>
                  {openIndexesLeft === index ? (
                    <AiOutlineMinusCircle className="text-xl text-[var(--primary-color)] cursor-pointer" />
                  ) : (
                    <AiOutlinePlusCircle className="text-xl cursor-pointer" />
                  )}
                </button>
                <div
                  className={`w-[90%] font-hanken mt-4 text-base font-normal text-gray-600 leading-loose overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    openIndexesLeft === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {faqsRight.map((faq, index) => (
              <div
                ref={RightCardRef}
                key={index}
                className={clsx(
                  "bg-white border border-gray-300 rounded-md p-4",
                  RightCardInView ? "animate-fadeInUp opacity-100" : "opacity-0"
                )}
              >
                {" "}
                {/* Added white background and gray border */}
                <button
                  className="w-full text-left text-xl font-semibold flex items-center justify-between focus:outline-none text-gray-800"
                  onClick={() => toggleAccordionRight(index)}
                >
                  <h3 className="font-bold">{faq.question}</h3>
                  {openIndexesRight === index ? (
                    <AiOutlineMinusCircle className="text-xl text-[var(--primary-color)] cursor-pointer" />
                  ) : (
                    <AiOutlinePlusCircle className="text-xl cursor-pointer" />
                  )}
                </button>
                <div
                  className={`w-[90%]  font-hanken mt-4 text-base font-normal text-gray-600 leading-loose overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    openIndexesRight === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
