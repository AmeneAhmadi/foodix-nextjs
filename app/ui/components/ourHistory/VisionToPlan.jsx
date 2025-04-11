import clsx from "clsx";
import HistoryImage from "./HistoryImage";
import { useInView } from "react-intersection-observer";

export default function VisionToPlan({
  year,
  leftDescription,
  rightDescription,
  firstImageSrc,
  secondImageSrc,
}) {
  const [leftPartRef, leftPartInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [rightPartRef, rightPartInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="w-full mx-auto font-hanken">
      <div className="py-20 border-b border-gray-200 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            ref={leftPartRef}
            className={clsx(
              "flex flex-col items-start justify-start",
              leftPartInView ? "animate-fadeInLeft opacity-100" : "opacity-0"
            )}
          >
            <h5 className="uppercase text-lg font-semibold text-[var(--primary-color)]">
              Vision to Plan
            </h5>
            <h2 className="font-barlow text-3xl lg:text-6xl font-bold uppercase leading-tight text-start">
              {year}
            </h2>
            <p className="text-base lg:text-lg font-medium mt-6">
              {leftDescription}
            </p>
          </div>

          <div
            ref={rightPartRef}
            className={clsx(
              "flex flex-col items-start justify-start",
              rightPartInView ? "animate-fadeInRight opacity-100" : "opacity-0"
            )}
          >
            <p className="text-base lg:text-lg font-medium text-[var(--text-color)]">
              {rightDescription}
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-8 w-full">
              <HistoryImage
                imageSrc={firstImageSrc}
                altText="Vision to Plan"
                isSmall
              />
              <HistoryImage
                imageSrc={secondImageSrc}
                altText="Vision to Plan"
                isSmall
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
