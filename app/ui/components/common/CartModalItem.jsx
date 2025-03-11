import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartModalItem({ image, title, quantity, price }) {
  return (
    <li className="flex items-center justify-between gap-2 relative border-b border-black/10 py-8 px-5 text-black/70">
      <a href="#" className="flex items-center gap-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl relative">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col  text-sm sm:text-base">
          <p className="capitalize w-30 sm:w-36 font-bold hover:text-[var(--primary-color)]">{title}</p>
          <p className="font-light flex items-center gap-2 font-hanken">
            <span>{quantity}</span>
            <span>×</span>
            <span>${Number(price).toFixed(2)}</span>
          </p>
        </div>
      </a>
      <button className="hover:text-[var(--primary-color)] cursor-pointer">
        <FaRegTrashAlt size={16} />
      </button>
    </li>
  );
}
