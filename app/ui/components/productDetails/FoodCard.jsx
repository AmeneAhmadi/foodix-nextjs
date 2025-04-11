import Image from "next/image";

export default function FoodCard({
  image,
  overlayImage,
  title,
  subtitle,
  description,
}) {
  return (
    <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[251px] rounded-lg overflow-hidden relative">
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0">
        <div className="h-full flex">
          <div className="w-full p-4 sm:p-6 lg:p-12 flex flex-col justify-center">
            <span className="text-sm sm:text-base lg:text-xl text-white font-medium mb-1 sm:mb-2 uppercase">
              {subtitle}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-5xl text-white font-bold mb-1 sm:mb-2 uppercase">
              {title}
            </h3>
            <p className="text-gray-100 text-xs sm:text-sm lg:text-base leading-relaxed">
              {description}
            </p>
          </div>
          {overlayImage && (
            <div className="hidden md:flex w-[30%] h-full items-center">
              <Image
                src={overlayImage}
                alt="Product Detail"
                width={300}
                height={200}
                className="w-full h-full object-contain object-right"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
