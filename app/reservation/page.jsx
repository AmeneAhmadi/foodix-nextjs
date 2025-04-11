"use client";
import clsx from "clsx";
import PageBanner from "../ui/components/common/PageBanner";
import ReservationForm from "../ui/components/reservation/ReservationForm";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Reservation() {
  const { ref: rightPartRef, inView: rightPartInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div>
      <PageBanner
        title="book a table"
        subtitles={[
          { page: "home", link: "/" },
          { page: "reservation", link: "/reservation" },
        ]}
      />

      <div
        className={clsx(
          "flex flex-col xl:flex-row items-start justify-between gap-6 pt-20 bg-[var(--gray-color)]",
          "px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full"
        )}
      >
        <div
          ref={rightPartRef}
          className={clsx(
            "flex flex-col xl:flex-row items-start justify-between gap-6 py-20 bg-[var(--gray-color)] w-full"
          )}
        >
          <div
            className={clsx(
              " flex flex-col items-center xl:items-start justify-center mb-8 gap-6 w-full xl:w-1/2",
              rightPartRef ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            <span className="font-hanken text-[var(--primary-color)] uppercase font-bold">
              book a table
            </span>
            <h2 className="uppercase font-bold text-5xl leading-20">
              Need reservation? booking your table now!
            </h2>
            <ReservationForm />
          </div>
          <div
                  ref={imgRef}
                  className={clsx(
                    "flex items-center justify-end w-full xl:w-1/2",
                    imgInView ? "animate-fadeInDown opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src="/assets/images/reservation.jpeg"
                    alt="Chef"
                    width={600} // افزایش عرض عکس
                    height={800} // افزایش ارتفاع عکس
                    className="rounded-lg object-cover h-auto" // object-cover برای حفظ تناسب تصویر
                  />
                </div>
        </div>
      </div>
    </div>
  );
}
