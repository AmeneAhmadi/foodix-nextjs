"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import SocialLink from "./SocialLink";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function ChefCard({ name, position, imageSrc, socialLinks }) {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
      });
  const socialLinkClass =
    "text-white group-hover:text-[var(--primary-color)] transition-colors duration-300";
  return (
    <div ref={ref} className={clsx("flex flex-col", inView ? "animate-fadeInUp opacity-100" : "opacity-0")}>
      <div className="relative w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt="Team Member"
          width={500}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="bg-[var(--primary-color)] p-6 text-white text-center">
        <h3 className="text-2xl font-bold capitalize">{name}</h3>
        <p className="text-lg font-medium mb-1 capitalize">{position}</p>

        <div className="flex gap-4 justify-center mt-4">
          <SocialLink
            icon={<FaFacebookF className={socialLinkClass} />}
            address={socialLinks.facebook}
          />
          <SocialLink
            icon={<FaTwitter className={socialLinkClass} />}
            address={socialLinks.twitter}
          />
          <SocialLink
            icon={<FaLinkedinIn className={socialLinkClass} />}
            address={socialLinks.linkedin}
          />
          <SocialLink
            icon={<FaPinterestP className={socialLinkClass} />}
            address={socialLinks.pinterest}
          />
        </div>
      </div>
    </div>
  );
}
