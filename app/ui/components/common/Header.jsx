"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import { headerMenuData } from "@/app/data/data";
import { PiShoppingCart } from "react-icons/pi";
import clsx from "clsx";

export default function Header({ onCartOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { menuItems } = headerMenuData;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 92 || currentScrollY > 90 * 1.5) {
        setIsVisible(true);
      }

      if (currentScrollY >= 90 && currentScrollY <= 200) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 w-screen ${
        isScrolled ? "bg-black/90" : "bg-black"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"} font-barlow-sans`}
    >
      <div className="container mx-auto py-3 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-24">
        <div className="flex items-center justify-between h-[90px]">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo-white.png"
              alt="Foodix"
              width={150}
              height={50}
              style={{
                width: '150px',
                height: 'auto',
                maxWidth: '100%'
              }}
              priority
              className="object-contain"
            />
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={activeMenu === index}
                  onMouseEnter={() => setActiveMenu(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                />
              ))}
            </nav>

            <Link
              href="/booking"
              className={clsx(
                "hidden lg:inline-flex bg-[var(--primary-color)] text-white px-10 py-3.5 rounded-xl ",
                "hover:bg-[var(--secondary-color)] transition-colors text-xl font-bold font-hanken"
              )}
            >
              Book A Table
            </Link>
            <button
              onClick={onCartOpen}
              className="bg-[var(--secondary-color)] text-white p-2.5 lg:p-4 rounded-xl cursor-pointer"
            >
              <PiShoppingCart size={22} />
            </button>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:text-[var(--primary-color)] transition-colors relative w-8 h-8 border border-white rounded-md"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <MobileMenu menuItems={menuItems} onClose={toggleMenu} />
        )}
      </div>
    </header>
  );
}
