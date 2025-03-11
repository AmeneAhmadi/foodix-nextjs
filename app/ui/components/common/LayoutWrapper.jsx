"use client";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartModal from "./CartModal";
import Loader from "./Loader/page";

export default function LayoutWrapper({ children }) {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {isLoading ? (
        // loader played 2 seconds before the page is loaded
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header onCartOpen={() => setIsCartModalOpen(true)} />
          <main className="flex-1">{children}</main>
          <Footer />

          {/* Cart Modal Portal */}
          <div className="relative z-[9999]">
            <CartModal
              isOpen={isCartModalOpen}
              onClose={() => setIsCartModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
