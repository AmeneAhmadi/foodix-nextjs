"use client";
import PageBanner from "../ui/components/common/PageBanner";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import HistoryImage from "../ui/components/ourHistory/HistoryImage";
import VisionToPlan from "../ui/components/ourHistory/VisionToPlan";

export default function OurHistory() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div>
      <PageBanner
        title="our history"
        subtitles={[
          { page: "home", link: "/" },
          { page: "our history", link: "/our_history" },
        ]}
      />

      <section className="w-full mx-auto font-hanken">
        <div className=" py-40 border-b border-gray-200 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full h-full mt-6">
              <div
                ref={titleRef}
                className={clsx(
                  "mb-6",
                  titleInView ? "animate-fadeInDown opacity-100" : "opacity-0"
                )}
              >
                <h5 className="uppercase text-lg font-semibold text-[var(--primary-color)]">
                  Our History
                </h5>
                <h2 className="font-barlow text-3xl lg:text-6xl font-bold uppercase leading-tight mt-3">
                  key milestones and
                  <br className="hidden md:block" />
                  dates
                </h2>
              </div>
              <p className="text-base lg:text-lg font-medium mt-4">
                The Main Chef is a culinary virtuoso and the creative force
                behind the kitchen's gastronomic artistry. With a profound
                passion for food.
              </p>

              <p className="text-base lg:text-lg font-medium mt-5">
                Proactively fabricate one-to-one materials via effective
                e-business. Completely synergize scalable e-commerce rather than
                high standards in e-services.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <HistoryImage
                  imageSrc="/assets/images/history-1.jpg"
                  altText="Our History"
                  haveSelfAnimation
                  animationName={"fadeInUp"}
                  isSmall
                />
                <HistoryImage
                  imageSrc="/assets/images/history-2.jpg"
                  altText="Our History"
                  haveSelfAnimation
                  animationName={"fadeInUp"}
                  isSmall
                />
              </div>
            </div>

            <div className="w-full h-full mt-6 lg:mt-0">
              <HistoryImage
                imageSrc="/assets/images/history-3.jpg"
                altText="Our History"
                haveSelfAnimation
                animationName={"fadeInRight"}
              />
            </div>
          </div>
        </div>
      </section>

      <VisionToPlan
        year={2022}
        leftDescription={
          "The Main Chef is a culinary virtuoso and the creative force behind the kitchen's gastronomic artistry. With a profound passion for food."
        }
        rightDescription={
          "Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services."
        }
        firstImageSrc={"/assets/images/history-4.jpg"}
        secondImageSrc={"/assets/images/history-5.jpg"}
      />

      <VisionToPlan
        year={2023}
        leftDescription={
          "The Main Chef is a culinary virtuoso and the creative force behind the kitchen's gastronomic artistry. With a profound passion for food."
        }
        rightDescription={
          "Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services."
        }
        firstImageSrc={"/assets/images/history-6.jpg"}
        secondImageSrc={"/assets/images/history-7.jpg"}
      />
    </div>
  );
}
