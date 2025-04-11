"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import PageBanner from "../ui/components/common/PageBanner";

export default function Error404() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section>
       <PageBanner
              title="404"
              subtitles={[
                { page: "home", link: "/" },
                { page: "404", link: "/error_404" },
              ]}
            />
      <div className="w-full mx-auto  px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24 flex flex-col items-center justify-center bg-gray-100 my-20 h-[60%]">
      <div className="w-full relative flex flex-col items-center justify-center bg-[url('/assets/images/error-bg.jpg')] bg-center h-[100%] bg-cover bg-no-repeat">
        {/* لایه تیره‌کننده */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        {/* محتوای اصلی */}
        <div className="relative text-center px-6 pt-0 pb-36 ">
          <h2 className="text-7xl font-bold text-[var(--primary-color)] mt-16">
            404
          </h2>
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            Oops! Page Not Found
          </h2>
          <div className="mt-12">
            <p className="font-hanken text-md text-white mt-2">
              It looks like you've encountered a "Page Not Found" error, also
              known as a 404 error.
            </p>
            <p className="font-hanken text-md text-white mt-2">
              This typically happens when the web server cannot locate
            </p>
          </div>
          <div className="mx-auto mt-14">
            <Link
              href="/"
              className="font-hanken px-8 py-4 bg-[var(--primary-color)] text-white font-semibold uppercase text-lg rounded-lg hover:bg-[var(--secondary-color)] transition duration-300"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
