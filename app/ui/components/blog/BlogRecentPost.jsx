import Image from "next/image";
import Link from "next/link";

export default function BlogRecentPost({item}) {
  return (
    <div className="flex flex-row gap-4 mb-7 ">
      <div className="w-32 h-24 relative ">
        <Image
          src={item.imageSrc}
          alt="Blog Image"
          fill
          className="w-32 h-24 "
        />
      </div>
      <div>
        <Link
          href="#"
          className="font-semibold hover:text-[var(--primary-color)] transition duration-400 "
        >
          <h4 className="text-lg">
            {item.text}
          </h4>
        </Link>
        <p className="font-hanken text-[var(--text-color)] font-semibold">{item.date}</p>
      </div>
    </div>
  );
}
