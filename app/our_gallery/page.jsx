"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryPageData } from "../data/data";
import PageBanner from "../ui/components/common/PageBanner";
import GalleryImage from "../ui/components/ourGallery/GalleryImage";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function OurGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [firstLineRef, firstLineInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [secondLineRef, secondLineInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [thirdLineRef, thirdLineInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [forthLineRef, forthLineInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { images } = galleryPageData;

  return (
    <div>
      <PageBanner
        title="our gallery"
        subtitles={[
          { page: "home", link: "/" },
          { page: "our gallery", link: "/our_gallery" },
        ]}
      />

      <section className="w-full mx-auto">
        <div className="px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 mx-auto py-20 ">
          {/* بخش اول: دو عکس اول */}
          <div
            ref={firstLineRef}
            className={clsx(
              "grid grid-cols-1 lg:grid-cols-5 gap-6",
              firstLineInView ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            {/* عکس سمت چپ - عریض‌تر */}
            <GalleryImage
              parentClass={"lg:col-span-3 relative group cursor-pointer"}
              imageSrc={"/assets/images/gallery-1.jpg"}
              width={800}
              height={500}
              onClick={() => {
                setPhotoIndex(0);
                setIsOpen(true);
              }}
              imageClass={"w-full h-full object-cover"}
            />

            {/* عکس سمت راست */}
            <GalleryImage
              parentClass={"lg:col-span-2 relative group cursor-pointer"}
              imageSrc={"/assets/images/gallery-2.jpg"}
              width={500}
              height={500}
              onClick={() => {
                setPhotoIndex(1);
                setIsOpen(true);
              }}
              imageClass={"w-full h-full object-cover"}
            />
          </div>

          {/* بخش دوم: سه عکس با تقسیم‌بندی مساوی */}

          <div
            ref={secondLineRef}
            className={clsx(
              "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-8",
              secondLineInView ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <GalleryImage
                  parentClass={"relative group cursor-pointer"}
                  imageSrc={`/assets/images/gallery-${index + 3}.jpg`}
                  width={400}
                  height={400}
                  onClick={() => {
                    setPhotoIndex(index + 2);
                    setIsOpen(true);
                  }}
                  imageClass={"w-full h-full object-cover"}
                />
              </div>
            ))}
          </div>

          <div
            ref={thirdLineRef}
            className={clsx(
              "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-8",
              thirdLineInView ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <GalleryImage
                  parentClass={"relative group cursor-pointer"}
                  imageSrc={`/assets/images/gallery-${index + 6}.jpg`}
                  width={400}
                  height={400}
                  onClick={() => {
                    setPhotoIndex(index + 2);
                    setIsOpen(true);
                  }}
                  imageClass={"w-full h-full object-cover"}
                />
              </div>
            ))}
          </div>
          {/* بخش سوم: دو عکس آخر */}
          <div
            ref={forthLineRef}
            className={clsx(
              "grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8",
              forthLineInView ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            {/* عکس سمت چپ */}
            <GalleryImage
              parentClass={"lg:col-span-2 relative group cursor-pointer"}
              imageSrc={"/assets/images/gallery-8.jpg"}
              width={500}
              height={500}
              onClick={() => {
                setPhotoIndex(8);
                setIsOpen(true);
              }}
              imageClass={"w-full h-full object-cover"}
            />

            {/* عکس سمت راست - عریض‌تر */}
            <GalleryImage
              parentClass={"lg:col-span-3 relative group cursor-pointer"}
              imageSrc={"/assets/images/gallery-9.jpg"}
              width={800}
              height={500}
              onClick={() => {
                setPhotoIndex(9);
                setIsOpen(true);
              }}
              imageClass={"w-full h-full object-cover"}
            />
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((src) => ({ src }))}
          styles={{
            container: {
              background: "rgba(0, 0, 0, 0.7)", // پس‌زمینه‌ی نیمه شفاف
            },
          }}
        />
      </section>
    </div>
  );
}
