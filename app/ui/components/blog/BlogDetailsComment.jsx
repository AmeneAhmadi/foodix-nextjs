import clsx from "clsx";
import Image from "next/image";

export default function BlogDetailsComment({ item }) {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row gap-4 border border-gray-200 py-6 px-6 rounded-lg mt-6 ",
        item.small ? "max-w-[90%] ml-auto" : ""
      )}
    >
      <div>
        <Image
          src={item.imageSrc}
          alt="Blog Image"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="font-semibold uppercase text-xl">{item.name}</h2>
          <p className="font-hanken text-[var(--primary-color)] font-semibold">
            {item.date}
          </p>
        </div>
        <p className="font-hanken text-[var(--text-color)] leading-8 mt-4 w-full text-justify">
          {item.comment}
        </p>
        <div className="font-hanken mt-4 flex flex-row gap-3">
          <button className="font-semibold text-md text-[var(--primary-color)]">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
