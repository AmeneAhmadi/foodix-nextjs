import clsx from "clsx";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function HistoryImage({
  imageSrc,
  altText,
  haveSelfAnimation,
  animationName,
  isSmall,
}) {
  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <Image
      ref={imageRef}
      className={clsx(
        "w-full object-cover",
        isSmall ? "md:w-1/2 h-auto" : " h-full",
        haveSelfAnimation
          ? imageInView
            ? `animate-${animationName} opacity-100`
            : "opacity-0"
          : ""
      )}
      src={imageSrc}
      alt={altText}
      width={500}
      height={500}
    />
  );
}
