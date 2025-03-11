"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function MobileMenu({ menuItems, onClose }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div className="fixed top-0 left-0 w-56 sm:w-[280px] h-screen bg-white transform transition-transform duration-700 ease-in-out translate-x-0">
      <Link href="/" className="flex items-center justify-center p-8">
        <Image
          src="/assets/images/logo-main.png"
          alt="Foodix"
          width={150}
          height={50}
          priority
          className="object-contain"
        />
      </Link>
      <nav className="h-full flex flex-col">
        {/* Main Menu Items */}
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-gray-900 font-medium uppercase hover:text-[var(--primary-color)] transition-colors"
                  >
                    {item.title}
                    <svg
                      className={`w-4 h-4 transition-transform duration-500 ${
                        activeSubmenu === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                      activeSubmenu === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white">
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative group">
                          <Link
                            href={subItem.href}
                            className="block pl-8 pr-6 py-3 text-black text-xl font-bold hover:text-[var(--primary-color)] transition-all duration-300 hover:translate-x-2 border-b border-black last:border-b-0"
                            onClick={() => {
                              onClose();
                              setActiveSubmenu(null);
                            }}
                          >
                            {subItem.title}
                          </Link>
                          <div className="absolute left-0 top-8 w-3 h-1 bg-[var(--primary-color)] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-gray-900 font-medium text-[15px] uppercase hover:text-[var(--primary-color)] transition-colors"
                  onClick={() => {
                    onClose();
                    setActiveSubmenu(null);
                  }}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          <div className="flex items-center justify-center mt-10">
            <Link
              href="/booking"
              className={clsx(
                "font-hanken rounded-xl px-6 py-4 text-center ",
                "bg-[var(--primary-color)] text-white sm:text-lg uppercase font-medium ",
                "tracking-wide hover:bg-[var(--secondary-color)] transition-colors"
              )}
              onClick={() => {
                onClose();
                setActiveSubmenu(null);
              }}
            >
              Book A Table
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
