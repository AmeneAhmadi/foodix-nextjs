import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCartContext } from "../../contexts/cart/CartContext";

export default function CartModalItem({ item }) {
  const { removeProductFromCard } = useCartContext();
  return (
    <li className="flex items-center justify-between gap-2 relative border-b border-black/10 py-8 px-5 text-black/70">
      <a href="#" className="flex items-center gap-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl relative">
          <Image
            src={item.image}
            alt={item.title}
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col  text-sm sm:text-base">
          <p className="capitalize w-30 sm:w-36 font-bold hover:text-[var(--primary-color)]">
            {item.title}
          </p>
          <p className="font-light flex items-center gap-2 font-hanken">
            <span>{item.quantity}</span>
            <span>×</span>
            <span>${Number(item.price).toFixed(2)}</span>
          </p>
        </div>
      </a>
      <button
        onClick={() => {
          removeProductFromCard(item.id);
        }}
        className="hover:text-[var(--primary-color)] cursor-pointer"
      >
        <FaRegTrashAlt size={16} />
      </button>
    </li>
  );
}
