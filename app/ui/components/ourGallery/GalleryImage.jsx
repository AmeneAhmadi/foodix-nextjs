import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";

export default function GalleryImage({
  parentClass,
  imageSrc,
  width,
  height,
  onClick,
  imageClass,
}) {
  return (
    <div
      className={parentClass}
      style={{ height: `${height || 400}px` }}
      onClick={onClick}
    >
      <Image
        src={imageSrc}
        alt="Gallery Image"
        width={width}
        height={height}
        className={`object-cover ${imageClass}`}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0  group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <FaSearchPlus className="text-white text-3xl" />
      </div>
    </div>
  );
}
