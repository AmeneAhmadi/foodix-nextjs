import clsx from "clsx";
import { IoIosClose } from "react-icons/io";
import CartModalItem from "./CartModalItem";
import { useCartContext } from "../../contexts/cart/CartContext";
import Image from "next/image";

export default function CartModal({ isOpen, onClose }) {
  const { cartState, totalPrice } = useCartContext(); // Import the context to use addProductToCard function
  return (
    <>
      {/* black layer under modal */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-1000 ease-in-out z-[60] ${
          isOpen ? "bg-opacity-30 visible" : "bg-opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Modal */}

      <div
        className={clsx(
          "fixed top-0 right-2 bg-white w-64 sm:w-80 h-screen shadow-lg ",
          "flex flex-col overflow-y-auto",
          "transform transition-transform duration-1000 ease-in-out z-[70] ",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <div className="flex items-center justify-between py-8 px-6 border-b border-black/10">
          <h4 className="text-2xl font-bold">My cart</h4>
          <button
            onClick={onClose}
            className="w-fit border border-[var(--primary-color)] text-[var(--primary-color)] cursor-pointer"
          >
            <IoIosClose size={25} />
          </button>
        </div>
        {cartState.cartItems.length > 0 ? (
          <div className="flex flex-col items-center gap-30">
            <ul className="w-full flex flex-col">
              {cartState.cartItems.map((item, index) => (
                <CartModalItem key={index} item={item} />
              ))}
            </ul>
            <div className="w-full flex flex-col items-center gap-10 px-4">
              <div
                className={clsx(
                  "w-full rounded-xl border border-black/15 flex items-center gap-5 justify-start",
                  "py-3 px-7"
                )}
              >
                <span>Total:</span>
                <div className="flex items-center gap-1">
                  <span>${totalPrice}</span>
                </div>
              </div>
              <div className={clsx("flex items-center justify-center py-4")}>
                <a
                  href="#"
                  className={clsx(
                    "font-hanken bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]",
                    "text-white rounded-lg text-sm sm:text-lg py-4 px-11 font-bold transition-colors"
                  )}
                >
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center gap-4 mt-10">
            <h3 className="text-xl font-bold text-center text-[var(--primary-color)]">
              Your cart is empty
            </h3>
            <Image
              src="/assets/images/empty-cart.jpg"
              width={500}
              height={500}
              alt="empty-cart"
              className="rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
}
