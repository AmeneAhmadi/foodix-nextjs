import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function AboutUsTestimonialCard({ item }) {
  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl h-full">
      <div className="flex items-center gap-3">
        <Image
          src={item.image}
          alt={item.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div className="mr-3">
          <h4 className="font-bold capitalize text-xl text-gray-800">
            {item.name}
          </h4>
          <p className="text-gray-600 text-sm mt-2 font-semibold">
            {item.date}
          </p>
        </div>
      </div>

      <p className="text-gray-700 text-base sm:text-lg py-5 leading-relaxed">
        {item.text}
      </p>

      <div className="flex justify-start mt-1">
      {Array.from({ length: item.rating }, (_, index) => (
            <FaStar key={index} color="var(--orange-color)" size={20} />
          ))}
      </div>
    </div>
  );
}
