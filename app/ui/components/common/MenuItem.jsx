"use client";
import clsx from "clsx";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

export default function MenuItem({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.href ? (
        <Link
          href={item.href}
          className={clsx(
            "text-white hover:text-[var(--primary-color)] ",
            "transition-colors px-5 py-8 text-lg capitalize font-bold tracking-wide inline-block"
          )}
        >
          {item.title}
        </Link>
      ) : (
        <button
          className={clsx(
            "text-white hover:text-[var(--primary-color)] ",
            "transition-colors px-5 py-8 text-lg capitalize font-bold tracking-wide flex items-center"
          )}
        >
          {item.title}
          <FaChevronDown size={15} className="ms-1" />
        </button>
      )}

      {item.submenu && isActive && (
        <div
          className={clsx(
            "animate-fadeInUp-fast absolute top-full left-0 w-[250px] ",
            "bg-white shadow-lg py-4 opacity-0 invisible group-hover:opacity-100 ",
            "group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          )}
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={clsx(
                "block px-8 py-[10px] text-black font-bold hover:text-[var(--primary-color)] ",
                "text-xl group/item relative"
              )}
            >
              <div className="flex items-center">
                <span className="absolute left-5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  -
                </span>
                <span className="transform group-hover/item:translate-x-2 transition-transform duration-300">
                  {subItem.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
