"use client";
import { teamData } from "@/app/data/data";
import clsx from "clsx";
import { BiDish } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import ClientOnly from "../../components/common/ClientOnly";

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { teamMembers } = teamData;
  return (
    <section ref={ref} className="py-12 bg-white">
      <div className="container mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24">
        <ClientOnly>
          <div
            className={clsx(
              "text-center mb-12 w-full",
              inView ? "animate-fadeInDown opacity-100" : "opacity-0"
            )}
          >
            <div className="font-hanken text-[var(--orange-color)] uppercase font-bold xl:text-lg flex items-center justify-center gap-2">
              <BiDish size={20} />
              <span>OUR SPECIAL CHEFS</span>
            </div>
            <h2 className="text-6xl font-bold mt-2">
              INTRODUCING OUR CULINARY MASTERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={clsx(
                  "group relative overflow-hidden rounded-lg mx-auto max-w-[400px] w-full",
                  index === 2
                    ? "md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-[400px]"
                    : "",
                  inView ? "animate-fadeInUp opacity-100" : "opacity-0"
                )}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />

                  <div className="absolute -left-full top-6 h-full flex items-start opacity-0 group-hover:opacity-100 group-hover:left-6 group-hover:animate-fadeInLeft transition-all duration-300">
                    <div className="flex flex-col gap-3">
                      <a
                        href={member.social.facebook}
                        className="w-8 h-8 bg-white hover:bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <FaFacebookF
                          size={15}
                          className="text-[var(--primary-color)] hover:text-white transition-colors"
                        />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-white hover:[var(--primary-color)] rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <FaTwitter
                          size={15}
                          className="text-[var(--primary-color)] hover:text-white transition-colors"
                        />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white hover:bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <FaLinkedinIn
                          size={15}
                          className="text-[var(--primary-color)] hover:text-white transition-colors"
                        />
                      </a>
                      <a
                        href={member.social.youtube}
                        className="w-8 h-8 bg-white hover:bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <FaYoutube
                          size={15}
                          className="text-[var(--primary-color)] hover:text-white transition-colors"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Info Box - Centered with white background */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-[30px] h-[80px] w-[90%] max-w-[350px] flex flex-col justify-center text-center shadow-md group-hover:bg-[var(--primary-color)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white mt-1 transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ClientOnly>
      </div>
    </section>
  );
}
